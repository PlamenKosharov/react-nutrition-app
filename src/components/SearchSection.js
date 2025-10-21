import styles from "../styles/SearchSection.module.css"
import {useState} from "react";

export default function SearchSection(){
  const [search, setSearch] = useState("")

  return(
    <div className={styles.searchSection}>
      <input
        className={styles.searchInput}
        type={"text"}
        placeholder={"Search..."}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button className={styles.searchButton}>Search</button>
    </div>
  )
}