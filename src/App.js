import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { toast, ToastContainer } from "react-toastify";
const KAY_API = "xdjkac150CbFCNeS7Q-go_I-69rjDCCNi2TdpSdj0Mo";
function App() {
    const [query, setQuery] = useState("");
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);
    const [page, setPage] = useState(1);
    useEffect(() => {
        if (!query.trim()) {
            setPhotos([]);
            return;
        }
        const fetchPhotos = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const response = await axios.get(`https://api.unsplash.com/search/photos`, {
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
                });
                if (page === 1) {
                    setPhotos(response.data.results);
                }
                else {
                    const dataPhotos = response.data.results;
                    setPhotos((prev) => [...prev, ...dataPhotos]);
                }
            }
            catch (error) {
                setIsError(true);
                setPhotos([]);
                console.log(error);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchPhotos();
    }, [query, page]);
    const handleSearchValue = (newQuery) => {
        if (newQuery === query) {
            setIsError(true);
            setPhotos([]);
            setPage(1);
            return;
        }
        setQuery(newQuery);
        setPhotos([]);
        setPage(1);
    };
    if (photos.length === 0) {
        setIsError(true);
        toast("Please enter new prompt");
    }
    const handleClickImgModal = (e) => {
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
    return (_jsxs(_Fragment, { children: [_jsx(SearchBar, { onSearchValue: handleSearchValue }), isError === true && _jsx(ErrorMessage, {}), isLoading === true && _jsx(Loader, {}), _jsx(ImageGallery, { photos: photos, onOpenModal: handleClickImgModal }), photos.length > 0 && _jsx(LoadMoreBtn, { onLoadMore: handleLoadMore }), _jsx(ToastContainer, {}), _jsx(ImageModal, { selectedImg: selectedImg, isOpen: isModalOpen, onClose: handleCloseModal })] }));
}
export default App;
