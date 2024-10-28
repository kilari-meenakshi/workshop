/*import React from 'react';
import './OrderModal.css';

const OrderModal = ({ show, onClose, product }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" >
      <div className="modal-content">
        <h2>Order Confirmation</h2>
        <p>Product: {product.name}</p>
        <p>Price: ₹{product.price}</p>
        <p>Your order has been placed successfully!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OrderModal;
*/
/*import React from 'react';
import './OrderModal.css';

const OrderModal = ({ show, onClose, product }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Order Confirmed!</h2>
        <p>Product: {product.name}</p>
        <p>Price: ₹{product.price}</p>
        <p>Your order has been placed successfully!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OrderModal;*/

// OrderModal.js
/*import React from 'react';
import { ChevronCompactLeft } from 'react-bootstrap-icons'; // Import the icon
import './OrderModal.css';

const OrderModal = ({ show, onClose, product }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>
          <ChevronCompactLeft onClick={onClose} style={{ cursor: 'pointer' }} /> 
          Order Confirmed!
        </h2>
        <p>Product: {product.name}</p>
        <p>Price: ₹{product.price}</p>
        <p>Your order has been placed successfully!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OrderModal;*/

/*import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronCompactLeft } from 'react-bootstrap-icons';
import './OrderModal.css';

const OrderModal = () => {
  const location = useLocation();
  const { name, price } = location.state || {};

  if (!name || !price) return <p>No order details available.</p>;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>
          <ChevronCompactLeft style={{ cursor: 'pointer' }} /> 
          Order Confirmed!
        </h2>
        <p>Product: {name}</p>
        <p>Price: ₹{price}</p>
        <p>Your order has been placed successfully!</p>
      </div>
    </div>
  );
};

export default OrderModal;*/

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronCompactLeft } from 'react-bootstrap-icons';
import './OrderModal.css';

const OrderModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, price } = location.state || {};

  const handleClose = () => {
    navigate('/');  
  };

  if (!name || !price) return <p>No order details available.</p>;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>
          <ChevronCompactLeft style={{ cursor: 'pointer' }} onClick={handleClose} /> {/* Close icon */}
          Order Confirmed!
        </h2>
        <p>Product: {name}</p>
        <p>Price: ₹{price}</p>
        <p>Your order has been placed successfully!</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default OrderModal;



