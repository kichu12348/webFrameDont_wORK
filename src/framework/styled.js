import { createElement } from './createElement';

function generateClassName(styles) {
  const hash = btoa(styles).replace(/=/g, '');
  return `styled-${hash}`;
}

function injectStyles(className, styles) {
  const styleSheet = document.styleSheets[0] || document.createElement('style');
  if (document.styleSheets.length === 0) {
    document.head.appendChild(styleSheet);
  }

  styleSheet.insertRule(`.${className} { ${styles} }`, styleSheet.cssRules.length);
}

export function styled(tag) {
  return function(styles) {
    return function(props) {
      const className = generateClassName(styles);
      injectStyles(className, styles);
      return createElement(tag, { ...props, className }, ...props.children);
    };
  };
}