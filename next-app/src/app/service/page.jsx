"use client";

import Link from 'next/link';
import { useState } from 'react';

const resortServices = [
  {
    slug: "estate-garden-tour",
    title: "Estate Garden Tour",
    description: "Explore our lush aromatic spice plantations and vibrant floral displays within our 3.5-acre heritage estate.",
    img: "/images/service-image-royal-1.jpg",
    icon: "fa-leaf"
  },
  {
    slug: "outdoor-adventures",
    title: "Outdoor Adventures",
    description: "From sunrise treks to night campfires, experience the thrills of the wild with our curated adventure packages.",
    img: "/images/service-image-royal-2.jpg",
    icon: "fa-mountain"
  },
  {
    slug: "family-group-activities",
    title: "Family & Group Highlights",
    description: "Bond over outdoor games, traditional meals, and storytelling sessions designed for multi-generational joy.",
    img: "/images/service-image-royal-3.jpg",
    icon: "fa-users"
  },
  {
    slug: "natural-pools",
    title: "Natural Stone Pools",
    description: "Refresh your body and soul in our eco-friendly pool, where heritage architecture meets weightless luxury.",
    img: "/images/service-image-royal-4.jpg",
    icon: "fa-water"
  }
];

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Our Experiences</h1>
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">services</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="page-services py-5">
        <div className="container py-5">
          <div className="row">
            {resortServices.map((service, idx) => (
              <div key={idx} className="col-xl-3 col-md-6 mb-4">
                <div className="service-item wow fadeInUp" data-wow-delay={`${idx * 0.1}s`}>
                  <div className="service-item-image">
                    <Link href={`/service/${service.slug}`} data-cursor-text="Explore">
                      <figure>
                        <img src={service.img} alt={service.title} />
                      </figure>
                    </Link>
                  </div>
                  <div className="service-item-body">
                    <div className="service-item-content">
                      <div className="service-icon mb-3" style={{ fontSize: '2rem', color: '#cbca7b' }}>
                         <i className={`fa ${service.icon}`}></i>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    <div className="service-readmore-btn">
                      <Link href={`/service/${service.slug}`} className="btn-default-royal">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-section-royal text-center text-white">
        <div className="container py-5">
          <h2 className="mb-4">Ready to Create Your Own Story?</h2>
          <p className="lead mb-5">Book your stay at 50 Fables and immerse yourself in these unique Wayanad experiences.</p>
          <Link href="/contact" className="btn-default">Book Your Experience</Link>
        </div>
      </section>
    </main>
  );
}
