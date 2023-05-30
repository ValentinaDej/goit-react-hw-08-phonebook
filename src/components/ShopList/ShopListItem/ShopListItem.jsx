import PropTypes from 'prop-types';

import Button from 'shared/Button/Button';

export const ShopListItem = ({ id, name, phone }) => {
  return (
    <li>
      <div>
        <span>{name}:</span>
        <span>{phone}</span>
      </div>
      <Button
        title="Info id"
        type="button"
        onClick={() => {
          console.log(id);
        }}
      />
    </li>
  );
};

ShopListItem.propTypes = {
  nameId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
