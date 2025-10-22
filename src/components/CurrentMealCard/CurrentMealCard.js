import styles from "./CurrentMealCard.module.css"
import cardStyles from "../../styles/card.module.css";
import buttonStyles from "../../styles/button.module.css";
import FoodRow from "../FoodRow/FoodRow";

export default function CurrentMealCard({mealData}) {

  const totalProtein = mealData
    ? mealData.reduce((sum, food) => sum + (food.items[0].protein_g || 0), 0)
    : 0;

  const totalCarbs= mealData
    ? mealData.reduce((sum, food) => sum + (food.items[0].carbohydrates_total_g || 0), 0)
    : 0;

  const totalFat = mealData
    ? mealData.reduce((sum, food) => sum + (food.items[0].fat_total_g || 0), 0)
    : 0;

  const totalCalories = mealData
    ? mealData.reduce((sum, food) => sum + (food.items[0].calories || 0), 0)
    : 0;
  return(
    <div className={`${styles["currentMealCard"]} ${cardStyles["card"]}`}>
      <h3>Current Meal</h3>
      <div className={styles.foodContainer}>
        {mealData && mealData.map((meal, index) => (
          <FoodRow key={index} name = {meal.items[0].name}/>
        ))}
      </div>
      {mealData.length > 0 &&
        <div className={styles.mealInfo}>
          <div className={styles.macros}>
            <p style={{color: "#00C49F",borderBottom:"1px solid #00C49F"}}>
              C: {totalCarbs.toFixed()}</p>

            <p style={{color: "#0088FE",borderBottom:"1px solid #00C49F"}}>
              P: {totalProtein.toFixed()}</p>

            <p style={{color: "#FFBB28",borderBottom:"1px solid #FFBB28"}}>
              F: {totalFat.toFixed()}</p>
          </div>
          <p>Calories: {totalCalories.toFixed()}</p>
          <button
            className={`${styles["addMealButton"]} ${buttonStyles["button"]}`}
          >Add Meal
          </button>
        </div>
      }
    </div>
  )
}