import styles from "./CurrentPlanCard.module.css"
import buttonStyles from "../../styles/button.module.css"

export default function MealButton({mealData,setMealData,planData,setPlanData,id}) {
  function updateMealData(e) {
    if(!e.target.dataset.ignore){
      const numericItems = Object.entries(mealData)
        .filter(([key]) => !isNaN(key))
        .map(([_, value]) => value);

      setMealData(numericItems);
    }
  }

  function removeMealData(currentId) {
    setPlanData(planData.filter((p) => p.id !== currentId));
  }

  return(
    <div className={`${styles["mealButton"]} ${buttonStyles['button']}`} onClick={updateMealData}>
      <label className={styles.title}>
        {mealData.name}
      </label>
      <label data-ignore={"true"} className={styles.removeIcon} onClick={() => removeMealData(mealData.id)}>
        X
      </label>
    </div>
  )
}