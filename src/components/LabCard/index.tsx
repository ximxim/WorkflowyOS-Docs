import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

interface LabCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

interface LabCardGridProps {
  children: React.ReactNode;
}

interface ComingSoonSectionProps {
  tool: string;
}

export function LabCard({ title, imageSrc, imageAlt, href }: LabCardProps) {
  const resolvedSrc = useBaseUrl(imageSrc);

  return (
    <Link to={href} className={styles.labCardLink}>
      <div className={styles.labCard}>
        <div className={styles.imageContainer}>
          <img src={resolvedSrc} alt={imageAlt} className={styles.cardImage} />
        </div>
        <div className={styles.cardTitle}>{title}</div>
      </div>
    </Link>
  );
}

export function LabCardGrid({ children }: LabCardGridProps) {
  return <div className={styles.labCardGrid}>{children}</div>;
}

export function ComingSoonSection({ tool }: ComingSoonSectionProps) {
  return (
    <div className={styles.comingSoon}>
      <p className={styles.comingSoonText}>
        {tool} labs are coming soon. Check back for hands-on exercises.
      </p>
    </div>
  );
}
