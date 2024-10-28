/*import React, { useState } from 'react';
import OrderModal from '../OrderModal/OrderModal';

const Product = ({ image, name, price }) => {
  const [showModal, setShowModal] = useState(false);

  const orderFunction = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <img src={image} alt="Product" />
      <p>{name}</p>
      <p>₹{price}</p>
      <button onClick={orderFunction}>Order Now</button>
      <OrderModal   show={showModal} onClose={handleCloseModal} product={{ name, price }} />
    </div>
  );
};

export default Product;
*/
/*
import React, { useState } from 'react';
import './Product.css';
import OrderModal from '../OrderModal/OrderModal';

const Product = ({ image, name, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const orderFunction = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-card">
      <img src={image} alt="Product" />
      <p>{name}</p>
      <p>₹{price}</p>
      <button onClick={orderFunction}>Order Now</button>

      <OrderModal show={isModalOpen} onClose={closeModal} product={{ name, price }} />
    </div>
  );
};

export default Product;*/

// Product.js
/*import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ image, name, price }) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('./Order');
  };

  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>₹{price}</p>
      <button onClick={handleOrder}>Order Now</button>
    </div>
  );
};

export default Product;*/
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ image, name, price }) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/Order', { state: { name, price } });
  };

  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>₹{price}</p>
      <button onClick={handleOrder}>Order Now</button>
    </div>
  );
};

export default Product;

