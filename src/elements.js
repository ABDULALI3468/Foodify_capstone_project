export const createElement = (tagName) => document.createElement(tagName);

export const $select = (selector, parentTree = document.body) => parentTree.querySelector(selector);

export const $getAttrib = ($element, attribute) => {
    if (typeof $element === 'string') $element = $select($element);
    
    return $element.getAttribute(attribute);
};

export class Elements {

    static get main() {
        return $select('main');
    }

    static get body() {
        return document.body;
    }
}
