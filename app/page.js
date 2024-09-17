"use client";

import Image from "next/image";
import styles from "./public/page.module.css";

import headerImage from "./public/images/header.png";
import { getFileCards } from "./download_files";
import { GetGalleryImages, getGalleryImages } from "./gallery";
import { useState } from "react";

export default function Home() {
    const cards = getFileCards();

    const gallery = GetGalleryImages();

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Image src={headerImage} alt="Header Image" />
                <h1>Mind the School</h1>
            </header>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#download">Downloads</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <div className={styles.contentSection}>
                <section id="home" className={styles.titleSection}>
                    <p className={styles.pageText}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                        ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum
                        dolor sit amet.
                        <br />
                        Duis autem vel eum iriure dolor in hendrerit in
                        vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et
                        accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait
                        nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat.
                        <br />
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat. Duis autem vel eum iriure dolor in
                        hendrerit in vulputate velit esse molestie consequat,
                        vel illum dolore eu feugiat nulla facilisis at vero eros
                        et accumsan et iusto odio dignissim qui blandit praesent
                        luptatum zzril delenit augue duis dolore te feugait
                        nulla facilisi.
                        <br />
                        Nam liber tempor cum soluta nobis eleifend option congue
                        nihil imperdiet doming id quod mazim placerat facer
                        possim assum. Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat.
                    </p>
                </section>
                <section id="download" className={styles.downloadsSection}>
                    <h2 className={styles.sectionTitle}>Downloads</h2>
                    {cards}
                </section>
                <section id="gallery" className={styles.gallerySection}>
                    <h2 className={styles.sectionTitle}>Image Gallery</h2>
                    <div className={styles.galleryContainer}>
                        <GetGalleryImages />
                    </div>
                </section>
                <section id="contact" className={styles.contactSection}>
                    <h2 className={styles.sectionTitle}>Contact</h2>
                    <ul className={styles.contactList}>
                        <li>
                            <a
                                href="https://www.patreon.com/suitji"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="https://img.icons8.com/ios-filled/50/patreon.png"
                                    alt="Patreon Icon"
                                    width={16}
                                    height={16}
                                    className={styles.svgIcon}
                                />
                                Support me on Patreon
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/SuIT-pub/Mind-the-School"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="https://img.icons8.com/ios-glyphs/30/github.png"
                                    alt="GitHub Icon"
                                    width={16}
                                    height={16}
                                    className={styles.svgIcon}
                                />
                                My GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://suitpub.alwaysdata.net"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="https://suitpub.alwaysdata.net/uploads/images/system/2024-04/profile.png"
                                    alt="Wiki Icon"
                                    width={16}
                                    height={16}
                                />
                                My Wiki Page
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://suit-ji.itch.io/mind-the-school"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="https://img.icons8.com/ios-glyphs/30/itch-io.png"
                                    alt="Itch.io Icon"
                                    width={16}
                                    height={16}
                                    className={styles.svgIcon}
                                />
                                My Itch.io Page
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
