const recipieCounter = (data, element) => {
  element.innerHTML = `Recipes (${data.length})`;
  return data.length;
};

export default recipieCounter;
