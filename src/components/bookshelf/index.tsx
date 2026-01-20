import React from 'react';
import styles from '@/styles/bookshelf.module.scss';

interface Book {
    id: number;
    title: string;
    issuer: string;
    link: string;
}

const BookshelfSection: React.FC = () => {
    const books: Book[] = [
        {
            id: 1,
            title: "Atomic Habits",
            issuer: "James Clear",
            link: "https://jamesclear.com/atomic-habits"
        },
        {
            id: 2,
            title: "Site Reliability Engineering",
            issuer: "Google SRE Team",
            link: "https://sre.google/books/"
        },
        {
            id: 3,
            title: "Fight Discipline",
            issuer: "Sam Curran",
            link: "https://www.goodreads.com/book/show/61884958-fight-discipline"
        },
        {
            id: 4,
            title: "Working Backwards",
            issuer: "Colin Bryar & Bill Carr",
            link: "https://www.workingbackwards.com/"
        },
        {
            id: 5,
            title: "Good to Great",
            issuer: "Jim Collins",
            link: "https://www.jimcollins.com/concepts/good-to-great.html"
        },
        {
            id: 6,
            title: "Turn the Ship Around",
            issuer: "L. David Marquet",
            link: "https://davidmarquet.com/books/turn-the-ship-around/"
        }
    ];

    return (
        <section className={styles.bookshelfSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Bookshelf</h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.bookshelfGrid}>
                    {books.map((book) => (
                        <div key={book.id} className={styles.bookCard}>
                            <div className={styles.content}>
                                <h3 className={styles.bookTitle}>
                                    <a 
                                        href={book.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={styles.bookLink}
                                    >
                                        {book.title}
                                    </a>
                                </h3>
                                <p className={styles.issuer}>by {book.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookshelfSection;