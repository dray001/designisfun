import styles from './LearnDesign.module.scss'
import Link from 'next/link'

const LearnDesignSection =({data})=> {
    return (
    <section className={styles.learnDesignSection}>
        <div className={styles.learnDesignSecDataWrapper}>

            <div className={styles.stringsDataWrapper}>
                <h1>Why Learn <br /> Design </h1>
                <p>{data.description}</p>

                <div className={styles.buttonsWrapper}>
                    <div className={styles.secondaryButton}>
                        <Link href='/'> See Lesson Plan </Link>
                    </div>
                </div>
                
            </div>

            <div className={styles.imageDataWrapper}>
                <img src={data.image} alt="image"/>
            </div>      
        </div>
    </section>
    )
}

export default LearnDesignSection