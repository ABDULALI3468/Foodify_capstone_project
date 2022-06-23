export const sorters = {
  comments: {
    byDate: ({ creation_date: a }, { creation_date: b }) => new Date(b) - new Date(a),
  },
};

export const filters = {
  ingredients: (item) => Object.entries(item).filter(
    ([key, value]) => key.includes('strIngredient') && value !== null && value !== '',
  ),
};
