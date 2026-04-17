'use client';
import Link from 'next/link';

export default function SellPage() {
  return (
    <main className="section" style={{maxWidth:'900px'}}>
      <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Sell Property</span>
      <h1 className="section__title" style={{marginTop:'0.5rem'}}>Sell Your Property in India — Zero Brokerage</h1>
      <p style={{color:'#9d8fc0',fontSize:'1rem',lineHeight:1.7,marginBottom:'2rem'}}>List your property for free and reach lakhs of genuine buyers across India. No hidden charges, no middlemen.</p>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'1.5rem',marginBottom:'3rem'}}>
        {[
          {icon:'❓',title:'How Selling Works',desc:'Simple 3-step process — list, connect with buyers, close the deal.'},
          {icon:'💸',title:'Pricing Plans',desc:'Zero brokerage listing. Optional premium plans for faster sale.'},
          {icon:'📋',title:'Post Your Property',desc:'List in 5 minutes. Add photos, price, and details.',href:'/add-property'},
          {icon:'👥',title:'Find Local Agents',desc:'Connect with verified RERA-registered agents in your city.'},
          {icon:'🏷️',title:'Free Property Valuation',desc:'Get an accurate market price from our certified experts.'},
          {icon:'📈',title:'Market Price Trends',desc:'Check current prices in Mumbai, Delhi, Bengaluru and more.'},
        ].map(c => (
          <Link key={c.title} href={c.href||'#'} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.5rem',display:'block',textDecoration:'none',transition:'transform 0.2s'}}
            onMouseEnter={e=>e.currentTarget.style.transform='translateY(-3px)'}
            onMouseLeave={e=>e.currentTarget.style.transform=''}>
            <div style={{fontSize:'2rem',marginBottom:'0.75rem'}}>{c.icon}</div>
            <h3 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'0.4rem'}}>{c.title}</h3>
            <p style={{color:'#9d8fc0',fontSize:'0.875rem',lineHeight:1.6}}>{c.desc}</p>
          </Link>
        ))}
      </div>

      <div style={{background:'linear-gradient(135deg,#2d0f5e,#1a0533)',border:'1px solid rgba(124,58,237,0.3)',borderRadius:'0.75rem',padding:'2rem',marginBottom:'2rem',textAlign:'center'}}>
        <h2 style={{color:'#fff',fontWeight:800,marginBottom:'0.75rem'}}>Ready to sell? List for free today.</h2>
        <p style={{color:'rgba(255,255,255,0.75)',marginBottom:'1.5rem'}}>Join 2 lakh+ sellers who trust EstateHub India</p>
        <Link href="/add-property" style={{background:'var(--accent)',color:'#fff',fontWeight:700,padding:'0.875rem 2rem',borderRadius:'0.5rem',display:'inline-block'}}>📋 Post Your Property — Free</Link>
      </div>

      <div style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'2rem'}}>
        <h2 style={{color:'#f1f0f5',fontWeight:800,marginBottom:'1.25rem'}}>📜 Legal & Documentation Guide</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem'}}>
          {['RERA registration check','Title deed verification','Encumbrance certificate','Sale agreement drafting','Stamp duty payment','Property registration','NOC from society','Capital gains tax guidance'].map(item=>(
            <div key={item} style={{display:'flex',alignItems:'center',gap:'0.5rem',color:'#e2d9f3',fontSize:'0.875rem'}}>
              <span style={{color:'var(--accent)'}}>✓</span> {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
