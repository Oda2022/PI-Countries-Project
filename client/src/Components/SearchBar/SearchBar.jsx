import "./SearchBarModules.css";
import { useDispatch } from "react-redux";
import { getCountryNames } from "../../redux/actions";

const SearchBar = (props) =>{
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        dispatch(getCountryNames(newQuery));
        props.setCurrentPage(1);
      };

      return (
        <div>
          <input
            className="bar"
            placeholder="Write the country you are looking for"
            type="search"
            onChange={handleInputChange}
          />
          <div></div>
        </div>
      );
}

export default SearchBar;