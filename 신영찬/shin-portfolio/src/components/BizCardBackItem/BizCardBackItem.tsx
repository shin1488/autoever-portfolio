import styles from './BizCardBackItem.module.css';
import PhoneIcon from '../../assets/phone.svg';
import GithubIcon from '../../assets/github.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import GlobeIcon from '../../assets/globe.svg';

const BizCardBackItem = () => {
    return (
        <div className={styles.container}>
            <div className={styles.profile_section}>
                <h1 className={styles.name}>신영찬</h1>
                <div className={styles.info_section}>
                    <div className={styles.info_item}>
                        <img className={styles.info_label} src={PhoneIcon} />
                        <p className={styles.info_value}>010-3144-1488</p>
                    </div>
                    <div className={styles.info_item}>
                        <img className={styles.info_label} src={GithubIcon} />
                        <a className={styles.info_value} href='https://github.com/shin1488'>https://github.com/shin1488</a>
                    </div>
                    <div className={styles.info_item}>
                        <img className={styles.info_label} src={LinkedInIcon} />
                        <a className={styles.info_value} href='https://www.linkedin.com/in/%EC%98%81%EC%B0%AC-%EC%8B%A0-9aa85b3b3/'>https://www.linkedin.com/in/%EC%98%81%EC%B0%AC-%EC%8B%A0-9aa85b3b3/</a>
                    </div>
                    <div className={styles.info_item}>
                        <img className={styles.info_label} src={GlobeIcon} />
                        <a className={styles.info_value} href='https://shin-portfolio-lyart.vercel.app/'>https://shin-portfolio-lyart.vercel.app/</a>
                    </div>
                </div>
                <hr className={styles.divider} />
                <p className={styles.introduce}>ㅎㅇ</p>
            </div>
        </div>
    );
}

export default BizCardBackItem;