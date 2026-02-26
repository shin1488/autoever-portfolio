import styles from './BottomNavBar.module.css';

const BottomNavBar = () => {
    return (
        <div className={styles.nav_container}>
            <a href="mailto:shin1488dev@gmail.com">Email</a>
            <a href="https://github.com/shin1488" target="_blank">Github</a>
            <a href="https://codi-agit.com/">LinkedIn</a>
        </div>
    );
}

export default BottomNavBar;