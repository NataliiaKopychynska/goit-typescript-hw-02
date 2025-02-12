import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import s from "./SearchBar.module.css";
import { toast, ToastContainer } from "react-toastify";
export default function SearchBar({ onSearchValue }) {
    const [value, setValue] = useState("");
    const handleClickSearch = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            toast("Please enter your prompt");
            return;
        }
        onSearchValue(value);
    };
    return (_jsx(_Fragment, { children: _jsxs("header", { className: s.header, children: [_jsxs("form", { className: s.form, onSubmit: handleClickSearch, children: [_jsx("input", { onChange: (e) => setValue(e.target.value), value: value, type: "text", autoComplete: "off", autoFocus: true, placeholder: "Search images...", className: s.input }), _jsx("button", { className: s.btnImg, type: "submit", children: "Search" })] }), _jsx(ToastContainer, {})] }) }));
}
