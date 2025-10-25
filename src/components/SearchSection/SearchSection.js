import styles from "./SearchSection.module.css"
import buttonStyles from "../../styles/button.module.css"

import {useState} from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = "https://api.calorieninjas.com/v1/nutrition?query="


export default function SearchSection({setFoodData}){
  const [search, setSearch] = useState("")
  const [grams, setGrams] = useState("")

  function calculateData(data,grams){
    return data * (grams / 100)
  }

  async function handleSearch(){
    if (search.trim() === ""){
      alert("Please enter food name.");
      return;
    }

    if (grams.trim() === ""){
      alert("Please enter grams.");
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

      const updatedData = {
        ...data,
        id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
        name: `${data.items[0].name} ${grams}g`,
        protein_g: calculateData(data.items[0].protein_g, grams),
        carbohydrates_total_g: calculateData(data.items[0].carbohydrates_total_g, grams),
        fat_total_g: calculateData(data.items[0].fat_total_g, grams),
        calories: calculateData(data.items[0].calories, grams)
      };

      setFoodData(updatedData);
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
      <input
        className={styles.searchInput}
        type={"number"}
        placeholder={"Grams..."}
        onChange={e => {
          const next = e.target.value
          if (/^\d*$/.test(next)) {
            setGrams(next)
          }
        }}
        value={grams}
      />
      <button
        onClick={handleSearch}
        className={`${styles["searchButton"]} ${buttonStyles["button"]}`}
      >Search
      </button>
    </div>
  )
}