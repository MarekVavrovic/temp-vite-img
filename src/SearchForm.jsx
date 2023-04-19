import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.mySearch.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h2 className="title">unsplash images</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="mySearch"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
