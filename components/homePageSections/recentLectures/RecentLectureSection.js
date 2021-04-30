import styles from './RecentLectureSection.module.scss'
// import Link from 'next/link'

const RecentLectureSection =({data})=> {
    return (
    <section className={styles.recentLecSection}>

        <div className={styles.recentLecDataWrapper}>

            <div className={styles.stringsDataWrapper}>
                <div>
                    <div>{data.icon}</div>
                    <h2>{data.title} </h2>
                    <p>{data.description}</p>
                </div>

                <div>
                    <a href={data.path}> watch </a>
                </div>
            </div>
            
        </div>

    </section>
    )
}

export default RecentLectureSection