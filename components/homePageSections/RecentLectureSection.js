import styles from './RecentLectureSection.module.scss'

const RecentLectureSection =({data})=> {
    return (
    <section className={styles.recentLecSection}>

        <div className={styles.recentLecDataWrapper}>

            <div className={styles.stringsDataWrapper}>
                <h1>{data.title} </h1>
                <p>{data.description}</p>
            </div>

            <div className={styles.imageDataWrapper}>
                <img src="/" alt="img"/>
            </div>
            
        </div>

    </section>
    )
}

export default RecentLectureSection