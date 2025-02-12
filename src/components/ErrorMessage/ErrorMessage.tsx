import { toast, ToastContainer } from "react-toastify";

export default function ErrorMessage() {
  // console.log("Sorry, please enter your prompt");
  toast("Sorry, please enter your prompt");

  return (
    <>
      <ToastContainer />
    </>
  );
}
