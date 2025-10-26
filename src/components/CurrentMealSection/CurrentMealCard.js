import styles from "./CurrentMealCard.module.css"
import cardStyles from "../../styles/card.module.css";
import buttonStyles from "../../styles/button.module.css";
import FoodRow from "./FoodRow/FoodRow";

export default function CurrentMealCard({setFoodData,mealData,setMealData,setPlanData}) {
  function removeFood(id){
    setMealData(prev => prev.filter(food => food.id !== id));
  }

  function addMealToPlan(currentMeal,name,protein,carbs,fat,calories){
    if (name.trim() === ""){
      alert("Please enter a meal name!");
      return;
    }
    const newMealData = {
      ...currentMeal,
      name: name,
      id: crypto.randomUUID(),
      protein: protein,
      carbs: carbs,
      fat: fat,
      calories: calories
  }
    setPlanData(prev => [...prev, { ...structuredClone(newMealData)}]);
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
            <div>
              <div className={styles.macros}>
                <p className={`${styles["carbBubble"]} ${buttonStyles["button"]}`}>
                  C: {totalCarbs.toFixed()}</p>
                <p className={`${styles["proteinBubble"]} ${buttonStyles["button"]}`}>
                  P: {totalProtein.toFixed()}</p>
                <p className={`${styles["fatBubble"]} ${buttonStyles["button"]}`}>
                  F: {totalFat.toFixed()}</p>
              </div>
              <p className={`${styles["calorieBubble"]} ${buttonStyles["button"]}`}>{totalCalories.toFixed()} kcal</p>
            </div>
            <button
              className={`${styles["addMealButton"]} ${buttonStyles["button"]}`}
              onClick={() => addMealToPlan(mealData,prompt("Meal name?"),totalProtein,totalCarbs,totalFat,totalCalories)}
            >Add Meal
            </button>
          </div>
        }
    </div>
  )
}