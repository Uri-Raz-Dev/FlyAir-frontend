  import React, { useEffect, useRef } from 'react'

  const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    
    return (
        <div  className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* <button className="close-button" onClick={onClose}>×</button> */}
                {children}
            </div>
        </div>
    );
};
export default Modal;
// import {Modal} from 'react-modal'