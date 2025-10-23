import styles from './styles/general.module.css';

import MenuCard from './components/MenuCard/MenuCard';
import CurrentMealCard from './components/CurrentMealCard/CurrentMealCard';
import {useState} from "react";

function App() {
  const [foodData, setFoodData] = useState();
  const [mealData, setMealData] = useState([]);

  return (
    <div className={styles.app}>
      <MenuCard foodData ={foodData} setFoodData={setFoodData} setMealData={setMealData} />
      <CurrentMealCard foodData={foodData} mealData={mealData} setMealData={setMealData} />
    </div>
  );
}

export default App;
