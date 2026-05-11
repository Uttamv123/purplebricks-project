import './globals.css';
import NavDropdown from '../components/NavDropdown';
import { ClerkProvider, SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

export const metadata = {
  title: '1HouseToHome India — Buy & Sell Property',
  description: "India's trusted property platform — buy, sell and invest across 100+ cities.",
};

const NAV_MENUS = [
  {
    label: 'Buy',
    sections: [
      {
        heading: 'Search & Discover',
        icon: '🔍',
        links: [
          { icon: '🏙️', label: 'Search properties by city', sub: 'Mumbai, Delhi, Bengaluru & more', href: '/listings' },
          { icon: '🏗️', label: 'New launch projects', sub: 'RERA registered, under construction', href: '/listings?propertyType=apartment', tag: 'New' },
          { icon: '🏠', label: 'Ready-to-move homes', sub: 'Move in immediately', href: '/listings' },
          { icon: '📅', label: 'Book site visit instantly', href: '/buy' },
        ],
      },
      {
        heading: 'Plan Your Budget',
        icon: '💰',
        links: [
          { icon: '🧮', label: 'Budget calculator (₹)', sub: 'Find homes in your range', href: '/buy' },
          { icon: '📊', label: 'EMI calculator', sub: 'Plan your monthly payments', href: '/home-loans' },
          { icon: '📈', label: 'Property price trends', sub: 'City-wise market data', href: '/buy' },
          { icon: '🏦', label: 'Home loan assistance', sub: 'Compare 50+ banks', href: '/home-loans' },
        ],
      },
      {
        heading: 'Buyer Guidance',
        icon: '📋',
        links: [
          { icon: '✅', label: 'Legal checklist for buyers', sub: 'Title, RERA, encumbrance', href: '/legal-checklist' },
          { icon: '📖', label: 'Buyer property guides', href: '/buyer-guides' },
          { icon: '⚖️', label: 'Documentation help', sub: 'Sale deed, registration', href: '/rera-guide' },
          { icon: '⭐', label: 'Read buyer reviews', href: '/buy' },
        ],
      },
    ],
  },
  {
    label: 'Sell',
    sections: [
      {
        heading: 'Start Selling',
        icon: '🚀',
        links: [
          { icon: '❓', label: 'How selling works in India', sub: 'Step-by-step guide', href: '/how-selling-works' },
          { icon: '💸', label: 'Pricing plans', sub: 'Zero brokerage options', href: '/pricing-plans' },
          { icon: '📋', label: 'Post your property', sub: 'Free listing in 5 minutes', href: '/add-property', tag: 'Free' },
          { icon: '👥', label: 'Find local agents', sub: 'Verified agents near you', href: '/sell' },
        ],
      },
      {
        heading: 'Sell Smarter',
        icon: '📊',
        links: [
          { icon: '🏷️', label: 'Property valuation tools', sub: 'Get accurate market price', href: '/property-valuation' },
          { icon: '📍', label: 'Nearby agent finder', href: '/sell' },
          { icon: '📈', label: 'Market price trends', sub: 'Mumbai, Delhi, Bengaluru', href: '/sell' },
          { icon: '🎥', label: 'Virtual property tour', sub: '3D walkthrough service', href: '/sell' },
        ],
      },
      {
        heading: 'Legal & Support',
        icon: '⚖️',
        links: [
          { icon: '📜', label: 'RERA & registry guide', sub: 'Stay legally compliant', href: '/rera-guide' },
          { icon: '🔍', label: 'Home inspection services', href: '/services' },
          { icon: '📣', label: 'Where we advertise', sub: 'MagicBricks, 99acres & more', href: '/sell' },
          { icon: '⭐', label: 'Seller reviews', href: '/sell' },
        ],
      },
    ],
  },
  {
    label: 'Home Loans',
    sections: [
      {
        heading: 'Find a Loan',
        icon: '🏦',
        links: [
          { icon: '⚖️', label: 'Compare loan offers', sub: '50+ banks & NBFCs', href: '/home-loans' },
          { icon: '🧮', label: 'EMI calculator', sub: 'Plan your repayments', href: '/home-loans' },
          { icon: '✅', label: 'Eligibility checker', sub: 'Know your loan amount', href: '/home-loans' },
          { icon: '🔄', label: 'Balance transfer', sub: 'Switch to lower rates', href: '/home-loans' },
        ],
      },
      {
        heading: 'Partner Banks',
        icon: '🏛️',
        links: [
          { icon: '🏦', label: 'SBI Home Loans', sub: 'From 8.5% p.a.', href: '/home-loans' },
          { icon: '🏦', label: 'HDFC Bank', sub: 'From 8.75% p.a.', href: '/home-loans' },
          { icon: '🏦', label: 'ICICI Bank', sub: 'From 8.75% p.a.', href: '/home-loans' },
          { icon: '🏦', label: 'Axis & Kotak Bank', href: '/home-loans' },
          { icon: '🏦', label: 'LIC Housing Finance', href: '/home-loans' },
        ],
      },
      {
        heading: 'Loan Guidance',
        icon: '📋',
        links: [
          { icon: '📄', label: 'Documents required', sub: 'Checklist for salaried & self-employed', href: '/home-loans' },
          { icon: '📊', label: 'Interest rate trends', sub: 'RBI repo rate impact', href: '/home-loans' },
          { icon: '📖', label: 'Home loan guide', href: '/home-loans' },
          { icon: '💬', label: 'Speak to a loan expert', href: '/home-loans' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    sections: [
      {
        heading: 'Home Services',
        icon: '🏠',
        links: [
          { icon: '🎨', label: 'Interior design', sub: 'Modular kitchens, full home', href: '/services' },
          { icon: '🚛', label: 'Packers & movers', sub: 'Verified, insured movers', href: '/services' },
          { icon: '🔧', label: 'Home maintenance', sub: 'Plumbing, electrical, AC', href: '/services' },
          { icon: '🧹', label: 'Deep cleaning services', href: '/services' },
        ],
      },
      {
        heading: 'Legal & Verification',
        icon: '⚖️',
        links: [
          { icon: '📜', label: 'Legal services', sub: 'Sale deed, title search', href: '/services' },
          { icon: '🔍', label: 'Property verification', sub: 'Encumbrance & RERA check', href: '/services' },
          { icon: '📋', label: 'Property registration', sub: 'End-to-end assistance', href: '/services' },
          { icon: '🏛️', label: 'Stamp duty calculator', href: '/services' },
        ],
      },
      {
        heading: 'Property Management',
        icon: '🔑',
        links: [
          { icon: '🏢', label: 'Property management', sub: 'For NRIs & landlords', href: '/services' },
          { icon: '📸', label: 'Professional photography', sub: 'Boost your listing', href: '/services' },
          { icon: '⚡', label: '1HouseToHome SmartMove+', sub: 'Energy, broadband & more', href: '/services', tag: 'New' },
          { icon: '💬', label: 'Speak to an expert', href: '/services' },
        ],
      },
    ],
  },
];

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <header className="topbar">
          <span>List your property free — Zero brokerage</span>
          <a href="/faq">FAQs</a>
        </header>

        <nav className="nav" role="navigation" aria-label="Main navigation">
          <a href="/" className="nav__logo" aria-label="1HouseToHome Home">Estate<span>Hub</span></a>

          <div className="nav__links" role="menubar">
            {NAV_MENUS.map(item => (
              <NavDropdown
                key={item.label}
                label={item.label}
                sections={item.sections}
                badge={item.badge}
              />
            ))}
          </div>

          <div className="nav__actions">
            <a href="/listings" className="nav__find">🔍 Find property</a>
            <a href="/add-property" className="nav__login">➕ List Free</a>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="nav__cta" style={{cursor:'pointer',fontFamily:'inherit',background:'rgba(255,255,255,0.12)',border:'1px solid rgba(255,255,255,0.3)'}}>👤 Log in</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="nav__cta" style={{cursor:'pointer',fontFamily:'inherit'}}>Sign Up</button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <a href="#valuation" className="nav__cta">Free Valuation</a>
          </div>
        </nav>

        {children}

        <footer className="footer-main">
          <div className="footer-links-section">
            <div className="footer-links-group">
              <h4 className="footer-links-heading">Selling with 1HouseToHome</h4>
              <div className="footer-links-cols">
                <div className="footer-links-col">
                  <a href="/how-selling-works">How selling works in India</a>
                  <a href="/pricing-plans">Pricing plans</a>
                  <a href="/add-property">Post your property — free</a>
                  <a href="/sell">Find local agents</a>
                  <a href="/property-valuation">Free property valuation</a>
                </div>
                <div className="footer-links-col">
                  <a href="/property-valuation">Property valuation tools</a>
                  <a href="/sell">Nearby agent finder</a>
                  <a href="/sell">Market price trends</a>
                  <a href="/sell">Where 1HouseToHome advertises</a>
                  <a href="/sell">Virtual property tour</a>
                </div>
                <div className="footer-links-col">
                  <a href="/rera-guide">RERA & registry guide</a>
                  <a href="/services">Home inspection services</a>
                  <a href="/sell">Seller property guides</a>
                  <a href="/sell">Read seller reviews</a>
                  <div className="footer-links-trust">⭐ Google — 4.8/5 from 89k+ reviews</div>
                </div>
              </div>
            </div>

            <div className="footer-links-divider" />

            <div className="footer-links-group">
              <h4 className="footer-links-heading">Buying a property</h4>
              <div className="footer-links-cols">
                <div className="footer-links-col">
                  <a href="/listings">Search properties by city</a>
                  <a href="/listings?propertyType=apartment">New launch projects</a>
                  <a href="/listings">Ready-to-move homes</a>
                  <a href="/buy">Book site visit instantly</a>
                </div>
                <div className="footer-links-col">
                  <a href="/property-valuation">Budget calculator (₹)</a>
                  <a href="/home-loans">EMI calculator</a>
                  <a href="/buy">Property price trends</a>
                  <a href="/home-loans">Home loan assistance</a>
                </div>
                <div className="footer-links-col">
                  <a href="/legal-checklist">Legal checklist for buyers</a>
                  <a href="/buyer-guides">Documentation help</a>
                  <a href="/buyer-guides">Buyer property guides</a>
                  <div className="footer-links-trust">⭐ Google — 4.8/5 from 89k+ reviews</div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-main__top">
            <div className="footer-main__brand">
              <div className="footer-main__logo">Estate<span>Hub</span></div>
              <p className="footer-main__tagline">Apna Ghar. Apni Marzi.</p>
              <p className="footer-main__follow">Follow us for more</p>
              <div className="footer-main__socials">
                <a href="#" aria-label="Twitter">𝕏</a>
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="YouTube">▶</a>
                <a href="#" aria-label="Instagram">◎</a>
              </div>
            </div>
            <div className="footer-main__col">
              <h4>Buy & Sell</h4>
              <a href="/add-property">Post free listing</a>
              <a href="/listings">Search properties</a>
              <a href="#">New launch projects</a>
              <a href="#">Free property valuation</a>
              <a href="#">RERA verified projects</a>
              <a href="#">Commercial properties</a>
            </div>
            <div className="footer-main__col">
              <h4>Useful Links</h4>
              <a href="#">Home loan eligibility</a>
              <a href="#">EMI calculator</a>
              <a href="#">Property guides</a>
              <a href="#">Buyer's guide</a>
              <a href="#">Latest property news</a>
              <a href="#">Legal & documentation</a>
              <a href="#">1HouseToHome SmartMove+</a>
            </div>
            <div className="footer-main__col">
              <h4>Help & Contact</h4>
              <a href="#">Contact us</a>
              <a href="#">Log in / Register</a>
              <a href="/faq">FAQs</a>
              <a href="#">Careers</a>
              <a href="#">Media & Press</a>
              <h4 style={{marginTop:'1.25rem'}}>Trusted & Verified</h4>
              <div className="footer-main__trust">⭐ Google — 4.8/5 from 89k+ reviews</div>
            </div>
          </div>

          <div className="footer-main__bottom">
            <div className="footer-main__legal">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/cookie-policy">Cookie Policy</a>
              <a href="/sitemap">Sitemap</a>
              <a href="/careers">Careers</a>
              <a href="/terms">Terms &amp; Conditions</a>
              <a href="/rera">RERA Registration</a>
            </div>
            <div className="footer-main__payments">
              🇮🇳 UPI &nbsp;|&nbsp; Net Banking &nbsp;|&nbsp; Visa &nbsp;|&nbsp; Mastercard &nbsp;|&nbsp; RuPay
            </div>
          </div>
          <p className="footer-main__copy">
            © 2026 1HouseToHome India Pvt. Ltd. All Rights Reserved. | RERA Registered<br/>
            <span style={{fontSize:'0.75rem', opacity:0.6}}>
              Important: Property transactions involve legal obligations. Please verify RERA registration before booking. Home loans are subject to bank approval and eligibility criteria.
            </span>
          </p>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
