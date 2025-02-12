import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export default function ImageCard({ item }) {
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsx("img", { width: "260", height: "180", src: item.urls.small, alt: "" }) }) }));
}
