import { Photo } from "../../App.types";
// import s from "./ImageCard.module.css"

interface ImageCardProps {
  item: Photo;
}

export default function ImageCard({ item }: ImageCardProps) {
  return (
    <>
      <div>
        <img width="260" height="180" src={item.urls.small} alt="" />
      </div>
    </>
  );
}
