import BizCardBackItem from '../../components/BizCardBackItem/BizCardBackItem';
import BizCardItem from '../../components/BizCardItem/BizCardItem';
import styles from './GuestBook.module.css';

const GuestBook = () => {
    return (
        <div className={styles.guestbook}>
            <BizCardItem />
            <BizCardBackItem />
        </div>
    );
}

export default GuestBook;