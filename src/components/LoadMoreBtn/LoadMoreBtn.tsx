interface LoadMoreBtnProps {
  onLoadMore: () => void;
}
export default function LoadMoreBtn({ onLoadMore }: LoadMoreBtnProps) {
  return (
    <button onClick={onLoadMore} type="button">
      Load more
    </button>
  );
}
