import styles from './styles/general.module.css';

import CalculatorCard from './components/CalculatorSection/CalculatorCard';
import CurrentMealCard from './components/CurrentMealSection/CurrentMealCard';
import CurrentPlanCard from './components/CurrentPlanSection/CurrentPlanCard';
import {useState} from "react";

function App() {
  const [foodData, setFoodData] = useState();
  const [mealData, setMealData] = useState([]);
  const [planData, setPlanData] = useState([]);

  return (
    <div className={styles.app}>
      <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
        <div className={styles.mainContainer}>
          <CalculatorCard foodData ={foodData} setFoodData={setFoodData} mealData={mealData} setMealData={setMealData} />
          <CurrentMealCard
            foodData={foodData} setFoodData={setFoodData}
            mealData={mealData} setMealData={setMealData}
            planData={planData} setPlanData={setPlanData}
          />
        </div>
        <CurrentPlanCard planData={planData} setMealData={setMealData}/>
      </div>
    </div>
  );
}

export default App;
