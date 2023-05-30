export const selectAllShops = ({ shops }) => shops.items;

export const selectFilteredShops = ({ shops, filter }) => {
  if (!filter) {
    return shops.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = shops.items.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return result;
};

export const selectLoadingShops = ({ shops }) => shops.isLoading;
