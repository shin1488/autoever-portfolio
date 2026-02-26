import IntroduceContainer from "../../containers/IntroduceContainer/IntroduceContainer";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <IntroduceContainer />
        </div>
    );
}

export default Home;