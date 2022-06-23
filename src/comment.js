import { renderComment, sortByDate } from './commons.js';
import { $select } from './elements.js';
import { COMMENT_URL } from './apis.js';

const listComments = async (dataId, popup) => {
  fetch(COMMENT_URL + dataId)
    .then((res) => res.json())
    .then((comments) => {
      if (Array.isArray(comments)) {
        const list2 = $select('.comments-list', popup);
        $select('.comments-wrapper span', popup).textContent = comments.length;
        comments.sort(sortByDate).forEach((comment) => list2.appendChild(renderComment(comment)));
      }
    });
};

export default listComments;
