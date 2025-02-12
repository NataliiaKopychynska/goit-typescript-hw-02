import { jsx as _jsx } from "react/jsx-runtime";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
export default function ImageGallery({ photos, onOpenModal, }) {
    return (_jsx("ul", { className: s.list, children: photos.map((item) => (_jsx("li", { className: s.item, onClick: onOpenModal, id: item.id, children: _jsx(ImageCard, { item: item }) }, item.id))) }));
}
