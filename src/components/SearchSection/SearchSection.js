import styles from "./SearchSection.module.css"
import buttonStyles from "../../styles/button.module.css"

import {useState} from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = "https://api.calorieninjas.com/v1/nutrition?query="

export default function SearchSection({setFoodData}){
  const [search, setSearch] = useState("")

  async function handleSearch(){
    if (search.trim() === ""){
      alert("Please enter food name.");
      return;
    }

    try{
      const response = await fetch(`${URL}${(search)}`, {
        method: "GET",
        headers: {
          "X-Api-Key": API_KEY
        },
      });

      if (!response.ok){
        throw new Error(response.statusText);
      }
      const data = await response.json()
      data.items[0].id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      setFoodData(data)
    }
    catch (error) {
      alert(error.message)
    }
  }

  return(
    <div className={styles.searchSection}>
      <input
        className={styles.searchInput}
        type={"text"}
        placeholder={"Search..."}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button
        onClick={handleSearch}
        className={`${styles["searchButton"]} ${buttonStyles["button"]}`}
      >Search
      </button>
    </div>
  )
}