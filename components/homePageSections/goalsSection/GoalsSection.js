import styles from './Goals.module.scss'

const GoalsSection =({data})=> {
    return (
    <section id='goals' className={styles.goalsSection}>
        <div className={styles.goalsSecDataWrapper}>

            <div className={styles.stringsDataWrapper}>
                <h1>{data.title} </h1>
                <p>{data.description}</p>       
            </div>

            <div className={styles.listedCardsDataWrapper}>
                {
                    data.goalList.map((card)=> (
                    <div className={styles.CardDataWrapper}>
                        <div>{card.icon}</div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                    ))
                }
            </div>      
        </div>
    </section>
    )
}

export default GoalsSection