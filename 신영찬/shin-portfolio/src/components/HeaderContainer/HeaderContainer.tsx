import DividerPrimary from '../Divider/DividerPrimary';
import Header from '../Header/Header';
import styles from './HeaderContainer.module.css';

const HeaderContainer = () => {
    return (
        <div className={styles.container}>
            <Header />
            <DividerPrimary />
        </div>
    );
}

export default HeaderContainer;