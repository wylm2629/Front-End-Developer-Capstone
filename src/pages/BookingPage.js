<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import '../components/Booking.css';

const BookingPage = ({ availableTimes, dispatch }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: new Date().toISOString().split('T')[0],
        time: '',
        guests: 1,
        occasion: 'birthday'
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch({ type: 'UPDATE_TIMES', date: new Date(formData.date) });
    }, [formData.date, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === 'date') {
            dispatch({ type: 'UPDATE_TIMES', date: new Date(value) });
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
        if (!formData.email.trim()) tempErrors.email = "Email is required";
        if (!formData.date) tempErrors.date = "Date is required";
        if (!formData.time) tempErrors.time = "Time is required";
        if (formData.guests < 1 || formData.guests > 10) tempErrors.guests = "Guests must be between 1 and 10";
        if (!formData.occasion) tempErrors.occasion = "Occasion is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Booking submitted:', formData);
            localStorage.setItem('Bookings', JSON.stringify(formData));
            navigate('/confirmation');
        }
    };

    return (
        <>
            <Header />
            <main>
                <section className="booking">
                    <div className="booking-content">
                        <h1>Reserve a Table</h1>
                        <form onSubmit={handleSubmit} className="booking-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.name && <div className="error-message">{errors.name}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.phone && <div className="error-message">{errors.phone}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <div className="error-message">{errors.email}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.date && <div className="error-message">{errors.date}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="time">Time</label>
                                <select
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a time</option>
                                    {availableTimes.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                                {errors.time && <div className="error-message">{errors.time}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="guests">Guests</label>
                                <input
                                    type="number"
                                    id="guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.guests && <div className="error-message">{errors.guests}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="occasion">Occasion</label>
                                <select
                                    id="occasion"
                                    name="occasion"
                                    value={formData.occasion}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.occasion && <div className="error-message">{errors.occasion}</div>}
                            </div>

                            <button type="submit" className="submit-btn">Confirm Reservation</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
            <Copyright />
        </>
    );
};

export default BookingPage;
=======
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import '../components/Booking.css';

const BookingPage = ({ availableTimes, dispatch }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: new Date().toISOString().split('T')[0],
        time: '',
        guests: 1,
        occasion: 'birthday'
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch({ type: 'UPDATE_TIMES', date: new Date(formData.date) });
    }, [formData.date, dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (name === 'date') {
            dispatch({ type: 'UPDATE_TIMES', date: new Date(value) });
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
        if (!formData.email.trim()) tempErrors.email = "Email is required";
        if (!formData.date) tempErrors.date = "Date is required";
        if (!formData.time) tempErrors.time = "Time is required";
        if (formData.guests < 1 || formData.guests > 10) tempErrors.guests = "Guests must be between 1 and 10";
        if (!formData.occasion) tempErrors.occasion = "Occasion is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Booking submitted:', formData);
            localStorage.setItem('Bookings', JSON.stringify(formData));
            navigate('/confirmation');
        }
    };

    return (
        <>
            <Header />
            <main>
                <section className="booking">
                    <div className="booking-content">
                        <h1>Reserve a Table</h1>
                        <form onSubmit={handleSubmit} className="booking-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.name && <div className="error-message">{errors.name}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.phone && <div className="error-message">{errors.phone}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <div className="error-message">{errors.email}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.date && <div className="error-message">{errors.date}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="time">Time</label>
                                <select
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a time</option>
                                    {availableTimes.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>
                                {errors.time && <div className="error-message">{errors.time}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="guests">Guests</label>
                                <input
                                    type="number"
                                    id="guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.guests && <div className="error-message">{errors.guests}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="occasion">Occasion</label>
                                <select
                                    id="occasion"
                                    name="occasion"
                                    value={formData.occasion}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.occasion && <div className="error-message">{errors.occasion}</div>}
                            </div>

                            <button type="submit" className="submit-btn">Confirm Reservation</button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
            <Copyright />
        </>
    );
};

export default BookingPage;
>>>>>>> b00288b52f058a0e290cd55204b98fe38618c6a4
