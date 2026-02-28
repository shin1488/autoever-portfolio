import styles from './ProjectItem.module.css';
import { useEffect, useState } from 'react';
import { getProjects } from '../../api/projects';
import { getIconUrl } from '../../utils/getIconUrl';

const ProjectItem = () => {
    const [project, setProject] = useState<any>(null);

    useEffect(() => {
        getProjects().then((data) => {
            const target = data.find((p: any) => p.id === 2);
            setProject(target);
        });
    }, []);

    if (!project) return null;

    return (
        <div className={styles.container}>
            <div className={styles.img_section}>
                <img className={styles.img} src={project.thumbnail_url} alt={project.title} />
            </div>
            <div className={styles.info_section}>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.date}>
                    {project.start_date?.replace(/-/g, '.').slice(0, 7)} ~
                    {project.end_date ? project.end_date.replace(/-/g, '.').slice(0, 7) : '진행 중'}
                </p>
                <p className={styles.summary}>{project.summary}</p>
                <div className={styles.tag_section}>
                    <div className={styles.stack_section}>
                        {project.stacks?.map((stack: any) => (
                            <img
                                key={stack.name}
                                // CDN URL을 동적으로 생성하여 주입
                                src={getIconUrl(stack.name)}
                                alt={stack.name}
                                className={styles.stack_logo}
                                title={stack.name}
                            />
                        ))}
                    </div>
                    <p className={`${styles.project_type} ${project.is_team ? styles.team : styles.personal}`}>
                        {project.is_team ? "팀 프로젝트" : "개인 프로젝트"}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;