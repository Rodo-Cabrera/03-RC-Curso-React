
import PropTypes from 'prop-types'


export const SelectData = ({ categoriesData }) => {
  
  
  return (
    
          <select className="form-select" aria-label="Default select example">
            <option defaultValue={true}>Selecciona una Categoria</option>
            { categoriesData.map((categ) => (
              <option key={categ.gif.id} value={categ.gif.id}>
                {categ.name}
              </option>
            ))}
          </select>      
    
  );
};
SelectData.propTypes = {
  categoriesData: PropTypes.array
};




