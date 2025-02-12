import { useEffect } from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { Photo } from "../../App.types";
Modal.setAppElement("#root");

interface ImageModalProps {
  selectedImg: Photo | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({
  selectedImg,
  isOpen,
  onClose,
}: ImageModalProps) {
  Modal.defaultStyles = {};
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      // className={s.modal}
      // overlayClassName={s.modalOverlay}
    >
      {selectedImg && (
        <div onClick={handleOverlayClick} className={s.madalOverlay}>
          <div className={s.modalContainer}>
            <img
              className={s.modalImg}
              src={selectedImg.urls.regular}
              alt={
                selectedImg.alt_description || "Image description not available"
              }
            />
            <p className={s.modalTitle}>
              {selectedImg.alt_description || "Image description not available"}
            </p>
            <button onClick={onClose} className={s.closerBTN}>
              x
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
