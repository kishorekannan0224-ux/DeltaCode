
import { useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Code2, Smartphone, Palette,
  Layers3, PenTool, Cpu, Sparkles, CheckCircle2, Send,
  Globe2, Rocket, ShieldCheck
} from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const services = [
  { icon: Code2, number: '01', title: 'Web Development', text: 'Fast, responsive and scalable websites that turn visitors into customers.', tags: ['React', 'Frontend', 'Backend'] },
  { icon: Smartphone, number: '02', title: 'App Development', text: 'Intuitive mobile-first experiences designed around the people who use them.', tags: ['Mobile apps', 'Product design'] },
  { icon: Palette, number: '03', title: 'UI/UX Design', text: 'Thoughtful interfaces and smooth user journeys that make every interaction count.', tags: ['Wireframes', 'Prototyping'] },
  { icon: PenTool, number: '04', title: 'Graphic Design', text: 'Distinctive visual identities and creative assets that help brands stand out.', tags: ['Branding', 'Visual design'] },
  { icon: Layers3, number: '05', title: 'Software Development', text: 'Purpose-built software that simplifies workflows and supports business growth.', tags: ['Custom software', 'Integration'] },
  { icon: Cpu, number: '06', title: 'Technology Services', text: 'Practical technology support to help your next idea move from concept to launch.', tags: ['Consulting', 'Digital solutions'] }
]

const projects = [
  {
    type: 'Digital product',
    title: 'ToolNest',
    text: 'A collection of useful online tools designed to make everyday digital tasks easier.',
    label: 'Product by DeltaCode',
    className: 'project-purple',
    icon: '✳',
    link: 'https://kishorekannan0224-ux.github.io/ToolNest/'
  },
  {
    type: 'Web experience',
    title: 'Business websites',
    text: 'Modern, responsive web experiences tailored to a brand and its audience.',
    label: 'Web development',
    className: 'project-blue',
    icon: '⌘'
  },
  {
    type: 'Creative direction',
    title: 'Brand identities',
    text: 'Visual systems that give businesses a consistent and memorable presence.',
    label: 'Design concept',
    className: 'project-pink',
    icon: '◈'
  }
]

function SectionHeading({ eyebrow, title, description, center = false }) {
  return <div className={`section-heading ${center ? 'center' : ''}`}>
    <span className="eyebrow"><span />{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
}

function App() {
  const [form, setForm] = useState({ name: '', email: '', service: 'Web Development', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  async function submitContact(event) {
    event.preventDefault()
    setSending(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.message || 'Could not send your message.')

      setStatus({ type: 'success', message: 'Thanks! Your enquiry has been received.' })
      setForm({ name: '', email: '', service: 'Web Development', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Unable to connect. Please try again.' })
    } finally {
      setSending(false)
    }
  }

  return <>
    <Navbar />

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-copy">
          <div className="availability"><span className="pulse-dot" /> INNOVATION STARTS HERE</div>
          <h1>We turn bold ideas into <span className="gradient-text">digital reality.</span></h1>
          <p className="hero-description">We design, develop and deliver digital solutions that help ideas grow into meaningful experiences.</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Start a project <ArrowUpRight size={18} /></a>
            <a className="text-link" href="#services">Explore services <ArrowDown size={16} /></a>
          </div>

          <div className="hero-proof">
            <div className="proof-icons"><span>✦</span><span>◈</span><span>⌘</span></div>
            <p><strong>Creative thinking.</strong><br />Technology with purpose.</p>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract digital technology illustration">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="art-core">
            <div className="core-symbol">D<span>.</span></div>
            <span className="core-caption">DIGITAL INNOVATION</span>
          </div>
          <div className="float-card float-card-top">
            <span className="mini-icon"><Code2 size={17} /></span>
            <div><b>Build</b><small>Ideas into products</small></div>
            <CheckCircle2 size={17} className="check" />
          </div>
          <div className="float-card float-card-bottom">
            <span className="mini-icon blue"><Sparkles size={17} /></span>
            <div><b>Create</b><small>Experiences that matter</small></div>
            <ArrowUpRight size={17} />
          </div>
          <div className="art-spark spark-one">✦</div>
          <div className="art-spark spark-two">✧</div>
        </div>

        <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span /></a>
      </section>

      <section className="intro-strip">
        <div className="section-wrap strip-inner">
          <span>THINK DIFFERENTLY</span><i>✳</i>
          <span>DESIGN INTENTIONALLY</span><i>✳</i>
          <span>BUILD FEARLESSLY</span><i>✳</i>
          <span>GROW TOGETHER</span>
        </div>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="about-visual">
          <div className="about-card">
            <span className="about-card-kicker">THE DELTACODE APPROACH</span>
            <div className="big-d">D<span>.</span></div>
            <div className="about-card-bottom"><span>Ideas → Impact</span><span>01 / 03</span></div>
          </div>
          <div className="about-note"><Sparkles size={18} /><span>Curiosity fuels<br />what we create.</span></div>
        </div>

        <div className="about-copy">
          <SectionHeading eyebrow="WHO WE ARE" title={<>A technology partner for your <span className="gradient-text">next chapter.</span></>} />
          <p>DeltaCode is a digital technology brand focused on creating useful, thoughtful and reliable digital solutions. We bring design and development together to help turn concepts into products people can use.</p>
          <p>From a first website to a custom software idea, our approach is simple: understand the goal, plan with care and build with purpose.</p>

          <div className="values-grid">
            <div><Globe2 /><b>Digital-first</b><small>Built for a connected world</small></div>
            <div><Rocket /><b>Future-focused</b><small>Always learning and improving</small></div>
          </div>

          <a className="text-link" href="#contact">Get to know us <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-wrap">
          <SectionHeading eyebrow="WHAT WE DO" title={<>Ideas need the right <span className="gradient-text">technology.</span></>} description="A focused set of creative and technical services to help bring your digital vision to life." center />

          <div className="services-grid">
            {services.map(({ icon: Icon, number, title, text, tags }) => (
              <article className="service-card" key={number}>
                <div className="service-card-top">
                  <span className="service-icon"><Icon size={22} /></span>
                  <span className="service-number">{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <a href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={19} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap projects-section" id="projects">
        <div className="projects-heading">
          <SectionHeading eyebrow="SELECTED WORK" title={<>Made with purpose.<br /><span className="gradient-text">Built for people.</span></>} description="A look at digital experiences and concepts from the DeltaCode ecosystem." />
          <a className="text-link desktop-link" href="#contact">Discuss a project <ArrowUpRight size={17} /></a>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <article className="project-card" key={project.title}>
              <div className={`project-art ${project.className}`}>
                <div className="project-art-grid" />
                <span className="project-symbol">{project.icon}</span>
                <span className="project-art-label">{project.label}</span>
              </div>

              <div className="project-meta">
                <span>{project.type}</span>
                <ArrowUpRight size={17} />
              </div>

              <h3>{project.title}</h3>
              <p>{project.text}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Visit ToolNest <ArrowUpRight size={17} />
                </a>
              )}
            </article>
          ))}
        </div>

        <p className="portfolio-note">Project previews shown as concepts. More work will be added as projects are completed.</p>
      </section>

      <section className="process-section">
        <div className="section-wrap">
          <SectionHeading eyebrow="HOW WE WORK" title={<>A clear path from idea <span className="gradient-text">to launch.</span></>} description="Good outcomes start with a thoughtful process." center />

          <div className="process-grid">
            {[
              ['01', 'Discover', 'We listen, understand your goals and define the real problem.'],
              ['02', 'Design', 'We shape the experience, structure and visual direction.'],
              ['03', 'Develop', 'We build, test and refine the solution with care.'],
              ['04', 'Deliver', 'We prepare for launch and identify what comes next.']
            ].map(([n, title, text]) => (
              <div className="process-item" key={n}>
                <span>{n}</span>
                <div className="process-line" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band section-wrap">
        <div>
          <span className="eyebrow"><span /> HAVE AN IDEA?</span>
          <h2>Let's make something <span className="gradient-text">meaningful.</span></h2>
          <p>Have a project in mind? Tell us what you're working on.</p>
        </div>
        <a className="button button-primary" href="#contact">Let's work together <ArrowUpRight size={18} /></a>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-grid">
          <div className="contact-copy">
            <SectionHeading eyebrow="GET IN TOUCH" title={<>Your next idea starts with a <span className="gradient-text">conversation.</span></>} description="Share a little about your project. We'll use your message to understand how we can help." />

            <div className="contact-detail">
              <span className="contact-detail-icon"><Send size={18} /></span>
              <div><small>EMAIL</small><a href="mailto:hello@deltacode.in">hello@deltacode.in</a></div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon"><Globe2 size={18} /></span>
              <div><small>LOCATION</small><span>India · Working digitally</span></div>
            </div>

            <div className="contact-assurance">
              <ShieldCheck size={18} />
              <span>Your details are used only to respond to your enquiry.</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={submitContact}>
            <div className="form-heading"><span>PROJECT ENQUIRY</span><span className="form-step">01 — 04</span></div>

            <label>Your name
              <input name="name" value={form.name} onChange={update} placeholder="Enter your name" required minLength="2" maxLength="80" />
            </label>

            <label>Email address
              <input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required maxLength="120" />
            </label>

            <label>What do you need?
              <select name="service" value={form.service} onChange={update}>
                {services.map(s => <option key={s.title}>{s.title}</option>)}
              </select>
            </label>

            <label>Tell us about your project
              <textarea name="message" value={form.message} onChange={update} placeholder="A few details about your idea..." required minLength="10" maxLength="2000" rows="4" />
            </label>

            <button className="button button-primary submit-button" type="submit" disabled={sending}>
              {sending ? 'Sending...' : 'Send enquiry'} <ArrowUpRight size={18} />
            </button>

            {status.message && <p className={`form-status ${status.type}`} role="status">{status.message}</p>}
          </form>
        </div>
      </section>
    </main>

    <Footer />
  </>
}

export default App
