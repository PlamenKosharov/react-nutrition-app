import cardStyles from "../../styles/card.module.css"
import buttonStyles from "../../styles/button.module.css"

import styles from "./CurrentPlanCard.module.css"

export default function CurrentPlanCard() {
  return(
    <div className={`${styles["currentPlanCard"]} ${cardStyles["card"]}`}>
      <h4 className={styles.title}>Current Plan</h4>
    </div>
  )
}