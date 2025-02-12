import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { toast, ToastContainer } from "react-toastify";
export default function ErrorMessage() {
    // console.log("Sorry, please enter your prompt");
    toast("Sorry, please enter your prompt");
    return (_jsx(_Fragment, { children: _jsx(ToastContainer, {}) }));
}
