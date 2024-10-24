<<<<<<< HEAD
import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: "Sarah M.",
        rating: 5,
        comment: "The food at Little Lemon is simply outstanding. The flavors are bold and the ingredients are always fresh. It's become our favorite spot for family dinners!",
        image: "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
        name: "John D.",
        rating: 4,
        comment: "Great atmosphere and even better food. The staff is friendly and attentive. I highly recommend trying their signature lemon dessert!",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        name: "Emily L.",
        rating: 5,
        comment: "As a vegetarian, I'm always looking for restaurants with good options. Little Lemon not only has great choices but they're delicious too!",
        image: "https://randomuser.me/api/portraits/women/56.jpg"
    },
    {
        name: "Michael R.",
        rating: 5,
        comment: "The attention to detail in every dish is impressive. You can tell the chefs really care about what they're creating. A must-visit restaurant!",
        image: "https://randomuser.me/api/portraits/men/76.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials-header">
                <h2>What Our Customers Say</h2>
            </div>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="testimonial-header">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                            <div className="testimonial-info">
                                <h3>{testimonial.name}</h3>
                                <div className="rating">
                                    {[...Array(testimonial.rating)].map((star, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="testimonial-comment">{testimonial.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
=======
import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: "Sarah M.",
        rating: 5,
        comment: "The food at Little Lemon is simply outstanding. The flavors are bold and the ingredients are always fresh. It's become our favorite spot for family dinners!",
        image: "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
        name: "John D.",
        rating: 4,
        comment: "Great atmosphere and even better food. The staff is friendly and attentive. I highly recommend trying their signature lemon dessert!",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        name: "Emily L.",
        rating: 5,
        comment: "As a vegetarian, I'm always looking for restaurants with good options. Little Lemon not only has great choices but they're delicious too!",
        image: "https://randomuser.me/api/portraits/women/56.jpg"
    },
    {
        name: "Michael R.",
        rating: 5,
        comment: "The attention to detail in every dish is impressive. You can tell the chefs really care about what they're creating. A must-visit restaurant!",
        image: "https://randomuser.me/api/portraits/men/76.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials-header">
                <h2>What Our Customers Say</h2>
            </div>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="testimonial-header">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                            <div className="testimonial-info">
                                <h3>{testimonial.name}</h3>
                                <div className="rating">
                                    {[...Array(testimonial.rating)].map((star, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="testimonial-comment">{testimonial.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
>>>>>>> b00288b52f058a0e290cd55204b98fe38618c6a4
