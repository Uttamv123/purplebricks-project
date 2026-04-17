'use client';
import { useState } from 'react';

export default function PropertyValuationPage() {
  const [form, setForm] = useState({ city: '', area: '', size: '', type: '', age: '' });
  const [result, setResult] = useState(null);

  const pricePerSqFt = { Mumbai: 18000, Delhi: 12000, Bengaluru: 8500, Hyderabad: 7000, Pune: 7500, Chennai: 7200, Noida: 6000, Gurugram: 9000 };

  function calculate(e) {
    e.preventDefault();
    const base = (pricePerSqFt[form.city] || 7000) * Number(form.size);
    const ageDiscount = Math.min(Number(form.age) * 0.01, 0.3);
    const estimated = Math.round(base * (1 - ageDiscount));
    setResult({ low: Math.round(estimated * 0.9), mid: estimated, high: Math.round(estimated * 1.1) });
  }

  return (
    <main className="section" style={{maxWidth:'860px'}}>
      <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Free Tool</span>
      <h1 className="section__title" style={{marginTop:'0.5rem',display:'block'}}>Property Valuation Tool</h1>
      <p style={{color:'#9d8fc0',marginBottom:'2rem',lineHeight:1.7}}>Get an instant estimate of your property's market value based on location, size, and condition. For a certified valuation report, book a free expert visit.</p>

      <form onSubmit={calculate} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'2rem',marginBottom:'2rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.25rem',marginBottom:'1.25rem'}}>
          {[
            { label: 'City', name: 'city', type: 'select', options: ['Mumbai','Delhi','Bengaluru','Hyderabad','Pune','Chennai','Noida','Gurugram'] },
            { label: 'Locality / Area', name: 'area', type: 'text', placeholder: 'e.g. Bandra West' },
            { label: 'Built-up Area (sq ft)', name: 'size', type: 'number', placeholder: 'e.g. 1200' },
            { label: 'Property Type', name: 'type', type: 'select', options: ['Apartment','Independent House','Villa','Studio','Plot'] },
            { label: 'Property Age (years)', name: 'age', type: 'number', placeholder: 'e.g. 5' },
          ].map(f => (
            <div key={f.name} style={{display:'flex',flexDirection:'column',gap:'0.35rem'}}>
              <label style={{color:'#e2d9f3',fontSize:'0.85rem',fontWeight:600}}>{f.label}</label>
              {f.type === 'select' ? (
                <select value={form[f.name]} onChange={e => setForm({...form,[f.name]:e.target.value})} required style={{background:'#0f0a1a',color:'#e2d9f3',border:'1.5px solid #2d1f4a',borderRadius:'0.5rem',padding:'0.7rem 1rem',fontFamily:'inherit',fontSize:'0.9rem'}}>
                  <option value="">Select</option>
                  {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input type={f.type} value={form[f.name]} onChange={e => setForm({...form,[f.name]:e.target.value})} placeholder={f.placeholder} required style={{background:'#0f0a1a',color:'#e2d9f3',border:'1.5px solid #2d1f4a',borderRadius:'0.5rem',padding:'0.7rem 1rem',fontFamily:'inherit',fontSize:'0.9rem'}} />
              )}
            </div>
          ))}
        </div>
        <button type="submit" style={{background:'var(--accent)',color:'#fff',fontWeight:700,padding:'0.875rem 2rem',borderRadius:'0.5rem',border:'none',cursor:'pointer',fontFamily:'inherit',fontSize:'1rem'}}>🏷️ Get Instant Estimate</button>
      </form>

      {result && (
        <div style={{background:'linear-gradient(135deg,#2d0f5e,#1a0533)',border:'1px solid rgba(124,58,237,0.3)',borderRadius:'0.75rem',padding:'2rem',marginBottom:'2rem',textAlign:'center'}}>
          <h2 style={{color:'#f1f0f5',fontWeight:800,marginBottom:'1.5rem'}}>Estimated Market Value</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1rem'}}>
            {[['Conservative',result.low,'#9d8fc0'],['Market Rate',result.mid,'var(--accent)'],['Premium',result.high,'#10b981']].map(([label,val,color]) => (
              <div key={label} style={{background:'rgba(255,255,255,0.05)',borderRadius:'0.5rem',padding:'1rem'}}>
                <div style={{color:'#9d8fc0',fontSize:'0.78rem',marginBottom:'0.4rem'}}>{label}</div>
                <div style={{color,fontWeight:800,fontSize:'1.25rem'}}>₹{val.toLocaleString('en-IN')}</div>
              </div>
            ))}
          </div>
          <p style={{color:'#9d8fc0',fontSize:'0.8rem',marginTop:'1rem'}}>*Indicative estimate only. Actual value may vary based on floor, view, amenities, and market conditions.</p>
        </div>
      )}

      <div style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.75rem'}}>
        <h2 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'1rem'}}>📊 Factors That Affect Property Value in India</h2>
        {[['Location & Connectivity','Proximity to metro, IT parks, schools, hospitals, and markets significantly impacts price.'],['RERA Registration','RERA-registered projects command a premium due to legal protection and transparency.'],['Floor & View','Higher floors with open views typically fetch 5–15% premium in apartments.'],['Age & Condition','Newer properties command higher prices. Well-maintained older properties retain value.'],['Amenities','Gated community, gym, pool, power backup, and parking add 10–20% to value.'],['Vastu Compliance','Vastu-compliant properties are preferred by Indian buyers and can fetch a premium.']].map(([f,d]) => (
          <div key={f} style={{borderBottom:'1px solid #2d1f4a',padding:'0.75rem 0'}}>
            <div style={{color:'var(--accent)',fontWeight:600,fontSize:'0.875rem',marginBottom:'0.2rem'}}>{f}</div>
            <div style={{color:'#9d8fc0',fontSize:'0.82rem'}}>{d}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
