import styles from "../styles/MenuCard.module.css"

import SearchBar from "./SearchSection";

export default function MenuCard(){
  return(
    <div className={styles.menuCard}>
      <h3 className={styles.title}>Nutrition App</h3>
      <SearchBar/>
    </div>
  )
}