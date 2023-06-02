import Link from 'next/link'
import styles from './AboutAuthor.module.scss'

const AboutAuthorSection =({data})=> {
    return (
    <section id='author' className={styles.aboutAuthorSection}>
        <div className={styles.aboutAuthorSecDataWrapper}>

            <div className={styles.stringsDataWrapper}>
                <h1>{data.title} </h1>
                <div className={styles.authorPerson}>
                <h2>{data.authorsName}</h2>
                <p>Philosopher and Designer</p>
                </div>

                <p>{data.para1}</p>
                <p>{data.para2}</p>
                <p>{data.para3}</p>
                <div className={styles.socialHolder}>
                    {data.socialIcons.map((icon)=> <Link target='_blank' href={icon.link}>{icon.icon}</Link> )}
                </div>
            </div>

            <div className={styles.imageDataWrapper}>   
                <img src={data.image} alt="authors picture"/>
            </div>

        </div>
    </section>
    )
}

export default AboutAuthorSection