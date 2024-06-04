import { createElement } from './createElement';

function createDom(element) {
  const dom =
    element.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = key => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach(child => {
    render(child, dom);
  });

  return dom;
}

export function render(element, container) {
    container.appendChild(createDom(element));
}