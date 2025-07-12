import styles from './LandingSection.module.scss'
import ActionButton from '../../buttons/ActionButton'
import LandingIllustration from '../../interactiveIllustrations/LandingIllustration'

const LandingSection =({data})=> {
    return (
        <section className={styles.landingSection}>
            <div className={styles.landingSecDataWrapper}>
                <div className={styles.stringsDataWrapper}>
                    <h1>Digital Education <br/> made Easy </h1>
                    <p>{data.description}</p>
                    <ActionButton 
                    primaryTarget={true} primaryLabel='Join a Class' primaryPath={data.youtubeChannel} 
                    secondaryTarget={true} secondaryLabel='View Courses' secondaryPath={data.youtubeChannel}
                    />
                    <span></span>
                </div>

                <div className={styles.imageDataWrapper}>
                    <LandingIllustration illustration={data.image} />
                </div>      
            </div>
        </section>
    )
}

export default LandingSection