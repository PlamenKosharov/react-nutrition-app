import NutritionChart from "../components/NutritionChart";

export default function FoodDataSection({children}) {
  return(
    <div style={{ height: '90%',display: 'flex', "justifyContent": "center" }}>
      {children}
    </div>
  )
}