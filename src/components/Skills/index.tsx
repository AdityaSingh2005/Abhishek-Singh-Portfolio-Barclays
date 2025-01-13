import React from 'react';
import styles from '@/styles/Skills.module.scss';

interface Skill {
  skill: string;
  proficiency: string;
  description: string;
}

const SkillCard: React.FC<Skill> = ({ skill, proficiency, description }) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.skillTitle}>{skill}</h3>
        <span className={styles.proficiencyBadge}>{proficiency}</span>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    {
      skill: "Windows Server 2003",
      proficiency: "Expert",
      description: "Extensive experience in server administration, maintenance, and optimization"
    },
    {
      skill: "Active Directory",
      proficiency: "Advanced",
      description: "Proficient in user management, group policies, and directory services"
    },
    {
      skill: "Project Management",
      proficiency: "Intermediate",
      description: "Strong background in planning, execution, and team coordination"
    },
    {
      skill: "IT Service Management",
      proficiency: "Advanced",
      description: "Experienced in ITIL framework implementation and service delivery"
    },
    {
      skill: "Product Management",
      proficiency: "Advanced",
      description: "Skilled in product lifecycle, strategy, and roadmap development"
    },
    {
      skill: "IT Infrastructure Management",
      proficiency: "Intermediate",
      description: "Capable of managing and optimizing IT systems and networks"
    }
  ];

  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills</h2>
          <span className={styles.titleUnderline}></span>
          <p className={styles.subtitle}>
            Technical Proficiency Showcase: Leveraging Advanced Skills to Drive Innovation and Excellence
          </p>
        </div>
        
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={skill.skill} className={styles.skillCardWrapper} style={{ animationDelay: `${index * 0.1}s` }}>
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;