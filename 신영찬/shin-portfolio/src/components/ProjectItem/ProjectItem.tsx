import styles from './ProjectItem.module.css';
import logo from '../../assets/logo.png';
import { TECH_STACK_DATA } from '../../data/techStack';

const ProjectItem = () => {
    const isTeam = false;

    const selectedStacks = [
        TECH_STACK_DATA[0].items[0], // TypeScript
        TECH_STACK_DATA[0].items[1], // JavaScript
        TECH_STACK_DATA[0].items[1], // JavaScript
        TECH_STACK_DATA[0].items[1], // JavaScript
        TECH_STACK_DATA[0].items[1], // JavaScript
        TECH_STACK_DATA[0].items[1], // JavaScript
    ];

    return (
        <div className={styles.container}>
            <div className={styles.img_section}>
                <img className={styles.img} src={logo} />
            </div>
            <div className={styles.info_section}>
                <h2 className={styles.title}>나만의 포트폴리오 만들기</h2>
                <p className={styles.date}>2025.12 ~ 2026.01</p>
                <p className={styles.summary}>
                    뭔가많아보이는내용뭔가많아보이는내용뭔가많아보이는내용뭔가많아보이는내용뭔가많아보이는내용뭔가많아보이는내용뭔가많아보이는내용
                </p>
                <div className={styles.tag_section}>
                    <div className={styles.stack_section}>
                        {selectedStacks.map((stack) => (
                            <img key={stack.name} src={stack.logo} alt={stack.name} className={styles.stack_logo} />
                        ))}
                    </div>
                    <p className={`${styles.project_type} ${isTeam ? styles.team : styles.personal}`}>
                        {isTeam ? "팀 프로젝트" : "개인 프로젝트"}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;