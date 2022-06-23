const API_ID = '1AkDSb9CeEmOpdltysrI';

const INVOLVEMENT_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const RECIPE_URL = 'https://themealdb.com/api/json/v1/1/lookup.php?i=';

export const COMMENT_URL = `${INVOLVEMENT_API + API_ID}/comments?item_id=`;

export const postData = (url, data = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

export const getComments = async (itemId) => {
  const response = await fetch(`${COMMENT_URL}${itemId}`);
  return response.json();
};

export const getDetails = async (itemId) => {
  const response = await fetch(`${RECIPE_URL}${itemId}`);
  return response.json();
};

export const postComment = async (comment) => {
  const response = await postData(COMMENT_URL, comment);
  return response;
};
