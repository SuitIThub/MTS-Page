"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
    { src: "https://i.ibb.co/7yk0J57/image1.webp", alt: "image0" },
    { src: "https://i.ibb.co/3mTZThy/image0.webp", alt: "image1" },
    { src: "https://i.ibb.co/6PyQkG7/image2.webp", alt: "image2" },
    { src: "https://i.ibb.co/bXhT0qm/image3.webp", alt: "image3" },
    { src: "https://i.ibb.co/dDyYnt0/image4.webp", alt: "image4" },
    { src: "https://i.ibb.co/h7cx851/image5.webp", alt: "image5" },
    { src: "https://i.ibb.co/Ctrx1JC/image6.webp", alt: "image6" },
    { src: "https://i.ibb.co/4ZVc6wm/image7.webp", alt: "image7" },
    // Add more images as needed
];

export function GetGalleryImages() {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    function openLightbox(index) {
        setPhotoIndex(index);
        setIsOpen(true);
    }

    return (
        <>
            {galleryImages.map((image, index) => (
                <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={200}
                    onClick={() => openLightbox(index)}
                    style={{ cursor: "pointer" }}
                />
            ))}
            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={galleryImages.map((image) => ({ src: image.src }))}
                currentIndex={photoIndex}
                onPrev={() =>
                    setPhotoIndex(
                        (photoIndex + galleryImages.length - 1) %
                            galleryImages.length
                    )
                }
                onNext={() =>
                    setPhotoIndex((photoIndex + 1) % galleryImages.length)
                }
            />
        </>
    );
}
