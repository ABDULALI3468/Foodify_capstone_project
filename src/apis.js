export const API_BASE_ID = '1AkDSb9CeEmOpdltysrI';

export const API_BASE_URLS = {
  ITEM_URL: 'https://themealdb.com/api/json/v1/1/lookup.php?i=',
  COMMENT_URL:
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/' + 
    API_BASE_ID + 
    '/comments?item_id=',
};

export const postData = (url, data = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

export const getComments = async (itemId) => {
  const response = await fetch(API_BASE_URLS.COMMENT_URL + itemId);
  return response.json();
};

export const getDetails = async (itemId) => {
  const response = await fetch(API_BASE_URLS.ITEM_URL + itemId);
  return response.json();
};

export const postComment = async (comment) => {
  const response = await postData(API_BASE_URLS.COMMENT_URL.replace('?item_id=', ''), comment);
  return response;
};
