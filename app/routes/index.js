import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { image: 'assets/images/langkawi.jpg' },
      { image: 'assets/images/amsterdam.jpg' },
      { image: 'assets/images/temple.jpg' },
      { image: 'assets/images/gulf.jpg' },
    ];
  }
});
