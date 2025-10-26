import styles from "./FoodRow.module.css"
import buttonStyles from "../../../styles/button.module.css"

export default function FoodRow({foodRowData,setFoodData,name,removeFood,id}){

  function viewFood(e){
    if(!e.target.dataset.ignore){
      setFoodData(foodRowData)
    }
  }

  return(
    <div onClick={viewFood} className={`${styles["foodRow"]} ${buttonStyles["button"]}`}>
      {name}
      <label className={styles.deleteIcon} data-ignore={"true"} onClick={() => removeFood(id)}>X</label>
    </div>
  )
}