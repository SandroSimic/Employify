/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";

const Overlay = ({ onCloseOverlay, setCloseOverlay }) => {
  return (
    <>
      {onCloseOverlay && (
        <div className="overlay" onClick={() => setCloseOverlay(false)}></div>
      )}
    </>
  );
};

const Modal = ({ children, closeModal, setCloseModal }) => {
  return (
    <>
      {closeModal && (
        <>
          <Overlay
            onCloseOverlay={closeModal}
            setCloseOverlay={setCloseModal}
          />
          <div className="modal">
            <div className="modal__close" onClick={setCloseModal}>
              <MdClose />
            </div>
            <div className="modal__info">{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
