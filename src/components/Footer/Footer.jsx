import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
} from 'react-icons/fa';
import styles from './Footer.module.css';
import logo from '../../assets/car-logo.png';

console.log(styles);

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt="Car deals Logo"
          />
        </div>
        <div className={styles.contact}>
          <p>
            <FaMapMarkerAlt /> Address 1: ul. "Ivan Vazov" 10, 9000 Varna,
            Bulgaria
          </p>
          <p>
            <FaClock /> Working Hours: 9:00 - 18:00
          </p>
          <p>
            <FaPhone /> +359 89 9898015
          </p>
          <br />
          <p>
            <FaMapMarkerAlt /> Address 2: bul. "Tsarigradsko shose" 100, 1784
            Sofia, Bulgaria
          </p>
          <p>
            <FaClock /> Working Hours: 9:00 - 18:00
          </p>
          <p>
            <FaPhone /> +359 89 9898010
          </p>
        </div>
        <div className={styles['social-icons']}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/kvalkanovaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kalina-valkanova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2024 Revved Realm. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
