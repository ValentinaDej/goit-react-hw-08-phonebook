import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';

import LabelInput from 'shared/LabelInput/LabelInput';
import styles from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    const action = setFilter(e.target.value);
    dispatch(action);
  };

  return (
    <div className={styles.form}>
      <LabelInput
        caption="Find contacts by name"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};
