import NutritionChart from "../NutritionChart/NutritionChart";

export default function FoodDataSection({foodData}) {
  return(
    <div style={{ height: '90%',display: 'flex' , "justifyContent": "center", alignItems: "center", flexDirection: "column"  }}>
      {foodData && <h4>{foodData.items[0].name[0].toUpperCase() + foodData.items[0].name.slice(1)} 100g</h4>}
      {foodData && <NutritionChart foodData={foodData}/>}
    </div>
  )
}