export const createElement = (tagName, options = {}) => {
  const element = document.createElement(tagName);
  Object.entries(options).forEach(([attrib, value]) => {
    if (attrib === 'classes') attrib = 'class';
    element.setAttribute(attrib, value);
  });
  return element;
};

export const $select = (selector, parentTree = document.body) => parentTree.querySelector(selector);

export const $getAttrib = ($element, attribute) => {
  if (typeof $element === 'string') $element = $select($element);

  return $element.getAttribute(attribute);
};

export const $html = ($element, html, lookup = document.body) => {
  if (typeof $element === 'string') $element = $select($element, lookup);
  $element.innerHTML = html;
};

export const $text = ($element, text, lookup = document.body) => {
  if (typeof $element === 'string') $element = $select($element, lookup);
  if (text === undefined) return $element.textContent;

  $element.textContent = text;
};

export class Elements {
  static get main() {
    return $select('main');
  }

  static get body() {
    return document.body;
  }
}
