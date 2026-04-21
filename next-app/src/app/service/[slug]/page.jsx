"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useParams } from 'next/navigation';

const serviceDetails = {
  "estate-garden-tour": {
    title: "Estate Garden Tour",
    badge: "Sensory Discovery",
    img: "/images/service-image-royal-1.jpg",
    heading: "Experience the Magic of Nature",
    description: "Immerse yourself in the lush greenery of our estate gardens. A guided tour that takes you through the aromatic spice plantations, vibrant floral displays, and serene water bodies that make 50 Fables a paradise for nature lovers.",
    content: "Welcome to a journey of sensory delight. Our estate garden tour is more than just a walk; it's an educational and soulful experience. You'll learn about the unique flora of Wayanad, the traditional spice harvesting methods, and the sustainable practices we maintain at our resort.",
    features: [
      "Expert Naturalist Guide",
      "Spice Tasting Session",
      "Rare Plant Sightings",
      "Photography Opportunity",
      "2 Hours Guided Walk",
      "Refreshments Included"
    ],
    tip: "Capturing the early morning mist rolling over the coffee plants is a memory you'll cherish forever."
  },
  "outdoor-adventures": {
    title: "Outdoor Adventures",
    badge: "Thrills Await",
    img: "/images/service-image-royal-2.jpg",
    heading: "Unleash Your Inner Explorer",
    description: "Wayanad is a playground for those who seek the thrill of the wild. At 50 Fables, we bring you closer to nature with curated outdoor experiences that blend adventure with the luxury of comfort.",
    content: "Our outdoor adventure program is designed for everyone—from the casual weekend trekker to the seasoned adrenaline junkie. Nestled in the heart of the Western Ghats, our resort serves as the perfect base camp for discovering hidden waterfalls, misty peaks, and dense forest trails.",
    items: [
      { title: "Mountain Trekking", text: "Guided treks to Chembra Peak and Banasura Hill with experienced local guides.", icon: "fa-mountain" },
      { title: "Premium Glamping", text: "Experience the ruggedness of camping with ensuite bathrooms and stunning views.", icon: "fa-campground" },
      { title: "Night Campfire", text: "Gather around a roaring fire under the star-lit sky for storytelling.", icon: "fa-fire" },
      { title: "Wildlife Safaris", text: "Exclusive trips to the Wayanad Wildlife Sanctuary to spot leopards and elephants.", icon: "fa-binoculars" }
    ],
    tip: "A typical adventure day begins with a pre-dawn sunrise trek, followed by a hearty estate-style breakfast."
  },
  "family-group-activities": {
    title: "Family & Group Activities",
    badge: "Better Together",
    img: "/images/service-image-royal-3.jpg",
    heading: "Memories Made Together",
    description: "Our 3.5-acre estate is designed for connection. We provide a space where multi-generational families and groups of friends can find both private peace and collective joy.",
    content: "From traditional outdoor games like 'Nadan Panthu Kali' to evening bonfire sessions, we curate activities that break down modern barriers. The heritage atmosphere of the villa provides the perfect backdrop for long conversations and shared discoveries.",
    features: [
      "Group Outdoor Games",
      "Traditional Kerala Group Dining",
      "Bonfire & Storytelling",
      "Heritage Architecture Tours",
      "Badminton & Local Sports",
      "Quiet Reading Nooks"
    ],
    tip: "Book the entire property for a truly exclusive and intimate family reunion experience."
  },
  "natural-pools": {
    title: "Natural Stone Pools",
    badge: "Weightless Luxury",
    img: "/images/service-image-royal-4.jpg",
    heading: "Where Heritage Meets Water",
    description: "Discover our eco-friendly pool carved with inspiration from ancient stone architecture. It's not just a pool; it's a sanctuary where time defies gravity.",
    content: "Our natural stone pool is tucked away in the dense foliage of the plantation. The water is treated with natural filtration systems to ensure a pristine, chemical-free experience. Whether it's a refreshing morning dip or a serene late-night swim under the stars, the pool offers total privacy.",
    features: [
      "100% Private & Secluded",
      "Eco-friendly Natural Filtration",
      "Ancient Stone-inspired Design",
      "Surrounded by Lush Plantation",
      "Sun-lit Lounge Deck",
      "Pool-side Traditional Snacks"
    ],
    tip: "A late evening swim during a mild Wayanad drizzle is an ethereal experience that defines the magic of 50 Fables."
  }
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const data = serviceDetails[slug];

  if (!data) return notFound();

  return (
    <>
      {/* Service Hero */}
      <div className="service-single-hero" style={{ position: "relative", height: "70vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: "#1a1a1a" }}>
        <img 
          src={data.img} 
          alt={data.title} 
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5)", transform: "scale(1.05)" }} 
        />
        <div className="hero-title-box" style={{ position: "relative", zIndex: 2, textAlign: "center", color: "white", maxWidth: "900px", padding: "0 20px" }}>
          <span style={{ display: "inline-block", background: "#CBCA7B", color: "#1a1a1a", padding: "5px 20px", borderRadius: "50px", fontWeight: 700, textTransform: "uppercase", fontSize: "0.9rem", marginBottom: "20px", letterSpacing: "1px" }}>
            {data.badge}
          </span>
          <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "4px", margin: 0 }}>
            {data.title}
          </h1>
        </div>
      </div>

      {/* Details Section */}
      <section className="service-details-section" style={{ background: "#fff", padding: "120px 0", position: "relative", marginTop: "-100px", zIndex: 5, borderRadius: "60px 60px 0 0", boxShadow: "0 -20px 50px rgba(0,0,0,0.1)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="details-card" style={{ background: "#fff", borderRadius: "30px", padding: "60px", boxShadow: "0 15px 60px rgba(0,0,0,0.06)", marginBottom: "40px" }}>
                <h2 className="mb-4" style={{ fontWeight: 800 }}>{data.heading}</h2>
                <p className="lead mb-4" style={{ fontSize: "1.2rem", color: "#444" }}>{data.description}</p>
                <p style={{ lineHeight: 1.9, color: "#555", fontSize: "1.1rem" }}>{data.content}</p>

                {data.items ? (
                  <div className="adventure-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", margin: "40px 0" }}>
                    {data.items.map((item, i) => (
                      <div key={i} className="adventure-item-box" style={{ background: "#fbfbf4", padding: "30px", borderRadius: "20px", border: "1px solid rgba(203, 202, 123, 0.2)" }}>
                        <i className={`fa ${item.icon}`} style={{ fontSize: "2rem", color: "#CBCA7B", marginBottom: "15px", display: "block" }}></i>
                        <h4 style={{ fontWeight: 700 }}>{item.title}</h4>
                        <p style={{ fontSize: "0.95rem" }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="service-info-list" style={{ listStyle: "none", padding: 0, margin: "40px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                    {data.features.map((feat, i) => (
                      <li key={i} style={{ padding: "15px 20px", background: "#fdfdfd", borderLeft: "4px solid #CBCA7B", borderRadius: "0 10px 10px 0", fontSize: "1.05rem", color: "#555" }}>
                        <i className="fa fa-check-circle me-2" style={{ color: "#CBCA7B" }}></i> {feat}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="highlight-box" style={{ background: "#cbca7b1a", padding: "30px", borderRadius: "20px", borderLeft: "5px solid #CBCA7B", marginTop: "40px", fontStyle: "italic" }}>
                  <strong>Travel Tip:</strong> {data.tip}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="service-sidebar" style={{ position: "sticky", top: "120px" }}>
                <div className="booking-widget" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #333 100%)", color: "white", padding: "50px 40px", borderRadius: "30px", textAlign: "center" }}>
                  <h3 style={{ color: "#CBCA7B", fontWeight: 800 }}>Pre-book This Experience</h3>
                  <p>Enhance your stay by booking this activity in advance. We arrange everything for you.</p>
                  <Link href="/contact" className="btn-default-royal" style={{ display: "inline-block", background: "#CBCA7B", color: "#1a1a1a", padding: "18px 45px", borderRadius: "60px", fontWeight: 800, textDecoration: "none", marginTop: "20px" }}>
                    Enquire Now
                  </Link>
                </div>

                <div className="details-card p-4 mt-4" style={{ borderRadius: "20px" }}>
                  <h4>Quick Help</h4>
                  <p className="mb-1"><i className="fa fa-phone me-2"></i> +91 94462 57408</p>
                  <Link href="mailto:Tomynupul@gmail.com" style={{ color: "#CBCA7B" }}>Tomynupul@gmail.com</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
