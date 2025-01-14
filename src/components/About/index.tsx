'use client'

import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react'
import styles from '@/styles/About.module.scss'

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          About
          <span className={styles.titleUnderline}></span>
        </h1>

        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <img 
              src="/about.jpg" 
              alt="Professional headshot"
              className={styles.profileImage}
            />
            <div className={styles.imageOverlay}></div>
          </div>

          <div className={styles.content}>
            <h2 className={styles.role}>Global Head of Container Platform & App Hosting @Barclays</h2>
            
            <p className={styles.introText}>
              I am a Technology Executive with over 16 years of experience in the IT/Technical Industry, leading global teams and delivering innovative solutions for complex IT infrastructure projects. I currently serve as the VP, Global Head of Windows at Barclays, where I am responsible for the engineering, operational, financial, and risk aspects of the Windows Server product stack across the bank.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <Phone className={styles.icon} />
                <span className={styles.label}>Phone:</span>
                <span className={styles.value}>+91 86009 98258</span>
              </div>
              
              <div className={styles.infoItem}>
                <GraduationCap className={styles.icon} />
                <span className={styles.label}>Degree:</span>
                <span className={styles.value}>Bachelor of Engineering (B.E.)</span>
              </div>
              
              <div className={styles.infoItem}>
                <MapPin className={styles.icon} />
                <span className={styles.label}>City:</span>
                <span className={styles.value}>Pune, India</span>
              </div>
              
              <div className={styles.infoItem}>
                <Mail className={styles.icon} />
                <span className={styles.label}>Email:</span>
                <span className={styles.value}>s.abhishek82@gmail.com</span>
              </div>
            </div>

            <p className={styles.detailText}>
              As a certified MCSE, ITIL, and Prince2 practitioner, I have a strong background in Agile project management, product operations, and service delivery. I have successfully facilitated and organized Agile ceremonies, managed product roadmaps and backlogs, and supported the development and implementation of various products, such as Access & Identity, SharePoint Online, Data Governance, Intune, and Mobile Platforms. I have also developed and executed strategic plans to ensure infrastructure capacity, security compliance, vendor management, and business continuity. I am passionate about driving digital transformation and enabling business growth through technology. My goal is to leverage my expertise in Microsoft technologies and Agile methodologies to deliver value and excellence for Barclays and its customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
