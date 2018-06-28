// jsx-a11y plugin - https://github.com/evcohen/eslint-plugin-jsx-a11y/

module.exports = {
  plugins: ['jsx-a11y'],
  rules: {
    // Enforce emojis are wrapped in and provide screenreader access.
    // 'jsx-a11y/accessible-emoji': 0,
    // Enforce all anchors to contain accessible content.
    'jsx-a11y/anchor-has-content': 2,
    // Enforce elements with aria-activedescendant are tabbable.
    // 'jsx-a11y/aria-activedescendant-has-tabindex': 0,
    // Enforce all aria-* props are valid.
    'jsx-a11y/aria-props': 2,
    // Enforce ARIA state and property values are valid.
    'jsx-a11y/aria-proptypes': 2,
    // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
    'jsx-a11y/aria-role': 2,
    // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
    // 'jsx-a11y/aria-unsupported-elements': 0,
    // Enforce a clickable non-interactive element has at least one keyboard event listener.
    // 'jsx-a11y/click-events-have-key-events': 0,
    // Enforce heading (h1, h2, etc) elements contain accessible content.
    'jsx-a11y/heading-has-content': 2,
    // Enforce all anchors are valid, navigable elements.
    'jsx-a11y/anchor-is-valid': 2,
    // Enforce <html> element has lang prop.
    'jsx-a11y/html-has-lang': 2,
    // Enforce iframe elements have a title attribute.
    'jsx-a11y/iframe-has-title': 2,
    // Enforce all elements that require alternative text have meaningful information to relay back to end user.
    'jsx-a11y/alt-text': 2,
    // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
    'jsx-a11y/img-redundant-alt': 2,
    // Enforce that <label> elements have the htmlFor prop.
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    // Enforce lang attribute has a valid value.
    'jsx-a11y/lang': 2,
    // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
    'jsx-a11y/mouse-events-have-key-events': 2,
    // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
    // 'jsx-a11y/no-access-key': 0,
    // Enforce autoFocus prop is not used.
    // 'jsx-a11y/no-autofocus': 0,
    // Enforce distracting elements are not used.
    // 'jsx-a11y/no-distracting-elements': 0,
    // Enforce usage of onBlur over onChange on select menus for accessibility.
    'jsx-a11y/no-onchange': 2,
    // Enforce explicit role property is not the same as implicit/default role property on element.
    'jsx-a11y/no-redundant-roles': 2,
    // Enforce non-interactive elements have no interactive handlers.
    'jsx-a11y/no-static-element-interactions': 2,
    // Enforce that elements with onClick handlers must be focusable.
    // 'jsx-a11y/onclick-has-focus': 0,
    // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
    // 'jsx-a11y/onclick-has-role': 0,
    // Enforce that elements with ARIA roles must have all required attributes for that role.
    'jsx-a11y/role-has-required-aria-props': 2,
    // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
    'jsx-a11y/role-supports-aria-props': 2,
    // Enforce scope prop is only used on <th> elements.
    'jsx-a11y/scope': 2,
    // Enforce tabIndex value is not greater than zero.
    'jsx-a11y/tabindex-no-positive': 2,
  },
};
