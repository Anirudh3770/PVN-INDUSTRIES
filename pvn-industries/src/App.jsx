import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Printer, CheckCircle, Package, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [customLogos, setCustomLogos] = useState({});
  const [faqOpen, setFaqOpen] = useState(null);
  const [pvnAssetVisible, setPvnAssetVisible] = useState(true);
  const PVN_ASSET = `${import.meta.env.BASE_URL}logos/pvn-logo.png`;

  const makePlaceholder = (text) => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='100'>
<rect width='100%' height='100%' fill='#f2f4f7'/>
<rect x='0' y='0' width='240' height='100' fill='none' stroke='#d0d5dd'/>
<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='14' fill='#667085'>${text}</text>
</svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem('clientLogos');
      if (stored) {
        setCustomLogos(JSON.parse(stored));
      }
    } catch {}
  }, []);

  const saveCustomLogo = (name, dataUrl) => {
    const next = { ...customLogos, [name]: dataUrl };
    setCustomLogos(next);
    try {
      localStorage.setItem('clientLogos', JSON.stringify(next));
    } catch {}
  };

  const handleFileSelect = (name, e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      if (typeof dataUrl === 'string') {
        saveCustomLogo(name, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const onDropImage = (name, e) => {
    e.preventDefault();
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      if (typeof dataUrl === 'string') {
        saveCustomLogo(name, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            {pvnAssetVisible ? (
              <img
                src={PVN_ASSET}
                alt="PVN Industries logo"
                className="pvn-logo-img"
                onError={(e) => {
                  setPvnAssetVisible(false);
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <Package className="logo-icon" />
            )}
            <span className="brand-text">PVN <span className="highlight">Industries</span></span>
          </div>
          
          <div className="desktop-menu">
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('specs')}>Specs</button>
            <button onClick={() => scrollToSection('products')}>Products</button>
            <button onClick={() => scrollToSection('faq')}>FAQ</button>
            <button onClick={() => scrollToSection('clients')}>Clients</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>

          <div className="mobile-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('specs')}>Specs</button>
            <button onClick={() => scrollToSection('products')}>Products</button>
            <button onClick={() => scrollToSection('faq')}>FAQ</button>
            <button onClick={() => scrollToSection('clients')}>Clients</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
        )}
      </nav>

      <header id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="brand-overline">PVN Industries</div>
          <h1>Food‑Grade <span className="text-yellow">Curd Buckets</span> For Dairy Brands</h1>
          <p>Durable PP/HDPE containers with tamper‑evident lids and high‑definition Dry Offset printing for strong shelf impact.</p>
          
          <div className="hero-badges">
            <div className="hero-badge"><CheckCircle size={18} /> Food‑Grade Materials</div>
            <div className="hero-badge"><Printer size={18} /> Dry Offset up to 6 Colors</div>
            <div className="hero-badge"><Package size={18} /> 5L • 10L • 20L</div>
          </div>

          <div className="hero-actions">
            <button className="btn" onClick={() => scrollToSection('products')}>Explore Buckets</button>
            <a href="tel:+918501905917" className="btn secondary">Call Sales</a>
            <a href="mailto:pvnindustries.tg@gmail.com?subject=PVN%20Curd%20Bucket%20Enquiry" className="btn secondary">Get Price List</a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">5L</div>
              <div className="hero-stat-label">Retail Packs</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">10L</div>
              <div className="hero-stat-label">HORECA</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">20L</div>
              <div className="hero-stat-label">Bulk Logistics</div>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose PVN Industries?</h2>
            <p>Excellence in Manufacturing & Branding</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <Printer size={48} color="#2563eb" />
              <h3>Dry Offset Printing</h3>
              <p>We offer high-quality dry offset printing directly on buckets for vibrant, durable branding suitable for industrial use.</p>
            </div>
            <div className="feature-card">
              <CheckCircle size={48} color="#2563eb" />
              <h3>Food-Grade Material</h3>
              <p>Our buckets are manufactured using 100% virgin food-grade plastic ensuring hygiene and safety for dairy products.</p>
            </div>
            <div className="feature-card">
              <Package size={48} color="#2563eb" />
              <h3>Bulk Supply</h3>
              <p>Equipped to handle large industrial orders with timely delivery across Telangana and India.</p>
            </div>
          </div>
        </div>
      </section>

      

      <section id="specs" className="section specs-section">
        <div className="container">
          <div className="section-header">
            <h2>Technical Specifications</h2>
            <p>Built for dairy hygiene, strength and brand impact</p>
          </div>
          <div className="specs-cards">
            {[
              {
                title: '5L Curd Bucket',
                capacity: '5L',
                tags: ['Food-Grade', 'Tamper Lid'],
                items: [
                  'Material: PP (Food-Grade, BPA-free)',
                  'Lid: Snap-fit, tamper-evident',
                  'Handle: Sturdy plastic',
                  'Printing: Dry Offset up to 6 colors',
                  'Use: Curd, Lassi, Buttermilk',
                ],
              },
              {
                title: '10L Curd Bucket',
                capacity: '10L',
                tags: ['Food-Grade', 'HORECA'],
                items: [
                  'Material: HDPE/PP (Food-Grade)',
                  'Lid: Tamper-evident seal',
                  'Handle: Plastic/Metal options',
                  'Printing: 360° wrap branding',
                  'Use: Bulk packs, HORECA',
                ],
              },
              {
                title: '20L Curd Bucket',
                capacity: '20L',
                tags: ['Heavy Duty', 'Logistics'],
                items: [
                  'Material: HDPE (High impact)',
                  'Lid: Lock-ring with seal',
                  'Handle: Metal reinforced',
                  'Printing: Large format branding',
                  'Use: Dairy logistics, canteens',
                ],
              },
            ].map((card) => (
              <div key={card.title} className="spec-card">
                <div className="spec-header">
                  <div className="spec-title">{card.title}</div>
                  <div className="spec-chips">
                    {card.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                    <span className="chip capacity">{card.capacity}</span>
                  </div>
                </div>
                <ul className="spec-list">
                  {card.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="badges-row">
            <div className="badge"><CheckCircle size={18} /> Food-Grade Plastics</div>
            <div className="badge"><CheckCircle size={18} /> Tamper-Evident Lids</div>
            <div className="badge"><CheckCircle size={18} /> ISO-Guided Processes</div>
            <div className="badge"><CheckCircle size={18} /> Ink Migration Safe</div>
          </div>
        </div>
      </section>

      <section className="section printing-section">
        <div className="container">
          <div className="section-header">
            <h2>Branding & Printing</h2>
            <p>High-definition Dry Offset printing for maximum shelf appeal</p>
          </div>
          <div className="printing-grid">
            <div className="printing-card">
              <Printer size={40} color="#2563eb" />
              <h3>Up to 6 Colors</h3>
              <p>Vibrant, consistent color reproduction with sharp text and graphics.</p>
            </div>
            <div className="printing-card">
              <CheckCircle size={40} color="#2563eb" />
              <h3>360° Coverage</h3>
              <p>Wrap-around artwork for powerful brand visibility and recall.</p>
            </div>
            <div className="printing-card">
              <CheckCircle size={40} color="#2563eb" />
              <h3>Food-Safe Inks</h3>
              <p>Low-odor, migration-safe inks suitable for dairy applications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div className="cta-text">
            <h3>Need Custom Sizes, Colors or Artwork?</h3>
            <p>Share your requirements and get a tailored quote within 24 hours.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+918501905917" className="btn">Call Now</a>
            <a href="mailto:pvnindustries.tg@gmail.com?subject=PVN%20Curd%20Bucket%20Enquiry" className="btn secondary">Email Us</a>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="container">
          <div className="section-header">
            <h2>FAQs</h2>
            <p>Answers to common questions from dairy partners</p>
          </div>
          <div className="faq-list">
            {[
              {
                q: 'Are your buckets food-grade and safe for curd?',
                a: 'Yes. We use virgin PP/HDPE resins and dairy-safe inks. Our process follows hygiene protocols and ink migration safety.',
              },
              {
                q: 'Do lids have tamper evidence?',
                a: 'Yes. We offer snap-fit and ring-lock tamper-evident lids across capacities for product integrity.',
              },
              {
                q: 'Can you print my brand and artwork?',
                a: 'Absolutely. We support high-definition Dry Offset printing up to 6 colors with 360° coverage.',
              },
              {
                q: 'What’s the minimum order quantity (MOQ)?',
                a: 'MOQs vary by size and printing. Share your requirement and we will propose an optimized MOQ.',
              },
              {
                q: 'What are the lead times and delivery options?',
                a: 'Standard lead times are 7–15 days based on quantity and artwork approval. Pan-India delivery supported.',
              },
            ].map((item, idx) => (
              <div key={item.q} className={`faq-item ${faqOpen === idx ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}>
                  <span>{item.q}</span>
                  <span>{faqOpen === idx ? '–' : '+'}</span>
                </button>
                {faqOpen === idx && <div className="faq-a">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section products-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Products</h2>
            <p>Available in various sizes for Industrial and Commercial use</p>
          </div>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-image-placeholder">
                <img
                  src={`${import.meta.env.BASE_URL}products/plant.jpg`}
                  alt="5kg Bucket"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>
              <div className="product-details">
                <span className="product-badge">5kg</span>
                <h3>5kg Industrial Curd Bucket</h3>
                <p>Perfect for retail dairy distribution. Sturdy handles and leak-proof lid.</p>
                <ul>
                  <li>Capacity: 5 Liters</li>
                  <li>Material: Polypropylene (PP)</li>
                  <li>Usage: Curd, Lassi, Butter Milk</li>
                </ul>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-placeholder">
                <img
                  src={`${import.meta.env.BASE_URL}products/plant.jpg`}
                  alt="10kg Bucket"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>
              <div className="product-details">
                <span className="product-badge">10kg</span>
                <h3>10kg Industrial Curd Bucket</h3>
                <p>Heavy-duty construction for bulk storage and transport.</p>
                <ul>
                  <li>Capacity: 10 Liters</li>
                  <li>Material: High Density Polyethylene (HDPE)</li>
                  <li>Usage: Industrial packing, Hotels, Canteens</li>
                </ul>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-placeholder">
                <img
                  src={`${import.meta.env.BASE_URL}products/plant.jpg`}
                  alt="20kg Bucket"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                  }}
                />
              </div>
              <div className="product-details">
                <span className="product-badge">20kg</span>
                <h3>20kg Industrial Curd Bucket</h3>
                <p>High-impact HDPE with reinforced handle and lock-ring sealed lid for logistics.</p>
                <ul>
                  <li>Capacity: 20 Liters</li>
                  <li>Material: High Impact HDPE</li>
                  <li>Usage: Dairy logistics, canteens, bulk distribution</li>
                </ul>
                <a href="mailto:pvnindustries.tg@gmail.com?subject=20kg%20Curd%20Bucket%20Enquiry" className="btn secondary">Request Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="section clients-section">
        <div className="container">
          <div className="section-header">
            <h2>Trusted By</h2>
            <p>We proudly serve leading dairy brands</p>
          </div>
          {(() => {
            const clients = [
              {
                name: 'Karimnagar Dairy',
                logo: 'https://www.karimnagardairy.in/wp-content/uploads/2020/09/logo.png'
              },
              {
                name: 'Mother Dairy',
                logo: 'https://upload.wikimedia.org/wikipedia/en/2/26/Mother_Dairy_logo.svg'
              },
              {
                name: 'Vijaya Dairy',
                logo: 'https://tgdairy.telangana.gov.in/images/logo.png'
              },
              {
                name: 'Masqati Dairy',
                logo: 'https://i.ibb.co/MCgdg5q/masqati-logo.png'
              }
            ];
            return (
              <div className="clients-logos">
                {clients.map((c) => {
                  const inputId = `upload-${c.name.replace(/\\s+/g, '-').toLowerCase()}`;
                  const src = customLogos[c.name] || c.logo;
                  return (
                    <div key={c.name} className="client-card" aria-label={c.name}>
                      <div
                        className="client-logo"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => onDropImage(c.name, e)}
                        onClick={() => {
                          const el = document.getElementById(inputId);
                          if (el) el.click();
                        }}
                        role="button"
                        aria-label={`Set logo for ${c.name}`}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            const el = document.getElementById(inputId);
                            if (el) el.click();
                          }
                        }}
                      >
                        <img
                          src={src}
                          alt={`${c.name} logo`}
                          loading="lazy"
                          decoding="async"
                          width="240"
                          height="64"
                          className="client-logo-img"
                          onError={(e) => {
                            e.currentTarget.src = makePlaceholder(c.name);
                          }}
                        />
                        <input
                          id={inputId}
                          type="file"
                          accept="image/*"
                          style={{ display: 'none' }}
                          onChange={(evt) => handleFileSelect(c.name, evt)}
                        />
                      </div>
                      <div className="client-name">{c.name}</div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Reach out for orders and inquiries</p>
          </div>

          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="info-item">
                <MapPin className="icon" />
                <div>
                  <h4>Factory Address</h4>
                  <p>Plot No. 31/1 & 31/2, Mankhal Plastic Park (Extn.)<br />
                  Thummaluru Viii., Maheshwaram Mdl.,<br />
                  R.R. Dist., 501 359, Telangana.</p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone className="icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 8501905917</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="icon" />
                <div>
                  <h4>Email</h4>
                  <p>pvnindustries.tg@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <CheckCircle className="icon" />
                <div>
                  <h4>GSTIN</h4>
                  <p>36BOQPK3182L2ZB</p>
                </div>
              </div>
            </div>

            <div className="map-container">
              <iframe
                title="PVN Industries Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.45916666931488%2C17.160592744145144%2C78.46916666931488%2C17.170592744145145&layer=mapnik&marker=17.165592744145144%2C78.46416666931488"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div style={{ marginTop: '8px' }}>
              <a
                href="https://www.google.com/maps?q=17.165592744145144,78.46416666931488"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-brand">
            <img
              src={`${import.meta.env.BASE_URL}logos/pvn-logo.png`}
              alt="PVN Industries logo"
              className="footer-logo-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <p>&copy; {new Date().getFullYear()} PVN Industries. All Rights Reserved.</p>
          <p className="small">Plastic Curd Bucket Manufacturers | Dry Offset Printing</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/pvnindustries" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/pvnindustries" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/pvn-industries" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.youtube.com/@pvnindustries" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
