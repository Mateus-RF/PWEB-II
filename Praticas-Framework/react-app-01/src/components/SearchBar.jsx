import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
import { useEffect } from "react";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };
  useEffect(() => {
    handleSearch(query);
  }, [query])

  return (
    <form className='search-container' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Pesquise por um modelo de carro...'
        value={query || ""}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type='submit'>
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;