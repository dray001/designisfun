import styles from './LandingSection.module.scss'
import Link from 'next/link'
import ActionButton from '../../ActionButton'
import LandingIllustration from '../../interactiveIllustrations/LandingIllustration'

const LandingSection =({data})=> {
    return (
    <section className={styles.landingSection}>
        <div className={styles.landingSecDataWrapper}>

            <div className={styles.stringsDataWrapper}>
                <h1>{data.title} </h1>
                <p>{data.description}</p>

                <ActionButton secondary={true} />
                
            </div>

            <div className={styles.imageDataWrapper}>
                <LandingIllustration illustration={data.image} />
            </div>      
        </div>
    </section>
    )
}

export default LandingSection