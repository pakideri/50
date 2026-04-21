
export const metadata = {
  title: "About Us | 50Fables Wayanad Heritage Homestay",
  description: "Learn about 50 Fables, a 90-year-old heritage homestay in Wayanad. Discover our story, heritage architecture, and commitment to traditional Kerala hospitality.",
};

export default function AboutPage() {
  return (
    <>

      
      <main>
        {/* Page Header Section Start */}
        <div className="page-header parallaxie">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-header-box">
                  <h1 className="text-anime-style-3" data-cursor="-opaque">About us</h1>
                  <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">about us</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header Section End */}

        {/* About Us Section Start */}
        <div className="about-us our-approach">
          <div className="container">
            <div className="row">
              <div className="col-xl-3">
                <div className="about-satisfied-client-content">
                  <div className="section-sub-title wow fadeInUp">
                    <h3 className="wow fadeInUp">About Us</h3>
                  </div>
                  <div className="about-client-box wow fadeInUp" data-wow-delay="0.2s">
                    <div className="about-client-box-image">
                      <figure><img src="/images/about-image-1-royal.jpg" alt="" /></figure>
                    </div>
                    <div className="about-client-box-content">
                      <div className="satisfy-client-images">
                        {[1, 2, 3, 4].map(idx => (
                          <div key={idx} className="satisfy-client-image">
                            <figure className="image-anime"><img src={`/images/author-${idx}.jpg`} alt="" /></figure>
                          </div>
                        ))}
                        <div className="satisfy-client-image add-more">
                          <h3><span className="counter">50</span>+</h3>
                        </div>
                      </div>
                      <div className="about-client-content">
                        <p>Over 500+ Satisfied Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-9">
                <div className="about-us-content">
                  <div className="section-title">
                    <h2 className="text-effect" data-cursor="-opaque">50 Fables - Your Vintage Wayanad Retreat</h2>
                    <p className="wow fadeInUp">
                      Welcome to 50 Fables, a unique heritage homestay nestled in the serene, mist-kissed hills of Wayanad.<br /><br />
                      At 50 Fables, we believe that travel is not just about visiting a place, but about experiencing a time and a feeling. Our homestay is a labor of love, an old, cherished family home that has been thoughtfully converted to share its vintage soul and traditional charm with you.<br /><br />
                      We set out on this journey to create a space where guests can truly disconnect from the modern rush and reconnect with the simple, enriching rhythms of nature and history.<br /><br />
                      Stepping into 50 Fables is like turning the page of an old storybook. Here, you won't find sterile, modern architecture, but the authentic, hand-crafted aesthetic of a bygone era. We have preserved the heritage elements of the house, ensuring you get a genuine, traditional stay experience.<br /><br />
                      Our greatest desire is for you to not only feel comfortable but to feel the very pulse of Wayanad—to breathe the fresh, unspoiled air, listen to the 'fables' whispered by the ancient trees, and taste the warmth of traditional Kerala hospitality.<br /><br />
                      Come and stay with us. Let the walls of this vintage home tell you their stories, and let your own nature-filled tale begin at 50 Fables.
                    </p>
                  </div>
                  <div className="about-us-btn wow fadeInUp" data-wow-delay="0.4s">
                    <a href="/contact" className="btn-default">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Fables Section */}
        <div className="the-fables-section" style={{ padding: "100px 0", background: "#fdfbf7" }}>
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-12 text-center mb-5">
                <div className="section-title">
                  <h3 className="wow fadeInUp">The Fables of Our Villa</h3>
                  <h2 className="text-effect" data-cursor="-opaque">Every Corner Tells a Tale</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="fable-card wow fadeInUp" style={{ background: "#fff", padding: "40px", borderRadius: "30px", height: "100%", border: "1px solid #eee" }}>
                  <div className="fable-icon mb-4"><i className="fas fa-book-open" style={{ fontSize: "2rem", color: "#cbca7b" }}></i></div>
                  <h4 className="fw-bold mb-3" style={{ fontFamily: "var(--font-bricolage)" }}>Fable I: The Old Verandah</h4>
                  <p>Our 90-year-old verandah has witnessed decades of monsoon rains and quiet mornings. It's the soul of the house where time truly slows down.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="fable-card wow fadeInUp" data-wow-delay="0.2s" style={{ background: "#fff", padding: "40px", borderRadius: "30px", height: "100%", border: "1px solid #eee" }}>
                  <div className="fable-icon mb-4"><i className="fas fa-coffee" style={{ fontSize: "2rem", color: "#cbca7b" }}></i></div>
                  <h4 className="fw-bold mb-3" style={{ fontFamily: "var(--font-bricolage)" }}>Fable II: The Plantation Walk</h4>
                  <p>The winding paths through our 3.5-acre plantation tell stories of the generations who nurtured these coffee and spice plants.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="fable-card wow fadeInUp" data-wow-delay="0.4s" style={{ background: "#fff", padding: "40px", borderRadius: "30px", height: "100%", border: "1px solid #eee" }}>
                  <div className="fable-icon mb-4"><i className="fas fa-water" style={{ fontSize: "2rem", color: "#cbca7b" }}></i></div>
                  <h4 className="fw-bold mb-3" style={{ fontFamily: "var(--font-bricolage)" }}>Fable III: The Antigravity Pool</h4>
                  <p>A modern fable where heritage meets weightless luxury. A place where the stress of the modern world simply floats away.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us / Amenities */}
        <div className="why-choose-us">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-lg-6">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Stay Amenities</h3>
                  <h2 className="text-effect" data-cursor="-opaque">Comfort & Convenience: Room Amenities</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-content-btn">
                  <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
                    <p>We have carefully curated the amenities in each room to ensure your stay at 50 Fables blends the charm of heritage living with the essential comforts of today.</p>
                  </div>
                  <div className="section-btn wow fadeInUp" data-wow-delay="0.4s">
                    <a href="/contact" className="btn-default">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row why-choose-item-list">
              {[
                { title: "Air-conditioning", text: "For your comfort, especially during warmer afternoons.", icon: "1" },
                { title: "Private Balcony", text: "A dedicated space to step out, breathe the fresh Wayanad air, and enjoy views of the surrounding nature", icon: "2", active: true },
                { title: "Flat Screen TV", text: "For relaxation and entertainment during your downtime.", icon: "3" },
                { title: "Shower Hot/Cold Water", text: "Reliable access to water at your preferred temperature.", icon: "4" }
              ].map((item, idx) => (
                <div key={idx} className="col-xl-3 col-md-6">
                  <div className={`why-choose-item ${item.active ? 'active' : ''} wow fadeInUp`} data-wow-delay={`${idx * 0.2}s`}>
                    <div className="icon-box"><img src={`/images/icon-why-choose-us-${item.icon}-royal.svg`} alt="" /></div>
                    <div className="why-choose-item-content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-lg-12">
                <div className="why-choose-footer-list wow fadeInUp" data-wow-delay="0.8s">
                  <ul>
                    <li>Eco-Friendly</li>
                    <li>Private Stays</li>
                    <li>Adventure Ready</li>
                    <li>Scenic Views</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


    </>
  );
}
