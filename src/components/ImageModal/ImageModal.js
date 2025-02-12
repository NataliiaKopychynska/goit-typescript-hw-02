import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";
Modal.setAppElement("#root");
export default function ImageModal({ selectedImg, isOpen, onClose, }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    return (_jsx(Modal, { isOpen: isOpen, onRequestClose: onClose, contentLabel: "Image Modal", className: "modal", overlayClassName: "modal-overlay", children: selectedImg && (_jsx("div", { onClick: handleOverlayClick, className: s.madalOverlay, children: _jsxs("div", { className: s.modalContainer, children: [_jsx("img", { src: selectedImg.urls.regular, alt: selectedImg.alt_description || "Image description not available" }), _jsx("button", { onClick: onClose, children: "Close" })] }) })) }));
}
