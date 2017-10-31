import Ember from 'ember';

export default Ember.Component.extend({
  selected: null,
  didInsertElement() {
    this.set('selected', this.get('images.firstObject'));
  },
  actions: {
    select(image) {
      this.set('selected', image);
    }
  }
});
