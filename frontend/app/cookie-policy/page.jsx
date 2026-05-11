export const metadata = { title: 'Cookie Policy — 1HouseToHome India' };

const sections = [
  { title: '1. What Are Cookies?', body: 'Cookies are small text files placed on your device when you visit our website. They help us remember your preferences, understand how you use our platform, and improve your experience. Cookies cannot harm your device or access other files on it.' },
  { title: '2. Types of Cookies We Use', body: `Essential Cookies: Required for the website to function. These include session cookies for login, security tokens, and CSRF protection. You cannot opt out of these.

Performance Cookies: Help us understand how visitors interact with our website using tools like Google Analytics. Data is anonymised and aggregated.

Functional Cookies: Remember your preferences such as city, property type filters, saved searches, and language settings.

Targeting / Advertising Cookies: Used to show you relevant property ads on Google, Facebook, and partner networks based on your browsing behaviour.

Third-Party Cookies: Set by our partners including Google Maps (for property location), YouTube (for property videos), and payment gateways.` },
  { title: '3. Cookie Duration', body: 'Session cookies are deleted when you close your browser. Persistent cookies remain for a set period — typically 30 days for preference cookies and up to 2 years for analytics cookies. You can delete cookies at any time through your browser settings.' },
  { title: '4. Managing Cookies', body: `You can control and manage cookies in several ways:

• Browser settings: Most browsers allow you to block or delete cookies. Visit your browser\'s help section for instructions.
• Our cookie banner: When you first visit our site, you can accept or reject non-essential cookies.
• Google Analytics opt-out: Install the Google Analytics Opt-out Browser Add-on.
• Advertising opt-out: Visit the Digital Advertising Alliance opt-out page.

Note: Disabling cookies may affect the functionality of our website, including saved searches and personalised recommendations.` },
  { title: '5. Compliance', body: 'Our cookie practices comply with the Information Technology Act, 2000 and the DPDPA 2023. We obtain your consent before placing non-essential cookies on your device.' },
  { title: '6. Contact Us', body: 'For questions about our cookie practices, contact us at: privacy@1HouseToHome.in' },
];

export default function CookiePolicyPage() {
  return (
    <main className="section" style={{maxWidth:'860px'}}>
      <div style={{marginBottom:'2.5rem'}}>
        <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Legal</span>
        <h1 className="section__title" style={{marginTop:'0.5rem',display:'block'}}>Cookie Policy</h1>
        <p style={{color:'#9d8fc0'}}>Last updated: 1 April 2026</p>
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
