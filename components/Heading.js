import styles from '../styles/Heading.module.scss'

const Heading = ({title, size}) => {

    return (
            <h1 style={{fontSize: `${size}`}} className= {styles.sectionTitle} >
                {title}
            </h1>
    );
}

export default Heading