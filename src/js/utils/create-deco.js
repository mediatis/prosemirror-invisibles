import { Decoration } from 'prosemirror-view';

export default (pos, type) => {
  return Decoration.widget(
    pos,
    () => {
      const span = document.createElement('span');
      span.classList.add('invisible');
      span.classList.add(`invisible--${type}`);
      return span;
    },
    {
      marks: [],
      key: type
    }
  );
};
