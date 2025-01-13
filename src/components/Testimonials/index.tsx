import React, { useState, useEffect } from 'react';
import styles from '@/styles/Testimonials.module.scss';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    image: string;
}

const TestimonialCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Rob Walton",
            role: "Principle Security Architect",
            company: "Company Name",
            content: "Abhishek was a very capable and valued member of the team and brought with him a sense of 'understanding' to the role which gave me confidence that we was able to perform the tasks allocated to him. Abhi had excellent written and verbal English skills which meant that he immediately stood out as a key contact. Abhi is a friendly and very capable member of staff who will bring value to any team he works with and in the fullness of time will be leading his own teams.",
            image: "/rob.jpeg"
        },
        {
            id: 2,
            name: "Mihir Desai",
            role: "IT Infrastructure",
            company: "Company Name",
            content: "Abhishek is presently in my team and is a very result oriented person who ensures no matter what the situation ,he gets down to resolving it. His passion for the profession was commendable. He is quite committed to whatever tasks he takes up & ensures that its completed in time. He is an asset to an organisation. His attitude towards learning is very good. He is perfect service professional and has adequate knowledge about his professional and right attitude.",
            image: "/mihir.jpeg"
        },
        {
            id: 3,
            name: "Yogesh Newaskar",
            role: "Security Project Manager at Wipro Technologies",
            company: "Company Name",
            content: "Abhi is very hard working and knowledgeable guy. You just need to show the way and he will create the path for all. I wish him all the best. <br>I wish him good luck for his bright future.",
            image: "/yogesh.jpg"
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(timer);
    }, [testimonials.length]);

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
    };

    return (
    <section className={styles.testimonialSection}>
        <div className={styles.carouselContainer}>
            <h2 className={styles.title}>Testimonials</h2>
          <span className={styles.titleUnderline}></span>
            <div className={styles.carousel}>
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                    >
                        <div className={styles.testimonialContent}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.info}>
                                <h3 className={styles.name}>{testimonial.name}</h3>
                                <p className={styles.role}>
                                    {testimonial.role} | {testimonial.company}
                                </p>
                            </div>
                            <blockquote className={styles.quote}>
                                {testimonial.content}
                            </blockquote>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.dots}>
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
        </section>
    );
};

export default TestimonialCarousel;