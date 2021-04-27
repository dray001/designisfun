import styles from './RecentLectureSection.module.scss'
import Link from 'next/link'

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
                    <Link href={data.path}> watch </Link>
                </div>
            </div>
            
        </div>

    </section>
    )
}

export default RecentLectureSection