import styles from "./FoodRow.module.css"
import buttonStyles from "../../styles/button.module.css"

export default function FoodRow({foodRowData,setFoodData,name,removeFood,id}){

  function print(e){
    if(!e.target.dataset.ignore){
      setFoodData(foodRowData)
    }
  }

  return(
    <div onClick={print} className={`${styles["foodRow"]} ${buttonStyles["button"]}`}>
      {name}
      <label data-ignore={"true"} onClick={() => removeFood(id)}>X</label>
    </div>
  )
}