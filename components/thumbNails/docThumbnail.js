import Link from 'next/link'
import Image from 'next/image'
import styles from './docThumbnail.module.scss'

const DocThumbnail = ({title, description, live, tags, link, img, newTab}) => {

    return (
      <Link  target={newTab ? "_blank" : ''}  href={link} className={styles.docThumbnailGroup}>
        
          <div className={styles.contentWrapper}>
            <div className={styles.img_titleWrapper}>
              <Image src={img} alt="coverImg" />
              { live ? null : <span>coming soon</span> }
            </div>
  
            <div>
              <h6>{title}</h6>
              <span>{tags}</span>
              <p>{description}</p>
            </div>
            
          </div>
  
      </Link>
    )
  }
  
  export default DocThumbnail;