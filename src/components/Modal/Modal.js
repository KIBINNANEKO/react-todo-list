import React from 'react';
import './Modal.css';

function Modal(props) {

  return (
		<div {...props} className={`overlay animated ${props.stle}`}>
        <div className="modal">
          <img src={require('./Nice.jpg')} alt="Nice"/>
			    <h3>You did everything you planned for today! Well done!</h3>
        </div>
    </div>
  );
}

export default Modal;
