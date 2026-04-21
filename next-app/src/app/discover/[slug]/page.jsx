
import { notFound } from "next/navigation";
import Link from "next/link";

const discoverData = {
  "chembra-peak": {
    title: "Chembra Peak",
    breadcrumb: "Skyline Wayanad",
    img: "/images/service-image-5.jpg",
    meta: { location: "14 km from Kalpetta", duration: "Recommended: 4-5 Hours" },
    heading: "The Heart of the Valley",
    description: "Chembra Peak is the highest point in Wayanad, standing tall at 2,100 meters above sea level. It is globally recognized for the heart-shaped crystal-clear lake, 'Hridaya Saras', located mid-way to the peak, which is believed to have never dried up.",
    content: "Trekking to Chembra is a moderately challenging but highly rewarding experience. As you ascend through the rolling misty grasslands and rugged terrain, the entire expanse of Wayanad opens up below you. On a clear day, the views can reach as far as the Kozhikode and Malappuram districts.",
    tip: "Trekking permits are limited to 200 people per day. We strongly suggest arriving at the forest office at Meppadi by 7:00 AM to secure yours. Trekking up to the very peak is currently restricted due to conservation; the endpoint is usually the heart lake.",
    subHeading: "Trekker's Paradise",
    subContent: "The trek involves a steady climb through beautiful tea gardens and mountain slopes. A forest-approved guide is mandatory and will be provided by the forest department at the base of the trek. The route is physically demanding but offers some of the most dramatic landscapes in all of Kerala.",
    essentials: [
      { label: "Timings", value: "7:00 AM - 12:00 PM (Permit issue start)." },
      { label: "Trekking Fee", value: "Approx. ₹750 for a group of 10." },
      { label: "Provisions", value: "Wear sturdy trekking boots. Carry water." },
      { label: "Best Season", value: "September to March." }
    ],
    sidebarCta: { label: "Inquire for Trek Support", link: "/contact" }
  },
  "tholpetty": {
    title: "Tholpetty Sanctuary",
    breadcrumb: "Wild Wayanad",
    img: "/images/service-image-2.jpg",
    meta: { location: "18 km from 50 Fables", duration: "Recommended: 3-4 Hours" },
    heading: "The Pulse of the Forest",
    description: "Part of the Nilgiri Biosphere Reserve, the Tholpetty Wildlife Sanctuary is one of Wayanad's most popular safari ranges. Spread across 344 square kilometers of pristine deciduous forest, it is a haven for those who seek the thrill of seeing elephants, tigers, and leopards in their natural habitat.",
    content: "Your safari journey begins at the park entrance, where you board an authorized forest jeep. As you delve deeper into the canopy, keep your eyes peeled for the majestic Malabar Giant Squirrel, the Asian elephant, and various deer species. The air here is filled with the scent of wild cardamom and the calls of exotic birds like the Great Malabar Great Pied Hornbill.",
    tip: "Safaris are first-come, first-served. We recommend arriving at the ticket counter by 6:00 AM (Morning) or 2:00 PM (Afternoon) to secure your spot. Jeeps are mandatory.",
    subHeading: "Biodiversity Hotspot",
    subContent: "Beyond the mammals, Tholpetty is home to over 200 species of birds and a myriad of reptiles and butterflies. The lake within the sanctuary serves as a vital watering hole and is a prime spot for observing wildlife activity during the early hours of the day.",
    essentials: [
      { label: "Safari Times", value: "7:00 AM - 10:00 AM | 3:00 PM - 5:00 PM" },
      { label: "Safari Fee", value: "Varies (~₹600 - ₹1000 per jeep)." },
      { label: "Guidelines", value: "Do not feed animals. Keep noise to a minimum." },
      { label: "Best Season", value: "November to May." }
    ],
    sidebarCta: { label: "Inquire for Transport", link: "/contact" }
  },
  "outdoor-adventures": {
    title: "Outdoor Adventures",
    breadcrumb: "Active & Wild",
    img: "/images/adventure-image-1-royal.jpg",
    meta: { location: "Around 50 Fables", duration: "Recommended: Flexible" },
    heading: "The Call of the Wild",
    description: "Staying at 50 Fables means you're centrally located to some of the most stunning outdoor experiences in Wayanad. Our 3.5-acre plantation itself is just the beginning of a larger trek through the Western Ghats.",
    content: "Join local guides for morning hikes through the rolling hills that border our estate. We also arrange trips to the Tholpetty Wildlife Sanctuary, only a short drive away.",
    tip: "Always carry a compass and stay with your guide while exploring the deeper forest trails.",
    subHeading: "Adventure from Your Doorstep",
    subContent: "Every adventure begins right here at 50 Fables. From morning nature walks to guided wildlife safaris, we curate experiences that connect you deeply with the forests of Wayanad.",
    essentials: [
      { label: "Activity", value: "Mountain Trekking, Wildlife Safari" },
      { label: "Distance", value: "Tours start directly from the property" },
      { label: "Difficulty", value: "Varies from easy walks to moderate hikes" }
    ],
    sidebarCta: { label: "Book an Adventure", link: "/contact" }
  },
  "family-group": {
    title: "Family & Group Stays",
    breadcrumb: "Connection & Heritage",
    img: "/images/service-image-royal-3.jpg",
    meta: { location: "Exclusive Estate", duration: "Stay: Recommended 3+ Days" },
    heading: "A Multi-Generational Sanctuary",
    description: "Our 3.5-acre estate and 90-year-old heritage architecture offer the perfect backdrop for large groups. Whether it's a family reunion, a friends' getaway, or a small corporate retreat, 50 Fables provides both private corners and vast gathering spaces.",
    content: "Vast lawns for group games, communal dining with traditional Kerala meals, and campfire storytelling sessions foster deep connections.",
    tip: "Book the entire property for a truly exclusive and intimate gathering experience.",
    subHeading: "Built for Togetherness",
    subContent: "The heritage home accommodates multiple generations under one roof. From grandparents rocking on the veranda to children discovering the estate's hidden corners, every member of your group will find their own story here.",
    essentials: [
      { label: "Capacity", value: "Multiple suites and cottage rooms" },
      { label: "Features", value: "Bonfire, Outdoor Dinners, Heritage Dining" },
      { label: "Activities", value: "Outdoor Games, Storytelling" }
    ],
    sidebarCta: { label: "Plan a Group Stay", link: "/contact" }
  },
  "private-pool": {
    title: "The Private Pool",
    breadcrumb: "A Fable of Water",
    img: "/images/service-single-img.jpg",
    meta: { location: "Infinity Deck", duration: "Open: 7:00 AM - 9:00 PM" },
    heading: "The Antigravity Experience",
    description: "At 50 Fables, we believe that true luxury is the ability to escape the weight of the modern world. Our private pool is designed as a sanctuary where 'Time Defies Gravity'. Tucked away in 3.5 acres of lush greenery, the pool offers a seamless blend of traditional Kerala aesthetics and contemporary refreshment.",
    content: "Experience the unique blend of history and luxury. Whether it's a refreshing morning dip amidst the mist or a serene evening swim under the star-lit Wayanad sky, every moment here is a 'Fable' waiting to be lived.",
    tip: "The pool provides total privacy and is filtered naturally to maintain a pristine environment.",
    subHeading: "Your Private Retreat",
    subContent: "The pool area is entirely secluded and surrounded by lush foliage. Enjoy the silence broken only by birdsong and the soft splash of water — a rare luxury in today's world.",
    essentials: [
      { label: "Type", value: "Crystal Clear Infinity Pool" },
      { label: "Privacy", value: "100% Secluded from Outside View" },
      { label: "Architecture", value: "Ancient Stone-inspired Design" }
    ],
    sidebarCta: { label: "Reserve Your Stay", link: "/contact" }
  },
  "karlad-lake": {
    title: "Karlad Lake",
    breadcrumb: "Scenic Wayanad",
    img: "/images/service-image-3.jpg",
    meta: { location: "16 km from 50 Fables", duration: "Recommended: 2 Hours" },
    heading: "The Adventure Lakeside",
    description: "Karlad Lake is one of the most serene and naturally beautiful freshwater lakes in Kerala. Located in Thariode, it is the second largest lake in Wayanad and is famous for its adventure-packed lakeside experience.",
    content: "Unlike the busier Banasura Sagar Dam, Karlad Lake offers a more intimate connection with nature. It is heavily utilized for adventure sports such as zip-lining across the lake, kayaking, bamboo rafting, and rock climbing. The lake is surrounded by bamboo groves and lush greenery, making it a perfect spot for photography and bird watching.",
    tip: "Wear comfortable shoes if you plan to walk the perimeter trail or engage in climbing. Zip-lining across the lake is a MUST for adventure seekers.",
    subHeading: "Adventure Hub",
    subContent: "The Wayanad Adventure Camp is located right on the banks of Karlad Lake. Whether you want to quietly paddle a kayak or experience the adrenaline of the longest zip line in South India, this place has something for everyone in the family.",
    essentials: [
      { label: "Timings", value: "9:00 AM - 5:30 PM" },
      { label: "Entry Fee", value: "Adults: ₹30 | Activity fees extra." },
      { label: "Activities", value: "Zip lining, Kayaking, Boating, Archery." },
      { label: "Best Season", value: "October to April." }
    ],
    sidebarCta: { label: "Request Taxi", link: "/contact" }
  },
  "kanthampara-falls": {
    title: "Kanthampara Falls",
    breadcrumb: "Refreshing Wayanad",
    img: "/images/service-image-4.jpg",
    meta: { location: "22 km from Kalpetta", duration: "Recommended: 1.5 Hours" },
    heading: "The Gentle Cascade",
    description: "Kanthampara Waterfalls is known for its peaceful and less-crowded atmosphere compared to its famous sibling, Soojipara. This gentle waterfall is located approximately 22 km away from Kalpetta and is an ideal spot for a relaxing family outing.",
    content: "Standing at a height of about 30 meters, the waterfall cascades down in two steps, creating a natural pool at the base where visitors can safely enjoy the cool, mountain water. It is a perfect picnic spot surrounded by lush tea gardens and coffee plantations.",
    tip: "The path to the waterfall is quite easy to navigate, making it accessible for families with children. Combine this visit with a tea garden walk nearby.",
    subHeading: "Pristine Environment",
    subContent: "The beauty of Kanthampara lies in its simplicity. It is relatively easy to reach and provides a great backdrop for photography. The drive to the falls through the winding roads of Wayanad is an experience in itself, with endless views of the tea estates.",
    essentials: [
      { label: "Timings", value: "9:00 AM - 5:00 PM" },
      { label: "Entry Fee", value: "Adults: ₹40 | Children: ₹10." },
      { label: "Tip", value: "Carry your own water and small snacks." },
      { label: "Best Season", value: "Post-monsoon (September to February)." }
    ],
    sidebarCta: { label: "Request Taxi", link: "/contact" }
  },
  "thirunelli": {
    title: "Thirunelli Temple",
    breadcrumb: "Sacred Wayanad",
    img: "/images/service-image-1.jpg",
    meta: { location: "32 km from 50 Fables", duration: "Recommended: 2 Hours" },
    heading: "The Kashi of the South",
    description: "Tucked away in the folds of the Brahmagiri hills, the Thirunelli Temple is an ancient sanctuary dedicated to Lord Maha Vishnu. Known as the 'Sahyamalaka Kshetram' or the Kashi of the South, this temple is a marvel of medieval temple architecture and spiritual significance.",
    content: "The temple is unique because the idol was installed by Brahma himself. It is also famous for the Papanasini river, which flows near the temple. A dip in its holy waters is believed to wash away all sins. The temple's surroundings, with dense forests and mountain streams, offer a profound sense of peace that resonates with every visitor.",
    tip: "Aim to reach by 7:30 AM to witness the ritual bath in Papanasini and the morning puja. The drive through the Nagarahole wildlife sanctuary is breath-taking.",
    subHeading: "Architectural Splendor",
    subContent: "Observe the 30 granite pillars that support the temple's structure, each intricately carved with traditional motifs. The surrounding stone aqueduct, which brings water from the hills to the temple tank, is a testament to the engineering prowess of a bygone era.",
    essentials: [
      { label: "Timings", value: "5:30 AM - 12:30 PM | 5:30 PM - 8:00 PM" },
      { label: "Dress Code", value: "Traditional attire recommended (Sari/Dhoti)." },
      { label: "Photography", value: "Not allowed inside the inner sanctum." },
      { label: "Best Season", value: "September to March." }
    ],
    sidebarCta: { label: "Inquire for Taxi", link: "/contact" }
  }
};

export default async function DiscoverPage({ params }) {
  const { slug } = await params;
  const data = discoverData[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <div className="discover-hero" style={{ position: "relative", height: "65vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#1a1a1a", overflow: "hidden" }}>
        <img
          src={data.img}
          alt={data.title}
          style={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: "100%", objectFit: "cover",
            filter: "brightness(0.4)",
            animation: "zoom-effect 20s infinite alternate"
          }}
        />
        <style>{`
          @keyframes zoom-effect { from { transform: scale(1); } to { transform: scale(1.15); } }
          .discover-hero img { transform: scale(1.05); }
          .breadcrumb-custom { font-size: 0.95rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; color: #cbca7b; margin-bottom: 20px; }
          .hero-content-box h1 { font-size: clamp(2.5rem, 8vw, 5rem); font-weight: 800; text-transform: uppercase; letter-spacing: 4px; margin-bottom: 10px; text-shadow: 2px 2px 20px rgba(0,0,0,0.4); }
          .discover-details { padding: 120px 0; background: #fdfdf8; border-radius: 60px 60px 0 0; margin-top: -120px; position: relative; z-index: 10; }
          .info-card { background: #fff; padding: 60px; border-radius: 40px; box-shadow: 0 10px 60px rgba(0,0,0,0.04); margin-bottom: 40px; }
          .discover-meta { display: flex; gap: 40px; margin-bottom: 50px; padding-bottom: 30px; border-bottom: 1px solid #f0f0f0; }
          .meta-item { display: flex; align-items: center; gap: 12px; font-weight: 700; color: #1a1a1a; font-size: 1.1rem; }
          .meta-item i { font-size: 1.4rem; color: #cbca7b; }
          .travel-content h2 { font-weight: 800; margin-bottom: 30px; color: #1a1a1a; font-size: 2.2rem; }
          .travel-content h3 { font-weight: 700; margin: 40px 0 20px; color: #1a1a1a; font-size: 1.5rem; }
          .travel-content p { font-size: 1.15rem; line-height: 1.9; color: #444; margin-bottom: 35px; }
          .highlight-box { background: #f9f9f0; padding: 40px; border-radius: 25px; border-left: 6px solid #cbca7b; margin: 50px 0; font-style: italic; color: #555; }
          .sidebar-widget { background: #fff; padding: 40px; border-radius: 35px; box-shadow: 0 10px 40px rgba(0,0,0,0.03); margin-bottom: 40px; }
          .sidebar-widget h4 { margin-bottom: 25px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #1a1a1a; border-bottom: 3px solid #cbca7b; display: inline-block; padding-bottom: 5px; }
          .transport-btn { display: block; background: #1a1a1a; color: white; text-align: center; padding: 18px; border-radius: 60px; text-decoration: none; font-weight: 800; margin-top: 25px; transition: all 0.4s; }
          .transport-btn:hover { background: #cbca7b; color: #1a1a1a; transform: scale(1.05); }
          @media (max-width: 768px) { .info-card { padding: 40px 25px; } .discover-hero { height: 55vh; } .discover-meta { flex-direction: column; gap: 20px; } }
        `}</style>
        <div className="hero-content-box" style={{ position: "relative", zIndex: 5, textAlign: "center", color: "#fff" }}>
          <div className="breadcrumb-custom">{data.breadcrumb}</div>
          <h1>{data.title}</h1>
        </div>
      </div>

      {/* Details */}
      <section className="discover-details">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="info-card">
                <div className="discover-meta">
                  <div className="meta-item"><i className="fa fa-map-marker-alt"></i> {data.meta.location}</div>
                  <div className="meta-item"><i className="fa fa-clock"></i> {data.meta.duration}</div>
                </div>
                <div className="travel-content">
                  <h2>{data.heading}</h2>
                  <p>{data.description}</p>
                  <p>{data.content}</p>
                  <div className="highlight-box">
                    <strong>Travel Tip:</strong> {data.tip}
                  </div>
                  {data.subHeading && <h3>{data.subHeading}</h3>}
                  {data.subContent && <p>{data.subContent}</p>}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="discovery-sidebar">
                <div className="sidebar-widget">
                  <h4>Visitor Essentials</h4>
                  <ul className="list-unstyled mt-3">
                    {data.essentials.map((item, i) => (
                      <li key={i} className="mb-3"><strong>{item.label}:</strong> {item.value}</li>
                    ))}
                  </ul>
                </div>
                {data.sidebarCta && (
                  <div className="sidebar-widget">
                    <h4>Plan Your Visit</h4>
                    <p>We can arrange transport, guides, and logistics to make your experience seamless and memorable.</p>
                    <Link href={data.sidebarCta.link} className="transport-btn">{data.sidebarCta.label}</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
