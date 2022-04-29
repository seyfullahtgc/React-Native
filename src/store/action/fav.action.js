//Bu kısım kullanıcıdan gelen eylemlerin listeledindiği bölümdür.

export const AddFav = (data = {}) => {
  return {
    type: 'ADD_FAV',
    payload: data,
  };
};

export const getFav = (data = {}) => {
  return {
    type: 'GET_FAV',
    payload: data,
  };
};
