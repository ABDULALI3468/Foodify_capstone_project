import { flagTrigger, commentCounter } from './commons.js';
import { $select, $getAttrib } from './elements.js';
import { getComments, postComment } from './apis.js';
import { sorters } from './helpers.js';
import Templates from './renderer.js';

export const addComment = async (event) => {
  event.preventDefault();

  const { target: self } = event;

  flagTrigger(self.lastElementChild);

  const comment = {
    username: self.elements.user.value.trim(),
    comment: self.elements.comment.value.trim(),
    item_id: $getAttrib(self, 'target_id'),
  };
  const res = await postComment(comment);

  if (res.status === 201) {
    self.reset();
    const list2 = self.parentElement.previousElementSibling.lastElementChild;
    list2.prepend(Templates.comment.render({
      creation_date: new Date().toISOString().substring(0, 10),
      ...comment,
    }));
    commentCounter(1, list2.previousElementSibling);
  }
  flagTrigger(self.lastElementChild);
};

export const listComments = async (itemId, lookup) => {
  const response = await getComments(itemId);

  if (Array.isArray(response)) {
    const list2 = $select('.comments-list', lookup);
    commentCounter(response.length, lookup);
    response.sort(sorters.comments.byDate).forEach(
      (comment) => list2.appendChild(Templates.comment.render(comment)),
    );
  }
};
