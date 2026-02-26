import { TECH_STACK_DATA } from '../../data/techStack';
import DividerSecondary from '../../components/Divider/DividerSecondary';
import SkillContainer from '../SkillContainer/SkillContainer';
import styles from './SkillsContainer.module.css';

const SkillsContainer = () => {
    return (
        <div className={styles.container}>
            {TECH_STACK_DATA.map(({ category, items }) => (
                <div className={styles.child_container} key={category}>
                    <p className={styles.category}>{category}</p>
                    <DividerSecondary />
                    <SkillContainer items={items} />
                </div>
            ))}
        </div>
    );
};

export default SkillsContainer;