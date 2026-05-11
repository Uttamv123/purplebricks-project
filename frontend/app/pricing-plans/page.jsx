export const metadata = { title: 'Pricing Plans — 1HouseToHome India' };

const plans = [
  {
    name: 'Free Listing',
    price: '₹0',
    period: 'forever',
    tag: 'Most Popular',
    color: '#10b981',
    features: ['1 active property listing','Basic photos (up to 5)','Listed on 1HouseToHome only','Standard search visibility','Enquiry management dashboard','Valid for 30 days'],
    cta: 'List for Free',
    href: '/add-property',
  },
  {
    name: 'Premium Listing',
    price: '₹1,999',
    period: 'per listing',
    tag: 'Best Value',
    color: 'var(--accent)',
    features: ['1 featured property listing','Up to 20 HD photos + video','Listed on MagicBricks, 99acres & Housing.com','Priority search placement','Verified badge on listing','Dedicated relationship manager','Valid for 90 days','Free professional photography'],
    cta: 'Get Premium',
    href: '/add-property',
  },
  {
    name: 'Agent / Builder Pack',
    price: '₹9,999',
    period: 'per month',
    tag: 'For Professionals',
    color: '#7c3aed',
    features: ['Up to 25 active listings','All Premium features included','Listed on all major portals','Top placement in search results','Lead management CRM','Monthly performance reports','Dedicated account manager','RERA compliance support'],
    cta: 'Contact Sales',
    href: 'mailto:sales@1HouseToHome.in',
  },
];

export default function PricingPlansPage() {
  return (
    <main className="section" style={{maxWidth:'960px'}}>
      <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Transparent Pricing</span>
      <h1 className="section__title" style={{marginTop:'0.5rem',display:'block'}}>Simple, Fair Pricing</h1>
      <p style={{color:'#9d8fc0',marginBottom:'3rem',lineHeight:1.7}}>No hidden charges. No commission on sale. Pay only for what you need. All prices are inclusive of 18% GST.</p>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1.5rem',marginBottom:'3rem'}}>
        {plans.map(p => (
          <div key={p.name} style={{background:'#1c1030',border:`2px solid ${p.color}`,borderRadius:'0.75rem',padding:'2rem',display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'1rem'}}>
              <h2 style={{color:'#f1f0f5',fontWeight:800,fontSize:'1.1rem'}}>{p.name}</h2>
              <span style={{background:`${p.color}22`,color:p.color,fontSize:'0.7rem',fontWeight:700,padding:'0.2rem 0.6rem',borderRadius:'999px',border:`1px solid ${p.color}44`}}>{p.tag}</span>
            </div>
            <div style={{marginBottom:'1.5rem'}}>
              <span style={{color:p.color,fontWeight:800,fontSize:'2rem'}}>{p.price}</span>
              <span style={{color:'#9d8fc0',fontSize:'0.85rem',marginLeft:'0.4rem'}}>/ {p.period}</span>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'0.6rem',marginBottom:'2rem',flex:1}}>
              {p.features.map(f => (
                <div key={f} style={{display:'flex',gap:'0.5rem',color:'#e2d9f3',fontSize:'0.875rem'}}>
                  <span style={{color:p.color,flexShrink:0}}>✓</span>{f}
                </div>
              ))}
            </div>
            <a href={p.href} style={{background:p.color,color:'#fff',fontWeight:700,padding:'0.875rem',borderRadius:'0.5rem',textAlign:'center',display:'block'}}>{p.cta}</a>
          </div>
        ))}
      </div>

      <div style={{background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.25)',borderRadius:'0.75rem',padding:'1.5rem'}}>
        <h3 style={{color:'#fde68a',fontWeight:700,marginBottom:'0.5rem'}}>💡 GST Note</h3>
        <p style={{color:'#9d8fc0',fontSize:'0.875rem',lineHeight:1.7}}>All prices are inclusive of 18% GST as per Indian tax regulations. A GST invoice will be provided for all paid plans. 1HouseToHome India Pvt. Ltd. GSTIN: 29AABCE1234F1Z5</p>
      </div>
    </main>
  );
}
