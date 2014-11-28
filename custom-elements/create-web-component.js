var XFooPrototype = Object.create(HTMLElement.prototype);
XFooPrototype.createdCallback = function() {
  this.textContent = "Hello Foo!";
};

document.registerElement('x-foo', {
  prototype: XFooPrototype,
});

var XFooButtonPrototype = Object.create(HTMLButtonElement.prototype);
XFooButtonPrototype.createdCallback = function() {
  this.textContent = "Click me!";
};

var XFooButton = document.registerElement('x-foo-button', {
  prototype: XFooButtonPrototype,
  extends: 'button'
});
