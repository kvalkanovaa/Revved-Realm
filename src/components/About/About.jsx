import React, { useEffect, useRef, useState } from 'react';
import carHome from '../../assets/bmw-home-page.jpg';
import styles from './About.module.css';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';

const About = () => {
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
    <div>
      <article className={styles.background}>
        <img
          src={carHome}
          alt="react-pic"
          className={styles.image}
        />
      </article>
      <div className={styles.aboutSection}>
        <h2 className={styles.aboutHeading}>
          Welcome to Revved Realm – Bulgaria's First All-Inclusive Car Rental
          Provider
        </h2>
        <p className={styles.aboutParagraph}>
          Welcome to <span className={styles.fancyText}>Revved Realm</span>,
          where we redefine the way you explore the world. Dive into our
          extensive fleet of vehicles, meticulously curated to suit every
          journey and adventure. Whether you're gearing up for a solo road trip
          or planning a family vacation, we have the perfect ride for you.
        </p>
        <p className={styles.aboutParagraph}>
          <span className={styles.question}>What is Revved Realm?</span> At
          Revved Realm, we believe in the power of exploration and adventure.
          The term "Revved" signifies the excitement and energy of embarking on
          a journey, while "Realm" represents the vast and diverse world waiting
          to be discovered. Together, Revved Realm symbolizes a realm of endless
          possibilities and exhilarating experiences, where every mile traveled
          is a testament to the spirit of adventure.
        </p>
        <p className={styles.aboutParagraph}>
          <span className={styles.question}>What sets us apart?</span> At Revved
          Realm, we're not just another car rental service – we're a passionate
          team of enthusiasts dedicated to fueling your adventures. Our
          commitment to innovation and customer satisfaction drives us to
          constantly expand our offerings and enhance your rental experience.
        </p>
        <p className={styles.aboutParagraph}>
          <span className={styles.question}>Why choose Revved Realm?</span> Our
          fleet isn't just about quantity – it's about quality. We handpick each
          vehicle to ensure top performance, comfort, and style. With our
          diverse range of options, you'll find everything from luxury sedans to
          rugged off-roaders, all meticulously maintained and ready to hit the
          road.
        </p>
        <p className={styles.aboutParagraph}>
          <span className={styles.question}>Where can you rent from?</span>{' '}
          While our roots may be in Bulgaria, our reach extends far beyond
          borders. With locations in Greece, Romania, and Serbia, Revved Realm
          is your gateway to unforgettable journeys across Europe. Wherever your
          wanderlust takes you, we'll be there to make it a reality.
        </p>
        <p className={styles.aboutParagraph}>
          <span className={styles.question}>How to rent?</span> Click on the
          "Book Now" button below and fill in the contact form, and we will
          contact you as soon as possible. Alternatively, you can call us on the
          numbers provided below.
        </p>
        <p className={styles.aboutParagraph}>
          <span className={styles.question}>How many days can I rent?</span> The
          minimum rental period is 3 days because it allows us to ensure that
          our vehicles are properly maintained and ready for your adventure.
          However, we also offer flexible rental options for longer durations.
        </p>
        <p className={styles.aboutParagraph}>
          <span className={styles.question}>Have more questions?</span> Don't
          hesitate to call us! Our friendly team is here to assist you with any
          queries you may have, ensuring that your rental experience with Revved
          Realm is nothing short of exceptional.
        </p>

        <button
          className={styles.bookNowButton}
          onClick={() => setIsModalOpen(true)}
        >
          Book Now
        </button>

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

export default About;
