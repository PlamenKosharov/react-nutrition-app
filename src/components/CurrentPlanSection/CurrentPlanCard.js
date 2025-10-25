import cardStyles from "../../styles/card.module.css"

import styles from "./CurrentPlanCard.module.css"

import MealButton from "./MealButton"

export default function CurrentPlanCard({planData}){
  //foreach meal of planData, get the total macros and add them and save em in variables
  return(
    <div className={`${styles["currentPlanCard"]} ${cardStyles["card"]}`}>
      <h4 className={styles.title}>Current Plan</h4>
      <div style={{display: "flex", flexDirection: "row",gap:"10px"}}>
        {planData.map((meal, index) => (
          <MealButton
            mealData={meal}
            key={meal.name}
            protein={meal.protein}
            carbs={meal.carbs}
            fats={meal.fats}
            calories={meal.calories}
          />
        ))}
      </div>
    </div>
  )
}