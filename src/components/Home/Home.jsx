import React, { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import Footer from '../Footer/Footer';
import carHome from '../../assets/bmw-home-page.jpg';
import car1 from '../../assets/e60.jpg';
import car2 from '../../assets/f32.jpg';
import car3 from '../../assets/camaro.jpg';
import Form from '../Form/Form';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

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
    <div>
      <article className={styles.background}>
        <img
          src={carHome}
          alt="react-pic"
          className={styles.image}
        />
      </article>
      <div className={styles['car-collection-wrapper']}>
        <h1 className={styles.mainHeading}>
          Revved Realm: Your Premier Destination for All Vehicle Rentals!
        </h1>
        <p className={styles.paragraph}>
          Welcome to <span className={styles.fancyText}>Revved Realm</span>,
          where we redefine the way you explore the world. Dive into our
          extensive fleet of vehicles, meticulously curated to suit every
          journey and adventure. From sleek sedans to rugged off-roaders,
          luxurious SUVs to eco-friendly hybrids, we offer an unparalleled
          selection to cater to your every need and desire.
        </p>
        <p className={styles.paragraph}>
          Whether you're embarking on a cross-country road trip, exploring
          hidden gems in the countryside, or simply cruising through the city
          streets in style,{' '}
          <span className={styles.fancyText}>Revved Realm</span> has the perfect
          ride for you. Our commitment to excellence ensures not only top-notch
          vehicles but also exceptional service, making your rental experience
          seamless and stress-free.
        </p>
        <p className={styles.paragraph}>
          At <span className={styles.fancyText}>Revved Realm</span>, the road is
          yours to conquer. Discover the freedom of mobility and unlock endless
          possibilities with our diverse range of rental options. Your journey
          begins here – where every mile is a moment to cherish and every
          destination is within reach. Start your adventure with{' '}
          <span className={styles.fancyText}>Revved Realm</span> today!
        </p>

        {/* Our Top Picks Section */}
        <div className={styles.topPicks}>
          <h2 className={styles.topPicksHeading}>Our Top Picks</h2>
          <div className={styles.carImages}>
            <img
              src={car1}
              alt="Car 1 - e60"
              className={styles.carImage}
              onClick={() => handleImageClick(car1)}
            />
            <img
              src={car2}
              alt="Car 2 - f32 "
              className={styles.carImage}
              onClick={() => handleImageClick(car2)}
            />
            <img
              src={car3}
              alt="Car 3"
              className={styles.carImage}
              onClick={() => handleImageClick(car3)}
            />
          </div>
          <button
            className={styles.bookNowButton}
            onClick={() => setIsModalOpen(true)}
          >
            Book Now
          </button>
        </div>

        {/* Selected Image Modal */}
        {selectedImage && (
          <div
            className={styles.modalOverlay}
            onClick={() => setSelectedImage(null)}
          >
            <div className={styles.modal}>
              <img
                src={selectedImage}
                alt="Selected Car"
                className={styles.selectedImage}
              />
            </div>
          </div>
        )}

        {/* Form Modal */}
        {isModalOpen && (
          <div className={styles.modalOverlay}>
            <div
              className={`${styles.modal} ${styles.formWrapper}`}
              ref={modalRef}
            >
              <Form />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
