import { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import About from '../components/About'
import styles from '../styles/Home.module.scss'
import Landing from '@/components/Landing';
import Skills from '@/components/Skills';
import TimeLine from '@/components/Timeline';
import Certifications from '@/components/Certifications';
import Testimonials from '@/components/Testimonials';
import AnimatedSection from '@/components/AnimatedSection';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abhishek Singh</title>
        <meta name="description" content="Summit website description" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div id="home">
          <AnimatedSection delay={0}>
            <Landing />
          </AnimatedSection>
        </div>
        <div id="about">
          <AnimatedSection delay={100}>
            <About />
          </AnimatedSection>
        </div>

        <div id="skills">
          <AnimatedSection delay={200}>
            <Skills />
          </AnimatedSection>
        </div>

        <div id="experience">
          <AnimatedSection delay={300}>
            <TimeLine />
          </AnimatedSection>
        </div>

        <div id="certfications">
          <AnimatedSection delay={400}>
            <Certifications />
          </AnimatedSection>
        </div>

        <div id="testimonials">
          <AnimatedSection delay={500}>
            <Testimonials />
          </AnimatedSection>
        </div>
        <div id="contact">
          <AnimatedSection delay={600}>
            <Footer/>
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
}