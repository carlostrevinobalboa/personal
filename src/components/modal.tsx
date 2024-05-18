import ReactModal from 'react-modal';

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="modal"
            overlayClassName="overlay"
            ariaHideApp={false}
        >
            {children}
        </ReactModal>
    );
};

export default Modal;
