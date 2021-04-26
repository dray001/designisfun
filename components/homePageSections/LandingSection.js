import styles from './LandingSection.module.scss'

const LandingSection =({data})=> {
    return (
    <section className={styles.landingSection}>
        <div className={styles.landingSecDataWrapper}>

            <div className={styles.stringsDataWrapper}>
                <h1>{data.title} </h1>
                <p>{data.description}</p>
                <div>
                    <button>Learn Design</button>
                    <button>See Lesson Plan</button>
                </div>
            </div>

            <div className={styles.imageDataWrapper}>
                <img src="/" alt="img"/>
            </div>      
        </div>
    </section>
    )
}

export default LandingSection