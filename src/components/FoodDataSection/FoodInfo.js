import styles from "./FoodDataSection.module.css";

import { PieChart,PieCenterLabel } from '@mui/x-charts';

export default function FoodInfo({foodData}) {

  const protein = foodData.protein_g;
  const carbs = foodData.carbohydrates_total_g;
  const fats = foodData.fat_total_g;
  const calories = foodData.calories;

  const data = [
    { label: 'Protein', value: protein },
    { label: 'Carbs', value: carbs },
    { label: 'Fats', value: fats },
  ];

  return(
    <div>
      <div className={styles.foodInfoContainer}>
      </div>
      <div style={{ position: "relative", width: 200, height: 200 }}>
        <PieChart
          series={[{
            data: [
              { id: 0, value: protein, label: 'Protein' },
              { id: 1, value: carbs, label: 'Carbs' },
              { id: 2, value: fats,  label: 'Fats' },
            ],
            innerRadius: 70
          }]}
          width={200}
          height={200}
        />
        <div className={styles.foodInfo}>
          {calories.toFixed()} kcal
        </div>
      </div>
    </div>
  )
}