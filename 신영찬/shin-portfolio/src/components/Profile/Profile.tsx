import styles from './Profile.module.css';
import profileImage from '../../assets/profile_image.jpg';

const Profile = () => {
    return (
        <div className={styles.profile_container}>
            <img className={styles.profile_image} src={profileImage} />
            <div className={styles.introduce_section}>
                <p className={styles.name}>신영찬</p>
                <p className={styles.job}>Android Developer</p>
                <p className={styles.info}>
                    Birth: 1998-06-25
                    <br />
                    Contact: 010-3144-1488
                    <br />
                    Email: syc1488@naver.com
                </p>
            </div>
        </div>
    );
}

export default Profile;