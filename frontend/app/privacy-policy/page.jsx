export const metadata = { title: 'Privacy Policy — 1HouseToHome India' };

export default function PrivacyPolicyPage() {
  return (
    <main className="section" style={{maxWidth:'860px'}}>
      <div style={{marginBottom:'2.5rem'}}>
        <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Legal</span>
        <h1 className="section__title" style={{marginTop:'0.5rem',display:'block'}}>Privacy Policy</h1>
        <p style={{color:'#9d8fc0'}}>Last updated: 1 April 2026 &nbsp;|&nbsp; Effective date: 1 April 2026</p>
      </div>

      {[
        {
          title: '1. Introduction',
          body: `1HouseToHome India Pvt. Ltd. ("1HouseToHome", "we", "us", or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.1HouseToHome.in or use our mobile application.

We comply with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules"), and the Digital Personal Data Protection Act, 2023 ("DPDPA").`
        },
        {
          title: '2. Information We Collect',
          body: `We collect the following categories of personal data:

• Identity Data: Full name, date of birth, PAN card number, Aadhaar number (only where required for KYC)
• Contact Data: Email address, mobile number, postal address
• Property Data: Property preferences, search history, saved listings, enquiry details
• Financial Data: Home loan application details, income information (not stored permanently)
• Technical Data: IP address, browser type, device identifiers, cookies, usage data
• Communication Data: Messages sent through our platform, call recordings (with consent)

We do not collect sensitive personal data beyond what is necessary for the services provided.`
        },
        {
          title: '3. How We Use Your Information',
          body: `We use your personal data for the following purposes:

• To create and manage your account
• To connect you with property sellers, agents, and developers
• To process home loan enquiries and connect you with partner banks
• To send property alerts, newsletters, and promotional communications (with your consent)
• To comply with legal obligations under RERA, Income Tax Act, and FEMA (for NRI transactions)
• To prevent fraud and ensure platform security
• To improve our services through analytics

We process your data on the legal bases of: (a) your consent, (b) performance of a contract, (c) compliance with legal obligations, and (d) legitimate interests.`
        },
        {
          title: '4. Sharing of Information',
          body: `We may share your information with:

• Property sellers, agents, and developers when you make an enquiry
• Partner banks and NBFCs (SBI, HDFC, ICICI, Axis, Kotak) for home loan processing
• Legal and documentation service providers
• Government authorities when required by law (RERA, Income Tax Department, ED)
• Analytics and advertising partners (in anonymised form)
• Our subsidiaries and group companies

We do not sell your personal data to third parties.`
        },
        {
          title: '5. Data Retention',
          body: `We retain your personal data for as long as your account is active or as needed to provide services. After account deletion, we retain data for 7 years as required under Indian tax and financial regulations. Enquiry data is retained for 3 years. You may request deletion of your data subject to legal retention requirements.`
        },
        {
          title: '6. Your Rights Under DPDPA 2023',
          body: `Under the Digital Personal Data Protection Act, 2023, you have the right to:

• Access your personal data held by us
• Correct inaccurate or incomplete personal data
• Erasure of personal data (right to be forgotten), subject to legal obligations
• Grievance redressal through our Data Protection Officer
• Nominate a person to exercise rights on your behalf

To exercise these rights, contact our Data Protection Officer at: dpo@1HouseToHome.in`
        },
        {
          title: '7. Cookies',
          body: `We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. Disabling cookies may affect some features of our platform. See our Cookie Policy for full details.`
        },
        {
          title: '8. Security',
          body: `We implement industry-standard security measures including SSL/TLS encryption, two-factor authentication, and regular security audits. We comply with the SPDI Rules, 2011 regarding reasonable security practices. However, no method of transmission over the internet is 100% secure.`
        },
        {
          title: '9. Grievance Officer',
          body: `In accordance with the Information Technology Act, 2000 and DPDPA 2023, the name and contact details of the Grievance Officer are:

Name: Rajesh Kumar
Designation: Data Protection Officer
Email: grievance@1HouseToHome.in
Phone: +91-80-4567-8900
Address: 1HouseToHome India Pvt. Ltd., 4th Floor, Prestige Tech Park, Outer Ring Road, Bengaluru – 560103

We will respond to your grievance within 30 days of receipt.`
        },
        {
          title: '10. Changes to This Policy',
          body: `We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice on our website. Continued use of our services after changes constitutes acceptance of the updated policy.`
        },
      ].map(s => (
        <div key={s.title} style={{marginBottom:'2rem',background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.75rem'}}>
          <h2 style={{color:'#f1f0f5',fontWeight:700,fontSize:'1.1rem',marginBottom:'0.875rem'}}>{s.title}</h2>
          <p style={{color:'#9d8fc0',fontSize:'0.9rem',lineHeight:1.8,whiteSpace:'pre-line'}}>{s.body}</p>
        </div>
      ))}
    </main>
  );
}
