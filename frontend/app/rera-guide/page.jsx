export const metadata = { title: 'RERA & Registry Guide for Sellers — EstateHub India' };

export default function ReraGuidePage() {
  return (
    <main className="section" style={{maxWidth:'860px'}}>
      <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Legal Guide</span>
      <h1 className="section__title" style={{marginTop:'0.5rem',display:'block'}}>RERA & Property Registration Guide</h1>
      <p style={{color:'#9d8fc0',marginBottom:'2.5rem',lineHeight:1.7}}>Understanding RERA and property registration is essential for every property seller in India. This guide covers everything you need to know to sell legally and safely.</p>

      {[
        { title: '🏛️ What is RERA?', content: `The Real Estate (Regulation and Development) Act, 2016 (RERA) was enacted to protect home buyers and bring accountability to the real estate sector.

Key provisions for sellers:
• All residential projects with plot area > 500 sq m or > 8 units must be RERA registered
• Developers must deposit 70% of project funds in a dedicated escrow account
• Sellers cannot advertise or sell without RERA registration number
• Buyers can file complaints against developers for delays or defects
• Penalty for non-compliance: up to 10% of project cost or 3 years imprisonment` },
        { title: '📋 How to Register Under RERA', content: `Step-by-step RERA registration process:

1. Visit your state's RERA portal (e.g., maharera.mahaonline.gov.in for Maharashtra)
2. Create an account as a Promoter/Developer or Agent
3. Submit project details: land documents, approvals, layout plans, financial statements
4. Pay registration fee (varies by state, typically ₹5,000–₹10 lakh based on project size)
5. Receive RERA registration number within 30 days
6. Display RERA number on all advertisements and sale agreements` },
        { title: '📜 Property Registration Process', content: `Property registration is mandatory under the Registration Act, 1908. Steps:

1. Prepare Sale Deed: Draft with all property details, buyer/seller info, consideration amount
2. Calculate Stamp Duty: Varies by state (typically 4–8% of property value)
3. Pay Stamp Duty: Online through state government portal or franking
4. Book appointment at Sub-Registrar's office
5. Both parties appear with original documents and witnesses
6. Biometric verification and photo capture
7. Receive registered sale deed (usually within 1–7 days)` },
        { title: '💰 Stamp Duty Rates by State (2024)', content: `State-wise stamp duty rates:
• Maharashtra: 5% (men), 4% (women), + 1% metro cess in Mumbai
• Karnataka: 5% (above ₹45L), 3% (₹21L–₹45L), 2% (below ₹21L)
• Delhi: 6% (men), 4% (women)
• Uttar Pradesh: 7% (men), 6% (women)
• Telangana: 4% + 0.5% transfer duty
• Tamil Nadu: 7% + 4% registration fee
• Gujarat: 4.9% (men), 3.9% (women)
• Haryana: 7% (men), 5% (women)

Registration charges: 1% of property value (most states)` },
        { title: '🧾 Documents Required for Registration', content: `Mandatory documents for property registration:
• Original title deed / previous sale deed
• Encumbrance certificate (EC) for last 15–30 years
• Property tax receipts (latest)
• Approved building plan
• Occupancy certificate (for new construction)
• RERA registration certificate
• Identity proof (Aadhaar, PAN) of buyer and seller
• Passport-size photographs
• NOC from society/builder (if applicable)
• Power of Attorney (if selling through representative)` },
        { title: '💸 Capital Gains Tax on Property Sale', content: `Tax implications for property sellers:

Short-Term Capital Gains (STCG):
• Property held for less than 24 months
• Taxed at your income tax slab rate

Long-Term Capital Gains (LTCG):
• Property held for 24 months or more
• Taxed at 20% with indexation benefit (as per Budget 2024)
• Exemption under Section 54: Reinvest in another residential property within 2 years
• Exemption under Section 54EC: Invest in NHAI/REC bonds within 6 months (up to ₹50 lakh)

TDS on Property Sale:
• Buyer must deduct 1% TDS if property value > ₹50 lakh
• File Form 26QB and issue Form 16B to seller` },
      ].map(s => (
        <div key={s.title} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.75rem',marginBottom:'1.25rem'}}>
          <h2 style={{color:'#f1f0f5',fontWeight:700,fontSize:'1.05rem',marginBottom:'0.875rem'}}>{s.title}</h2>
          <p style={{color:'#9d8fc0',fontSize:'0.875rem',lineHeight:1.8,whiteSpace:'pre-line'}}>{s.content}</p>
        </div>
      ))}
    </main>
  );
}
