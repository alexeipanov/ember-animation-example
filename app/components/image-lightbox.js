import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  src: null,
  classNames: ['view'],
  classNameBindings: ['animated'],
  animated: null,
  didInsertElement() {
    let image = this.get('element');
    image.addEventListener('animationend', () => this.set('animated', null) );
  },
  didUpdateAttrs() {
    this.set('src', this.get('image.image'));
    this.set('animated', 'animated');
  },
});
