'use strict';

define(function(require) {

	describeMixin('lib/with_dropdown', function() {
		beforeEach(function() {
			this.setupComponent(readFixtures('with_dropdown.html'));
		});

		it('should append dropdown-open class to dropdown that lacks the dropdown-open class when dropdown-toggle is clicked', function() {
			
		});

		it('should remove dropdown-open class from dropdown that has the dropdown-open class when dropdown-toggle is clicked', function() {

		});

		it('should remove dropdown-open class from dropdown if document is clicked', function() {

		});

		it('should trigger the event uiDropdownOpened with the associated dropdown element attached as data after the dropdown is opened', function() {

		});

		it('should trigger the event uiDropdownClosed with the associated dropdown element attached as data after the dropdown is closed', function() {

		});

		it('should open dropdown if event uiOpenDropdown is received and that the event specifies the dropdown element as data', function() {

		});

		it('should close dropdown if event uiCloseDropdown is received and that the event specifies the dropdown element as data', function() {

		});

		it('should open all dropdowns if event uiOpenDropdown is received and that the event does not specify a dropdown element as data', function() {

		});

		it('should close all dropdowns if event uiCloseDropdown is received and that the event does not specify a dropdown element as data', function() {

		});
	});
});