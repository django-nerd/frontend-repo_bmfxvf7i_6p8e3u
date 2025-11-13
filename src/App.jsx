import React, { useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Atom,
  Cpu,
  Telescope,
  Award,
  Trophy,
  Star,
  GalleryVerticalEnd,
  Images,
  Activity,
  Newspaper,
  Megaphone,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Mosque
} from 'lucide-react'

function useSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      const id = target.getAttribute('href')?.slice(1)
      if (!id) return
      const el = document.getElementById(id)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'awards', label: 'Awards' },
  { id: 'galleries', label: 'Galleries' },
  { id: 'activities', label: 'Activities' },
  { id: 'news', label: 'News' },
  { id: 'cta', label: 'Registration' },
]

function TopBar() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-[#0b0f14]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f14]/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 grid place-items-center shadow-lg shadow-emerald-500/20">
              <Mosque className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-wide">NurTech Boarding</div>
              <div className="text-xs text-emerald-300/80">Islam • Science • Character</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition">
                {n.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md text-white hover:bg-white/10">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-2 space-y-1 bg-[#0b0f14]/90">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-white/90 hover:bg-white/10">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden bg-[#070b10]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b10]/20 via-[#070b10]/60 to-[#070b10] pointer-events-none" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 border border-emerald-300/20 mb-4">
              <Cpu className="h-4 w-4" />
              <span className="text-xs tracking-wide">Where Faith Meets Future</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Islamic Boarding School for the Next Generation of Scientists and Leaders
            </h1>
            <p className="mt-5 text-lg text-white/80">
              We blend rigorous religious formation with cutting-edge science and technology learning, nurturing character, curiosity, and real-world skills.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:opacity-95 transition">
                Start Registration
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#facilities" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 text-white/90 hover:bg-white/20 transition">
                Explore Campus
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-300/20 mb-4">
        <Icon className="h-4 w-4" />
        <span className="text-xs tracking-wide">{subtitle}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
    </div>
  )
}

function Facilities() {
  const items = [
    { icon: Mosque, title: 'Masjid & Tahfidz Center', desc: 'Serene worship space and Quran memorization with sanad-based mentoring.' },
    { icon: Atom, title: 'Science Labs', desc: 'Well-equipped physics, chemistry, and biology labs for hands-on discovery.' },
    { icon: Cpu, title: 'AI & Coding Studio', desc: 'Modern lab for programming, robotics, AI projects, and maker activities.' },
    { icon: Telescope, title: 'Astronomy Deck', desc: 'Night sky observations linking cosmology with signs of creation.' },
  ]
  return (
    <section id="facilities" className="relative py-20 bg-gradient-to-b from-[#0b0f14] to-[#0e131a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.06),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={BookOpen} title="Campus Facilities" subtitle="Integrated Deen and Science" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition group">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-300/20 grid place-items-center mb-4">
                <it.icon className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{it.title}</h3>
              <p className="text-white/70 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Awards() {
  const awards = [
    { icon: Award, title: 'National Olympiad', desc: 'Gold medals in Physics and Informatics.' },
    { icon: Trophy, title: 'Quran Recitation', desc: 'Champion in regional tilawah competition.' },
    { icon: Star, title: 'Innovation Grant', desc: 'Student-built agri-tech project funded nationally.' },
  ]
  return (
    <section id="awards" className="py-20 bg-[#080c11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={Award} title="Awards & Recognitions" subtitle="Excellence with Ihsan" />
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
              <div className="flex items-center gap-3 mb-3">
                <a.icon className="h-6 w-6 text-emerald-300" />
                <h3 className="text-white font-semibold">{a.title}</h3>
              </div>
              <p className="text-white/70 text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Galleries() {
  const images = Array.from({ length: 8 }).map((_, i) => ({ id: i }))
  return (
    <section id="galleries" className="py-20 bg-gradient-to-b from-[#0b0f14] to-[#0e131a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={Images} title="Campus Galleries" subtitle="Moments and Milestones" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <motion.div key={img.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-xl aspect-video bg-gradient-to-br from-emerald-700/30 to-cyan-700/30 border border-white/10">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.06)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.06)_50%,rgba(255,255,255,0.06)_75%,transparent_75%,transparent)] bg-[length:10px_10px] mix-blend-overlay" />
              <div className="absolute bottom-2 left-2 text-xs text-white/80 px-2 py-1 rounded bg-black/30 backdrop-blur">Activity {img.id + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Activities() {
  const items = [
    { icon: Activity, title: 'Robotics & Drones', desc: 'Weekly maker club exploring automation and design.' },
    { icon: BookOpen, title: 'Halaqah & Tahsin', desc: 'Daily circles for Quran, akhlaq, and prophetic lifestyle.' },
    { icon: Cpu, title: 'Coding Bootcamps', desc: 'Python, web development, AI fundamentals with projects.' },
    { icon: Telescope, title: 'Astronomy Nights', desc: 'Stargazing sessions linking science with reflection.' },
  ]
  return (
    <section id="activities" className="py-20 bg-[#080c11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={Activity} title="Student Activities" subtitle="Balanced Development" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-300/20 grid place-items-center mb-4">
                <it.icon className="h-6 w-6 text-emerald-300" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{it.title}</h3>
              <p className="text-white/70 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function News() {
  const posts = [
    { title: 'New Cohort Registration Open', date: 'Aug 2025', desc: 'Apply for the upcoming academic year. Limited seats for the boarding program.', tag: 'Announcement' },
    { title: 'Students Win National Hackathon', date: 'Jul 2025', desc: 'Our AI team secured first place with a smart farming solution.', tag: 'Achievement' },
    { title: 'Ramadan Science Camp', date: 'Mar 2025', desc: 'Integrating fasting, reflection, and hands-on experiments.', tag: 'Event' },
  ]
  return (
    <section id="news" className="py-20 bg-gradient-to-b from-[#0b0f14] to-[#0e131a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader icon={Newspaper} title="News & Updates" subtitle="Stories from Our Community" />
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="text-xs text-emerald-300/90 mb-2">{p.tag} • {p.date}</div>
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-white/70 text-sm">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" className="py-20 bg-[#080c11] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.08),transparent_40%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-8 sm:p-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 border border-emerald-300/20 mb-4">
            <Megaphone className="h-4 w-4" />
            <span className="text-xs tracking-wide">Admissions</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to join a community that nurtures iman, intellect, and impact?
          </h3>
          <p className="mt-3 text-white/80">
            Registration is open. Complete the online form and our team will contact you for the next steps.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://example.com/registration"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:opacity-95 transition"
            >
              Go to Registration
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#070b10] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 grid place-items-center">
              <Mosque className="h-5 w-5 text-white" />
            </div>
            <div className="text-white font-semibold">NurTech Boarding</div>
          </div>
          <p className="text-white/70 text-sm">
            A modern Islamic boarding school blending religious excellence with science and technology.
          </p>
        </div>
        <div className="text-white/80 text-sm space-y-2">
          <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /><span>Jl. Ilmu dan Amal No. 42, Indonesia</span></div>
          <div className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5" /><span>+62 812-3456-7890</span></div>
          <div className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5" /><span>admissions@nurtech.sch.id</span></div>
        </div>
        <div className="md:text-right">
          <a href="#home" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
            Back to top <ArrowRight className="h-4 w-4 rotate-180" />
          </a>
          <div className="text-white/60 text-xs mt-4">© {new Date().getFullYear()} NurTech Boarding. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useSmoothScroll()
  return (
    <div className="min-h-screen w-full bg-[#070b10]">
      <TopBar />
      <main>
        <Hero />
        <Facilities />
        <Awards />
        <Galleries />
        <Activities />
        <News />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
