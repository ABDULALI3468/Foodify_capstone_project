import { renderComment, sortByDate, flagTrigger } from './commons.js';
import { $select, $getAttrib } from './elements.js';
import { COMMENT_URL, postData } from './apis.js';

export const addComment = async (event) => {
  event.preventDefault();

  const { target: self } = event;

  flagTrigger(self.lastElementChild);

  const comment = {
    username: self.elements.user.value.trim(),
    comment: self.elements.comment.value.trim(),
    item_id: $getAttrib(self, 'target_id'),
  };
  const res = await postData(COMMENT_URL, comment);

  if (res.status === 201) {
    self.reset();
    const list2 = self.parentElement.previousElementSibling.lastElementChild;
    list2.prepend(renderComment({
      creation_date: (new Date()).toISOString().substring(0, 10),
      ...comment,
    }));
    const counter = $select('span', list2.previousElementSibling);
    counter.textContent = parseInt(counter.textContent, 10) + 1;
  }
  flagTrigger(self.lastElementChild);
};

export const listComments = async (dataId, popup) => {
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
