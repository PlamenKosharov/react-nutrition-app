import FoodInfo from "./FoodInfo";

export default function FoodDataSection({foodData}) {
  return(
    <div style={{ height: '90%',display: 'flex' , "justifyContent": "center", alignItems: "center", flexDirection: "column"  }}>
      {foodData && <FoodInfo foodData={foodData} />}
    </div>
  )
}