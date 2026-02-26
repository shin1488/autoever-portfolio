import SkillIcon from "../../components/SkillIcon/SkillIcon";
import styles from './SkillContainer.module.css';

const SkillContainer = ({ items }) => (
    <div className={styles.container}>
        {items.map(item => (
            <SkillIcon img={item.logo} name={item.name}/>
        ))}
    </div>
);

export default SkillContainer;