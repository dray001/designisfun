import styles from './LessonPlan.module.scss'
import ActionButton from '../../buttons/ActionButton'

const LessonPlanSection =({data})=> {
    return (
    <section id='plan' className={styles.lessonPlanSection}>
        <div className={styles.lessonPlanSecDataWrapper}>

            <div className={styles.stringsDataWrapper}>
                <h1>{data.title} </h1>  
            </div>

            <div className={styles.listedCardsDataWrapper}>
                {
                    data.planList.map((card)=> (
                    <div className={styles.CardDataWrapper}>
                        <span>{card.label}</span>
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

            <div className={styles.feeCost}>
                <span>Any Fee?</span>
                <p>{data.description}</p> 
                <ActionButton display='primary' primaryPath={data.classLink} primaryLabel='Attend Class' />   
            </div>    
        </div>
    </section>
    )
}

export default LessonPlanSection