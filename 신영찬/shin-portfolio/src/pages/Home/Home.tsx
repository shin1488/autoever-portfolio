import IntroduceContainer from "../../containers/IntroduceContainer/IntroduceContainer";
import SkillsContainer from "../../containers/SkillsContainer/SkillsContainer";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <IntroduceContainer />
            <SkillsContainer />
        </div>
    );
}

export default Home;