import styles from "./CurrentPlanCard.module.css"
import buttonStyles from "../../styles/button.module.css"

export default function MealButton({mealData}){
  console.log(mealData);
  return(
    <button className={`${styles["mealButton"]} ${buttonStyles['button']}`} >{mealData.name}</button>
  )
}