import Link from 'next/link'
import styles from './ActionButton.module.scss'

const ActionButton = ({display, primaryLabel, primaryPath, secondaryLabel, secondaryPath, primaryTarget, secondaryTarget}) => {

  let displayChecker =(displayValue)=> {
    
    if (displayValue==='primary') {
      return  <div className={styles.primaryButtonOnly}>
                  <Link target={primaryTarget ? '_blank' : ''} href={primaryPath}> {primaryLabel ? primaryLabel : "See Lesson Plan"} </Link>
              </div>
              
    }

    else if (displayValue==='secondary') {
      return  <div className={styles.secondaryButtonOnly}>
                  <Link target={secondaryTarget ? '_blank' : ''} href={secondaryPath}> {secondaryLabel ? secondaryLabel : "See Lesson Plan"} </Link>   
              </div>
                 
      }

    else {
      return <div className={styles.buttonsWrapper}>
                <div className={styles.primaryButton}>
                    <Link target={primaryTarget ? '_blank' : ''} href={primaryPath}> {primaryLabel ? primaryLabel : "See Lesson Plan"} </Link>
                </div>

                <div className={styles.secondaryButton}>
                    <Link target={secondaryTarget ? '_blank' : ''} href={secondaryPath}> {secondaryLabel ? secondaryLabel : "See Lesson Plan"} </Link>
                </div>
              </div>
    }
  }

  let showButton = displayChecker(display);
  
  return showButton;
}

export default ActionButton