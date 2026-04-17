export const metadata = { title: 'Terms & Conditions — EstateHub India' };

const sections = [
  { title: '1. Acceptance of Terms', body: 'By accessing or using EstateHub India ("Platform"), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our Platform. These terms constitute a legally binding agreement between you and EstateHub India Pvt. Ltd., governed by the laws of India.' },
  { title: '2. Eligibility', body: 'You must be at least 18 years of age and legally competent to enter into contracts under the Indian Contract Act, 1872 to use our Platform. By using our services, you represent that you meet these requirements.' },
  { title: '3. Platform Services', body: `EstateHub provides an online marketplace for:
• Buying, selling, and renting residential and commercial properties
• Connecting buyers with RERA-registered developers and verified agents
• Home loan assistance through partner banks and NBFCs
• Property valuation and legal documentation services

EstateHub is a facilitator and is not a party to any transaction between buyers and sellers. We do not own, manage, or control any listed properties.` },
  { title: '4. User Obligations', body: `You agree to:
• Provide accurate, complete, and current information
• Not post false, misleading, or fraudulent property listings
• Not use the Platform for any unlawful purpose
• Not violate any applicable law including RERA, FEMA, PMLA, or IT Act
• Not infringe on intellectual property rights of EstateHub or third parties
• Not attempt to hack, scrape, or reverse-engineer the Platform` },
  { title: '5. RERA Compliance', body: 'All property listings on EstateHub must comply with the Real Estate (Regulation and Development) Act, 2016 (RERA). Developers and agents are responsible for ensuring their listings are RERA registered. EstateHub displays RERA registration numbers as provided by listers but does not independently verify all listings.' },
  { title: '6. Fees and Payments', body: 'Basic property listing is free. Premium listing packages, featured placements, and lead generation services are charged as per our current pricing. All prices are inclusive of applicable GST. Payments are non-refundable unless otherwise stated. We accept UPI, net banking, credit/debit cards, and EMI options.' },
  { title: '7. Intellectual Property', body: 'All content on the Platform including text, graphics, logos, images, and software is the property of EstateHub India Pvt. Ltd. and is protected under the Copyright Act, 1957. You may not reproduce, distribute, or create derivative works without our written permission.' },
  { title: '8. Disclaimer of Warranties', body: 'The Platform is provided "as is" without warranties of any kind. EstateHub does not guarantee the accuracy of property listings, prices, or availability. We are not responsible for any loss arising from reliance on information on the Platform.' },
  { title: '9. Limitation of Liability', body: 'To the maximum extent permitted by Indian law, EstateHub shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Platform. Our total liability shall not exceed the fees paid by you in the 3 months preceding the claim.' },
  { title: '10. Governing Law & Dispute Resolution', body: 'These Terms are governed by the laws of India. Any disputes shall first be attempted to be resolved through mediation. If unresolved, disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka, India.' },
  { title: '11. Contact', body: 'For legal queries: legal@estatehub.in\nEstateHub India Pvt. Ltd., 4th Floor, Prestige Tech Park, Outer Ring Road, Bengaluru – 560103' },
];

export default function TermsPage() {
  return (
    <main className="section" style={{maxWidth:'860px'}}>
      <div style={{marginBottom:'2.5rem'}}>
        <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Legal</span>
        <h1 className="section__title" style={{marginTop:'0.5rem',display:'block'}}>Terms & Conditions</h1>
        <p style={{color:'#9d8fc0'}}>Last updated: 1 April 2026 &nbsp;|&nbsp; Governed by laws of India</p>
      </div>
      {sections.map(s => (
        <div key={s.title} style={{marginBottom:'1.5rem',background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.75rem'}}>
          <h2 style={{color:'#f1f0f5',fontWeight:700,fontSize:'1.1rem',marginBottom:'0.875rem'}}>{s.title}</h2>
          <p style={{color:'#9d8fc0',fontSize:'0.9rem',lineHeight:1.8,whiteSpace:'pre-line'}}>{s.body}</p>
        </div>
      ))}
    </main>
  );
}
