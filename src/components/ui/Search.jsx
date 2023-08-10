import PropTypes from "prop-types";

const Search = ({ onSearch }) => {
  return (
    <div className="col-sm-6">
      <input
        type="search"
        className=" form-control form-control-dark text-dark"
        placeholder="Search..."
        aria-label="Search"
        onChange={(e) => onSearch(e)}
      />
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
}

export default Search;
