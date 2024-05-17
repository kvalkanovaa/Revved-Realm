import { useState } from 'react';
import styles from './Form.module.css'; // Import the styles module

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.formContainer}>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <h2 className={styles.centered}>Book Now</h2>
          <div className={styles.formControl}>
            <label htmlFor="name">Name (required)</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email (required)</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="phone">Phone Number (required)</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="vehicleType">
              Preferred Vehicle Type (optional)
            </label>
            <input
              type="text"
              id="vehicleType"
              placeholder="Enter preferred vehicle type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="vehicleModel">
              Preferred Vehicle Make (optional)
            </label>
            <input
              type="text"
              id="vehicleModel"
              placeholder="Enter preferred vehicle make"
              value={vehicleModel}
              onChange={(e) => setVehicleModel(e.target.value)}
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="message">Message (optional)</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className={styles.centered}>
            <button
              type="submit"
              className={styles.submitButton}
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.centered}>
          {' '}
          {/* Use the styles from the module */}
          <h2>Thank You!</h2>
          <p>We will contact you shortly.</p>
          <p>Our working hours are from 9:00 to 18:00 every day.</p>
        </div>
      )}
    </div>
  );
};

export default Form;
