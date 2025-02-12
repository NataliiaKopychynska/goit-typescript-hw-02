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
      className="modal"
      overlayClassName="modal-overlay"
    >
      {selectedImg && (
        <div onClick={handleOverlayClick} className={s.madalOverlay}>
          <div className={s.modalContainer}>
            <img
              src={selectedImg.urls.regular}
              alt={
                selectedImg.alt_description || "Image description not available"
              }
            />
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </Modal>
  );
}
