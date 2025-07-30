import DocThumbnail from '../../components/thumbNails/docThumbnail'
import {publicationData} from '../../data/publicationData'
import styles from './publication.module.scss'

export const metadata = {
  title: 'Publication',
  description: 'Learn more about the magic behind Design Is Fun ✨',
  openGraph: {
    title: 'Publication',
    description: 'Learn more about the magic behind Design Is Fun ✨',
    images: ['/meta/OOD.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Publication',
    description: 'Learn more about the magic behind Design Is Fun ✨',
    images: ['/meta/OOD.png'],
  },
};

export default function Publication() {
    return (
        <section className={styles.publicationWrapper} >
            
            <h1>{publicationData.publication[0].title}</h1>
            <div className={styles.thumbnailWrapper}>
                {
                  publicationData.publication[0].docThumbnailProjects.map(
                    (n)=> 
                    <DocThumbnail
                      title = {n.title}
                      newTab = {n.newTab}
                      img = {n.imgUrl}
                      live = {n.live}
                      tags = {n.tags}
                      link= {n.link}
                      description = {n.description}
                    />
                  )
                }
          </div>
        </section>
    )
  }