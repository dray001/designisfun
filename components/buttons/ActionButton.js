import Link from 'next/link'
import styles from './ActionButton.module.scss'


const ActionButton = ({ display, primaryLabel, primaryPath, secondaryLabel, secondaryPath}) => {

  let displayChecker =(displayValue)=> {
    
    if (displayValue==='primary') {
      return  <div className={styles.buttonsWrapper}>
                <div className={styles.primaryButton}>
                  <a href={primaryPath}> {primaryLabel ? primaryLabel : "See Lesson Plan"} </a>
                </div>
              </div>   
    }

    else if (displayValue==='secondary') {
      return  <div className={styles.buttonsWrapper}>
                <div className={styles.secondaryButton}>
                  <a href={secondaryPath}> {secondaryLabel ? secondaryLabel : "See Lesson Plan"} </a>
                </div>
              </div>   
      }

    else {
      return <div className={styles.buttonsWrapper}>
                <div className={styles.primaryButton}>
                    {/* <Link href='/'> <a> fdfdfdf </a> </Link> */}
                    <a href={primaryPath}> {primaryLabel ? primaryLabel : "See Lesson Plan"} </a>
                </div>

                <div  className={styles.secondaryButton}>
                  <a href={secondaryPath}> {secondaryLabel ? secondaryLabel : "See Lesson Plan"} </a>
                </div>
              </div>
    }
  }

  let showButton = displayChecker(display);
  
  return showButton;
}

export default ActionButton