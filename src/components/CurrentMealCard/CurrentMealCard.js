import styles from "./CurrentMealCard.module.css"
import cardStyles from "../../styles/card.module.css";

export default function CurrentMealCard() {
  return(
    <div className={`${styles["currentMealCard"]} ${cardStyles["card"]}`}>
      <h3>Current Meal</h3>
    </div>
  )
}