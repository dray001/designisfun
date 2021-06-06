import Link from 'next/link'
import styles from './ActionButton.module.scss'

const ActionButton = ({display, primaryLabel, primaryPath, secondaryLabel, secondaryPath, primaryTarget, secondaryTarget}) => {

  let displayChecker =(displayValue)=> {
    
    if (displayValue==='primary') {
      return  <div className={styles.primaryButtonOnly}>
                  <Link href={primaryPath}><a target={primaryTarget ? '_blank' : ''}> {primaryLabel ? primaryLabel : "See Lesson Plan"} </a></Link>
              </div>
              
    }

    else if (displayValue==='secondary') {
      return  <div className={styles.secondaryButtonOnly}>
                  <Link href={secondaryPath}><a target={secondaryTarget ? '_blank' : ''}> {secondaryLabel ? secondaryLabel : "See Lesson Plan"} </a></Link>   
              </div>
                 
      }

    else {
      return <div className={styles.buttonsWrapper}>
                <div className={styles.primaryButton}>
                    <Link href={primaryPath}><a target={primaryTarget ? '_blank' : ''}> {primaryLabel ? primaryLabel : "See Lesson Plan"} </a></Link>
                </div>

                <div className={styles.secondaryButton}>
                    <Link href={secondaryPath}><a target={secondaryTarget ? '_blank' : ''}> {secondaryLabel ? secondaryLabel : "See Lesson Plan"} </a></Link>
                </div>
              </div>
    }
  }

  let showButton = displayChecker(display);
  
  return showButton;
}

export default ActionButton