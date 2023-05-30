import instance from './instance';

export const getAllProducts = async () => {
  const { data } = await instance.get('/products');
  console.log(data.result);
  return data.result;
};
