'use client';
import Link from 'next/link';

export default function PGPage() {
  const cities = [
    {city:'Mumbai',areas:'Andheri, Bandra, Powai, Thane',price:'₹6,000–₹18,000/mo'},
    {city:'Delhi / NCR',areas:'Noida, Gurugram, Dwarka, Lajpat Nagar',price:'₹5,000–₹15,000/mo'},
    {city:'Bengaluru',areas:'Koramangala, Indiranagar, Whitefield, HSR',price:'₹6,000–₹20,000/mo'},
    {city:'Pune',areas:'Koregaon Park, Wakad, Hinjewadi, Kothrud',price:'₹5,000–₹14,000/mo'},
    {city:'Hyderabad',areas:'Madhapur, Gachibowli, Kondapur, Banjara Hills',price:'₹5,500–₹16,000/mo'},
    {city:'Chennai',areas:'Adyar, Anna Nagar, OMR, Velachery',price:'₹5,000–₹13,000/mo'},
  ];

  return (
    <main className="section" style={{maxWidth:'900px'}}>
      <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>PG & Co-living</span>
      <h1 className="section__title" style={{marginTop:'0.5rem'}}>Find PG & Co-living Spaces Across India</h1>
      <p style={{color:'#9d8fc0',fontSize:'1rem',lineHeight:1.7,marginBottom:'2rem'}}>Verified PG accommodations and co-living spaces for students and working professionals. WiFi, meals, and security included.</p>

      <h2 style={{color:'#f1f0f5',fontWeight:800,marginBottom:'1.25rem'}}>🏙️ PG by City</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'1.25rem',marginBottom:'3rem'}}>
        {cities.map(c=>(
          <div key={c.city} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.25rem'}}>
            <h3 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'0.3rem'}}>{c.city}</h3>
            <p style={{color:'#9d8fc0',fontSize:'0.8rem',marginBottom:'0.5rem'}}>{c.areas}</p>
            <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.875rem'}}>{c.price}</span>
          </div>
        ))}
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem',marginBottom:'2rem'}}>
        <div style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.5rem'}}>
          <h3 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'1rem'}}>✨ Amenities Available</h3>
          {['📶 High-speed WiFi','🍽️ Meals included','🏋️ Gym & fitness','🔒 24/7 security','🧹 Housekeeping','❄️ AC rooms','🚗 Parking','📺 Common TV lounge'].map(a=>(
            <div key={a} style={{color:'#e2d9f3',fontSize:'0.875rem',padding:'0.3rem 0'}}>{a}</div>
          ))}
        </div>
        <div style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.5rem'}}>
          <h3 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'1rem'}}>👥 Who It\'s For</h3>
          {[
            {icon:'🎓',label:'Students',sub:'Near colleges & universities'},
            {icon:'💼',label:'Working Professionals',sub:'Near IT parks & offices'},
            {icon:'👩',label:'Ladies PG Only',sub:'Safe, verified accommodations'},
            {icon:'🤝',label:'Co-living Spaces',sub:'Fully managed, flexible stay'},
          ].map(w=>(
            <div key={w.label} style={{display:'flex',gap:'0.75rem',padding:'0.5rem 0',borderBottom:'1px solid #2d1f4a'}}>
              <span style={{fontSize:'1.25rem'}}>{w.icon}</span>
              <div>
                <div style={{color:'#f1f0f5',fontWeight:600,fontSize:'0.875rem'}}>{w.label}</div>
                <div style={{color:'#9d8fc0',fontSize:'0.78rem'}}>{w.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
