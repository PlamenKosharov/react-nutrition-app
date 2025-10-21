import styles from './styles/App.module.css';

import MenuCard from './components/MenuCard';
import HistoryCard from './components/HistoryCard';

function App() {
  return (
    <div className={styles.app}>
      <MenuCard/>
      <HistoryCard/>
    </div>
  );
}

export default App;
