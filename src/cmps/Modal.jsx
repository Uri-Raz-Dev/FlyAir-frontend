import React, { useEffect, useRef } from 'react'

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;


    return (
    
        <div className='dadModal'>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>

        </div>
        
    );
};
export default Modal;
// import {Modal} from 'react-modal'