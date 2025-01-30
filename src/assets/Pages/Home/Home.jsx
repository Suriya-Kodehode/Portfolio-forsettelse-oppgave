
import styles from './home.module.css';

import Header from '../../Components/Header/header.jsx'
import ToggleMode from '../../Components/toggleTheme/toggleMode.jsx'
import Content from '../../Content/Homepage.jsx'

function Home() {

    return (
      <div className={styles.homeContainer}>
        <div className={styles.header}>
          <ToggleMode />
          <Header />
        </div>
        <div className={styles.main}>
            <Content />
        </div>
        <div className={styles.footer}>

        </div>
    </div>
    )
}

export default Home;