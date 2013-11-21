/**
 * Define module elements.
 */

var section = $('[data-sl-modal]');
var container = $('.sl-modal-container');
var bg = $('.sl-modal-container .bg');
var openHandle = $('[data-ng-click="open()"]');

/**
 * Run tests.
 */

describe('shoelace-modal', function() {
  afterEach(function() {
    screenshot();
  });

  it('should not be displayed on load', function() {
    expect(container.getCssValue('display')).toEqual('none');
  });

  it('should be displayed on click', function() {
    section.click();
    expect(container.getCssValue('display')).toEqual('block');
  });

  it('should hide when clicking on the background', function() {
    bg.click();
    expect(container.getCssValue('display')).toEqual('none');
  });

  it('should open when calling `open()`', function() {
    openHandle.click();
     // expect(container.getCssValue('display')).toEqual('block'); 
  });
});
