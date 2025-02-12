import { useState } from "react";
import s from "./SearchBar.module.css";
import { toast, ToastContainer } from "react-toastify";

interface SearchBarProps {
  onSearchValue: (value: string) => void;
}

export default function SearchBar({ onSearchValue }: SearchBarProps) {
  const [value, setValue] = useState<string>("");
  const handleClickSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) {
      toast("Please enter your prompt");

      return;
    }
    onSearchValue(value);
    setValue("");
  };
  return (
    <>
      <header className={s.header}>
        <form className={s.form} onSubmit={handleClickSearch}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images..."
            className={s.input}
          />

          <button className={s.btnImg} type="submit">
            Search
          </button>
        </form>
        <ToastContainer />
      </header>
    </>
  );
}
