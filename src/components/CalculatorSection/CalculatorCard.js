import styles from "./CalculatorSection.module.css"
import cardStyles from "../../styles/card.module.css"
import buttonStyles from "../../styles/button.module.css"

import SearchBar from "./SearchSection/SearchSection";
import FoodDataSection from "./FoodDataSection/FoodDataSection";

export default function CalculatorCard({foodData,setFoodData,setMealData}){

  function addFood(){
      setMealData(prev => [...prev, foodData]);
  }

  return(
    <div className={`${styles["calculatorCard"]} ${cardStyles["card"]}`}>
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