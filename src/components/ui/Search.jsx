import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const Search = ({ onClickSearch }) => {

  const searchInput = useRef(null);
  const buttonRef = useRef(null);


 

  useEffect(() => {
    searchInput.current.focus();
  }, []);

   const search = () => {
     // console.log(document.getElementById('searchInput'));
     // buttonRef.current.className = 'btn btn-success'
    //  console.log(searchInput.current.value);
     onClickSearch(searchInput.current.value);
   };


  return (
    <div className="col-sm-6 d-flex justify-content-between">
      <div className="row">
        <input
          ref={searchInput}
          type="search"
          className=" form-control form-control-dark text-dark"
          placeholder="Search..."
          aria-label="Search"
          // onChange={(e) => onSearch(e)}
        />
      </div>
      <button className="btn btn-primary" onClick={search} ref={buttonRef}>
        Buscar
      </button>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
  onClickSearch: PropTypes.func,
}

export default Search;
