import styles from "./FoodDataSection.module.css";

import { PieChart } from '@mui/x-charts/PieChart';


export default function FoodInfo({foodData}) {

  const protein = foodData.protein_g;
  const carbs = foodData.carbohydrates_total_g;
  const fats = foodData.fat_total_g;

  return(
    <div>
      <div className={styles.foodInfoContainer}>
        <p className={styles.foodInfo}>{Number(foodData.calories).toFixed()} kcal</p>
      </div>
      <PieChart
        series={[{ data: [
            { id: 0, value: protein, label: 'Protein' },
            { id: 1, value: carbs, label: 'Carbs' },
            { id: 2, value: fats,  label: 'Fats' },
          ] , innerRadius: 60 }]}
        width={200}
        height={200}
      />
    </div>
  )
}