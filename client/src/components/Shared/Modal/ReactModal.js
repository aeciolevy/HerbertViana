import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        overflow: 'visible',
        bottom: 'auto',
        borderRadius: '50px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '100',
    }
};

Modal.defaultStyles.overlay.backgroundColor = 'rgba(47, 47, 47, 0.50)';
Modal.defaultStyles.overlay.zIndex = '100';
Modal.setAppElement("#root");

const ReactModal = ({ children, style, title, isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} style={{...customStyles, ...style}} onRequestClose={onClose}
        >
            {children}
        </Modal>
    );
};

ReactModal.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
};

export default ReactModal;
