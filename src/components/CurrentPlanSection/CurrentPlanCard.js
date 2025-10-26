import cardStyles from "../../styles/card.module.css"

import styles from "./CurrentPlanCard.module.css"

import MealButton from "./MealButton"

export default function CurrentPlanCard({planData,setPlanData,setMealData}) {
  
  return(
    <div className={`${styles["currentPlanCard"]} ${cardStyles["card"]}`}>
      <h4 className={styles.title}>Current Plan</h4>
      <div style={{display: "flex", flexDirection: "row",gap:"10px"}}>
        {planData.map((meal,index) => (
          <MealButton
            key={crypto.randomUUID()}
            mealData={meal}
            setMealData={setMealData}
            planData={planData}
            setPlanData={setPlanData}
          />
        ))}
      </div>
    </div>

  )
}