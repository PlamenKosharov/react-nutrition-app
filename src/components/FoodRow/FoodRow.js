import styles from "./FoodRow.module.css"
import buttonStyles from "../../styles/button.module.css"

export default function FoodRow({name,removeFood,id}){
  return(
    <div className={`${styles["foodRow"]} ${buttonStyles["button"]}`}>
      {name}
      <label onClick={() => removeFood(id)}>X</label>
    </div>
  )
}