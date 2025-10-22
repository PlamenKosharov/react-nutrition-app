import styles from "./FoodRow.module.css"
import buttonStyles from "../../styles/button.module.css"

export default function FoodRow({name}){
  return(
    <div className={`${styles["foodRow"]} ${buttonStyles["button"]}`}>
      {name}
    </div>
  )
}