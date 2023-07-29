import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { FilterBlock, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    const valueFilter = event.currentTarget.value.trim();
    dispatch(setFilter(valueFilter));
  };

  return (
    <FilterBlock>
        <FilterInput
          type="text"
          placeholder="Find contacts ..."
          value={filter}
          onChange={handleChange}
        />
    </FilterBlock>
  );
};

export default Filter;
