'use strict';

define(
	[
	],

	function() {

		return withDropdown;

		function withDropdown() {

			this.defaultAttrs({
				dropdownSelector: '.dropdown',
				dropdownToggleSelector: '.dropdown-toggle',
				dropdownOpenSelector: '.dropdown-open'
			});

			this.openDropdowns = function(dropdownElements) {
				$(dropdownElements).addClass(this.attr.dropdownOpenSelector);
				var self = this;
				dropdownElements.each(function(index, dropdownElement) {
					self.trigger('uiDropdownOpened', {
						dropdownElement: dropdownElement
					});
				});
			};

			this.closeDropdowns = function(dropdownElements) {
				$(dropdownElements).removeClass(this.attr.dropdownOpenSelector);
				var self = this;
				dropdownElements.each(function(index, dropdownElement) {
					self.trigger('uiDropdownClosed', {
						dropdownElement: dropdownElement
					});
				});
			};

			this.handleOpenDropdown = function(event, data) {
				var dropdownElement = data.dropdownElement;
				if (dropdownElement) {
					this.openDropdowns(dropdownElement);
				} else {
					var dropdownElements = this.select('dropdownSelector');
					this.openDropdowns(dropdownElements);
				}
			};

			this.handleCloseDropdown = function(event, data) {
				var dropdownElement = data.dropdownElement;
				if (dropdownElement) {
					this.closeDropdowns(dropdownElement);
				} else {
					var dropdownElements = this.select('dropdownSelector');
					this.closeDropdowns(dropdownElements);
				}
			};

			this.handleClickDropdownToggle = function(event, data) {
				var dropdownElement = $(event.target).closest(this.attr.dropdownSelector);
				var open = !dropdownElement.hasClass(this.attr.dropdownOpenSelector);
				if (open) {
					this.openDropdowns(dropdownElement);
				} else {
					this.closeDropdowns(dropdownElement);
				}
			};

			this.handleClickDocument = function(event, data) {
				var dropdownElements = this.select('dropdownSelector');
				var eventTarget = $(event.target);
				if (eventTarget.is(this.attr.dropdownToggleSelector)) {
					var dropdownElement = eventTarget.closest(this.attr.dropdownSelector);
					dropdownElements = dropdownElements.not(dropdownElement);
				}
				this.closeDropdowns(dropdownElements);
			};

			this.after('initialize', function() {
				this.on('uiOpenDropdown', this.handleOpenDropdown);
				this.on('uiCloseDropdown', this.handleCloseDropdown);
				this.on('click', {
					'dropdownToggleSelector': this.handleClickDropdownToggle
				});
				this.on(document, 'click', this.handleClickDocument);
			});
		}
	}
)