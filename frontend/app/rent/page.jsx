'use client';
import Link from 'next/link';

export default function RentPage() {
  return (
    <main className="section" style={{maxWidth:'900px'}}>
      <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Rent Property</span>
      <h1 className="section__title" style={{marginTop:'0.5rem'}}>Rent Flats, Houses & PGs Across India</h1>
      <p style={{color:'#9d8fc0',fontSize:'1rem',lineHeight:1.7,marginBottom:'2rem'}}>Find verified rental properties with zero brokerage options. Flats, PGs, co-living and commercial spaces across 100+ cities.</p>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'1.5rem',marginBottom:'3rem'}}>
        {[
          {icon:'🏢',title:'Rent Flats in Major Cities',desc:'Mumbai, Delhi, Bengaluru, Pune, Hyderabad, Chennai and more.',href:'/listings'},
          {icon:'🛏️',title:'PG / Shared Living',desc:'Affordable PG accommodations with meals, WiFi and security.'},
          {icon:'👤',title:'Owner Listings — Zero Brokerage',desc:'Deal directly with owners. Save thousands in brokerage fees.',tag:'0 Brokerage'},
          {icon:'🏢',title:'Commercial Rentals',desc:'Office spaces, retail shops, warehouses and co-working spaces.'},
          {icon:'📜',title:'Rental Agreements',desc:'Download legally valid rental agreement templates for India.'},
          {icon:'✅',title:'Tenant Verification',desc:'Police verification and background check services for landlords.'},
        ].map(c => (
          <Link key={c.title} href={c.href||'#'} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.5rem',display:'block',textDecoration:'none',transition:'transform 0.2s',position:'relative'}}
            onMouseEnter={e=>e.currentTarget.style.transform='translateY(-3px)'}
            onMouseLeave={e=>e.currentTarget.style.transform=''}>
            {c.tag && <span style={{position:'absolute',top:'1rem',right:'1rem',background:'rgba(245,158,11,0.2)',color:'var(--accent)',fontSize:'0.65rem',fontWeight:800,padding:'0.15rem 0.5rem',borderRadius:'999px',border:'1px solid rgba(245,158,11,0.3)'}}>{c.tag}</span>}
            <div style={{fontSize:'2rem',marginBottom:'0.75rem'}}>{c.icon}</div>
            <h3 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'0.4rem'}}>{c.title}</h3>
            <p style={{color:'#9d8fc0',fontSize:'0.875rem',lineHeight:1.6}}>{c.desc}</p>
          </Link>
        ))}
      </div>

      <div style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'2rem',marginBottom:'2rem'}}>
        <h2 style={{color:'#f1f0f5',fontWeight:800,marginBottom:'1.25rem'}}>📋 Tenant Rights in India</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem'}}>
          {['Right to a written rental agreement','Security deposit max 2 months rent','Right to basic amenities','Protection from illegal eviction','Right to receipt for rent paid','Notice period before eviction','Right to privacy','Maintenance responsibility of landlord'].map(item=>(
            <div key={item} style={{display:'flex',alignItems:'center',gap:'0.5rem',color:'#e2d9f3',fontSize:'0.875rem'}}>
              <span style={{color:'var(--accent)'}}>✓</span> {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
