export const API_BASE_ID = '1AkDSb9CeEmOpdltysrI';

const API_INVOL_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

export const API_BASE_URLS = {
  ITEM_URL: 'https://themealdb.com/api/json/v1/1/lookup.php?i=',
  ITEMS_URL: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British',
  COMMENTS_URL:
    API_INVOL_URL + 
    API_BASE_ID + 
    '/comments?item_id=',
  LIKES_URL: `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_BASE_ID}/likes`
};

export const postData = (url, data = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

export const getComments = async (itemId) => {
  const response = await fetch(API_BASE_URLS.COMMENTS_URL + itemId);
  return (response.status === 200) ? response.json() : null;
};

export const getDetails = async (itemId) => {
  const response = await fetch(API_BASE_URLS.ITEM_URL + itemId);
  return response.json();
};

export const postComment = async (comment) => {
  const response = await postData(API_BASE_URLS.COMMENTS_URL.replace('?item_id=', ''), comment);
  return response;
};
