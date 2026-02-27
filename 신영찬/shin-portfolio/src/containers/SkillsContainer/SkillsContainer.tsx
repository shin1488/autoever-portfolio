import { TECH_STACK_DATA } from '../../data/techStack';
import DividerSecondary from '../../components/Divider/DividerSecondary';
import SkillContainer from '../SkillContainer/SkillContainer';
import styles from './SkillsContainer.module.css';

const SkillsContainer = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Skills</h1>
            <div className={styles.skill_section}>
                {TECH_STACK_DATA.map(({ category, items }) => (
                    <div className={styles.child_container} key={category}>
                        <p className={styles.category}>{category}</p>
                        <DividerSecondary />
                        <SkillContainer items={items} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsContainer;