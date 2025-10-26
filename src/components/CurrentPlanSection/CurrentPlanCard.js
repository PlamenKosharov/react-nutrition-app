import cardStyles from "../../styles/card.module.css"

import styles from "./CurrentPlanCard.module.css"

import MealButton from "./MealButton"

export default function CurrentPlanCard({planData,setMealData,mealName}) {
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;
  let totalCalories = 0;

  for (let i = 0; i < planData.length; i++){
    totalProtein += planData[i].protein;
    totalCarbs += planData[i].carbs;
    totalFat += planData[i].fats;
    totalCalories += planData[i].calories;
  }

  return(
    <div className={`${styles["currentPlanCard"]} ${cardStyles["card"]}`}>
      <h4 className={styles.title}>Current Plan</h4>
      <div style={{display: "flex", flexDirection: "row",gap:"10px"}}>
        {planData.map((meal) => (
          <MealButton
            key={crypto.randomUUID()}  // unique string or number
            mealData={meal}
            setMealData={setMealData}
            name={mealName}
          />
        ))}
      </div>
    </div>
  )
}