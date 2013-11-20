/**
 * Define module elements.
 */

var section = tractor.findElement(protractor.By.css('[data-sl-modal]'))
var container = tractor.findElement(protractor.By.css('.sl-modal-container'));

/**
 * Run tests.
 */

describe('shoelace-modal', function() {
  it('should not be displayed on load', function() {
    expect(container.getCssValue('display')).toEqual('none');
  });

  it('should not be displayed on click', function() {
    section.click(function(err) {
      expect(container.getCssValue('display')).toEqual('block');
    });
  });
});
