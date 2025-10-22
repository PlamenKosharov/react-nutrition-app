import styles from "./FoodDataSection.module.css";
import NutritionChart from "../NutritionChart/NutritionChart";

export default function FoodInfo({foodData}) {
  return(
    <div>
      <div className={styles.foodInfoContainer}>
        <h4 style={{textAlign:"center",borderBottom:"black"}}>{foodData.items[0].name[0].toUpperCase() + foodData.items[0].name.slice(1)} 100g </h4>
        <p className={styles.foodInfo}>{Number(foodData.items[0].calories).toFixed()} kcal</p>
      </div>
      <NutritionChart foodData={foodData}/>
    </div>
  )
}