import styles from "./CurrentPlanCard.module.css"
import buttonStyles from "../../styles/button.module.css"

export default function MealButton({mealData,setMealData}){
  function updateMealData(){
    setMealData(mealData);
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