import styles from './RecentLectureSection.module.scss'
import ActionButton from '../../buttons/ActionButton'
// import Link from 'next/link'

const RecentLectureSection =({data})=> {
    return (
    <section className={styles.recentLecSection}>

        <div className={styles.recentLecDataWrapper}>
            <div className={styles.iconWrapper} >{data.icon}</div>
            <div className={styles.stringsDataWrapper}>
                <span className={styles.labelWrapper}>Recent tutorial</span>
                <div className={styles.descriptionWrapper}>
                    <div>
                        <h2>{data.title} </h2>
                        <p>{data.description}</p>
                    </div>

                    <div>
                        <ActionButton secondaryPath={data.path} secondaryLabel='See Video' display='secondary'/>
                    </div>  
                </div> 
            </div>  
        </div>

    </section>
    )
}

export default RecentLectureSection