# Ember-animation-example

This is an example for create animated elements in Ember.

## Idea
When a thumbnail image is clicked, we update `selected` property of `image-gallery` component.

This component contains nested `image-lightbox` component, and it receives `selected` property as a parameter.
So every time when `selected` is changed, `didUpdateAttr` event is fired, and we can update large image and its CSS class (and this starts the animation, which has been defined in this class).

And finally, to make possible to view animation for the next time, we need to remove the CSS class when an animation is ended.
To do this, just add an event listener to `animationend` event, which removes CSS class - with little help of `didInsertElement` event.
