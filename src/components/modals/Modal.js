import React from 'react';
import './Modal.css';

function Modal(props) {

  return (
		<div {...props} className={`overlay animated ${props.stle}`}>
        <div className="modal">
			<h3>
				Ты молодец!!!
			</h3>
        </div>
      </div>
  );
}

export default Modal;
