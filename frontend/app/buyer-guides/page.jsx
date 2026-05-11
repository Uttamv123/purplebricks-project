import Link from 'next/link';

export const metadata = { title: 'Buyer Property Guides — 1HouseToHome India' };

const guides = [
  { icon: '🏠', title: 'First-Time Buyer\'s Complete Guide', desc: 'Everything you need to know about buying your first home in India — from budgeting to registration.', topics: ['How much can you afford?','Understanding home loans','RERA verification','Site visit checklist','Negotiation tips'] },
  { icon: '📊', title: 'Understanding Property Prices in India', desc: 'How property prices are determined, what affects them, and how to identify a fair deal.', topics: ['Circle rate vs market rate','How to read price trends','Negotiation room in different cities','When to buy — market timing','Price per sq ft benchmarks'] },
  { icon: '🏗️', title: 'Under-Construction vs Ready-to-Move', desc: 'Pros and cons of buying under-construction property vs ready-to-move homes in India.', topics: ['GST implications','RERA protection for under-construction','Possession delay risks','Price difference analysis','Builder reputation check'] },
  { icon: '🏦', title: 'Home Loan Guide for Indian Buyers', desc: 'Complete guide to getting a home loan in India — eligibility, documents, and best rates.', topics: ['Eligibility criteria','Documents required','Fixed vs floating rate','Pre-EMI vs full EMI','Balance transfer benefits'] },
  { icon: '📜', title: 'Property Registration Step-by-Step', desc: 'How to register your property in India — stamp duty, documents, and Sub-Registrar process.', topics: ['Stamp duty calculation','Documents needed','Sub-Registrar appointment','Mutation process','Timeline and costs'] },
  { icon: '💰', title: 'Tax Benefits on Home Purchase', desc: 'All tax deductions available to home buyers under Indian Income Tax Act.', topics: ['Section 80C — principal repayment','Section 24(b) — interest deduction','Section 80EEA — first-time buyers','HRA + home loan benefits','Joint ownership tax benefits'] },
];

export default function BuyerGuidesPage() {
  return (
    <main className="section" style={{maxWidth:'960px'}}>
      <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Knowledge Centre</span>
      <h1 className="section__title" style={{marginTop:'0.5rem',display:'block'}}>Buyer Property Guides</h1>
      <p style={{color:'#9d8fc0',marginBottom:'2.5rem',lineHeight:1.7}}>Expert guides to help you make informed property decisions in India. From first-time buyers to seasoned investors.</p>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1.5rem'}}>
        {guides.map(g => (
          <div key={g.title} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.5rem',display:'flex',flexDirection:'column'}}>
            <div style={{fontSize:'2rem',marginBottom:'0.75rem'}}>{g.icon}</div>
            <h2 style={{color:'#f1f0f5',fontWeight:700,fontSize:'1rem',marginBottom:'0.5rem'}}>{g.title}</h2>
            <p style={{color:'#9d8fc0',fontSize:'0.82rem',lineHeight:1.6,marginBottom:'1rem',flex:1}}>{g.desc}</p>
            <div style={{borderTop:'1px solid #2d1f4a',paddingTop:'0.875rem'}}>
              <div style={{color:'var(--accent)',fontSize:'0.75rem',fontWeight:600,marginBottom:'0.5rem'}}>TOPICS COVERED</div>
              {g.topics.map(t => (
                <div key={t} style={{color:'#c4b5fd',fontSize:'0.78rem',padding:'0.2rem 0',display:'flex',gap:'0.4rem'}}>
                  <span style={{color:'var(--accent)'}}>→</span>{t}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{background:'linear-gradient(135deg,#2d0f5e,#1a0533)',border:'1px solid rgba(124,58,237,0.3)',borderRadius:'0.75rem',padding:'2rem',marginTop:'2.5rem',textAlign:'center'}}>
        <h2 style={{color:'#f1f0f5',fontWeight:800,marginBottom:'0.75rem'}}>Ready to start your property search?</h2>
        <p style={{color:'#9d8fc0',marginBottom:'1.5rem'}}>Browse verified properties across 100+ Indian cities.</p>
        <Link href="/listings" style={{background:'var(--accent)',color:'#fff',fontWeight:700,padding:'0.875rem 2rem',borderRadius:'0.5rem',display:'inline-block'}}>🔍 Search Properties →</Link>
      </div>
    </main>
  );
}
