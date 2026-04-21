"use client";

import { useState } from "react";
import Link from 'next/link';

const wayanadServices = [
  { title: "Thirunelli Temple", img: "1", text: "It is an ancient temple dedicated to Lord Maha Vishnu beside the Brahmagiri hills in Kerala.", link: "/discover/thirunelli" },
  { title: "Tholpetty", img: "2", text: "Wayanad Wildlife Sanctuary is spread across 344 square kms with four ranges namely Sulthan Bathery, Muthanga, Kurichiat and Tholpetty.", link: "/discover/tholpetty" },
  { title: "Karlad Lake", img: "3", text: "Karlad Lake is located in Thariode, which is around 16 km away from Kalpetta.", link: "/discover/karlad-lake" },
  { title: "Kanthampara Falls", img: "4", text: "A beautiful waterfall situated about 22 km away from Kalpetta.", link: "/discover/kanthampara-falls" },
  { title: "Chembra Peak", img: "5", text: "Hike up the rugged terrains of the Chembra Peak located 2,100 metres above sea level on the southern part of Wayanad.", link: "/discover/chembra-peak" }
];

const interactiveItems = [
  { title: "Wayanad's Enchanted Trails", text: "Explore lush trails through the ancient Western Ghats with experienced naturalists who'll share stories of local tribes and the region's rich flora and fauna.", img: "/images/interactive-process-image-1.jpg" },
  { title: "Vast Spice Plantation Routes", text: "Hit adrenaline-pumping trails winding through rolling hills of coffee, cardamom, and pepper, offering thrilling descents and panoramic vistas", img: "/images/interactive-process-image-2.jpg" },
  { title: "The Serene Kabini Backwaters", text: "Glide down scenic backwaters surrounded by wildlife and stunning natural views, offering a peaceful glimpse into rural life near the Kabini River.", img: "/images/interactive-process-image-3.jpg" },
  { title: "Edakkal Cave History", text: "Lay back under a clear, open sky and explore the constellations, or discover the prehistoric rock art and ancient history within the famous Edakkal Caves.", img: "/images/img/50fables-18_resized.webp" }
];

export default function WayanadPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <style jsx>{`
        .interactive-process-image {
          transition: opacity 0.7s ease, transform 0.7s ease !important;
        }
      `}</style>

      <main>
        {/* Page Header */}
        <div className="page-header parallaxie">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-header-box">
                  <h1 className="text-anime-style-3" data-cursor="-opaque">Discover Wayanad</h1>
                  <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">discover wayanad</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Services */}
        <div className="page-services">
          <div className="container">
            <div className="row">
              {wayanadServices.map((service, idx) => (
                <div key={idx} className="col-xl-3 col-md-6 mb-4">
                  <div className="service-item wow fadeInUp">
                    <div className="service-item-image">
                      <Link href={service.link} data-cursor-text="View">
                        <figure><img src={`/images/service-image-${service.img}.jpg`} alt={service.title} /></figure>
                      </Link>
                    </div>
                    <div className="service-item-body">
                      <div className="service-item-content">
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                      </div>
                      <div className="service-readmore-btn">
                        <Link href={service.link} className="readmore-btn">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Process Section */}
        <div className="interactive interactive-process-layout">
          <div className="interactive-interactive-process-wrapper interactive-wrapper">
            <div className="interactive-con">
              <div className="interactive-con-inner interactive-grid">
                {interactiveItems.map((item, idx) => (
                  <div key={idx} className="interactive-process-item" onMouseEnter={() => setActiveIndex(idx)}>
                    <div className={`interactive-inner-process ${activeIndex === idx ? 'activate' : ''}`}>
                      <div className="process-content-wap">
                        <div className="interactive-process-item-wap">
                          <div className="icon-box"><img src="/images/icon-adventure-item-2.svg" alt="" /></div>
                          <div className="interactive-process-item-content-wap">
                            <h3><a href="#" onClick={(e) => e.preventDefault()}>{item.title}</a></h3>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="interactive-process-list-image">
                {interactiveItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`interactive-process-image img-${idx} ${activeIndex === idx ? 'show' : ''}`}
                    style={{ backgroundImage: `url('${item.img}')`, visibility: activeIndex === idx ? 'visible' : 'hidden' }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>


    </>
  );
}
