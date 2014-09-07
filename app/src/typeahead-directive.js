angular.module('pingPongApp')
	.directive('ppTypeahead', function (Ingredients) {
		return {
			restrict: 'E',
			replace: true,
			template: '<input class="form-control" type="text" autocomplete="off"/>',
			scope: {
				callback: '&onSelect'
			},
			link: function (scope, element, attrs, controller) {
				function search(q, cb) {
					Ingredients.search(q)
						.then(function (data) {
							cb(data);
						})
				};

				$(element).typeahead({
					select: function(){
						var val = this.$menu.find('.active').data('value');
						element.val('');
						scope.$apply(function (){
							scope.callback({ingredient: val});
						});

						return this.hide();
					},
					source: search
				});

				$(element).bind('typeahead:selected', function(obj, datum, name) {
					alert(JSON.stringify(obj)); // object
					// outputs, e.g., {"type":"typeahead:selected","timeStamp":1371822938628,"jQuery19105037956037711017":true,"isTrigger":true,"namespace":"","namespace_re":null,"target":{"jQuery19105037956037711017":46},"delegateTarget":{"jQuery19105037956037711017":46},"currentTarget":
					alert(JSON.stringify(datum)); // contains datum value, tokens and custom fields
					// outputs, e.g., {"redirect_url":"http://localhost/test/topic/test_topic","image_url":"http://localhost/test/upload/images/t_FWnYhhqd.jpg","description":"A test description","value":"A test value","tokens":["A","test","value"]}
					// in this case I created custom fields called 'redirect_url', 'image_url', 'description'

					alert(JSON.stringify(name)); // contains dataset name
					// outputs, e.g., "my_dataset"

				});
			}
		};
	});
