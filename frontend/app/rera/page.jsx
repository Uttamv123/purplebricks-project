export const metadata = { title: 'RERA Registration — EstateHub India' };

const stateRera = [
  { state: 'Maharashtra', authority: 'MahaRERA', website: 'maharera.mahaonline.gov.in', regNo: 'A51800000001' },
  { state: 'Karnataka', authority: 'K-RERA', website: 'rera.karnataka.gov.in', regNo: 'PRM/KA/RERA/1251/446/AG/180517/000001' },
  { state: 'Delhi', authority: 'Delhi RERA', website: 'rera.delhi.gov.in', regNo: 'DLRERA2024AG0001' },
  { state: 'Uttar Pradesh', authority: 'UP RERA', website: 'up-rera.in', regNo: 'UPRERAAGT10001' },
  { state: 'Telangana', authority: 'TSRERA', website: 'rera.telangana.gov.in', regNo: 'A02500001437' },
  { state: 'Tamil Nadu', authority: 'TNRERA', website: 'tnrera.in', regNo: 'TN/01/Building/0001/2024' },
  { state: 'Gujarat', authority: 'GUJRERA', website: 'gujrera.gujarat.gov.in', regNo: 'AG/GJ/AHMEDABAD/AHMEDABAD CITY/AA01234' },
  { state: 'Haryana', authority: 'HRERA', website: 'hrera.org.in', regNo: 'HRERA-PKL-REA-1234-2024' },
];

export default function ReraPage() {
  return (
    <main className="section" style={{maxWidth:'900px'}}>
      <div style={{marginBottom:'2.5rem'}}>
        <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Compliance</span>
        <h1 className="section__title" style={{marginTop:'0.5rem',display:'block'}}>RERA Registration</h1>
        <p style={{color:'#9d8fc0',lineHeight:1.7}}>EstateHub India Pvt. Ltd. is registered as a Real Estate Agent under the Real Estate (Regulation and Development) Act, 2016 (RERA) in multiple states across India.</p>
      </div>

      <div style={{background:'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(245,158,11,0.1))',border:'1px solid rgba(124,58,237,0.3)',borderRadius:'0.75rem',padding:'1.75rem',marginBottom:'2rem'}}>
        <h2 style={{color:'#f1f0f5',fontWeight:800,marginBottom:'0.75rem'}}>🏛️ What is RERA?</h2>
        <p style={{color:'#9d8fc0',fontSize:'0.9rem',lineHeight:1.8}}>The Real Estate (Regulation and Development) Act, 2016 was enacted to protect home buyers and boost investment in the real estate sector. RERA mandates that all real estate projects and agents register with the respective state authority before advertising or selling properties. This ensures transparency, accountability, and timely delivery of projects.</p>
      </div>

      <h2 style={{color:'#f1f0f5',fontWeight:800,marginBottom:'1.25rem'}}>📋 Our State-wise RERA Registrations</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(380px,1fr))',gap:'1rem',marginBottom:'2.5rem'}}>
        {stateRera.map(r => (
          <div key={r.state} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.25rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'0.5rem'}}>
              <h3 style={{color:'#f1f0f5',fontWeight:700}}>{r.state}</h3>
              <span style={{background:'rgba(16,185,129,0.15)',color:'#10b981',fontSize:'0.72rem',fontWeight:700,padding:'0.2rem 0.6rem',borderRadius:'999px',border:'1px solid rgba(16,185,129,0.3)'}}>✓ Registered</span>
            </div>
            <p style={{color:'#9d8fc0',fontSize:'0.82rem',marginBottom:'0.25rem'}}>Authority: <span style={{color:'#c4b5fd'}}>{r.authority}</span></p>
            <p style={{color:'#9d8fc0',fontSize:'0.82rem',marginBottom:'0.25rem'}}>Reg. No: <span style={{color:'var(--accent)',fontFamily:'monospace'}}>{r.regNo}</span></p>
            <p style={{color:'#9d8fc0',fontSize:'0.82rem'}}>Website: <a href={`https://${r.website}`} target="_blank" rel="noreferrer" style={{color:'#c4b5fd'}}>{r.website}</a></p>
          </div>
        ))}
      </div>

      <div style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.75rem',marginBottom:'1.5rem'}}>
        <h2 style={{color:'#f1f0f5',fontWeight:700,marginBottom:'1rem'}}>✅ Our RERA Commitments</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem'}}>
          {['All listed projects display RERA registration numbers','Agents are verified before listing properties','Project details match RERA portal disclosures','Buyers can verify projects on state RERA portals','We report non-compliant listings to authorities','Regular audits of listed properties for compliance'].map(c => (
            <div key={c} style={{display:'flex',gap:'0.5rem',color:'#e2d9f3',fontSize:'0.875rem'}}>
              <span style={{color:'var(--accent)',flexShrink:0}}>✓</span>{c}
            </div>
          ))}
        </div>
      </div>

      <div style={{background:'rgba(245,158,11,0.08)',border:'1px solid rgba(245,158,11,0.25)',borderRadius:'0.75rem',padding:'1.5rem'}}>
        <h3 style={{color:'#fde68a',fontWeight:700,marginBottom:'0.5rem'}}>⚠️ Important Disclaimer</h3>
        <p style={{color:'#9d8fc0',fontSize:'0.875rem',lineHeight:1.7}}>EstateHub displays RERA registration numbers as provided by developers and agents. Buyers are advised to independently verify project registrations on the respective state RERA portal before making any payment or booking. EstateHub is not liable for any discrepancies in RERA registration details provided by third-party listers.</p>
      </div>
    </main>
  );
}
