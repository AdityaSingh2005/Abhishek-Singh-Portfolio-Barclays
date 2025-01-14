import React from 'react';
import styles from '@/styles/Timeline.module.scss';

interface Experience {
    id: number;
    role: string;
    company: string;
    logo: string;
    period: string;
    description: string | string[];
}

const Timeline = () => {
    const experiences: Experience[] = [
        {
            id: 1,
            role: "Global Head of Container Platform & App Hosting",
            company: "Barclays",
            logo: "/barclays.webp",
            period: "October 2024 - Present",
            description: ""
        },
        {
            id: 2,
            role: "VP, Global Head Of Windows",
            company: "Barclays",
            logo: "/barclays.webp",
            period: "April 2022 - October 2024",
            description: "Responsible for leadership of the Microsoft Windows Server Product for Barclays bank globally. This includes delivery of Engineering Roadmap, Operational efficiency for the centralized services, commercial and financial consideration of the Windows Server product stack, risk and governance agenda, business continuity management of products and service offering, vendor engagement and management."
        },
        {
            id: 3,
            role: "VP, Product Lifecycle Manager",
            company: "Barclays",
            logo: "/barclays.webp",
            period: "March 2020 - April 2022",
            description: [
                "Product Lifecycle Manager, Vice President for products; Access & Identity (Azure Active Directory), SharePoint Online, Data Governance, Intune, & Mobile Platforms.",
                "Facilitate and organize daily standup-up meetings, retrospectives, sprint and release planning, demos and other activities as needed.",
                "Work with Product Owner and business analyst to groom and prioritize backlog for upcoming releases and iterations."
            ]
        },
        {
            id: 4,
            role: "Senior Application Development Specialist",
            company: "IQVIA",
            logo: "/iqvia.png",
            period: "September 2019 - March 2022",
            description: "Actively involved in the formation of software development group of approx. 50 FTE in IQVIA in Noida in a very short time. It includes the formation of Org hierarchy from scratch which includes Architects, Developers, Automation experts, DevOps.",
        },
        {
            id: 5,
            role: "Operations Manager",
            company: "Barclays",
            logo: "/barclays.webp",
            period: "April 2012 - September 2019",
            description: [
                "Worked as a Senior Operations Manager Service Delivery for 24x7 Global Server Service Operations Team. Led APAC resources and Global Team. Also worked as Deputy Head for Global Windows Server Team in Pune and Regional Head of Global Windows Server Team.",
                "Accountable for initiating, designing, and Leading Software development and Automation projects, adopting best coding and DevOps practices.",
                "Developed Global Strategy including short and long term plans, governance structure, roles, and responsibilities."
            ]
        },
        {
            id: 6,
            role: "Technical Lead",
            company: "Congnizant",
            logo: "/cognizant.png",
            period: "January 2010 - April 2012",
            description: "Supported entire Windows infrastructure for the customer in onshore-offshore model and resolved incident tickets, implement changes & attend major incident triage calls."
        },
        {
            id: 7,
            role: "Project Engineer",
            company: "Wipro",
            logo: "/wipro.svg",
            period: "December 2006 - January 2010",
            description: "I have worked on various projects involving Windows support, Security monitoring, patch management, compliance monitoring and ITIL processes. And worked with leading clients in Telecom, Manafacturing & Banking domain. I have worked on project design consultancy for Active Directory related components."
        }
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Professional Experience
                <span className={styles.underline}></span>
            </h2>
            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div
                        key={exp.id}
                        className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
                    >
                        <div className={styles.timelineBadge}>
                            <img src={exp.logo} alt={exp.company} className={styles.logo} />
                        </div>
                        <div className={styles.timelinePanel}>
                            <div className={styles.period}>{exp.period}</div>
                            <h3 className={styles.role}>{exp.role}</h3>
                            <div className={styles.content}>
                                {Array.isArray(exp.description) ? (
                                    <ul className={styles.descriptionList}>
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className={styles.description}>{exp.description}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;