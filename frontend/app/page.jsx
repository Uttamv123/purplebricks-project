'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PropertyCard from '../components/PropertyCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { getProperties } from '../lib/api';

import Dropdown from '../components/Dropdown';

const PROPERTY_TYPES = [
  { value: 'apartment', label: 'Apartment', emoji: '🏢' },
  { value: 'house',     label: 'Independent House', emoji: '🏠' },
  { value: 'villa',     label: 'Villa', emoji: '🏡' },
  { value: 'studio',    label: 'Studio', emoji: '🛋️' },
  { value: 'plot',      label: 'Plot / Land', emoji: '🌿' },
];

const MAX_PRICES = [
  { value: '2500000',   label: '₹25 Lakh' },
  { value: '5000000',   label: '₹50 Lakh' },
  { value: '10000000',  label: '₹1 Crore' },
  { value: '20000000',  label: '₹2 Crore' },
  { value: '50000000',  label: '₹5 Crore' },
  { value: '100000000', label: '₹10 Crore+' },
];

const MIN_BEDS = [
  { value: '1', label: '1+ BHK' },
  { value: '2', label: '2+ BHK' },
  { value: '3', label: '3+ BHK' },
  { value: '4', label: '4+ BHK' },
];

const STATIC_FEATURED = [
  { id: 's1', title: 'Luxury Penthouse — Bandra West', price: 45000000, location: 'Mumbai', property_type: 'apartment', bedrooms: 3, bathrooms: 3, image_url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop' },
  { id: 's2', title: 'Spacious 4BHK Villa — Whitefield', price: 18000000, location: 'Bengaluru', property_type: 'villa', bedrooms: 4, bathrooms: 4, image_url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop' },
  { id: 's3', title: 'Modern 2BHK Apartment — Sector 62', price: 7500000, location: 'Noida', property_type: 'apartment', bedrooms: 2, bathrooms: 2, image_url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop' },
  { id: 's4', title: 'Premium 3BHK Flat — Jubilee Hills', price: 12000000, location: 'Hyderabad', property_type: 'apartment', bedrooms: 3, bathrooms: 2, image_url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop' },
  { id: 's5', title: 'Independent House — Adyar', price: 9500000, location: 'Chennai', property_type: 'house', bedrooms: 3, bathrooms: 2, image_url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop' },
  { id: 's6', title: 'Studio Apartment — Koregaon Park', price: 4200000, location: 'Pune', property_type: 'studio', bedrooms: 1, bathrooms: 1, image_url: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&auto=format&fit=crop' },
];

const STATS = [
  { value: '2L+', label: 'Properties Listed' },
  { value: '₹50,000 Cr+', label: 'Worth of Properties Sold' },
  { value: '95%', label: 'Customer Satisfaction' },
  { value: '100+', label: 'Cities Covered' },
];

const SERVICES = [
  { icon: '🏦', title: 'Home Loan Assistance', desc: 'We partner with 50+ banks and NBFCs to help you get the best home loan rates — pre-approval in 24 hours.', link: '#' },
  { icon: '🏷️', title: 'Free Property Valuation', desc: 'Get an accurate market value of your property from our certified experts — completely free of charge.', link: '#' },
  { icon: '📋', title: 'Legal & Documentation', desc: 'From title verification to registration — our legal experts handle all paperwork so you don\'t have to.', link: '#' },
  { icon: '🔑', title: 'Rental Management', desc: 'Whether you\'re a landlord or tenant, we manage everything from tenant screening to rent collection.', link: '#' },
];

const SELL_FEATURES = [
  { icon: '₹', title: 'Save on Brokerage', desc: 'List your property directly and save lakhs on brokerage fees. Transparent pricing, no hidden charges.' },
  { icon: '👤', title: 'Verified Buyers & Sellers', desc: 'Every user is KYC-verified. Deal with confidence knowing you\'re talking to genuine buyers and sellers.' },
  { icon: '✓', title: 'RERA Compliant Listings', desc: 'All our listed projects are RERA registered. Buy with full legal protection and peace of mind.' },
];

const INDIA_LOCATIONS = [
  'Ahmedabad','Bengaluru','Bhopal','Bhubaneswar','Chandigarh',
  'Chennai','Coimbatore','Delhi','Faridabad','Ghaziabad',
  'Gurugram','Hyderabad','Indore','Jaipur','Kochi',
  'Kolkata','Lucknow','Mumbai','Nagpur','Nashik',
  'Noida','Patna','Pune','Raipur','Rajkot',
  'Surat','Thane','Vadodara','Varanasi','Visakhapatnam',
];

const FAQS = [
  { q: 'How do I list my property on 1HouseToHome?', a: 'Register for free, upload photos and details, and your listing goes live within 24 hours. No brokerage charged.' },
  { q: 'Is 1HouseToHome RERA compliant?', a: 'Yes — all builder projects on our platform are RERA registered. We verify compliance before listing.' },
  { q: 'How do I get a home loan through 1HouseToHome?', a: 'We partner with 50+ banks and NBFCs. Apply online and get pre-approval within 24 hours.' },
  { q: 'What cities do you cover?', a: 'We cover 100+ cities across India — from Mumbai and Delhi to Tier-2 cities like Indore, Coimbatore and Vadodara.' },
  { q: 'How is the property valuation done?', a: 'Our certified valuers assess your property based on location, size, amenities and recent comparable sales in your area.' },
  { q: 'Can NRIs buy property through 1HouseToHome?', a: 'Yes — NRIs can buy residential and commercial property in India. We provide dedicated NRI assistance and legal support.' },
];

export default function HomePage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('buy');
  const [minBeds, setMinBeds] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savingsPrice, setSavingsPrice] = useState(300000);
  const [openFaq, setOpenFaq] = useState(null);
  const [postcode, setPostcode] = useState('');

  useEffect(() => {
    getProperties().then(setListings).catch(() => setListings([])).finally(() => setLoading(false));
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm.trim()) params.set('location', searchTerm.trim());
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (propertyType) params.set('propertyType', propertyType);
    router.push(`/listings${params.toString() ? '?' + params.toString() : ''}`);
  }

  const featured = listings.length > 0 ? listings : STATIC_FEATURED;
  const savings = Math.round(savingsPrice * 0.02 - 15000);
  const fmt = (n) => n.toLocaleString('en-GB');

  return (
    <main>

      {/* ── Hero ── */}
      <section className="hero hero--bg">
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">From house to <span>home</span></h1>
          <p className="hero__sub">India's most trusted property platform — buy, sell, rent and invest across 100+ cities.</p>
          <div className="hero__search-tabs">
            {['buy','rent','sell'].map(t => (
              <button key={t} className={`hero__tab${searchType===t?' hero__tab--active':''}`} onClick={() => setSearchType(t)}>
                {t.charAt(0).toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>
          <form className="hero__search-bar" onSubmit={handleSearch}>
            <input className="hero__input" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Enter city, town or postcode…" aria-label="Search location" />
            <Dropdown value={propertyType} onChange={setPropertyType} options={PROPERTY_TYPES} placeholder="Property type" icon="🏠" />
            <Dropdown value={maxPrice} onChange={setMaxPrice} options={MAX_PRICES} placeholder="Max price" icon="£" />
            <Dropdown value={minBeds} onChange={setMinBeds} options={MIN_BEDS} placeholder="Min beds" icon="🛏" />
            <button className="hero__btn" type="submit">Search</button>
          </form>
          <div className="hero__tags">
            {['Mumbai','Delhi','Bengaluru','Hyderabad','Pune','Chennai'].map(city => (
              <button key={city} className="hero__tag" onClick={() => router.push(`/listings?location=${city}`)}>{city}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-bar">
        {STATS.map(s => (
          <div key={s.label} className="stats-bar__item">
            <span className="stats-bar__value">{s.value}</span>
            <span className="stats-bar__label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── Manage under one roof ── */}
      <section className="section">
        <div className="trust-bar">⭐ Google Reviews &nbsp;<strong>4.8 out of 5</strong> from 89,000+ reviews &nbsp;<a href="#">See all reviews →</a></div>
        <h2 className="section__title">Manage your move under one roof</h2>
        <div className="services-grid">
          {SERVICES.map(s => (
            <div key={s.title} className="service-card">
              <div className="service-card__icon">{s.icon}</div>
              <h3 className="service-card__title">{s.title} <span>→</span></h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Your home everywhere buyers look ── */}
      <section className="portals-section">
        <div className="section">
          <h2 className="section__title" style={{textAlign:'center', color:'#fff'}}>Listed where millions of buyers search</h2>
          <p className="portals-section__sub" style={{color:'rgba(255,255,255,0.75)'}}>We list your property on India's top real estate portals from day one — maximum reach, zero extra cost.</p>
          <div className="portals-grid">
            {[
              { name: 'MagicBricks', color: '#e84118', bg: '#fff0ee', emoji: '🏠' },
              { name: '99acres',     color: '#e67e22', bg: '#fff8f0', emoji: '🔍' },
              { name: 'Housing.com', color: '#0984e3', bg: '#e8f4fd', emoji: '📍' },
              { name: 'NoBroker',    color: '#6c5ce7', bg: '#f0eeff', emoji: '⭐' },
            ].map(p => (
              <div key={p.name} className="portal-card" style={{'--portal-color': p.color, '--portal-bg': p.bg}}>
                <span className="portal-card__emoji">{p.emoji}</span>
                <span className="portal-card__name">{p.name}</span>
              </div>
            ))}
          </div>
          <p className="portals-section__note" style={{color:'rgba(255,255,255,0.6)'}}>Because the right buyer can't fall in love with a home they never see.</p>
        </div>
      </section>

      {/* ── Reviews bar ── */}
      <section className="reviews-section">
        <div className="section">
          <div className="reviews-bar">
            <div className="reviews-bar__left">
              <span className="reviews-bar__stars">★★★★★</span>
              <div>
                <div className="reviews-bar__title">The reviews are in…</div>
                <div className="reviews-bar__sub">89,000+ five-star reviews from verified Indian buyers & sellers</div>
              </div>
            </div>
            <div className="reviews-bar__quotes">
              {[
                { text: '"Found our dream 3BHK in Pune within 2 weeks. Zero brokerage saved us ₹3 lakhs!"', name: 'Rahul M., Pune' },
                { text: '"The legal team handled everything — title check, registration, the works. Stress-free!"', name: 'Priya S., Bengaluru' },
                { text: '"Best platform for NRI property investment. Got full support from search to possession."', name: 'Amit K., Dubai (NRI)' },
              ].map(r => (
                <div key={r.name} className="review-quote">
                  <p className="review-quote__text">{r.text}</p>
                  <span className="review-quote__name">— {r.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured listings ── */}
      <section style={{background:'linear-gradient(135deg,#f0f4ff 0%,#fafbff 100%)',padding:'1px 0'}}>
        <div className="section">
          <div className="section__header">
            <h2 className="section__title">Featured Properties</h2>
            <Link href="/listings" className="section__link">View all →</Link>
          </div>
          {loading ? <LoadingSpinner /> : (
            <div className="property-grid">
              {featured.map(p => <PropertyCard key={p.id} property={p} />)}
            </div>
          )}
        </div>
      </section>

      {/* ── Sell your home ── */}
      <section className="sell-section" id="valuation">
        <div className="sell-section__inner">
          <div className="sell-section__text">
            <h2 className="sell-section__title">We're selling near you.<br/>Let's get you the best price.</h2>
            <div className="sell-section__checks">
              {['Local market expertise','RERA verified listings','Zero hidden charges','Flexible payment options'].map(c => (
                <span key={c} className="sell-section__check">✅ {c}</span>
              ))}
            </div>
            <p className="sell-section__label">Enter your city or pincode to get started</p>
            <form className="sell-section__form" onSubmit={e => { e.preventDefault(); }}>
              <input className="sell-section__input" type="text" value={postcode} onChange={e => setPostcode(e.target.value)} placeholder="Eg. Mumbai, 400001" />
              <button className="sell-section__btn" type="submit">Find out more</button>
            </form>
          </div>
          <div className="sell-section__img">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&auto=format&fit=crop" alt="Estate agent with clients" />
          </div>
        </div>
      </section>

      {/* ── A fairer way to sell ── */}
      <section className="section">
        <h2 className="section__title">A fairer way to sell your house</h2>
        <div className="sell-features-grid">
          {SELL_FEATURES.map(f => (
            <div key={f.title} className="sell-feature">
              <div className="sell-feature__icon">{f.icon}</div>
              <h3 className="sell-feature__title">{f.title}</h3>
              <p className="sell-feature__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Savings calculator ── */}
      <section className="calculator-section">
        <div className="section">
          <h2 className="section__title" style={{color:'#fff'}}>How much could you save?</h2>
          <div className="calculator-card">
            <div className="calculator-card__top">
              <span>Property selling price</span>
              <span className="calculator-card__price">₹{fmt(savingsPrice)}</span>
            </div>
            <input className="calculator-card__slider" type="range" min="500000" max="100000000" step="500000" value={savingsPrice} onChange={e => setSavingsPrice(Number(e.target.value))} />
            <div className="calculator-card__result">
              You could save <strong>₹{savings > 0 ? fmt(savings) : '0'}</strong> vs traditional broker 2% fee
            </div>
            <button className="calculator-card__btn">Book a free property valuation</button>
          </div>
        </div>
      </section>

      {/* ── Property guides ── */}
      <section className="section">
        <div className="section__header">
          <h2 className="section__title">Property guides</h2>
          <Link href="#" className="section__link">See all guides →</Link>
        </div>
        <div className="guides-grid">
          {[
            { title: 'First-time buyer guide', desc: 'Everything you need to know about buying your first home — from mortgages to moving day.', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop', tag: 'Buying' },
            { title: 'How to sell your home fast', desc: 'Expert tips on pricing, presentation and marketing to get the best offer quickly.', img: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&auto=format&fit=crop', tag: 'Selling' },
            { title: 'Landlord essentials', desc: 'A complete guide to letting your property — from finding tenants to managing repairs.', img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop', tag: 'Letting' },
          ].map(g => (
            <div key={g.title} className="guide-card">
              <div className="guide-card__img-wrap">
                <img src={g.img} alt={g.title} className="guide-card__img" />
                <span className="guide-card__tag">{g.tag}</span>
              </div>
              <div className="guide-card__body">
                <h3 className="guide-card__title">{g.title}</h3>
                <p className="guide-card__desc">{g.desc}</p>
                <a href="#" className="guide-card__link">Read guide →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SmartMove+ / Services ── */}
      <section className="smartmove-section">
        <div className="section">
          <div className="smartmove-inner">
            <div className="smartmove-text">
              <span className="smartmove-tag">1HouseToHome SmartMove+</span>
              <h2 className="smartmove-title">Looking to make an energy move?</h2>
              <p className="smartmove-desc">From browsing for a new boiler, to comparing broadband and energy deals — we've got you covered with 1HouseToHome SmartMove+.</p>
              <div className="smartmove-features">
                {['Compare energy deals','Broadband comparison','Boiler cover','Home insurance','Conveyancing'].map(f => (
                  <span key={f} className="smartmove-feature">✓ {f}</span>
                ))}
              </div>
              <a href="#" className="smartmove-btn">Explore SmartMove+ →</a>
            </div>
            <div className="smartmove-img">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop" alt="Smart home services" />
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="how-section">
        <div className="how-section__overlay" />
        <div className="section">
          <h2 className="section__title">How It Works</h2>
          <p className="how-section__subtitle">Your journey to a new home in three simple steps</p>
          <div className="how-grid">
            {[
              { icon: '🔍', step: '01', title: 'Search', desc: 'Use our smart filters to find properties that match your budget, location, and lifestyle.' },
              { icon: '🏠', step: '02', title: 'Explore', desc: 'Browse detailed listings with photos and neighbourhood insights.' },
              { icon: '📩', step: '03', title: 'Enquire', desc: 'Send a direct enquiry to the agent and arrange a viewing in just a few clicks.' },
            ].map(item => (
              <div key={item.step} className="how-card">
                <span className="how-card__step">{item.step}</span>
                <div className="how-card__icon">{item.icon}</div>
                <h3 className="how-card__title">{item.title}</h3>
                <p className="how-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse by location ── */}
      <section className="section">
        <h2 className="section__title">Browse property by city</h2>
        <div className="locations-grid">
          {INDIA_LOCATIONS.map(loc => (
            <Link key={loc} href={`/listings?location=${encodeURIComponent(loc)}`} className="location-item">
              <span className="location-item__plus">+</span> {loc}
            </Link>
          ))}
        </div>
      </section>

      {/* ── Lifestyle split ── */}
      <section className="lifestyle-section">
        <div className="lifestyle-section__img">
          <img src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=900&auto=format&fit=crop" alt="Happy family in their new home" />
        </div>
        <div className="lifestyle-section__content">
          <span className="lifestyle-section__tag">Why 1HouseToHome</span>
          <h2 className="lifestyle-section__title">The Home Your <span>Family Deserves</span></h2>
          <p className="lifestyle-section__desc">We make finding the perfect family home simple, transparent, and stress-free. From first search to final keys — we're with you every step of the way.</p>
          <div className="lifestyle-section__features">
            <span className="lifestyle-section__feature">Verified listings with real photos</span>
            <span className="lifestyle-section__feature">Direct contact with agents — no middlemen</span>
            <span className="lifestyle-section__feature">Smart filters to match your exact needs</span>
            <span className="lifestyle-section__feature">Free to browse, no hidden fees</span>
          </div>
          <Link href="/listings" className="lifestyle-section__btn">Start Your Search →</Link>
        </div>
      </section>

      {/* ── List your property CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #2d0f5e 0%, #1a0533 100%)', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>Own a property? List it for free.</h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.75rem', fontSize: '1rem' }}>
          Reach lakhs of genuine buyers across India — no brokerage, no hidden fees.
        </p>
        <Link href="/add-property" className="nav__cta" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem', borderRadius: '0.5rem' }}>
          📋 List My Property — Free
        </Link>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section" id="faq">
        <div className="section">
          <h2 className="section__title" style={{textAlign:'center'}}>Frequently Asked Questions</h2>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq===i?' faq-item--open':''}`}>
                <button className="faq-item__q" onClick={() => setOpenFaq(openFaq===i ? null : i)}>
                  {faq.q}
                  <span className="faq-item__icon">{openFaq===i ? '−' : '+'}</span>
                </button>
                {openFaq===i && <p className="faq-item__a">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-section__inner">
          <h2 className="cta-section__title">Ready to make your move?</h2>
          <p className="cta-section__sub">Join thousands of happy buyers, sellers and renters across the UK.</p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/listings" className="cta-section__btn">Browse Properties →</Link>
            <a href="#valuation" className="cta-section__btn cta-section__btn--outline">Book Free Valuation</a>
          </div>
        </div>
      </section>

    </main>
  );
}
