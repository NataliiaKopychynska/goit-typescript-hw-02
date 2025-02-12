import { Photo } from "../../App.types";
interface ImageGalleryProps {
    photos: Photo[];
    onOpenModal: (e: React.MouseEvent<HTMLLIElement>) => void;
}
export default function ImageGallery({ photos, onOpenModal, }: ImageGalleryProps): import("react/jsx-runtime").JSX.Element;
export {};
