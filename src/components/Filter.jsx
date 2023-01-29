import { useSelector, useDispatch } from 'react-redux';
import { makeFilter } from 'redux/filterSlise';
import { selectorFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();
  return (
    <label style={{
      display: 'flex',
      flexDirection: 'column',
      width: "200px",
      fontSize: "20px",
    }} >

      Find contact by name
                    
      <input style={{ marginTop: '10px', }} type='text' value={filter}
        onChange={e => dispatch(makeFilter(e.target.value))} />
                    
    </label>
  );
};