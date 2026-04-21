"use client";

import { useState } from 'react';
import Link from 'next/link';

const images = [
  "50fables-16_resized.webp", "50fables-17_resized.webp", "50fables-18_resized.webp",
  "50fables-19_resized.webp", "50fables-20_resized.webp", "50fables-1_resized.webp",
  "50fables-2_resized.webp", "50fables-3_resized.webp", "50fables-4_resized.webp",
  "50fables-5_resized.webp", "50fables-6_resized.webp", "50fables-7_resized.webp",
  "50fables-8_resized.webp", "50fables-9_resized.webp", "50fables-10_resized.webp",
  "50fables-11_resized.webp", "50fables-12_resized.webp", "50fables-13_resized.webp",
  "50fables-14_resized.webp", "50fables-15_resized.webp", "50fables-21_resized.webp",
  "50fables-22_resized.webp", "50fables-23_resized.webp", "50fables-24_resized.webp",
  "50fables-25_resized.webp", "50fables-26_resized.webp", "50fables-27_resized.webp",
  "50fables-28_resized.webp", "50fables-29_resized.webp", "50fables-30_resized.webp",
  "50fables-31_resized.webp", "50fables-32_resized.webp", "50fables-33_resized.webp",
  "50fables-34_resized.webp", "50fables-35_resized.webp", "50fables-36_resized.webp",
  "50fables-37_resized.webp", "50fables-38_resized.webp"
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (img, e) => {
    e.preventDefault();
    setSelectedImage(img);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <>
      <style jsx>{`
        .gallery-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          cursor: pointer;
        }
        .gallery-modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90vh;
        }
        .gallery-modal-content img {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 0 30px rgba(0,0,0,0.5);
        }
        .close-modal-btn {
          position: absolute;
          top: -40px;
          right: -10px;
          background: none;
          border: none;
          color: #fff;
          font-size: 30px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .close-modal-btn:hover {
          transform: scale(1.2) rotate(90deg);
          color: #CBCA7B;
        }
      `}</style>

      <main>
        {/* Page Header */}
        <div className="page-header parallaxie">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-header-box">
                  <h1 className="text-anime-style-3" data-cursor="-opaque">Our gallery</h1>
                  <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/">home</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">our gallery</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Start */}
        <div className="page-gallery">
          <div className="container">
            <div className="row gallery-items page-gallery-box">
              {images.map((img, idx) => (
                <div key={idx} className="col-lg-4 col-6 mb-4">
                  <div className="photo-gallery">
                    <a href={`/images/img/${img}`} onClick={(e) => openLightbox(img, e)} data-cursor-text="View">
                      <figure className="image-anime">
                        <img loading="lazy" src={`/images/img/${img}`} alt={`Gallery image ${idx + 1}`} />
                      </figure>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div className="gallery-modal-overlay" onClick={closeLightbox}>
            <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal-btn" onClick={closeLightbox}>
                <i className="fa fa-times"></i>
              </button>
              <img src={`/images/img/${selectedImage}`} alt="Gallery Preview" />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
