'use client';
import Link from 'next/link';

export default function BuyPage() {
  return (
    <main className="section" style={{maxWidth:'900px'}}>
      <div style={{marginBottom:'2rem'}}>
        <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Buy Property</span>
        <h1 className="section__title" style={{marginTop:'0.5rem'}}>Find Your Perfect Home in India</h1>
        <p style={{color:'#9d8fc0',fontSize:'1rem',lineHeight:1.7}}>Browse verified properties across 100+ Indian cities. From affordable apartments to luxury villas — find the right home at the right price.</p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'1.5rem',marginBottom:'3rem'}}>
        {[
          {icon:'🏙️',title:'Search by City',desc:'Mumbai, Delhi, Bengaluru, Hyderabad, Pune, Chennai and 100+ more cities.',href:'/listings'},
          {icon:'🏗️',title:'New Launch Projects',desc:'RERA registered under-construction projects with flexible payment plans.',href:'/listings?propertyType=apartment'},
          {icon:'🏠',title:'Ready-to-Move Homes',desc:'Move in immediately. No waiting, no construction delays.',href:'/listings'},
          {icon:'🌍',title:'NRI Corner',desc:'Buy property in India from abroad. Full legal and documentation support.',href:'#'},
          {icon:'📅',title:'Book Site Visit',desc:'Schedule a free site visit at your convenience — online or in person.',href:'#'},
          {icon:'✅',title:'RERA Verified',desc:'All listed projects are RERA registered. Buy with full legal protection.',href:'#'},
        ].map(c => (
          <Link key={c.title} href={c.href} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.5rem',display:'block',transition:'transform 0.2s,box-shadow 0.2s',textDecoration:'none'}}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow='0 8px 32px rgba(124,58,237,0.2)'}}
            onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}>
            <div style={{fontSize:'2rem',marginBottom:'0.75rem'}}>{c.icon}</div>
            <h3 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'0.4rem'}}>{c.title}</h3>
            <p style={{color:'#9d8fc0',fontSize:'0.875rem',lineHeight:1.6}}>{c.desc}</p>
          </Link>
        ))}
      </div>

      <div style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'2rem',marginBottom:'2rem'}}>
        <h2 style={{color:'#f1f0f5',fontWeight:800,marginBottom:'1.25rem'}}>🧮 Budget & EMI Calculator</h2>
        <p style={{color:'#9d8fc0',marginBottom:'1rem'}}>Plan your home purchase with our free tools:</p>
        <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
          {['EMI Calculator','Budget Calculator (₹)','Property Price Trends','Home Loan Comparison'].map(t=>(
            <a key={t} href="#" style={{background:'rgba(124,58,237,0.15)',border:'1px solid rgba(124,58,237,0.3)',color:'#c4b5fd',padding:'0.5rem 1rem',borderRadius:'0.5rem',fontSize:'0.875rem',fontWeight:600}}>{t}</a>
          ))}
        </div>
      </div>

      <div style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'2rem'}}>
        <h2 style={{color:'#f1f0f5',fontWeight:800,marginBottom:'1.25rem'}}>⚖️ Legal Checklist for Buyers</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem'}}>
          {['Verify RERA registration','Check title & ownership','Encumbrance certificate','Sale deed review','Stamp duty & registration','Home loan sanction letter','Society NOC','Possession certificate'].map(item=>(
            <div key={item} style={{display:'flex',alignItems:'center',gap:'0.5rem',color:'#e2d9f3',fontSize:'0.875rem'}}>
              <span style={{color:'var(--accent)'}}>✓</span> {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
