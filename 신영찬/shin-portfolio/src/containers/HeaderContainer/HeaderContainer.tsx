import DividerPrimary from '../../components/Divider/DividerPrimary';
import Header from '../../components/Header/Header';
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