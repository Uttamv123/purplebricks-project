export const metadata = { title: 'Careers — 1HouseToHome India' };

const jobs = [
  { title: 'Senior Full Stack Engineer', dept: 'Engineering', location: 'Bengaluru', type: 'Full-time', exp: '4–7 years', desc: 'Build and scale our property search platform using React, Node.js, and PostgreSQL. Work on high-traffic systems serving millions of property seekers across India.' },
  { title: 'Product Manager — Buyer Experience', dept: 'Product', location: 'Mumbai / Remote', type: 'Full-time', exp: '3–6 years', desc: 'Own the end-to-end buyer journey from search to site visit booking. Work closely with engineering, design, and business teams to ship features that delight home buyers.' },
  { title: 'Real Estate Relationship Manager', dept: 'Sales', location: 'Delhi NCR', type: 'Full-time', exp: '2–5 years', desc: 'Build and manage relationships with developers, builders, and channel partners in Delhi NCR. Drive listings growth and ensure quality of inventory on the platform.' },
  { title: 'Data Analyst — Property Insights', dept: 'Analytics', location: 'Bengaluru', type: 'Full-time', exp: '2–4 years', desc: 'Analyse property market trends, user behaviour, and pricing data to generate insights for product and business teams. Proficiency in SQL and Python required.' },
  { title: 'UI/UX Designer', dept: 'Design', location: 'Remote', type: 'Full-time', exp: '3–5 years', desc: 'Design intuitive, beautiful experiences for property buyers and sellers. Own the design system and work across web and mobile platforms.' },
  { title: 'Legal & Compliance Executive', dept: 'Legal', location: 'Bengaluru', type: 'Full-time', exp: '2–4 years', desc: 'Handle RERA compliance, property documentation review, and legal due diligence. LLB required; experience in real estate law preferred.' },
];

const perks = [
  { icon: '💰', title: 'Competitive Salary', desc: 'Market-leading compensation with ESOPs for senior roles' },
  { icon: '🏠', title: 'Remote Friendly', desc: 'Flexible work from home policy for most roles' },
  { icon: '📚', title: 'Learning Budget', desc: '₹50,000/year for courses, conferences, and books' },
  { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive medical cover for you and your family' },
  { icon: '🎯', title: 'ESOP Pool', desc: 'Equity participation for all full-time employees' },
  { icon: '🌴', title: 'Unlimited Leaves', desc: 'Trust-based leave policy — take what you need' },
];

export default function CareersPage() {
  return (
    <main className="section" style={{maxWidth:'960px'}}>
      <div style={{marginBottom:'2.5rem'}}>
        <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Join Us</span>
        <h1 className="section__title" style={{marginTop:'0.5rem',display:'block'}}>Careers at 1HouseToHome</h1>
        <p style={{color:'#9d8fc0',fontSize:'1rem',lineHeight:1.7,maxWidth:'600px'}}>We're building India's most trusted property platform. Join a team of passionate people solving real problems for millions of home buyers and sellers across India.</p>
      </div>

      <div style={{background:'linear-gradient(135deg,#2d0f5e,#1a0533)',border:'1px solid rgba(124,58,237,0.3)',borderRadius:'0.75rem',padding:'2rem',marginBottom:'2.5rem',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:'1.5rem',textAlign:'center'}}>
        {[{v:'200+',l:'Team Members'},{v:'100+',l:'Cities Covered'},{v:'₹50Cr+',l:'Funding Raised'},{v:'4.6★',l:'Glassdoor Rating'}].map(s=>(
          <div key={s.l}>
            <div style={{color:'var(--accent)',fontWeight:800,fontSize:'1.75rem'}}>{s.v}</div>
            <div style={{color:'rgba(255,255,255,0.7)',fontSize:'0.82rem',marginTop:'0.25rem'}}>{s.l}</div>
          </div>
        ))}
      </div>

      <h2 style={{color:'#f1f0f5',fontWeight:800,marginBottom:'1.25rem'}}>🚀 Open Positions</h2>
      <div style={{display:'flex',flexDirection:'column',gap:'1rem',marginBottom:'3rem'}}>
        {jobs.map(j => (
          <div key={j.title} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.5rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'0.5rem',marginBottom:'0.75rem'}}>
              <div>
                <h3 style={{color:'#f1f0f5',fontWeight:700,fontSize:'1rem'}}>{j.title}</h3>
                <div style={{display:'flex',gap:'0.75rem',marginTop:'0.35rem',flexWrap:'wrap'}}>
                  <span style={{color:'#9d8fc0',fontSize:'0.8rem'}}>🏢 {j.dept}</span>
                  <span style={{color:'#9d8fc0',fontSize:'0.8rem'}}>📍 {j.location}</span>
                  <span style={{color:'#9d8fc0',fontSize:'0.8rem'}}>⏱ {j.exp}</span>
                </div>
              </div>
              <span style={{background:'rgba(124,58,237,0.15)',color:'#c4b5fd',fontSize:'0.75rem',fontWeight:600,padding:'0.25rem 0.75rem',borderRadius:'999px',border:'1px solid rgba(124,58,237,0.3)'}}>{j.type}</span>
            </div>
            <p style={{color:'#9d8fc0',fontSize:'0.875rem',lineHeight:1.65,marginBottom:'1rem'}}>{j.desc}</p>
            <a href={`mailto:careers@1HouseToHome.in?subject=Application: ${j.title}`} style={{color:'var(--accent)',fontWeight:600,fontSize:'0.875rem'}}>Apply Now →</a>
          </div>
        ))}
      </div>

      <h2 style={{color:'#f1f0f5',fontWeight:800,marginBottom:'1.25rem'}}>🎁 Why Join Us?</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'1rem',marginBottom:'2.5rem'}}>
        {perks.map(p => (
          <div key={p.title} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.25rem',display:'flex',gap:'1rem',alignItems:'flex-start'}}>
            <span style={{fontSize:'1.75rem'}}>{p.icon}</span>
            <div>
              <div style={{color:'#f1f0f5',fontWeight:700,marginBottom:'0.25rem'}}>{p.title}</div>
              <div style={{color:'#9d8fc0',fontSize:'0.82rem'}}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.25)',borderRadius:'0.75rem',padding:'1.75rem',textAlign:'center'}}>
        <h3 style={{color:'#fde68a',fontWeight:700,marginBottom:'0.5rem'}}>Don't see a role that fits?</h3>
        <p style={{color:'#9d8fc0',marginBottom:'1rem',fontSize:'0.9rem'}}>We're always looking for talented people. Send us your resume and we'll reach out when the right opportunity comes up.</p>
        <a href="mailto:careers@1HouseToHome.in" style={{background:'var(--accent)',color:'#fff',fontWeight:700,padding:'0.75rem 1.75rem',borderRadius:'0.5rem',display:'inline-block'}}>📧 Send Your Resume</a>
      </div>
    </main>
  );
}
