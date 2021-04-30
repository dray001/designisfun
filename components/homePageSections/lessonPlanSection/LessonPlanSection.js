import styles from './LessonPlan.module.scss'
import ActionButton from '../../ActionButton'

const LessonPlanSection =({data})=> {
    return (
    <section className={styles.lessonPlanSection}>
        <div className={styles.lessonPlanSecDataWrapper}>

            <div className={styles.stringsDataWrapper}>
                <h1>{data.title} </h1>
                <p>{data.description}</p> 

                <ActionButton />   
            </div>

            <div className={styles.listedCardsDataWrapper}>
                {
                    data.planList.map((card)=> (
                    <div className={styles.CardDataWrapper}>
                        <div>{card.label}</div>
                        <h3>{card.title}</h3>
                        <span>Topics to be covered:</span>
                        <ul>
                            {card.list.map((list)=> 
                                <li>{list}</li>
                            )}
                        </ul>
                    </div>
                    ))
                }
            </div>      
        </div>
    </section>
    )
}

export default LessonPlanSection