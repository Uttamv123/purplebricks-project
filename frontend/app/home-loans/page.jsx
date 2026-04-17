'use client';

export default function HomeLoansPage() {
  const banks = [
    {name:'SBI Home Loans',rate:'8.50% p.a.',emi:'₹769/lakh',tag:'Lowest Rate'},
    {name:'HDFC Bank',rate:'8.75% p.a.',emi:'₹782/lakh',tag:'Most Popular'},
    {name:'ICICI Bank',rate:'8.75% p.a.',emi:'₹782/lakh',tag:''},
    {name:'Axis Bank',rate:'8.75% p.a.',emi:'₹782/lakh',tag:''},
    {name:'Kotak Mahindra',rate:'8.85% p.a.',emi:'₹788/lakh',tag:''},
    {name:'LIC Housing Finance',rate:'8.65% p.a.',emi:'₹776/lakh',tag:''},
  ];

  return (
    <main className="section" style={{maxWidth:'900px'}}>
      <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Home Loans</span>
      <h1 className="section__title" style={{marginTop:'0.5rem'}}>Compare Home Loans from 50+ Banks</h1>
      <p style={{color:'#9d8fc0',fontSize:'1rem',lineHeight:1.7,marginBottom:'2rem'}}>Get pre-approved in 24 hours. Compare interest rates, EMIs and eligibility from India's top banks and NBFCs.</p>

      <h2 style={{color:'#f1f0f5',fontWeight:800,marginBottom:'1.25rem'}}>🏦 Current Home Loan Rates</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'1.25rem',marginBottom:'3rem'}}>
        {banks.map(b=>(
          <div key={b.name} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.25rem',position:'relative'}}>
            {b.tag && <span style={{position:'absolute',top:'1rem',right:'1rem',background:'rgba(245,158,11,0.2)',color:'var(--accent)',fontSize:'0.65rem',fontWeight:800,padding:'0.15rem 0.5rem',borderRadius:'999px',border:'1px solid rgba(245,158,11,0.3)'}}>{b.tag}</span>}
            <h3 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'0.5rem'}}>{b.name}</h3>
            <div style={{color:'var(--accent)',fontWeight:800,fontSize:'1.1rem',marginBottom:'0.25rem'}}>{b.rate}</div>
            <div style={{color:'#9d8fc0',fontSize:'0.8rem'}}>EMI: {b.emi}</div>
          </div>
        ))}
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem',marginBottom:'2rem'}}>
        <div style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.5rem'}}>
          <h3 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'1rem'}}>📄 Documents Required</h3>
          <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
            {['Aadhaar card & PAN card','Last 3 months salary slips','6 months bank statements','Form 16 / ITR (2 years)','Property documents','Employment certificate','Passport size photos'].map(d=>(
              <div key={d} style={{display:'flex',gap:'0.5rem',color:'#e2d9f3',fontSize:'0.875rem'}}>
                <span style={{color:'var(--accent)'}}>✓</span>{d}
              </div>
            ))}
          </div>
        </div>
        <div style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.5rem'}}>
          <h3 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'1rem'}}>🧮 Quick EMI Calculator</h3>
          <p style={{color:'#9d8fc0',fontSize:'0.875rem',marginBottom:'1rem'}}>For a ₹50 Lakh loan at 8.5% for 20 years:</p>
          <div style={{background:'rgba(124,58,237,0.15)',border:'1px solid rgba(124,58,237,0.3)',borderRadius:'0.5rem',padding:'1rem',textAlign:'center'}}>
            <div style={{color:'var(--accent)',fontWeight:800,fontSize:'1.5rem'}}>₹43,391/month</div>
            <div style={{color:'#9d8fc0',fontSize:'0.8rem',marginTop:'0.25rem'}}>Total interest: ₹54.14 Lakh</div>
          </div>
          <a href="#" style={{display:'block',marginTop:'1rem',textAlign:'center',color:'var(--accent)',fontWeight:600,fontSize:'0.875rem'}}>Use full EMI calculator →</a>
        </div>
      </div>
    </main>
  );
}
