import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";

import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
// import { toast, ToastContainer } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Photo } from "./App.types";

const KAY_API = "xdjkac150CbFCNeS7Q-go_I-69rjDCCNi2TdpSdj0Mo";

function App() {
  const [query, setQuery] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<Photo | null>(null);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!query.trim()) {
      // setPhotos([]);
      return;
    }
    const fetchPhotos = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get<{ results: Photo[] }>(
          `https://api.unsplash.com/search/photos`,
          {
            params: {
              client_id: KAY_API,
              query: query,
              page: page,
              per_page: 20,
              order_by: "relevant",
              collections: query,
              content_filter: "high",
              // color: "black_and_white",
              orientation: "landscape",
              lang: "en",
            },
          }
        );

        setPhotos((prev) =>
          page === 1
            ? response.data.results
            : [...prev, ...response.data.results]
        );
      } catch (error) {
        setIsError(true);
        setPhotos([]);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [query, page]);

  const handleSearchValue = (newQuery: string) => {
    if (newQuery === query) {
      // setIsError(true);
      // setPhotos([]);
      // setPage(1);
      return;
    }
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);

    // if (photos.length === 0) {
    //   setIsError(true);
    //   toast("Please enter new prompt");
    // }
  };

  // useEffect(() => {
  //   if (photos.length === 0 && query.trim()) {
  //     setIsError(true);
  //     toast("Please enter new prompt");
  //   }
  // }, [photos, query]);

  const handleClickImgModal = (e: React.MouseEvent<HTMLLIElement>) => {
    const imgId = e.currentTarget.id;
    const findImg = photos.find((img) => img.id === imgId);

    if (!findImg) {
      console.error("Image not found");
      return;
    }

    setSelectedImg(findImg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImg(null);
  };

  const handleLoadMore = () => {
    const newPage = page + 1;

    setPage(newPage);
  };

  return (
    <>
      <SearchBar onSearchValue={handleSearchValue} />
      {isError === true && <ErrorMessage />}
      {/* {photos.length === 0 && <ErrorMessage />} */}
      {isLoading === true && <Loader />}
      <ImageGallery photos={photos} onOpenModal={handleClickImgModal} />
      {photos.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <ToastContainer />
      <ImageModal
        selectedImg={selectedImg}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default App;
