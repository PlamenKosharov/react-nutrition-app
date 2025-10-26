import cardStyles from "../../styles/card.module.css"

import styles from "./CurrentPlanCard.module.css"

import MealButton from "./MealButton"
import buttonStyles from "../../styles/button.module.css";

export default function CurrentPlanCard({planData,setPlanData,setMealData}) {
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;
  let totalCalories = 0;

  for (let i = 0; i < planData.length; i++) {
    totalProtein += planData[i].protein;
    totalCalories += planData[i].calories;
    totalFat += planData[i].fat;
    totalCarbs += planData[i].carbs;
  }

  return(
    <div className={`${styles["currentPlanCard"]} ${cardStyles["card"]}`}>
      <div className={styles.leftContainer}>
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
      <div>
        <div className={styles.macros}>
          <p className={`${styles["carbBubble"]} ${buttonStyles["button"]}`}>
            C: {totalCarbs.toFixed()}</p>
          <p className={`${styles["proteinBubble"]} ${buttonStyles["button"]}`}>
            P: {totalProtein.toFixed()}</p>
          <p className={`${styles["fatBubble"]} ${buttonStyles["button"]}`}>
            F: {totalFat.toFixed()}</p>
          <p className={`${styles["calorieBubble"]} ${buttonStyles["button"]}`}>{totalCalories.toFixed()} kcal</p>
        </div>
      </div>
    </div>
  )
}