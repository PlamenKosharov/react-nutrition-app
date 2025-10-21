import styles from "../styles/MenuCard.module.css"

import SearchBar from "./SearchSection";

import {useState} from "react";
import FoodDataSection from "../components/FoodDataSection";

export default function MenuCard(){
  const [foodData, setFoodData] = useState();
  console.log(foodData);
  return(
    <div className={styles.menuCard}>
      <h3 className={styles.title}>Nutrition App</h3>
      <FoodDataSection className={styles.foodDataContainer} foodData={foodData}/>
      <SearchBar setFoodData={setFoodData}/>
    </div>
  )
}