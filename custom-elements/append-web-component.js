document.addEventListener('DOMContentLoaded', function() {
  // add x-foo to document body
  document.body.appendChild(
      document.createElement('x-foo'));

  // add x-foo-button to document body
  document.body.appendChild(
      document.createElement('button', 'x-foo-button'));
});
