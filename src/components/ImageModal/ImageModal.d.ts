import { Photo } from "../../App.types";
interface ImageModalProps {
    selectedImg: Photo | null;
    isOpen: boolean;
    onClose: () => void;
}
export default function ImageModal({ selectedImg, isOpen, onClose, }: ImageModalProps): import("react/jsx-runtime").JSX.Element;
export {};
