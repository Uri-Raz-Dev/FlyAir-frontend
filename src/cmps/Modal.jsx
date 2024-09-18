import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router';

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    const location = useLocation()

    const isDetails = location.pathname.startsWith(`/stay/6`)
    return (

        <div className={isDetails ? 'dadModal details' : 'dadModal'}>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>

        </div>

    );
};
export default Modal;
// import {Modal} from 'react-modal'