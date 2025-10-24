import styles from "./CurrentMealCard.module.css"
import cardStyles from "../../styles/card.module.css";
import buttonStyles from "../../styles/button.module.css";
import FoodRow from "../FoodRow/FoodRow";

export default function CurrentMealCard({setFoodData,mealData,setMealData}) {
  function removeFood(id){
    setMealData(prev => prev.filter(food => food.id !== id));
  }

  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat=0;
  let totalCalories=0;

  for (let food of mealData) {
    totalProtein += food.protein_g;
    totalCarbs += food.carbohydrates_total_g;
    totalFat += food.fat_total_g
    totalCalories += food.calories;
  }
  
  return(
    <div className={`${styles["currentMealCard"]} ${cardStyles["card"]}`}>
      <h3>Current Meal</h3>
      <div className={styles.foodContainer}>
        {mealData && mealData.map((meal, index) => (
          <FoodRow
            key={index}
            id = {meal.id}
            name = {meal.name}
            setFoodData={setFoodData}
            foodRowData={meal}
            removeFood={removeFood}/>
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
          <p className={styles.caloriesInfo}>{totalCalories.toFixed()} kcal</p>
          <button
            className={`${styles["addMealButton"]} ${buttonStyles["button"]}`}
          >Add Meal
          </button>
        </div>
      }
    </div>
  )
}