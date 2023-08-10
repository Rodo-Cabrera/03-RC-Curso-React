
import PropTypes from 'prop-types'


export const SelectData = ({ categoriesData, onCategSelect }) => {
  
 
  return (
    
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={(e) => onCategSelect(e)}
    >
            <option defaultValue={true}>Selecciona una Categoria</option>
            { categoriesData.map((categ) => (
              <option key={categ.name} value={categ.gif.name}>
                {categ.name}
              </option>
            ))}
          </select>      
    
  );
};
SelectData.propTypes = {
  categoriesData: PropTypes.array,
  onCategSelect: PropTypes.func,
};




