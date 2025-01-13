'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '@/styles/Landing.module.scss'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.backgroundElements} />
      
      <div className={styles.content}>
        {/* Text Content */}
        <div className={`${styles.textContent} ${isLoaded ? styles.fadeIn : ''}`}>
          
          <div className={styles.textWrapper}>
            <div className={`${styles.greeting} ${isLoaded ? styles.slideUp : ''}`}>
              Hello,
            </div>
            <h1 className={`${styles.name} ${isLoaded ? styles.slideUp : ''}`}>
              I am Abhishek Singh.
            </h1>
            <h2 className={`${styles.title} ${isLoaded ? styles.slideUp : ''}`}>
            Global Head of Container Platform & App Hosting 
              <span>@Barclays</span>
            </h2>
            
            <a href="https://www.linkedin.com/in/iabhishekk/" className={`${styles.ctaButton} ${isLoaded ? styles.slideUp : ''}`}>
              Connect on Linkedin
              <ArrowRight className={styles.buttonIcon} />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

