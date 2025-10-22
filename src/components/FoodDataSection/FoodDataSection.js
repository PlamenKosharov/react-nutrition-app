import NutritionChart from "../NutritionChart/NutritionChart";
import styles from "./FoodDataSection.module.css";
import FoodDataItem from "../FoodDataSection/FoodInfo";
import FoodInfo from "../FoodDataSection/FoodInfo";

export default function FoodDataSection({foodData}) {

  return(
    <div style={{ height: '90%',display: 'flex' , "justifyContent": "center", alignItems: "center", flexDirection: "column"  }}>
      {foodData && <FoodInfo foodData={foodData} />}
    </div>
  )
}