import React, { useState } from 'react';
import styles from '@/styles/certifications.module.scss';

interface Certification {
    id: number;
    title: string;
    issuer: string;
    logo: string;
    issueDate: string;
    expiryDate?: string;
    skills: string[];
}

const CertificationsSection: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const certifications: Certification[] = [
        {
            id: 1,
            title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
            issuer: "Microsoft",
            logo: "/microsoft.png",
            issueDate: "2023",
            skills: ["Generative AI", "Machine Learning", "AI Ethics"]
        },
        {
            id: 2,
            title: "Generative AI Overview For Project Managers",
            issuer: "Project Management Institute",
            logo: "/pmi.png",
            issueDate: "2023",
            skills: ["AI Project Management", "Risk Assessment", "AI Implementation"]
        },
        {
            id: 3,
            title: "ICAgile Certified Professional - Agile Product Ownership",
            issuer: "ICAgile",
            logo: "/icagile.webp",
            issueDate: "2023",
            skills: ["Agile Methodologies", "Product Management", "Stakeholder Management"]
        },
        {
            id: 4,
            title: "Microsoft 365 Certified: Fundamentals",
            issuer: "Microsoft",
            logo: "/microsoft.png",
            issueDate: "2023",
            skills: ["Microsoft 365", "Cloud Services", "Security"]
        },
        {
            id: 5,
            title: "Microsoft certified : Azure Fundamentals",
            issuer: "Microsoft",
            logo: "/microsoft.png",
            issueDate: "2023",
            skills: ["Azure Cloud", "Cloud Infrastructure", "Cloud Security"]
        },
        {
            id: 6,
            title: "Certified Scrum Product Owner (CSPO)",
            issuer: "Scrum Alliance",
            logo: "/scrum.webp",
            issueDate: "2023",
            skills: ["Scrum", "Product Ownership", "Agile Leadership"]
        },
        {
            id: 7,
            title: "Microsoft Certified Systems Administrator: Messaging (MCSA)",
            issuer: "Microsoft",
            logo: "/microsoft.png",
            issueDate: "2023",
            skills: ["Scrum", "Product Ownership", "Agile Leadership"]
        },
        {
            id: 8,
            title: "Microsoft Certified Systems Engineer (MCSE)",
            issuer: "Microsoft",
            logo: "/microsoft.png",
            issueDate: "2023",
            skills: ["Scrum", "Product Ownership", "Agile Leadership"]
        },
        {
            id: 9,
            title: "Amazon Web Services Cloud practitioner",
            issuer: "Amazon Web Service (AWS)",
            logo: "/amazon.png",
            issueDate: "2023",
            skills: ["Scrum", "Product Ownership", "Agile Leadership"]
        },
    ];

    return (
        <section className={styles.certificationsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Certifications</h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.certificationsGrid}>
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className={`${styles.certCard} ${activeCard === cert.id ? styles.active : ''}`}
                            onMouseEnter={() => setActiveCard(cert.id)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <div className={styles.cardFront}>
                                <div className={styles.logoContainer}>
                                    <img src={cert.logo} alt={`${cert.issuer} logo`} className={styles.logo} />
                                </div>
                                <h3 className={styles.certTitle}>{cert.title}</h3>
                                <p className={styles.issuer}>{cert.issuer}</p>
                            </div>

                            <div className={styles.cardBack}>
                                <h4 className={styles.certTitleBack}>{cert.title}</h4>
                                <div className={styles.details}>
                                    <p><strong>Issued:</strong> {cert.issueDate}</p>
                                </div>
                                <div className={styles.skills}>
                                    <p className={styles.skillsTitle}>Key Skills:</p>
                                    <div className={styles.skillTags}>
                                        {cert.skills.map((skill, index) => (
                                            <span key={index} className={styles.skillTag}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;