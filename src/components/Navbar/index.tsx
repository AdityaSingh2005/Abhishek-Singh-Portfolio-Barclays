import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.scss';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(router.pathname === '/');

    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    const handleRouteChange = () => {
      setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    router.events.on('routeChangeStart', handleRouteChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [isOpen, router.pathname, router.events]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
          setIsOpen(false);
        }, 100);
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      setIsOpen(false);
    }
  };

  const handleNavClick = (sectionId: string) => (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/favicon.png" width={100} height={100} alt="GenAI Summit Logo" />
        </Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li onClick={() => setIsOpen(false)}>
          <a href="#home" onClick={handleNavClick('home')}>
            Home
          </a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#about" onClick={handleNavClick('about')}>
            About
          </a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#skills" onClick={handleNavClick('skills')}>
            Skills
          </a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#experience" onClick={handleNavClick('experience')}>
            Experience
          </a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#certfications" onClick={handleNavClick('certfications')}>
            Certfications
          </a>
        </li>
       <li onClick={() => setIsOpen(false)}>
          <a href="/blog">
            Blog
          </a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#testimonials" onClick={handleNavClick('testimonials')}>
            Testimonials
          </a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#contact" onClick={handleNavClick('contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;