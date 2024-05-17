import Form from '../Form/Form';
import styles from "./Card.module.css";
import { useEffect, useRef, useState } from 'react';

const CarsCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <article className={styles.cars}>
        <article className={styles["car-img-wrapper"]}>
          <img src={props.cars.picture} alt="car fleet img" />
        </article>

        <p className={styles["car-name"]}>{props.cars.name}</p>
        <p className={styles["vehicle-description"]}>
          Model: {props.cars.description}
        </p>
        <p className={styles["vehicle-description"]}>
          Pirce: {props.cars.price} $
        </p>
        <p className={styles["vehicle-description"]}>Color: {props.cars.color}</p>
        <button onClick={() => setIsModalOpen(true)} className={styles.btn}>
          Book Now
        </button>
      </article>

      {/* Form Modal */}
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
        >
          <div className={`${styles.modal} ${styles.formWrapper}`} ref={modalRef}>
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default CarsCard;
