import SkillIcon from "../../components/SkillIcon/SkillIcon";
import styles from './SkillContainer.module.css';

const SkillContainer = ({ items }: any) => (
    <div className={styles.container}>
        {items.map((item: any) => (
            <SkillIcon img={item.logo} name={item.name}/>
        ))}
    </div>
);

export default SkillContainer;