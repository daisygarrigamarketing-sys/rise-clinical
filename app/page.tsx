import ApproachExperience from "./ApproachExperience";
import InstagramShowcase from "./InstagramShowcase";
import RiseAssistant from "./RiseAssistant";

const psychologyTodayUrl =
  "https://www.psychologytoday.com/us/therapists/rise-clinical-services-llc-hartford-ct/732616";

const focusAreas = [
  {
    number: "01",
    title: "Anxiety & depression",
    copy: "Support for the thoughts and feelings that can make everyday life feel heavier.",
  },
  {
    number: "02",
    title: "Trauma & life transitions",
    copy: "Space to process what happened, move through change, and reconnect with yourself.",
  },
  {
    number: "03",
    title: "Parenting & relationships",
    copy: "Support for family stress, relationships, communication, and changing dynamics.",
  },
  {
    number: "04",
    title: "Teens & young adults",
    copy: "Support through identity, school, relationships, self-esteem, and new chapters.",
  },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <p>
          Virtual therapy across Connecticut <span aria-hidden="true">•</span>
          <span> English &amp; Spanish </span><span aria-hidden="true">•</span>
          <span> Now accepting new clients</span>
        </p>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="RISE Clinical Services home">
          <img src="/images/rise-logo.jpg" alt="RISE Clinical Services, LLC" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#support">Services</a>
          <a href="#team">Our team</a>
          <a href="#fees">Fees &amp; insurance</a>
        </nav>
        <a className="header-cta" href="tel:+18607855811">
          Call (860) 785-5811
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Compassionate care. Meaningful change.</p>
          <h1>
            You don&apos;t have to carry it <em>all</em> alone.
          </h1>
          <p className="hero-lede">
            Support for what you&apos;re carrying and space for what comes next.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#book">
              Schedule your free 15-minute consultation <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#team">
              Meet our therapists <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="rise-values" aria-label="What RISE stands for">
            <span><b>R</b>esiliency</span>
            <span><b>I</b>ntegrity</span>
            <span><b>S</b>elf-<b>E</b>mpowerment</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abigail, founder of RISE Clinical Services">
          <div className="photo-frame">
            <img src="/images/abigail-hero.webp" alt="Abigail, founder of RISE Clinical Services" />
          </div>
          <div className="availability-card">
            <img
              className="availability-botanical"
              src="/images/availability-flowers.jpeg"
              alt=""
              aria-hidden="true"
            />
            <div className="availability-copy">
              <span className="availability-kicker">Now booking</span>
              <strong>Appointments available</strong>
              <p>Secure virtual sessions throughout Connecticut</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-band" aria-label="Practice highlights">
        <p>Virtual across Connecticut</p>
        <p>Teens 13+ &amp; adults</p>
        <p>Individual &amp; family therapy</p>
        <p>English &amp; Spanish</p>
      </section>

      <section className="booking-section secure-booking-section" id="book" aria-labelledby="booking-title">
        <div className="booking-intro">
          <p className="eyebrow">Free 15-minute consultation</p>
          <h2 id="booking-title">A private first step, made simple.</h2>
          <p>
            Send Abby a brief consultation request through RISE&apos;s Psychology
            Today profile, or call the practice directly. This website does not
            collect or store your information.
          </p>
          <div className="booking-contact">
            <span>Prefer to speak with us?</span>
            <a href="tel:+18607855811">Call (860) 785-5811</a>
            <small>RISE&apos;s direct practice number</small>
          </div>
        </div>

        <div className="secure-booking-panel">
          <div className="secure-booking-mark" aria-hidden="true">
            <img src="/images/rise-chatbot-symbol.jpg" alt="" />
          </div>
          <span className="secure-booking-kicker">Psychology Today inquiry</span>
          <h3>Connect securely with Abby.</h3>
          <p>
            Psychology Today will open in a new tab. Select <strong>Email Us</strong>
            on the RISE profile to send your consultation request through its
            professional message center.
          </p>
          <ol className="secure-booking-steps">
            <li><span>01</span><div><strong>Click the purple button below</strong><p>Select “Send a secure consultation request.”</p></div></li>
            <li><span>02</span><div><strong>Select “Email Us”</strong><p>Psychology Today will guide you through the inquiry.</p></div></li>
            <li><span>03</span><div><strong>Keep your message brief</strong><p>Share your name, contact information, and a short reason for seeking support.</p></div></li>
          </ol>
          <a
            className="secure-booking-button"
            href={psychologyTodayUrl}
            target="_blank"
            rel="noreferrer"
          >
            Send a secure consultation request <span aria-hidden="true">↗</span>
          </a>
          <p className="secure-booking-privacy">
            Please do not include medical records, detailed clinical history, or
            emergency information. For immediate crisis support, call 911 or
            call/text 988.
          </p>
        </div>
      </section>

      <section className="support-editorial" id="about">
        <img className="support-flower support-flower-left" src="/images/availability-flowers.jpeg" alt="" aria-hidden="true" />
        <img className="support-flower support-flower-right" src="/images/availability-flowers.jpeg" alt="" aria-hidden="true" />

        <div className="support-intro">
          <div>
            <p className="eyebrow">How we can support you</p>
            <h2>Care that sees the whole person—not just the hard moment.</h2>
          </div>
          <p>
            At RISE, therapy is a collaborative process. Together, we identify
            your strengths, work through obstacles, and build tools that help you
            move toward the goals that matter most to you.
          </p>
        </div>

        <div className="support-composition" id="support">
          {focusAreas.map((area) => (
            <article className="support-area" key={area.number}>
              <span className="support-number" aria-hidden="true">{area.number}</span>
              <div className="support-area-copy">
                <span className="support-index">{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </div>
            </article>
          ))}
          <span className="editorial-heart editorial-heart-one" aria-hidden="true">♡</span>
          <span className="editorial-heart editorial-heart-two" aria-hidden="true">♡</span>
        </div>

        <p className="support-closing">
          Whatever you&apos;re carrying, <span>there&apos;s room for it here.</span> <i aria-hidden="true">♡</i>
        </p>
      </section>

      <figure className="support-lifestyle" aria-label="A warm, welcoming therapy space">
        <img src="/images/support-lifestyle.png" alt="A serene cream and lavender sitting room filled with warm natural light" />
      </figure>

      <section className="team-section" id="team">
        <div className="section-heading team-heading">
          <div>
            <p className="eyebrow">Meet the RISE team</p>
            <h2>Real people. Thoughtful care.</h2>
          </div>
          <p>
            The right therapeutic relationship matters. Our clinicians bring
            warmth, authenticity, and a collaborative approach to every
            session.
          </p>
        </div>

        <div className="team-grid">
          <article className="therapist-card therapist-card-featured">
            <div className="therapist-photo therapist-photo-abigail">
              <img src="/images/abigail-hero.webp" alt="Abigail, founder of RISE Clinical Services" />
              <span>Founder</span>
            </div>
            <div className="therapist-copy">
              <p className="role">Clinical Social Worker / Therapist • MSW, LCSW</p>
              <h3>Abigail</h3>
              <p>
                At RISE Clinical Services, LLC, our mission is to provide
                high-quality, compassionate care while supporting individuals
                in achieving meaningful and lasting change. RISE believes in
                the power of Resiliency, Integrity, and Self-Empowerment and is
                committed to helping clients build the tools they need to thrive.
              </p>
              <p>
                Therapy is a collaborative process. Together, Abigail and her
                clients identify strengths, overcome obstacles, and work toward
                the goals that matter most to them. She uses Cognitive
                Behavioral Therapy, Motivational Interviewing, and
                Person-Centered Therapy based on each individual. Goals are
                created with you, not for you.
              </p>
              <p>
                Her experience includes supporting individuals with depression,
                anxiety, trauma, and life transitions. She also has extensive
                training with teenage parents and blended, foster, and adoptive
                families and offers culturally competent services in English
                and Spanish.
              </p>
              <div className="therapist-details">
                <span>Connecticut license #10878</span>
                <span>English &amp; Spanish</span>
              </div>
              <a className="profile-link" href="#book">
                Schedule a consultation <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <article className="therapist-card therapist-card-kai">
            <div className="therapist-photo therapist-photo-kai">
              <img src="/images/kai.jpeg" alt="Kai, therapist at RISE Clinical Services" />
              <span>Therapist</span>
            </div>
            <div className="therapist-copy">
              <p className="role">Therapist</p>
              <h3>Kai</h3>
              <p>
                Kai brings warmth and authenticity into her work, helping
                clients feel seen, supported, and comfortable being themselves.
                Yoga, meditation, faith, laughter, self-love, and time in nature
                are some of the practices that ground her.
              </p>
              <a className="profile-link" href="#book">
                Ask about working with Kai <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <div id="approaches">
        <ApproachExperience />
      </div>

      <section className="fees-section" id="fees">
        <div className="fees-intro">
          <p className="eyebrow">Fees &amp; insurance</p>
          <h2>Clear information before you begin.</h2>
          <p>
            We want starting therapy to feel as straightforward as possible.
            Call us to talk through availability, coverage, and the best next
            step for you.
          </p>
          <a className="button button-primary" href="#book">
            Book a consultation <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="fees-cards">
          <article className="fee-card fee-card-highlight">
            <span className="mini-label">Individual sessions</span>
            <p className="price"><strong>$150</strong> per session</p>
            <p>Sliding-scale pricing may be available for eligible clients.</p>
          </article>
          <article className="fee-card">
            <span className="mini-label">Insurance accepted</span>
            <div className="insurance-grid">
              <span>Aetna</span>
              <span>Anthem</span>
              <span>Blue Cross Blue Shield</span>
              <span>HUSKY Health</span>
              <span>Medicaid</span>
              <span>UnitedHealthcare / UHC | UBH</span>
            </div>
            <p className="coverage-note">
              Coverage and benefits vary. Please contact RISE to verify your
              plan before scheduling.
            </p>
          </article>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-title">
          <p className="eyebrow">Before your first session</p>
          <h2>Questions are welcome here.</h2>
          <p>Tap any question to learn more.</p>
        </div>
        <div className="faq-list">
          <details>
            <summary>Are sessions virtual or in person?</summary>
            <p>
              RISE currently provides secure virtual therapy to clients located
              throughout Connecticut.
            </p>
          </details>
          <details>
            <summary>Who does RISE work with?</summary>
            <p>
              We work with teens ages 13 and older, adults, individuals, and
              families. Call us and we&apos;ll help determine whether our services
              fit your needs.
            </p>
          </details>
          <details>
            <summary>How will I be matched with a therapist?</summary>
            <p>
              After you reach out, we&apos;ll learn what you&apos;re looking for and
              thoughtfully match you with the therapist who may be the best fit.
              You can also request a specific therapist.
            </p>
          </details>
          <details>
            <summary>Are services available in Spanish?</summary>
            <p>
              Yes. RISE offers culturally responsive services in English and
              Spanish. Please mention your language preference when you call.
            </p>
          </details>
          <details>
            <summary>What happens during the free consultation?</summary>
            <p>
              Use the secure consultation link to open RISE&apos;s Psychology Today
              profile, select “Email Us,” and send Abby a brief request. RISE
              will follow up to arrange your free 15-minute consultation. You
              can also call the practice directly at (860) 785-5811.
            </p>
          </details>
        </div>
      </section>

      <div id="instagram">
        <InstagramShowcase />
      </div>

      <section className="closing-cta">
        <p className="eyebrow">Take the first step</p>
        <h2>You deserve support that feels human.</h2>
        <p>
          Send a brief consultation request through Psychology Today or call
          RISE directly, and let&apos;s find the right starting point together.
        </p>
        <div className="closing-actions">
          <a className="button button-light" href={psychologyTodayUrl} target="_blank" rel="noreferrer">
            Send a secure request <span aria-hidden="true">↗</span>
          </a>
          <a className="instagram-link" href="tel:+18607855811">
            (860) 785-5811
          </a>
          <a
            className="instagram-link"
            href={psychologyTodayUrl}
            target="_blank"
            rel="noreferrer"
          >
            Psychology Today inquiry
          </a>
          <a
            className="instagram-link"
            href="https://www.instagram.com/rise_clinical_services/"
            target="_blank"
            rel="noreferrer"
          >
            @rise_clinical_services
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/images/rise-logo.jpg" alt="RISE Clinical Services, LLC" />
          <p>Resiliency. Integrity. Self-Empowerment.</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#support">Services</a>
          <a href="#team">Our team</a>
          <a href="#fees">Fees &amp; insurance</a>
          <a href="#faq">FAQ</a>
          <a
            href="https://www.instagram.com/rise_clinical_services/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="footer-note">
          <p>Virtual therapy across Connecticut</p>
          <p>
            <a href="tel:+18607855811">(860) 785-5811</a><br />
            <a href={psychologyTodayUrl} target="_blank" rel="noreferrer">
              Secure consultation request
            </a>
          </p>
          <p>
            If you are experiencing an emergency, call 911 or call/text 988 for
            immediate crisis support.
          </p>
          <p>© 2026 RISE Clinical Services, LLC</p>
        </div>
      </footer>
      <RiseAssistant />
    </main>
  );
}
