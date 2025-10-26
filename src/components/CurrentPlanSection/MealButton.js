import styles from "./CurrentPlanCard.module.css"
import buttonStyles from "../../styles/button.module.css"

export default function MealButton({mealData,setMealData}) {
  function updateMealData() {
    const numericItems = Object.entries(mealData)
      .filter(([key]) => !isNaN(key))
      .map(([_, value]) => value);

    setMealData(numericItems);
  }
  return(
    <button
      className={`${styles["mealButton"]} ${buttonStyles['button']}`}
      onClick={updateMealData}
    >
      {mealData.name}
    </button>
  )
}