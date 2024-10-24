import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmationPage from './pages/ConfirmationPage';
import './App.css';

// Helper function to generate time slots
const generateTimeSlots = () => {
  const timeSlots = [];
  for (let hour = 10; hour <= 21; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      if (time !== '21:30') { // Exclude 21:30 as the last slot should be 21:00
        timeSlots.push(time);
      }
    }
  }
  return timeSlots;
};

// Define the reducer function
const initialTimes = generateTimeSlots();

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Here you would implement the logic to update available times based on the date
      // For now, we'll just return all time slots
      return initialTimes;
    default:
      return state;
  }
};

function App() {
  // Initialize state with useReducer
  const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
