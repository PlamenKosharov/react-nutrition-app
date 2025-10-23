import styles from "./MenuCard.module.css"
import cardStyles from "../../styles/card.module.css"
import buttonStyles from "../../styles/button.module.css"

import SearchBar from "../SearchSection/SearchSection";

import {useState} from "react";
import FoodDataSection from "../FoodDataSection/FoodDataSection";

export default function MenuCard({setMealData}){
  const [foodData, setFoodData] = useState();

  function addFood(){
      setMealData(prev => [...prev, foodData]);
  }

  return(
    <div className={`${styles["menuCard"]} ${cardStyles["card"]}`}>
      <h3 className={styles.title}>Nutrition App</h3>
      <FoodDataSection className={styles.foodDataContainer} foodData={foodData}/>
      {foodData &&
        <button
          onClick={addFood}
          className={`${styles["addButton"]} ${buttonStyles["button"]}`}>
          Add
        </button>
      }
      <SearchBar setFoodData={setFoodData}/>
    </div>
  )
}