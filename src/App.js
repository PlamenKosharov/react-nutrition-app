import styles from './styles/general.module.css';

import MenuCard from './components/MenuCard/MenuCard';
import HistoryCard from './components/CurrentMealCard/CurrentMealCard';

function App() {
  return (
    <div className={styles.app}>
      <MenuCard/>
      <HistoryCard/>
    </div>
  );
}

export default App;
