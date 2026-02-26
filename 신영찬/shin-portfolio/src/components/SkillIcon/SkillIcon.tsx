import styles from './SkillIcon.module.css';

const SkillIcon = ({ img, name }: any) => {
    return (
        <div className={styles.icon_container}>
            <img className={styles.img} src={img}/>
            <p className={styles.name} >{name}</p>
        </div>
    );
}

export default SkillIcon;