import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillMatch — AI-powered hiring that actually works',
  description: 'Stop filtering by keywords. SkillMatch uses AI to screen candidates by what they can actually do — faster shortlists, fairer hiring, better outcomes.',
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SkillMatch",
            "description": "AI-powered skill-based candidate screening for faster, fairer hiring",
            "applicationCategory": "BusinessApplication",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
          })
        }}
      />

      {/* Nav */}
      <nav style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'1.2rem 2rem', borderBottom:'1px solid #e5e5e5' }}>
        <span style={{ fontFamily:'Georgia, serif', fontSize:'20px' }}>SkillMatch</span>
        <button style={{ fontSize:'13px', padding:'7px 16px', border:'1px solid #ccc', borderRadius:'20px', cursor:'pointer', background:'white' }}>
          Book a demo
        </button>
      </nav>

      {/* Hero */}
      <section style={{ padding:'5rem 2rem 4rem', maxWidth:'680px', margin:'0 auto', textAlign:'center' }}>
        <span style={{ display:'inline-block', fontSize:'12px', letterSpacing:'0.08em', textTransform:'uppercase', color:'#888', border:'1px solid #e5e5e5', padding:'4px 12px', borderRadius:'20px', marginBottom:'2rem' }}>
          AI-powered hiring
        </span>
        <h1 style={{ fontFamily:'Georgia, serif', fontSize:'clamp(36px, 6vw, 56px)', lineHeight:'1.1', letterSpacing:'-1px', marginBottom:'1.25rem' }}>
          Hire for skills,<br /><em style={{ color:'#888' }}>not keywords</em>
        </h1>
        <p style={{ fontSize:'17px', color:'#555', lineHeight:'1.6', marginBottom:'2.5rem', maxWidth:'480px', marginLeft:'auto', marginRight:'auto' }}>
          Stop drowning in CVs that don't tell you what candidates can actually do. SkillMatch surfaces the right people — faster, fairer, smarter.
        </p>
        <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' }}>
          <button style={{ padding:'12px 28px', background:'#111', color:'white', border:'none', borderRadius:'6px', fontSize:'15px', cursor:'pointer' }}>
            Book a demo
          </button>
          <button style={{ padding:'12px 28px', background:'transparent', color:'#555', border:'1px solid #ccc', borderRadius:'6px', fontSize:'15px', cursor:'pointer' }}>
            See how it works
          </button>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding:'4rem 2rem', borderTop:'1px solid #e5e5e5' }}>
        <p style={{ fontSize:'11px', letterSpacing:'0.1em', textTransform:'uppercase', color:'#888', marginBottom:'2.5rem', textAlign:'center' }}>How it works</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', maxWidth:'800px', margin:'0 auto' }}>
          {[
            { n:'01', title:'Define the role', body:'Describe what success looks like. Our AI turns that into a skills profile — no keyword lists needed.' },
            { n:'02', title:'AI screens candidates', body:'Every applicant is assessed against the same criteria. No bias, no CV keyword roulette.' },
            { n:'03', title:'Interview the right people', body:'Spend your time with candidates who actually fit. Average time-to-shortlist drops by 60%.' },
          ].map((s) => (
            <div key={s.n} style={{ padding:'1.5rem', borderRight:'1px solid #e5e5e5' }}>
              <div style={{ fontSize:'11px', color:'#aaa', marginBottom:'1rem' }}>{s.n}</div>
              <h3 style={{ fontSize:'16px', fontWeight:'500', marginBottom:'0.5rem' }}>{s.title}</h3>
              <p style={{ fontSize:'14px', color:'#666', lineHeight:'1.55' }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For who */}
      <section style={{ padding:'4rem 2rem', borderTop:'1px solid #e5e5e5', maxWidth:'800px', margin:'0 auto' }}>
        <p style={{ fontSize:'11px', letterSpacing:'0.1em', textTransform:'uppercase', color:'#888', marginBottom:'2rem' }}>Who it's for</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'1px', border:'1px solid #e5e5e5', borderRadius:'8px', overflow:'hidden' }}>
          {[
            { role:'Employers', title:'Less noise, better hires', body:'Stop paying for job boards that flood your inbox. Get a ranked shortlist of candidates who can do the job.' },
            { role:'Recruiters', title:'Close roles faster', body:'Run more searches in parallel. AI handles screening so you focus on relationships and closing.' },
            { role:'Candidates', title:'Compete on ability', body:"Your background doesn't define you. Skills do. Get matched to roles where you'll actually thrive." },
          ].map((c) => (
            <div key={c.role} style={{ padding:'1.5rem', background:'#fafafa' }}>
              <div style={{ fontSize:'11px', letterSpacing:'0.08em', textTransform:'uppercase', color:'#888', marginBottom:'0.75rem' }}>{c.role}</div>
              <h3 style={{ fontSize:'15px', fontWeight:'500', marginBottom:'0.5rem' }}>{c.title}</h3>
              <p style={{ fontSize:'13px', color:'#666', lineHeight:'1.5' }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:'4rem 2rem', borderTop:'1px solid #e5e5e5', maxWidth:'600px', margin:'0 auto' }}>
        <p style={{ fontSize:'11px', letterSpacing:'0.1em', textTransform:'uppercase', color:'#888', marginBottom:'2rem' }}>FAQ</p>
        {[
          { q:'What makes SkillMatch different from traditional ATS?', a:'Traditional ATS tools filter CVs by keywords. SkillMatch evaluates what candidates can actually do — not just what they\'ve written on a page.' },
          { q:'How does the AI avoid bias?', a:'Every candidate is assessed against the same skill criteria. Demographic information is not factored into ranking. We audit our models regularly for fairness.' },
          { q:'How long does it take to get a shortlist?', a:'Most roles produce a ranked shortlist within 24 hours of posting. High-volume roles can be processed in under 2 hours.' },
          { q:'Is this suitable for technical roles?', a:'Yes. SkillMatch works especially well for technical and specialist roles where skill depth matters more than years of experience.' },
        ].map((f) => (
          <div key={f.q} style={{ padding:'1.25rem 0', borderBottom:'1px solid #e5e5e5' }}>
            <div style={{ fontSize:'15px', fontWeight:'500', marginBottom:'0.5rem' }}>{f.q}</div>
            <div style={{ fontSize:'14px', color:'#666', lineHeight:'1.6' }}>{f.a}</div>
          </div>
        ))}
      </section>

      {/* Footer CTA */}
      <section style={{ padding:'5rem 2rem', textAlign:'center', borderTop:'1px solid #e5e5e5' }}>
        <h2 style={{ fontFamily:'Georgia, serif', fontSize:'32px', marginBottom:'1rem' }}>Ready to hire smarter?</h2>
        <p style={{ color:'#666', fontSize:'15px' }}>Join teams already reducing time-to-hire by half.</p>
        <div style={{ display:'flex', gap:'8px', justifyContent:'center', marginTop:'1.5rem', flexWrap:'wrap' }}>
          <input type="email" placeholder="your@email.com" style={{ padding:'11px 16px', border:'1px solid #ccc', borderRadius:'6px', fontSize:'14px', width:'240px' }} />
          <button style={{ padding:'12px 20px', background:'#111', color:'white', border:'none', borderRadius:'6px', fontSize:'14px', cursor:'pointer' }}>
            Get early access
          </button>
        </div>
      </section>
    </main>
  )
}