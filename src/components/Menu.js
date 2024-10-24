<<<<<<< HEAD
import React from 'react';
import './Menu.css';

const menuItems = [
    {
        name: 'Greek Salad',
        price: '$12.99',
        description: 'Fresh vegetables, feta cheese, olives, and our house dressing.',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Bruschetta',
        price: '$5.99',
        description: 'Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil.',
        image: 'https://images.unsplash.com/photo-1594978583693-8dfdfc93f052?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Lemon Dessert',
        price: '$5.00',
        description: 'A delightful, tangy lemon dessert that\'s the perfect way to end your meal.',
        image: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80'
    },
    {
        name: 'Grilled Fish',
        price: '$18.99',
        description: 'Catch of the day, grilled to perfection with herbs and lemon.',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
];

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="menu-header">
                <h2>Our Specials</h2>
                <button className="view-full-menu">View Full Menu</button>
            </div>
            <div className="menu-grid">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <img src={item.image} alt={item.name} />
                        <div className="menu-item-content">
                            <h3>{item.name}</h3>
                            <p className="price">{item.price}</p>
                            <p className="description">{item.description}</p>
                            <button className="order-btn">Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;
=======
import React from 'react';
import './Menu.css';

const menuItems = [
    {
        name: 'Greek Salad',
        price: '$12.99',
        description: 'Fresh vegetables, feta cheese, olives, and our house dressing.',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Bruschetta',
        price: '$5.99',
        description: 'Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil.',
        image: 'https://images.unsplash.com/photo-1594978583693-8dfdfc93f052?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Lemon Dessert',
        price: '$5.00',
        description: 'A delightful, tangy lemon dessert that\'s the perfect way to end your meal.',
        image: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80'
    },
    {
        name: 'Grilled Fish',
        price: '$18.99',
        description: 'Catch of the day, grilled to perfection with herbs and lemon.',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
];

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="menu-header">
                <h2>Our Specials</h2>
                <button className="view-full-menu">View Full Menu</button>
            </div>
            <div className="menu-grid">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <img src={item.image} alt={item.name} />
                        <div className="menu-item-content">
                            <h3>{item.name}</h3>
                            <p className="price">{item.price}</p>
                            <p className="description">{item.description}</p>
                            <button className="order-btn">Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;
>>>>>>> b00288b52f058a0e290cd55204b98fe38618c6a4
