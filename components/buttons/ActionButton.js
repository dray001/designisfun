import Link from 'next/link'
import styles from './ActionButton.module.scss'


const ActionButton = ({ display, primaryLabel, primaryPath, secondaryLabel, secondaryPath}) => {

  let displayChecker =(displayValue)=> {
    
    if (displayValue==='primary') {
      return  <div className={styles.buttonsWrapper}>
                <div className={styles.primaryButton}>
                  <Link href={primaryPath}><a> {primaryLabel ? primaryLabel : "See Lesson Plan"} </a></Link>
                </div>
              </div>   
    }

    else if (displayValue==='secondary') {
      return  <div className={styles.buttonsWrapper}>
                <div className={styles.secondaryButton}>
                  <Link href={secondaryPath}><a> {secondaryLabel ? secondaryLabel : "See Lesson Plan"} </a></Link>   
                </div>
              </div>   
      }

    else {
      return <div className={styles.buttonsWrapper}>
                <div className={styles.primaryButton}>
                    <Link href={primaryPath}><a> {primaryLabel ? primaryLabel : "See Lesson Plan"} </a></Link>
                </div>

                <div  className={styles.secondaryButton}>
                  <Link href={secondaryPath}><a> {secondaryLabel ? secondaryLabel : "See Lesson Plan"} </a></Link>
                  
                </div>
              </div>
    }
  }

  let showButton = displayChecker(display);
  
  return showButton;
}

export default ActionButton