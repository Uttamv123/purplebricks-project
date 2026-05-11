export const metadata = { title: 'How Selling Works in India — 1HouseToHome' };

const steps = [
  { step: '01', icon: '🏷️', title: 'Get a Free Valuation', desc: 'Our certified valuers assess your property based on location, size, amenities, and recent comparable sales in your area. The valuation is completely free and takes 24–48 hours.' },
  { step: '02', icon: '📋', title: 'List Your Property', desc: 'Post your property on 1HouseToHome in under 5 minutes. Add photos, description, price, and RERA details. Your listing goes live instantly and is visible to lakhs of buyers.' },
  { step: '03', icon: '📣', title: 'We Advertise for You', desc: 'Your property is automatically listed on MagicBricks, 99acres, Housing.com, and Google. We handle all the marketing so you get maximum visibility.' },
  { step: '04', icon: '📅', title: 'Manage Site Visits', desc: 'Buyers book site visits directly through our platform. You get notified instantly and can accept or reschedule at your convenience.' },
  { step: '05', icon: '💬', title: 'Negotiate & Accept Offer', desc: 'Receive offers from verified buyers. Our team helps you negotiate the best price. All communications are recorded for transparency.' },
  { step: '06', icon: '⚖️', title: 'Legal & Documentation', desc: 'Our legal team handles sale agreement, title verification, stamp duty calculation, and property registration. We ensure full RERA compliance.' },
  { step: '07', icon: '🔑', title: 'Handover & Payment', desc: 'Once all documents are in order and payment is received, hand over the keys. We ensure the entire process is smooth and legally compliant.' },
];

export default function HowSellingWorksPage() {
  return (
    <main className="section" style={{maxWidth:'860px'}}>
      <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Selling Guide</span>
      <h1 className="section__title" style={{marginTop:'0.5rem',display:'block'}}>How Selling Works in India</h1>
      <p style={{color:'#9d8fc0',marginBottom:'3rem',lineHeight:1.7}}>Selling property in India involves legal, financial, and regulatory steps. Here's a complete guide to selling your property through 1HouseToHome — from valuation to registration.</p>

      <div style={{display:'flex',flexDirection:'column',gap:'1.25rem',marginBottom:'3rem'}}>
        {steps.map(s => (
          <div key={s.step} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.5rem',display:'flex',gap:'1.25rem',alignItems:'flex-start'}}>
            <div style={{background:'rgba(124,58,237,0.2)',border:'1px solid rgba(124,58,237,0.3)',borderRadius:'50%',width:'48px',height:'48px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.25rem',flexShrink:0}}>{s.icon}</div>
            <div>
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'0.4rem'}}>
                <span style={{color:'var(--accent)',fontWeight:800,fontSize:'0.75rem'}}>STEP {s.step}</span>
                <h3 style={{color:'#f1f0f5',fontWeight:700,fontSize:'1rem'}}>{s.title}</h3>
              </div>
              <p style={{color:'#9d8fc0',fontSize:'0.875rem',lineHeight:1.7}}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.75rem',marginBottom:'1.5rem'}}>
        <h2 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'1rem'}}>📜 Key Indian Laws for Property Sellers</h2>
        {[
          ['RERA 2016', 'All residential projects above 500 sq m or 8 units must be RERA registered. Sellers must disclose all project details.'],
          ['Transfer of Property Act, 1882', 'Governs the transfer of immovable property. Sale deed must be executed and registered.'],
          ['Registration Act, 1908', 'Property sale must be registered at the Sub-Registrar\'s office. Stamp duty and registration charges apply.'],
          ['Income Tax Act', 'Capital gains tax applies on property sale. Short-term (held < 2 years): taxed at slab rate. Long-term: 20% with indexation.'],
          ['FEMA', 'NRIs selling property in India must comply with FEMA regulations for repatriation of sale proceeds.'],
        ].map(([law, desc]) => (
          <div key={law} style={{borderBottom:'1px solid #2d1f4a',padding:'0.875rem 0'}}>
            <div style={{color:'var(--accent)',fontWeight:600,fontSize:'0.875rem',marginBottom:'0.25rem'}}>{law}</div>
            <div style={{color:'#9d8fc0',fontSize:'0.82rem'}}>{desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
