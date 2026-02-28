import ProjectItem from '../../components/ProjectItem/ProjectItem';
import styles from './ProjectContainer.module.css';

const ProjectContainer = () => {
    return (
        <div className={styles.container}>
            <ProjectItem />
        </div>
    );
}

export default ProjectContainer;