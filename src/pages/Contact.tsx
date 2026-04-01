import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Mail, MapPin, CheckCircle2, Lock } from 'lucide-react'

const projectTypes = [
  'Sites Web', 'SEO & Google Ads', 'Visuels 3D IA',
]

const budgets = [
  'Moins de 1 000€', '1 000 – 3 500€', '3 500 – 6 000€', '6 000€ et +', 'À définir',
]

const perks = [
  { label: 'Premier appel 100% gratuit' },
  { label: 'Réponse garantie sous 24h' },
  { label: 'Proposition claire sous 48h' },
]

export default function Contact() {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [form, setForm] = useState({
    prenom: '', nom: '', societe: '', email: '', telephone: '', budget: '', message: '',
  })

  const toggleType = (t: string) =>
    setSelectedTypes((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#070708',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          padding: 'clamp(24px, 5vw, 64px)',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
        >
          <CheckCircle2 size={56} style={{ color: '#8b6cf7' }} />
        </motion.div>
        <h2
          style={{
            fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)',
            color: '#fff', letterSpacing: '-0.03em',
          }}
        >
          C'est dans notre boîte !
        </h2>
        <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: 16, color: 'rgba(255,255,255,0.46)', maxWidth: 360 }}>
          On vous revient dans les 24h avec une proposition adaptée à votre projet.
        </p>
        <motion.button
          onClick={() => navigate('/projets')}
          whileHover={{ scale: 1.04 }}
          style={{
            background: 'linear-gradient(135deg, #8b6cf7, #f0566a)',
            border: 'none',
            borderRadius: 100,
            padding: '13px 32px',
            fontFamily: 'Inter', fontWeight: 500, fontSize: 13,
            textTransform: 'uppercase', color: '#fff',
          }}
        >
          Voir nos projets →
        </motion.button>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#070708', padding: 'clamp(120px, 15vw, 180px) clamp(24px, 5vw, 64px) 64px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ fontFamily: 'Inter', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)', marginBottom: 20 }}>
              Parlons de votre projet
            </div>
          </motion.div>
          <h1
            style={{
              fontFamily: 'Inter', fontWeight: 800,
              fontSize: 'clamp(52px, 8vw, 96px)',
              lineHeight: 0.92, letterSpacing: '-0.04em', color: '#fff', margin: 0,
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              >
                Un projet en tête ?
              </motion.div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
              >
                <span className="grad-text">On en parle.</span>
              </motion.div>
            </div>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#070708', padding: '0 clamp(24px, 5vw, 64px) clamp(80px, 10vw, 130px)' }}>
        <div
          style={{
            maxWidth: 1160, margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(48px, 10vw, 120px)',
            alignItems: 'start',
          }}
        >
          {/* Left sticky */}
          <motion.div
            className="contact-sticky"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'sticky', top: 120 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <Mail size={16} style={{ color: '#8b6cf7' }} />
              <span style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                hello@oryxia.be
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
              <MapPin size={16} style={{ color: '#8b6cf7' }} />
              <span style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                Bruxelles, Belgique
              </span>
            </div>

            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              {perks.map((p) => (
                <motion.div
                  key={p.label}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                >
                  <CheckCircle2 size={16} style={{ color: '#8b6cf7', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
                    {p.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
          >
            {/* Name grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {(['prenom', 'nom'] as const).map((field) => (
                <div key={field}>
                  <label style={{ fontFamily: 'Inter', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.36)', display: 'block', marginBottom: 8 }}>
                    {field === 'prenom' ? 'Prénom' : 'Nom'}
                  </label>
                  <input
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    required
                    style={{
                      width: '100%', background: 'transparent', border: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.15)',
                      color: '#fff', fontFamily: 'Inter', fontSize: 15, padding: '8px 0',
                      outline: 'none',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Single fields */}
            {[
              { key: 'societe' as const, label: 'Société' },
              { key: 'email' as const, label: 'Email', type: 'email' },
              { key: 'telephone' as const, label: 'Téléphone', type: 'tel' },
            ].map(({ key, label, type = 'text' }) => (
              <div key={key}>
                <label style={{ fontFamily: 'Inter', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.36)', display: 'block', marginBottom: 8 }}>
                  {label}
                </label>
                <input
                  type={type}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  required={key === 'email'}
                  style={{
                    width: '100%', background: 'transparent', border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.15)',
                    color: '#fff', fontFamily: 'Inter', fontSize: 15, padding: '8px 0',
                    outline: 'none',
                  }}
                />
              </div>
            ))}

            {/* Project type pills */}
            <div>
              <label style={{ fontFamily: 'Inter', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.36)', display: 'block', marginBottom: 14 }}>
                Type de projet
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {projectTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleType(t)}
                    style={{
                      background: selectedTypes.includes(t) ? 'linear-gradient(135deg, #8b6cf7, #f0566a)' : 'transparent',
                      border: '1px solid',
                      borderColor: selectedTypes.includes(t) ? 'transparent' : 'rgba(255,255,255,0.13)',
                      borderRadius: 100,
                      padding: '7px 16px',
                      fontFamily: 'Inter',
                      fontSize: 12,
                      color: selectedTypes.includes(t) ? '#fff' : 'rgba(255,255,255,0.45)',
                      transition: 'all 0.2s',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label style={{ fontFamily: 'Inter', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.36)', display: 'block', marginBottom: 8 }}>
                Budget
              </label>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                style={{
                  width: '100%', background: '#070708', border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                  color: form.budget ? '#fff' : 'rgba(255,255,255,0.36)',
                  fontFamily: 'Inter', fontSize: 15, padding: '8px 0',
                  outline: 'none', appearance: 'none',
                }}
              >
                <option value="" disabled>Sélectionner</option>
                {budgets.map((b) => (
                  <option key={b} value={b} style={{ background: '#111113', color: '#fff' }}>{b}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label style={{ fontFamily: 'Inter', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.36)', display: 'block', marginBottom: 8 }}>
                Votre projet
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                style={{
                  width: '100%', background: 'transparent', border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                  color: '#fff', fontFamily: 'Inter', fontSize: 15, padding: '8px 0',
                  outline: 'none', resize: 'none',
                }}
              />
            </div>

            {/* Submit */}
            <div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'linear-gradient(135deg, #8b6cf7, #f0566a)',
                  border: 'none',
                  borderRadius: 100,
                  padding: '14px 40px',
                  fontFamily: 'Inter', fontWeight: 500, fontSize: 13,
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                  color: '#fff',
                  marginBottom: 16,
                }}
              >
                Envoyer ma demande →
              </motion.button>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
                <Lock size={13} style={{ color: 'rgba(255,255,255,0.28)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter', fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>
                  Vos données sont confidentielles.
                </span>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  )
}
