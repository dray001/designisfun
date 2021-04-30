import Link from 'next/link'
import styles from '../styles/ActionButton.module.scss'


const ActionButton = ({primary, secondary}) => {
  return (
    <div className={styles.buttonsWrapper}>
        <div className={styles.primaryButton}>
            <Link href='/'> Learn Design </Link>
        </div>
        {
          secondary===true ? <div className={styles.secondaryButton}>
          <Link href='/'> See Lesson Plan </Link>
      </div> : ''
        }
    </div>
  )
}

export default ActionButton