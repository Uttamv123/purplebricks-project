import Link from 'next/link';

export const metadata = { title: 'Sitemap — 1HouseToHome India' };

const sitemapSections = [
  {
    heading: 'Buy Property',
    links: [
      { label: 'Search Properties for Sale', href: '/listings' },
      { label: 'New Launch Projects', href: '/listings?propertyType=apartment' },
      { label: 'Ready-to-Move Homes', href: '/listings' },
      { label: 'Apartments for Sale', href: '/listings?propertyType=apartment' },
      { label: 'Villas for Sale', href: '/listings?propertyType=villa' },
      { label: 'Independent Houses', href: '/listings?propertyType=house' },
    ],
  },
  {
    heading: 'Sell Property',
    links: [
      { label: 'Post Free Listing', href: '/add-property' },
      { label: 'How Selling Works', href: '/sell' },
      { label: 'Free Property Valuation', href: '/sell' },
      { label: 'Find Local Agents', href: '/sell' },
      { label: 'Seller Guides', href: '/sell' },
    ],
  },
  {
    heading: 'Home Loans',
    links: [
      { label: 'Compare Home Loans', href: '/home-loans' },
      { label: 'EMI Calculator', href: '/home-loans' },
      { label: 'Loan Eligibility Checker', href: '/home-loans' },
      { label: 'SBI Home Loans', href: '/home-loans' },
      { label: 'HDFC Bank Loans', href: '/home-loans' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Interior Design', href: '/services' },
      { label: 'Packers & Movers', href: '/services' },
      { label: 'Legal Services', href: '/services' },
      { label: 'Property Verification', href: '/services' },
      { label: 'Property Management', href: '/services' },
    ],
  },
  {
    heading: 'Browse by City',
    links: [
      { label: 'Properties in Mumbai', href: '/listings?location=Mumbai' },
      { label: 'Properties in Delhi', href: '/listings?location=Delhi' },
      { label: 'Properties in Bengaluru', href: '/listings?location=Bengaluru' },
      { label: 'Properties in Hyderabad', href: '/listings?location=Hyderabad' },
      { label: 'Properties in Pune', href: '/listings?location=Pune' },
      { label: 'Properties in Chennai', href: '/listings?location=Chennai' },
      { label: 'Properties in Noida', href: '/listings?location=Noida' },
      { label: 'Properties in Gurugram', href: '/listings?location=Gurugram' },
    ],
  },
  {
    heading: 'Legal & Company',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'RERA Registration', href: '/rera' },
      { label: 'Careers', href: '/careers' },
      { label: 'FAQs', href: '/faq' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="section" style={{maxWidth:'1000px'}}>
      <div style={{marginBottom:'2.5rem'}}>
        <span style={{color:'var(--accent)',fontWeight:700,fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em'}}>Navigation</span>
        <h1 className="section__title" style={{marginTop:'0.5rem',display:'block'}}>Sitemap</h1>
        <p style={{color:'#9d8fc0'}}>A complete overview of all pages on 1HouseToHome India.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1.5rem'}}>
        {sitemapSections.map(s => (
          <div key={s.heading} style={{background:'#1c1030',border:'1px solid #2d1f4a',borderRadius:'0.75rem',padding:'1.5rem'}}>
            <h2 style={{color:'var(--accent)',fontWeight:700,fontSize:'0.9rem',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'1rem'}}>{s.heading}</h2>
            <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
              {s.links.map(l => (
                <Link key={l.label} href={l.href} style={{color:'#c4b5fd',fontSize:'0.875rem'}}>
                  → {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
