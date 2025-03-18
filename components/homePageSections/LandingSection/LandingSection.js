import styles from './LandingSection.module.scss'
import ActionButton from '../../buttons/ActionButton'
import LandingIllustration from '../../interactiveIllustrations/LandingIllustration'

const LandingSection =({data})=> {
    return (
        <section className={styles.landingSection}>
            <div className={styles.landingSecDataWrapper}>
                <div className={styles.stringsDataWrapper}>
                    <h1>Design Fundamentals <br/> for all❤️ </h1>
                    <p>{data.description}</p>
                    <ActionButton 
                    primaryTarget={true} primaryLabel='See Youtube Contents' primaryPath={data.youtubeChannel} 
                    secondaryTarget={true} secondaryLabel='See Youtube Contents' secondaryPath={data.youtubeChannel}
                    />
                </div>

                <div className={styles.imageDataWrapper}>
                    <LandingIllustration illustration={data.image} />
                </div>      
            </div>
        </section>
    )
}

export default LandingSection