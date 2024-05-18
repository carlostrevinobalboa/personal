import ReactModal from 'react-modal';

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
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
