// import Link from 'next/link'
import styles from '../styles/ActionButton.module.scss'


const ActionButton = ({label, path}) => {
  return (
    <div className={styles.buttonsWrapper}>
        <div className={styles.primaryButton}>
            <a href={path}> {label ? label : "See Lesson Plan"} </a>
        </div>
        {/* {
          secondary===true ? <div className={styles.secondaryButton}>
          <Link href='/'> {} </Link>
      </div> : ''
        } */}
    </div>
  )
}

export default ActionButton