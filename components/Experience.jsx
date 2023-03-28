import React from "react";
import styles from "../styles/Home.module.css";

export default function Experience() {
    return (
        <>
            <h3>Experience</h3>
            <h4 className={styles.employer}>Alchemy Code Lab</h4>
            <div className={styles.jobContainer}>
                <p className={styles.position}>Software Instruction Manager</p>
                <p className={styles.jobDescription}>
                    Trained teaching assistants and continued mentorship
                    throughout their tenure. Ran the new student onboarding week
                    acclimating them to basic dev tools, Slack, Zoom, Github and
                    VSCode. Performed live coding demos, walking through basic
                    website creation with HTML, CSS, and JavaScript. Ideated and
                    collaborated with dev team to create new procedures and
                    implement curriculum changes.
                </p>
            </div>
            <div className={styles.jobContainer}>
                <p className={styles.position}>
                    Software Engineering Teaching Assistant
                </p>
                <p className={styles.jobDescription}>
                    Aided in instructing students during remote classes in
                    full-stack Javascript. Performed daily code reviews and
                    debugging. Provided coaching and guidance through
                    documentation for new frameworks and libraries.
                </p>
            </div>
        </>
    );
}
