import styles from './styles/general.module.css';

import MenuCard from './components/MenuCard/MenuCard';
import CurrentMealCard from './components/CurrentMealCard/CurrentMealCard';
import {useState} from "react";

function App() {
  const [mealData, setMealData] = useState([]);

  return (
    <div className={styles.app}>
      <MenuCard setMealData={setMealData} />
      <CurrentMealCard mealData={mealData}/>
    </div>
  );
}

export default App;
