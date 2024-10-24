import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import '../components/ConfirmationPage.css';

const ConfirmationPage = () => {
  const bookingData = JSON.parse(localStorage.getItem('Bookings'));

  return (
    <>
      <Header />
      <main className="confirmation-page">
        <section className="confirmation-content">
          <h1>Booking Confirmed!</h1>
          <p>Thank you for your reservation. We look forward to seeing you!</p>
          {bookingData && (
            <div className="booking-details">
              <h2>Booking Details:</h2>
              <table className="details-table">
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td>{bookingData.name}</td>
                  </tr>
                  <tr>
                    <th>Phone:</th>
                    <td>{bookingData.phone}</td>
                  </tr>
                  <tr>
                    <th>Email:</th>
                    <td>{bookingData.email}</td>
                  </tr>
                  <tr>
                    <th>Date:</th>
                    <td>{bookingData.date}</td>
                  </tr>
                  <tr>
                    <th>Time:</th>
                    <td>{bookingData.time}</td>
                  </tr>
                  <tr>
                    <th>Guests:</th>
                    <td>{bookingData.guests}</td>
                  </tr>
                  <tr>
                    <th>Occasion:</th>
                    <td>{bookingData.occasion}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          <Link to="/" className="home-button">Return to Home</Link>
        </section>
      </main>
      <Footer />
      <Copyright />
    </>
  );
};

export default ConfirmationPage;
