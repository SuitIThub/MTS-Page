import Image from "next/image";
import styles from "./public/page.module.css";
import { useState } from "react";
import { versions } from "./public/game_versions";

const platformNames = {
    pc: "PC",
    mac: "Mac",
    android: "Android",
};

const platformIcons = {
    pc: "https://img.icons8.com/ios/50/monitor--v1.png",
    mac: "https://img.icons8.com/ios/50/mac-os--v1.png",
    android: "https://img.icons8.com/ios/50/android-os.png",
};

export function getFileCards() {
    const versionKeys = Object.keys(versions);

    const versionCards = versionKeys
        .map((versionKey) => {
            const version = versions[versionKey];
            const platforms = Object.keys(version.downloadLinkItem);

            const platformCards = platforms
                .map((platform) => {
                    const downloadLinkItem = version.downloadLinkItem[platform];
                    let downloadLink = {};

                    if (typeof downloadLinkItem === "number") {
                        downloadLink.full = `${version.downloadMainLink}#item=${downloadLinkItem}`;
                    } else {
                        downloadLink.full =
                            downloadLinkItem.full !== undefined
                                ? `${version.downloadMainLink}#item=${downloadLinkItem.full}`
                                : null;
                        downloadLink.compressed =
                            downloadLinkItem.compressed !== undefined
                                ? `${version.downloadMainLink}#item=${downloadLinkItem.compressed}`
                                : null;
                    }

                    if (!downloadLink.full && !downloadLink.compressed)
                        return null;

                    return (
                        <div
                            key={`${versionKey}-${platform}`}
                            className={styles.platformCard}
                        >
                            <h4>
                                <Image
                                    src={platformIcons[platform]}
                                    alt={`${platformNames[platform]} icon`}
                                    width={10}
                                    height={10}
                                    className={styles.platformIcon}
                                />
                                {platformNames[platform]}
                            </h4>
                            <div className={styles.downloadButtons}>
                                {downloadLink.full &&
                                    downloadLink.compressed && (
                                        <button
                                            onClick={() =>
                                                (window.location.href =
                                                    downloadLink.full)
                                            }
                                            className={styles.downloadButton}
                                        >
                                            Full Quality
                                        </button>
                                    )}
                                {downloadLink.compressed && (
                                    <button
                                        onClick={() =>
                                            (window.location.href =
                                                downloadLink.compressed)
                                        }
                                        className={styles.downloadButton}
                                    >
                                        Compressed Quality
                                    </button>
                                )}
                                {downloadLink.full &&
                                    !downloadLink.compressed && (
                                        <button
                                            onClick={() =>
                                                (window.location.href =
                                                    downloadLink.full)
                                            }
                                            className={styles.downloadButton}
                                        >
                                            Download
                                        </button>
                                    )}
                            </div>
                        </div>
                    );
                })
                .filter(Boolean);

            if (platformCards.length === 0) return null;

            const [isExpanded, setIsExpanded] = useState(false);

            const handleToggleExpand = () => {
                setIsExpanded(!isExpanded);
                if (!isExpanded) {
                    setTimeout(() => {
                        const element = document.getElementById(versionKey);
                        const container = document.querySelector(
                            `.${styles.downloadsContainer}`
                        );
                        if (element && container) {
                            const elementRect = element.getBoundingClientRect();
                            const containerRect =
                                container.getBoundingClientRect();
                            const offsetLeft =
                                elementRect.left - containerRect.left;
                            const offsetTop =
                                elementRect.top - containerRect.top;
                            container.scrollTo({
                                left: offsetLeft,
                                top: offsetTop,
                                behavior: "smooth",
                            });
                        }
                    }, 300);
                }
            };

            const hasDescription = Boolean(version.description);

            return (
                <div
                    id={versionKey}
                    key={versionKey}
                    className={`${styles.downloadCard} ${
                        isExpanded ? styles.expanded : ""
                    }`}
                >
                    <div className={styles.leftCard}>
                        <div className={styles.mainCardContainer}>
                            <h3>{versionKey}</h3>
                            {version.image && (
                                <Image
                                    src={version.image}
                                    alt={`${versionKey} image`}
                                    className={styles.versionImage}
                                />
                            )}
                            <div className={styles.descriptionContainer}>
                                {hasDescription && (
                                    <button onClick={handleToggleExpand}>
                                        {isExpanded
                                            ? "Hide Details"
                                            : "Show Details"}
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.platformCardsContainer}>
                                {platformCards}
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightCard}>
                        {isExpanded && (
                            <div
                                className={styles.rightCardContent}
                                dangerouslySetInnerHTML={{
                                    __html:
                                        version.description ||
                                        "No description available.",
                                }}
                            />
                        )}
                    </div>
                </div>
            );
        })
        .filter(Boolean);

    return <div className={styles.downloadsContainer}>{versionCards}</div>;
}
