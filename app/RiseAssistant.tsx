"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type AssistantAction = {
  label: string;
  href: string;
};

type AssistantReply = {
  text: string;
  actions?: AssistantAction[];
};

type ChatMessage = AssistantReply & {
  id: number;
  role: "assistant" | "user";
};

type KnowledgeEntry = AssistantReply & {
  phrases: string[];
};

const PSYCHOLOGY_TODAY_URL =
  "https://www.psychologytoday.com/us/therapists/rise-clinical-services-llc-hartford-ct/732616";

const STARTER_MESSAGE: ChatMessage = {
  id: 1,
  role: "assistant",
  text: "Hi, I’m the RISE site guide. I can help you explore services, therapists, fees, insurance, or the free consultation. What would you like to know?",
};

const QUICK_QUESTIONS = [
  "Is RISE right for me?",
  "Meet the therapists",
  "Fees and insurance",
  "How do I get started?",
];

const KNOWLEDGE: KnowledgeEntry[] = [
  {
    phrases: ["right for me", "who do you help", "who do you work with", "who is rise for", "clients", "client"],
    text: "RISE works with teens ages 13 and older, adults, individuals, and families throughout Connecticut. Support is available for anxiety, depression, trauma, life transitions, parenting, relationships, identity, school stress, self-esteem, and changing family dynamics.",
    actions: [{ label: "Explore services", href: "#support" }, { label: "Book a free consultation", href: "#book" }],
  },
  {
    phrases: ["fee", "fees", "cost", "price", "$150", "how much", "sliding scale", "afford"],
    text: "Individual therapy sessions are $150. Sliding-scale pricing may be available for eligible clients. RISE can talk through pricing and the best next step during your free consultation.",
    actions: [{ label: "See fees", href: "#fees" }, { label: "Book a free consultation", href: "#book" }],
  },
  {
    phrases: ["insurance", "aetna", "anthem", "blue cross", "blue shield", "husky", "medicaid", "unitedhealth", "uhc", "ubh", "coverage", "plan"],
    text: "RISE lists Aetna, Anthem, Blue Cross Blue Shield, HUSKY Health, Medicaid, and UnitedHealthcare / UHC | UBH. Coverage and benefits vary, so please contact RISE to verify your specific plan before scheduling.",
    actions: [{ label: "Review insurance", href: "#fees" }, { label: "Call RISE", href: "tel:+18607855811" }],
  },
  {
    phrases: ["abigail", "founder", "lcsw", "license", "licensed", "10878"],
    text: "Abigail is RISE’s founder and a Connecticut Licensed Clinical Social Worker (MSW, LCSW; license #10878). She supports clients with depression, anxiety, trauma, and life transitions, and has extensive training with teenage parents and blended, foster, and adoptive families. She offers culturally responsive care in English and Spanish.",
    actions: [{ label: "Meet Abigail", href: "#team" }, { label: "Schedule a consultation", href: "#book" }],
  },
  {
    phrases: ["kai", "yoga", "meditation", "faith", "nature"],
    text: "Kai brings warmth and authenticity to therapy and helps clients feel seen, supported, and comfortable being themselves. Yoga, meditation, faith, laughter, self-love, and time in nature are some of the practices that ground her.",
    actions: [{ label: "Meet Kai", href: "#team" }, { label: "Ask about working with Kai", href: "#book" }],
  },
  {
    phrases: ["therapist", "therapists", "team", "provider", "counselor", "match"],
    text: "RISE’s team includes Abigail, the founder and a Licensed Clinical Social Worker, and Kai, a warm and authentic therapist. After you reach out, RISE will learn what you’re looking for and thoughtfully help you find the best fit. You can also request a specific therapist.",
    actions: [{ label: "Meet the team", href: "#team" }, { label: "Start with a consultation", href: "#book" }],
  },
  {
    phrases: ["cbt", "cognitive behavioral", "thoughts", "behaviors"],
    text: "Cognitive Behavioral Therapy (CBT) helps you notice patterns between thoughts, feelings, and behaviors—and practice new ways of responding.",
    actions: [{ label: "Explore the therapy blooms", href: "#approaches" }],
  },
  {
    phrases: ["dbt", "dialectical behavior", "dialectical behavioral", "intense emotions"],
    text: "Dialectical Behavior Therapy (DBT) builds practical skills for navigating intense emotions, relationships, and difficult moments with greater steadiness.",
    actions: [{ label: "Explore the therapy blooms", href: "#approaches" }],
  },
  {
    phrases: ["motivational interviewing", "motivation", "uncertainty", "meaningful change"],
    text: "Motivational Interviewing is a collaborative approach that helps you explore uncertainty, strengthen motivation, and move toward meaningful change.",
    actions: [{ label: "Explore the therapy blooms", href: "#approaches" }],
  },
  {
    phrases: ["person centered", "person-centered", "nonjudgmental", "seen heard accepted"],
    text: "Person-Centered Therapy offers a warm, nonjudgmental space where your experience leads and you can feel fully seen, heard, and accepted.",
    actions: [{ label: "Explore the therapy blooms", href: "#approaches" }],
  },
  {
    phrases: ["family systems", "family therapy", "family dynamics", "relationships patterns"],
    text: "Family Systems explores relationship patterns and family dynamics so connection, understanding, and lasting change can grow.",
    actions: [{ label: "Explore the therapy blooms", href: "#approaches" }],
  },
  {
    phrases: ["approach", "approaches", "type of therapy", "therapy types", "methods", "treatment"],
    text: "Therapy is personalized to your needs, goals, story, and pace. RISE may draw from Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Motivational Interviewing, Person-Centered Therapy, and Family Systems.",
    actions: [{ label: "Choose a therapy bloom", href: "#approaches" }],
  },
  {
    phrases: ["anxiety", "depression", "depressed", "everyday life", "heavy"],
    text: "RISE supports people experiencing anxiety and depression, including thoughts and feelings that can make everyday life feel heavier. A free consultation is a gentle place to talk about the support you’re looking for.",
    actions: [{ label: "Explore support", href: "#support" }, { label: "Book a consultation", href: "#book" }],
  },
  {
    phrases: ["trauma", "transition", "life change", "what happened", "change"],
    text: "RISE offers space to process trauma, move through life transitions, and reconnect with yourself at a pace that respects your experience.",
    actions: [{ label: "Explore support", href: "#support" }, { label: "Book a consultation", href: "#book" }],
  },
  {
    phrases: ["parent", "parenting", "relationship", "communication", "blended", "foster", "adoptive"],
    text: "RISE supports parenting stress, relationships, communication, and changing family dynamics. Abigail also has extensive training with teenage parents and blended, foster, and adoptive families.",
    actions: [{ label: "Explore support", href: "#support" }, { label: "Meet Abigail", href: "#team" }],
  },
  {
    phrases: ["teen", "teenager", "young adult", "13", "school", "identity", "self esteem"],
    text: "RISE works with teens ages 13+ and young adults navigating identity, school, relationships, self-esteem, and new chapters. The practice also supports adults and families.",
    actions: [{ label: "Explore support", href: "#support" }, { label: "Book a consultation", href: "#book" }],
  },
  {
    phrases: ["spanish", "español", "english", "language", "bilingual"],
    text: "RISE offers culturally responsive services in English and Spanish. Please share your language preference when you contact the practice.",
    actions: [{ label: "Call RISE", href: "tel:+18607855811" }, { label: "Send a secure inquiry", href: PSYCHOLOGY_TODAY_URL }],
  },
  {
    phrases: ["virtual", "online", "telehealth", "in person", "office", "location", "connecticut", "ct"],
    text: "RISE currently provides secure virtual therapy for clients located throughout Connecticut. Sessions are not listed as in-person on this website.",
    actions: [{ label: "Book a virtual consultation", href: "#book" }],
  },
  {
    phrases: ["book", "booking", "schedule", "start", "get started", "consultation", "appointment", "available", "availability", "new clients"],
    text: "RISE is accepting new clients. To request a free 15-minute virtual consultation, open RISE’s Psychology Today profile, select “Email Us,” and send Abby a brief inquiry. You can also call RISE directly at (860) 785-5811.",
    actions: [{ label: "Send a secure inquiry", href: PSYCHOLOGY_TODAY_URL }, { label: "Call (860) 785-5811", href: "tel:+18607855811" }],
  },
  {
    phrases: ["phone", "call", "number", "email", "contact", "reach"],
    text: "You can call RISE directly at (860) 785-5811 or send a consultation inquiry through RISE’s Psychology Today profile. The practice provides virtual therapy throughout Connecticut and is currently accepting new clients.",
    actions: [{ label: "Call RISE", href: "tel:+18607855811" }, { label: "Send a secure inquiry", href: PSYCHOLOGY_TODAY_URL }],
  },
  {
    phrases: ["instagram", "social", "posts", "carousel"],
    text: "RISE shares practical tools, honest reflections, and gentle reminders on Instagram at @rise_clinical_services. You can also swipe through recent posts near the bottom of this page.",
    actions: [{ label: "View Instagram posts", href: "#instagram" }, { label: "Open Instagram", href: "https://www.instagram.com/rise_clinical_services/" }],
  },
  {
    phrases: ["what is rise", "about rise", "mission", "resiliency", "integrity", "empowerment", "tell me about rise"],
    text: "RISE Clinical Services provides compassionate virtual therapy across Connecticut in English and Spanish. RISE stands for Resiliency, Integrity, and Self-Empowerment, with care built around collaboration, personal strengths, and meaningful change.",
    actions: [{ label: "Learn about RISE", href: "#about" }, { label: "Meet the team", href: "#team" }],
  },
];

const CRISIS_PHRASES = [
  "suicide",
  "suicidal",
  "kill myself",
  "end my life",
  "self harm",
  "self-harm",
  "overdose",
  "immediate danger",
  "can’t stay safe",
  "can't stay safe",
  "emergency",
];

function normalize(value: string) {
  return value.toLowerCase().replace(/[’]/g, "'").replace(/[^a-z0-9$' -]/g, " ").replace(/\s+/g, " ").trim();
}

function getReply(question: string): AssistantReply {
  const query = normalize(question);

  if (CRISIS_PHRASES.some((phrase) => query.includes(phrase))) {
    return {
      text: "I’m glad you reached out. This guide cannot provide emergency or crisis support. If you or someone else may be in immediate danger, call 911. In the U.S., call or text 988 to reach the Suicide & Crisis Lifeline now.",
      actions: [{ label: "Call 988", href: "tel:988" }, { label: "Text 988", href: "sms:988" }, { label: "Call 911", href: "tel:911" }],
    };
  }

  if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(query)) {
    return { text: "Hello. I’m here to help you explore RISE. You can ask about services, the therapists, fees, insurance, therapy approaches, or how to begin." };
  }

  if (/\b(thank|thanks|thank you)\b/.test(query)) {
    return { text: "You’re very welcome. If you’re ready, I can also help you find RISE’s secure consultation link or direct phone number." };
  }

  let best: KnowledgeEntry | undefined;
  let bestScore = 0;

  for (const entry of KNOWLEDGE) {
    const score = entry.phrases.reduce((total, phrase) => {
      if (query.includes(phrase)) return total + Math.max(2, phrase.split(" ").length * 2);
      const words = phrase.split(" ").filter((word) => word.length > 3);
      return total + words.filter((word) => query.includes(word)).length;
    }, 0);

    if (score > bestScore) {
      best = entry;
      bestScore = score;
    }
  }

  if (best && bestScore >= 2) return { text: best.text, actions: best.actions };

  return {
    text: "I can help with information shown on this website, including services, therapists, fees, insurance, virtual sessions, English or Spanish care, therapy approaches, and the free consultation. Try asking one of those questions, or contact RISE directly for something more personal.",
    actions: [{ label: "Book a consultation", href: "#book" }, { label: "Send a secure inquiry", href: PSYCHOLOGY_TODAY_URL }],
  };
}

export default function RiseAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([STARTER_MESSAGE]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(2);

  useEffect(() => {
    if (!open) return;
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 220);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, typing]);

  function ask(question: string) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion || typing) return;

    const userMessage: ChatMessage = {
      id: nextId.current++,
      role: "user",
      text: cleanQuestion,
    };
    setMessages((current) => [...current, userMessage]);
    setDraft("");
    setTyping(true);

    window.setTimeout(() => {
      const reply = getReply(cleanQuestion);
      setMessages((current) => [
        ...current,
        { id: nextId.current++, role: "assistant", ...reply },
      ]);
      setTyping(false);
    }, 520);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(draft);
  }

  return (
    <aside className={`rise-assistant${open ? " is-open" : ""}`} aria-label="RISE website assistant">
      {open && (
        <section id="rise-assistant-panel" className="assistant-panel" role="dialog" aria-modal="false" aria-labelledby="assistant-title">
          <header className="assistant-header">
            <div className="assistant-identity">
              <span className="assistant-bloom" aria-hidden="true">
                <img src="/images/rise-chatbot-symbol.jpg" alt="" />
              </span>
              <div>
                <p id="assistant-title">Ask RISE Chatbot</p>
                <span><i aria-hidden="true" /> Website information only</span>
              </div>
            </div>
            <button className="assistant-close" type="button" onClick={() => setOpen(false)} aria-label="Close Ask RISE Chatbot">
              ×
            </button>
          </header>

          <div className="assistant-messages" ref={messagesRef} aria-live="polite">
            {messages.map((message) => (
              <div className={`assistant-message ${message.role}`} key={message.id}>
                {message.role === "assistant" && <span className="assistant-message-label">RISE guide</span>}
                <p>{message.text}</p>
                {message.actions && (
                  <div className="assistant-actions">
                    {message.actions.map((action) => (
                      <a
                        href={action.href}
                        key={`${message.id}-${action.label}`}
                        onClick={() => action.href.startsWith("#") && setOpen(false)}
                        target={action.href.startsWith("http") ? "_blank" : undefined}
                        rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {action.label} <span aria-hidden="true">→</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="assistant-quick-questions" aria-label="Suggested questions">
                {QUICK_QUESTIONS.map((question) => (
                  <button type="button" key={question} onClick={() => ask(question)}>
                    {question} <span aria-hidden="true">↗</span>
                  </button>
                ))}
              </div>
            )}

            {typing && (
              <div className="assistant-typing" aria-label="RISE guide is responding">
                <span /><span /><span />
              </div>
            )}
          </div>

          <div className="assistant-compose">
            <form onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="rise-assistant-question">Ask RISE a question</label>
              <input
                id="rise-assistant-question"
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Ask about services, fees, therapists…"
                maxLength={240}
                autoComplete="off"
              />
              <button type="submit" aria-label="Send question" disabled={!draft.trim() || typing}>↑</button>
            </form>
            <p>General information only. Please don’t share private health information.</p>
          </div>
        </section>
      )}

      <button
        className="assistant-launcher"
        type="button"
        aria-expanded={open}
        aria-controls="rise-assistant-panel"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="assistant-launcher-flower" aria-hidden="true"><img src="/images/rise-chatbot-symbol.jpg" alt="" /></span>
        <span><b>{open ? "Close" : "Ask RISE Chatbot"}</b><small>{open ? "Return to the site" : "How can we help?"}</small></span>
      </button>
    </aside>
  );
}
