import { Photo } from "../../App.types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  photos: Photo[];
  onOpenModal: (e: React.MouseEvent<HTMLLIElement>) => void;
  query: string;
}
export default function ImageGallery({
  photos,
  onOpenModal,
  query,
}: ImageGalleryProps) {
  return (
    <div className={s.container}>
      <h2> Search results by name: {query}</h2>
      <ul className={s.list}>
        {photos.map((item) => (
          <li
            className={s.item}
            onClick={onOpenModal}
            key={item.id}
            id={item.id}
          >
            <ImageCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
