import React, { useEffect, useRef } from 'react';
import styles from './Count.module.css';

const Count = () => {
    const countersRef = useRef([]);

    useEffect(() => {
        const counters = countersRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        const updateCounter = () => {
                            const target = +counter.getAttribute('data-target');
                            const count = +counter.innerText.replace('+', '');
                            const increment = target / 500; // Adjust increment for slower counting

                            if (count < target) {
                                counter.innerText = `${Math.ceil(count + increment)}+`;
                                setTimeout(updateCounter, 20);
                            } else {
                                counter.innerText = `${target}+`;
                            }
                        };
                        updateCounter();
                        observer.unobserve(counter);
                    }
                });
            },
            {
                threshold: 0.5, // Adjust this value as needed
            }
        );

        counters.forEach((counter) => {
            observer.observe(counter);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const data = [
        { number: 30 , text: 'School Camps' },
        { number: 5000, text: 'Students Enrollment' },
        { number: 15 , text: 'Adventure Tours' },
        { number: 25 , text: 'Adventure Activities' },
    ];

    return (
        <div className={styles.count}>
            {data.map((item, index) => (
                <div className={styles.item} key={index}>
                    <div
                        ref={(el) => (countersRef.current[index] = el)}
                        className={styles.number}
                        data-target={item.number}
                    >
                        0+
                    </div>
                    <div className={styles.text}>{item.text}</div>
                </div>
            ))}
        </div>
    );
};

export default Count;
