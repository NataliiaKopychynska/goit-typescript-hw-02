import { jsx as _jsx } from "react/jsx-runtime";
export default function LoadMoreBtn({ onLoadMore }) {
    return (_jsx("button", { onClick: onLoadMore, type: "button", children: "Load more" }));
}
