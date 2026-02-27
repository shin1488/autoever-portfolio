import DividerSecondary from '../../components/Divider/DividerSecondary';
import { CAREER_DATA } from '../../data/careers';
import CareerContainer from '../CareerContainer/CareerContainer';
import styles from './CareersContainer.module.css';

const CareersContainer = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Careers</h1>
            {CAREER_DATA.map(({ category, items }) => (
                <div className={styles.child_container}>
                    <div className={styles.divider_section}>
                        <DividerSecondary />
                        <p className={styles.category}>{category}</p>
                    </div>
                    <CareerContainer items={items} />
                </div>
            ))}
        </div>
    );
}

export default CareersContainer;