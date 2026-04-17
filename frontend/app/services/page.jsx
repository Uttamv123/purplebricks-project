'use client';

export default function ServicesPage() {
  const services = [
    {icon:'🎨',title:'Interior Design',desc:'Modular kitchens, full home interiors, false ceilings and more. Get free design consultation.',price:'Starting ₹999/sq ft'},
    {icon:'🚛',title:'Packers & Movers',desc:'Verified, insured movers across India. Local and intercity shifting with real-time tracking.',price:'Starting ₹3,000'},
    {icon:'📜',title:'Legal Services',desc:'Sale deed drafting, title search, RERA compliance, rental agreements and property registration.',price:'Starting ₹2,500'},
    {icon:'🔍',title:'Property Verification',desc:'Encumbrance certificate, title verification, RERA check and legal due diligence.',price:'Starting ₹1,500'},
    {icon:'🔑',title:'Property Management',desc:'End-to-end rental management for NRIs and landlords. Tenant screening, rent collection, maintenance.',price:'5% of annual rent'},
    {icon:'📸',title:'Professional Photography',desc:'High-quality property photos and virtual 3D tours to boost your listing visibility.',price:'Starting ₹2,000'},
    {icon:'🔧',title:'Home Maintenance',desc:'Plumbing, electrical, AC servicing, painting and general repairs by verified professionals.',price:'Starting ₹299'},
    {icon:'🧹',title:'Deep Cleaning',desc:'Professional deep cleaning for move-in/move-out, post-construction and regular maintenance.',price:'Starting ₹1,499'},
    {icon:'⚡',title:'EstateHub SmartMove+',desc:'Compare energy deals, broadband plans, home insurance and more — all in one place.',price:'Free service'},
  ];

  return (
    <main className="section" style={{maxWidth:'1000px'}}>
      <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Services</span>
      <h1 className="section__title" style={{marginTop:'0.5rem'}}>Everything You Need for Your Move</h1>
      <p style={{color:'#9d8fc0',fontSize:'1rem',lineHeight:1.7,marginBottom:'2rem'}}>From interior design to legal help — EstateHub connects you with verified service providers across India.</p>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1.5rem'}}>
        {services.map(s=>(
          <div key={s.title} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.5rem',transition:'transform 0.2s,box-shadow 0.2s',cursor:'pointer'}}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow='0 8px 32px rgba(124,58,237,0.2)'}}
            onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=''}}>
            <div style={{fontSize:'2rem',marginBottom:'0.75rem'}}>{s.icon}</div>
            <h3 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'0.4rem'}}>{s.title}</h3>
            <p style={{color:'#9d8fc0',fontSize:'0.875rem',lineHeight:1.6,marginBottom:'0.75rem'}}>{s.desc}</p>
            <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.82rem'}}>{s.price}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
