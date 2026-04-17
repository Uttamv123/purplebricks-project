export const metadata = { title: 'Legal Checklist for Property Buyers — EstateHub India' };

const checklist = [
  { phase: 'Before Booking', color: '#f59e0b', items: [
    { item: 'Verify RERA registration', detail: 'Check on state RERA portal. Ensure project is registered and not lapsed.' },
    { item: 'Check title deed', detail: 'Verify seller has clear, marketable title. No disputes or encumbrances.' },
    { item: 'Encumbrance certificate', detail: 'Obtain EC for last 30 years from Sub-Registrar office to check for mortgages or liens.' },
    { item: 'Verify approved building plan', detail: 'Ensure construction matches approved plan from local municipal authority.' },
    { item: 'Check land use / zoning', detail: 'Verify land is approved for residential use. Check for any CRZ, forest, or agricultural restrictions.' },
    { item: 'Verify seller identity', detail: 'Check Aadhaar, PAN, and ownership documents. Ensure seller is the legal owner.' },
  ]},
  { phase: 'During Purchase', color: '#7c3aed', items: [
    { item: 'Sale agreement review', detail: 'Get sale agreement reviewed by a lawyer. Check possession date, penalty clauses, and payment schedule.' },
    { item: 'Token amount receipt', detail: 'Get a proper receipt for any token/booking amount paid. Ensure it is refundable if deal falls through.' },
    { item: 'Home loan sanction', detail: 'Get home loan sanctioned before signing sale agreement. Check interest rate, tenure, and EMI.' },
    { item: 'NOC from society/builder', detail: 'Obtain No Objection Certificate from housing society or builder for resale properties.' },
    { item: 'Property tax clearance', detail: 'Ensure all property taxes are paid up to date by the seller.' },
    { item: 'Utility bill clearance', detail: 'Verify electricity, water, and maintenance dues are cleared by seller.' },
  ]},
  { phase: 'Registration & Possession', color: '#10b981', items: [
    { item: 'Stamp duty payment', detail: 'Pay correct stamp duty as per state rates. Underpayment can lead to penalties.' },
    { item: 'Property registration', detail: 'Register sale deed at Sub-Registrar office within 4 months of execution.' },
    { item: 'Occupancy certificate', detail: 'For new construction, ensure builder has obtained OC from municipal authority.' },
    { item: 'Completion certificate', detail: 'Verify completion certificate for the building from local authority.' },
    { item: 'Mutation of property', detail: 'Apply for mutation (khata transfer) in municipal records after registration.' },
    { item: 'Change of name in utility bills', detail: 'Transfer electricity, water, and gas connections to your name after possession.' },
  ]},
];

export default function LegalChecklistPage() {
  return (
    <main className="section" style={{maxWidth:'860px'}}>
      <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Buyer Protection</span>
      <h1 className="section__title" style={{marginTop:'0.5rem',display:'block'}}>Legal Checklist for Property Buyers</h1>
      <p style={{color:'#9d8fc0',marginBottom:'2.5rem',lineHeight:1.7}}>Buying property in India is a significant investment. Use this comprehensive checklist to protect yourself from fraud, legal disputes, and financial loss.</p>

      {checklist.map(phase => (
        <div key={phase.phase} style={{marginBottom:'2rem'}}>
          <h2 style={{color:phase.color,fontWeight:800,fontSize:'1rem',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'1rem',display:'flex',alignItems:'center',gap:'0.5rem'}}>
            <span style={{width:'8px',height:'8px',borderRadius:'50%',background:phase.color,display:'inline-block'}} />
            {phase.phase}
          </h2>
          <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
            {phase.items.map(i => (
              <div key={i.item} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.5rem',padding:'1rem 1.25rem',display:'flex',gap:'0.875rem',alignItems:'flex-start'}}>
                <span style={{color:phase.color,fontWeight:800,fontSize:'1rem',flexShrink:0,marginTop:'1px'}}>☐</span>
                <div>
                  <div style={{color:'#f1f0f5',fontWeight:600,fontSize:'0.9rem',marginBottom:'0.2rem'}}>{i.item}</div>
                  <div style={{color:'#9d8fc0',fontSize:'0.8rem'}}>{i.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{background:'rgba(239,68,68,0.08)',border:'1px solid rgba(239,68,68,0.25)',borderRadius:'0.75rem',padding:'1.5rem'}}>
        <h3 style={{color:'#fca5a5',fontWeight:700,marginBottom:'0.5rem'}}>⚠️ Red Flags — Walk Away If You See These</h3>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.5rem'}}>
          {['Seller refuses to show original documents','Property has multiple owners without all consenting','Unusually low price compared to market rate','Seller pressures for quick cash payment','No RERA registration for new project','Encumbrance certificate shows existing mortgage','Building plan not approved by local authority','Seller is not the registered owner'].map(r => (
            <div key={r} style={{color:'#fca5a5',fontSize:'0.82rem',display:'flex',gap:'0.4rem'}}>
              <span>🚩</span>{r}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
