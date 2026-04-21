"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader with a slight delay for smoother transition
    const preloaderTimer = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Initialize Swiper sliders if scripts are loaded
    const initSliders = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        // Services Slider (Discover Wayanad)
        new window.Swiper('.services-slider .swiper', {
          slidesPerView: 1,
          speed: 1000,
          spaceBetween: 30,
          loop: true,
          autoplay: { delay: 5000 },
          pagination: { el: '.service-pagination', clickable: true },
          breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1366: { slidesPerView: 4 }
          }
        });

        // Testimonials Slider
        new window.Swiper('.testimonial-slider-royal .swiper', {
          slidesPerView: 1,
          speed: 1000,
          spaceBetween: 30,
          loop: true,
          autoplay: { delay: 5000 },
          pagination: { el: '.testimonial-pagination-royal', clickable: true },
          breakpoints: {
            768: { slidesPerView: 2 },
            1366: { slidesPerView: 3 }
          }
        });
      }
    };

    // Small delay to ensure external scripts from layout.js are executed
    const timer = setTimeout(initSliders, 500);

    // Basic interaction for mute button
    const music = document.getElementById('bg-music');
    const muteBtn = document.getElementById('mute-btn');
    
    if (muteBtn && music) {
      muteBtn.onclick = () => {
        if (music.muted) {
          music.muted = false;
          muteBtn.textContent = '🔈 Mute';
        } else {
          music.muted = true;
          muteBtn.textContent = '🔇 Unmute';
        }
      };
    }

    // Try to play music on first click
    const playMusic = () => {
      if (music) music.play().catch(() => {});
      document.removeEventListener('click', playMusic);
    };
    document.addEventListener('click', playMusic);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', playMusic);
    };
  }, []);

  return (
    <>
      {/* Preloader Start */}
      <div className="preloader" style={{ display: loading ? 'block' : 'none' }}>
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon"><img src="/images/loader.png" alt="" /></div>
        </div>
      </div>

      <div className="floating-contact-buttons">
        <a href="tel:+919446257408" className="floating-btn call-btn">
          <i className="fa fa-phone bg-icon"></i>
        </a>
        <a href="https://wa.me/919446257408" className="floating-btn whatsapp-btn" target="_blank">
          <i className="fa fa-whatsapp"></i>
        </a>
      </div>
      {/* Preloader End */}



      <main>
        {/* Hero Section */}
        <div className="hero-royal bg-section-royal dark-section parallaxie bg">
          <div className="fog">
            {[1, 2, 3, 4].map((i, index) => (
              <img key={index} src={`/images/fog${i}.png`} style={{ "--i": i }} />
            ))}
          </div>
          <div className="container">
            <button className="btn" id="mute-btn">🔈 Mute</button>
            <audio id="bg-music" autoPlay loop>
              <source src="/music.mp3" type="audio/mp3" />
            </audio>
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-box-royal">
                  <div className="hero-content-royal">
                    <div className="section-title">
                      <h3 className="wow fadeInUp">WELCOME TO 50 FABLES</h3>
                      <h1 className="text-anime-style-3" data-cursor="-opaque">
                        Where Every Stay Becomes a Story
                      </h1>
                      <p className="wow fadeInUp" data-wow-delay="0.2s">
                        Find true peace nestled in nature. Unwind in a beautiful sanctuary designed for quiet moments and rich memories.
                      </p>
                    </div>
                    <div className="hero-btn-royal wow fadeInUp" data-wow-delay="0.4s">
                      <a href="/contact" className="btn-default-royal btn-highlighted-royal">Book Your Stay</a>
                    </div>
                  </div>
                  <div className="hero-contact-info-box-royal wow fadeInUp" data-wow-delay="0.6s">
                    <div className="hero-contact-item-title">
                      <h3>Your Adventure Journey Start Here!</h3>
                    </div>
                    <div className="hero-contact-list-royal">
                      <div className="hero-contact-item-royal">
                        <div className="icon-box"><img src="/images/icon-phone-accent.svg" alt="" /></div>
                        <div className="hero-contact-item-content-royal">
                          <h3>Call us</h3>
                          <p><a href="tel:+919446257408">+91 94462 57408</a></p>
                        </div>
                      </div>
                      <div className="hero-contact-item-royal">
                        <div className="icon-box"><img src="/images/icon-mail-accent.svg" alt="" /></div>
                        <div className="hero-contact-item-content-royal">
                          <h3>E-mail us</h3>
                          <p><a href="mailto:Tomynupul@gmail.com">Tomynupul@gmail.com</a></p>
                        </div>
                      </div>
                      <div className="hero-contact-item-royal">
                        <div className="icon-box"><img src="/images/icon-clock-accent.svg" alt="" /></div>
                        <div className="hero-contact-item-content-royal">
                          <h3>Web</h3>
                          <p>www.50fables.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="about-us-royal">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="about-image-box-royal wow fadeInUp" data-wow-delay="0.2s">
                  <div className="about-image-item-1-royal">
                    <div className="about-image-1-royal">
                      <figure className="image-anime"><img src="/images/about-image-1-royal.jpg" alt="" /></figure>
                    </div>
                    <div className="about-client-box-royal">
                      <div className="satisfy-client-images-royal">
                        <div className="satisfy-client-image-royal add-more"><h3><span className="counter">50</span>+</h3></div>
                      </div>
                      <div className="about-client-content-royal"><p>Guests Who Became Family</p></div>
                    </div>
                  </div>
                  <div className="about-image-item-2-royal">
                    <div className="about-image-2-royal"><figure><img src="/images/about-image-2-royal.png" alt="" /></figure></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-content-royal">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">Heritage Accommodation</h3>
                    <h2 className="text-effect" data-cursor="-opaque">50 Fables Wayanad Heritage Home</h2>
                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                      Welcome to our old, beautiful heritage home in Wayanad. This quiet, charming place sits on a large, green property in the peaceful hills.<br /><br />
                      It’s the perfect place to get away from city noise. You'll find yourself surrounded by lush nature and fresh air.<br /><br />
                      Our rooms are old but full of charm. Staying here is a simple, relaxing trip back in time.
                    </p>
                  </div>
                  <div className="about-body-royal">
                    <div className="about-body-list-royal wow fadeInUp" data-wow-delay="0.4s">
                      <ul>
                        <li>Personalized Journeys Made for You</li>
                        <li>Adventure Experiences for Every Explorer</li>
                        <li>Memorable Escapes That Last Forever</li>
                      </ul>
                    </div>
                    <div className="about-body-content-royal wow fadeInUp" data-wow-delay="0.6s">
                      <p>“Stories from Our Happy Guests”</p>
                      <div className="about-body-btn-royal"><a href="/about" className="btn-default-royal"> About Us</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="our-services-royal bg-section-royal">
          <div className="container">
            <div className="row section-row">
              <div className="col-lg-12">
                <div className="section-title section-title-center">
                  <h3 className="wow fadeInUp">Our Services</h3>
                  <h2 className="text-effect" data-cursor="-opaque">50 Fables: Where your stay writes a new, unforgettable chapter</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {[
                { title: "Estate Garden Tour", img: "1", link: "/service/estate-garden-tour" },
                { title: "Outdoor Adventures", img: "2", link: "/discover/outdoor-adventures" },
                { title: "Family & Group Activities", img: "3", link: "/discover/family-group" },
                { title: "Natural pools", img: "4", link: "/discover/private-pool" }
              ].map((service, idx) => (
                <div key={idx} className="col-xl-3 col-lg-6 col-md-6">
                  <div className="service-item-royal wow fadeInUp" data-wow-delay={`${idx * 0.2}s`}>
                    <div className="service-image-royal">
                      <div className="service-img-royal">
                        <Link href={service.link} data-cursor-text="View">
                          <figure><img loading="lazy" src={`/images/service-image-royal-${service.img}.jpg`} alt="" /></figure>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content-body-royal">
                      <div className="service-content-royal">
                        <h3><Link href={service.link}>{service.title}</Link></h3>
                        <p>Sleep under the stars with the comfort of Glamping home.</p>
                      </div>
                      <div className="service-btn-royal"><Link href={service.link} className="btn-default-royal">Read More</Link></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Adventure Section */}
        <div className="our-adventure-royal">
          <div className="container">
            <div className="row section-row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div className="section-title">
                  <h3 className="wow fadeInUp">My Adventure</h3>
                  <h2 className="text-effect" data-cursor="-opaque">Find your adventure and escape the ordinary today</h2>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
                  <a href="/contact" className="btn-default-royal">Start Your Journey</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="adventure-box-list-royal">
                  {/* Adventure Box 1 */}
                  <div className="adventure-box-1-royal wow fadeInUp">
                    <div className="adventure-box-header-royal">
                      <h3>Step Into Nature's Heart and Begin Writing Your Unique Story of Adventure & Discovery</h3>
                    </div>
                    <div className="adventure-box-btn-royal">
                      <Link href="/about" className="btn-default-royal">Learn More About</Link>
                    </div>
                  </div>

                  {/* Adventure Box 2 */}
                  <div className="adventure-box-2-royal wow fadeInUp" data-wow-delay="0.2s">
                    <div className="advrnture-box-image-royal">
                      <figure><img loading="lazy" src="/images/adventure-image-1-royal.jpg" alt="" /></figure>
                      <div className="adventure-content-body-royal">
                        <div className="adventure-info-content-royal">
                          <p>Every adventure is more than just a trip - it's a story waiting to be written. My Adventure is all about creating unforgettable</p>
                        </div>
                        <div className="adventure-info-footer-royal">
                          <div className="adventure-info-list-royal">
                            <ul>
                              <li><img src="/images/icon-adventure-info-list-royal.svg" alt="" />Luxury Stays in Nature</li>
                            </ul>
                          </div>
                          <div className="adventure-info-btn-royal">
                            <Link href="/contact"><img src="/images/arrow-primary-royal.svg" alt="" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Adventure Box 3 */}
                  <div className="adventure-box-3-royal box-3 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="advrnture-box-image-royal">
                      <figure className="image-anime">
                        <img loading="lazy" src="/images/adventure-image-2-royal.jpg" alt="" />
                      </figure>
                      <div className="adventure-content-body-royal">
                        <div className="adventure-info-footer-royal">
                          <div className="adventure-info-list-royal">
                            <ul>
                              <li><img src="/images/icon-adventure-info-list-royal.svg" alt="" />Eco-Friendly</li>
                            </ul>
                          </div>
                          <div className="adventure-info-btn-royal">
                            <Link href="/contact"><img src="/images/arrow-primary-royal.svg" alt="" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="adventure-box-content-royal">
                      <p>Travel responsibly without sacrificing comfort. Our eco-conscious glamping experiences</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="adventure-counter-box-royal wow fadeInUp" data-wow-delay="0.2s">
                  <div className="adventure-counter-title-royal">
                    <h3>Our Home Stay Captured in Numbers</h3>
                  </div>
                  <div className="adventure-counter-list-royal">
                    {[
                      { num: "550", suffix: "+", label: "Unique Stories" },
                      { num: "10", suffix: "/10", label: "Comfort Rating" },
                      { num: "24", suffix: "/7", label: "Guest Support" },
                      { num: "5", suffix: "*", label: "Breakfast" },
                      { num: "100", suffix: "+", label: "Outdoor Activities" }
                    ].map((counter, idx) => (
                      <div key={idx} className="adventure-counter-item-royal">
                        <h2><span className="counter">{counter.num}</span>{counter.suffix}</h2>
                        <p>{counter.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discover Wayanad */}
        <div className="our-services bg-section">
          <div className="container">
            <div className="row section-row">
              <div className="col-lg-12">
                <div className="section-title section-title-center">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">Gods own Country</h3>
                    <h2 className="text-effect" data-cursor="-opaque">Discover Wayanad</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="services-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      {[
                        { title: "Chembra Peak", img: "5", link: "/discover/chembra-peak", text: "Hike up the rugged terrains of the Chembra Peak located 2,100 metres above sea level on the southern part of Wayanad." },
                        { title: "Tholpetty", img: "2", link: "/discover/tholpetty", text: "Wayanad Wildlife Sanctuary is spread across 344 square kms with four ranges namely Sulthan Bathery, Muthanga, Kurichiat and Tholpetty." },
                        { title: "Karlad Lake", img: "3", link: "/discover/karlad-lake", text: "Karlad Lake is located in Thariode, which is around 16 km away from Kalpetta." },
                        { title: "Kanthampara Falls", img: "4", link: "/discover/kanthampara-falls", text: "A beautiful waterfall situated about 22 km away from Kalpetta." },
                        { title: "Thirunelli Temple", img: "1", link: "/discover/thirunelli", text: "It is an ancient temple dedicated to Lord Maha Vishnu beside the Brahmagiri hills in Kerala." }
                      ].map((item, idx) => (
                        <div key={idx} className="swiper-slide">
                          <div className="service-item">
                            <div className="service-item-image">
                              <Link href={item.link} data-cursor-text="View">
                                <figure><img loading="lazy" src={`/images/service-image-${item.img}.jpg`} alt={item.title} /></figure>
                              </Link>
                            </div>
                            <div className="service-item-body">
                              <div className="service-item-content">
                                <h3><Link href={item.link}>{item.title}</Link></h3>
                                <p>{item.text}</p>
                              </div>
                              <div className="service-readmore-btn">
                                <Link href={item.link} className="readmore-btn">Read More</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="service-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="our-testimonials-royal bg-section-royal" style={{ padding: "80px 0" }}>
          <div className="container">
             <div className="row section-row">
                <div className="col-lg-12">
                    <div className="section-title section-title-center">
                        <h3 className="wow fadeInUp">Our Testimonials</h3>
                        <h2 className="text-effect" data-cursor="-opaque">Real experiences, real memories in 50 Fables</h2>
                    </div>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="testimonial-slider-royal">
                  <div className="swiper">
                    <div className="swiper-wrapper" data-cursor-text="Drag">
                      {[
                        { 
                          quote: "Truly Memorable Experience", 
                          text: "I recently stayed at 50 Fables and had a truly memorable experience. It's a charming 90-year-old home beautifully converted into a serviced villa. The place is spotless and well maintained.", 
                          author: "Krishnachandran P.K" 
                        },
                        { 
                          quote: "Exceptional Hospitality", 
                          text: "A home away from home. A beautifully maintained property by Mr Tomy. The hospitality of Mr Tomy is beyond words. Beautiful view from the balcony and a must visit place in Wayanad.", 
                          author: "Chitra Nair" 
                        },
                        { 
                          quote: "A Wonderful Family Stay", 
                          text: "Hospitality made us feel truly at home. Special thanks to Tomy sir for being such a warm, attentive, and gracious host. The serene private pool was the highlight for us—clean, calm, and incredibly relaxing.", 
                          author: "Abhishek Chakravarty" 
                        },
                        { 
                          quote: "Great Stay & Wonderful Meals", 
                          text: "Great stay at Tomy’s. It’s well furnished, well equipped, clean and well maintained. Tomy and Jobby were really helpful and prepared us meals which were wonderful. Highly recommend!", 
                          author: "Sebin Thomas" 
                        }
                      ].map((testi, idx) => (
                        <div key={idx} className="swiper-slide">
                          <div className="testimonial-item-royal">
                            <div className="testimonial-quote-royal">
                              <img src="/images/testimonial-quote-royal.svg" alt="" />
                            </div>
                            <div className="testimonial-body-royal">
                              <div className="testimonial-content-royal">
                                <h3>“{testi.quote}”</h3>
                                <p>{testi.text}</p>
                              </div>
                              <div className="testimonial-author-royal">
                                <div className="author-content-royal">
                                  <h3>{testi.author}</h3>
                                  <p>Verified Guest</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="testimonial-pagination-royal"></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
                  <ul>
                    <li><span className="counter">4.9</span></li>
                    <li>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <i key={s} className="fa-solid fa-star"></i>
                      ))}
                    </li>
                    <li>100+ Verified Reviews</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Ticker Section */}
        <div className="scrolling-ticker-section">
            <div className="scrolling-ticker-box">
                <div className="scrolling-content">
                    <span>Discover Wayanad</span>
                    <span>•</span>
                    <span>Heritage Homestay</span>
                    <span>•</span>
                    <span>Private Pool</span>
                    <span>•</span>
                    <span>90 Year Old Fables</span>
                    <span>•</span>
                    <span>Sustainable Luxury</span>
                    <span>•</span>
                    <span>Wayanad Retreat</span>
                </div>
                <div className="scrolling-content">
                    <span>Discover Wayanad</span>
                    <span>•</span>
                    <span>Heritage Homestay</span>
                    <span>•</span>
                    <span>Private Pool</span>
                    <span>•</span>
                    <span>90 Year Old Fables</span>
                    <span>•</span>
                    <span>Sustainable Luxury</span>
                    <span>•</span>
                    <span>Wayanad Retreat</span>
                </div>
            </div>
        </div>

        {/* Instagram Feed */}
        <div className="instagram-footer dark-glass-ig" style={{ padding: "80px 0" }}>
          <div className="container">
            <div className="instagram-footer-header wow fadeInUp">
              <h3>Follow Us on Instagram</h3>
              <p>Real experiences, real memories.</p>
              <a href="https://www.instagram.com/50fables/" target="_blank" className="ig-btn-view">
                <i className="fa fa-instagram"></i> View More @50fables
              </a>
            </div>
            
            <div className="ig-feed-grid">
              {[
                { img: "50fables-26_resized.webp", type: "video", delay: "0.1s" },
                { img: "50fables-24_resized.webp", type: "image", delay: "0.2s" },
                { img: "50fables-23_resized.webp", type: "carousel", delay: "0.3s" },
                { img: "50fables-25_resized.webp", type: "image", delay: "0.4s" },
                { img: "50fables-22_resized.webp", type: "video", delay: "0.5s" },
                { img: "50fables-28_resized.webp", type: "image", delay: "0.6s" }
              ].map((item, idx) => (
                <a key={idx} href="https://www.instagram.com/50fables/" target="_blank" className="ig-item wow fadeInUp" data-wow-delay={item.delay}>
                  {item.type === "video" && <div className="ig-type-indicator"><i className="fa fa-play"></i></div>}
                  {item.type === "carousel" && <div className="ig-type-indicator"><i className="fa fa-clone"></i></div>}
                  <img loading="lazy" src={`/images/img/${item.img}`} alt={`Instagram Post ${idx + 1}`} />
                  <div className="ig-overlay">
                    <div className="ig-stats">
                      <span><i className="fa fa-heart"></i> 100+</span>
                      <span><i className="fa fa-comment"></i> 10+</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>


    </>
  );
}
