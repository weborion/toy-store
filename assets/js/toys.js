$(function(){

	// Create a model for the services
	var Toy = Backbone.Model.extend({

		

		defaults:{
			title: 'EduOnline Toy Store',
			price: 800,
			checked: false
		},

		
		toggle: function(){
			this.set('checked', !this.get('checked'));
		}
	});

	
	var ToysList = Backbone.Collection.extend({

				model: Toy,

		
		getChecked: function(){
			return this.where({checked:true});
		}
	});

	
	var toys = new ToysList([
		new Toy({ title: 'Kaleido Scope', price: 400}),
		new Toy({ title: 'CBSE Class 12 COMBI PACK (8 CD Pack)', price: 1699}),
		new Toy({ title: 'CBSE Class 10 COMBI PACK (8 CD Pack)', price: 1799}),
		new Toy({ title: 'Understand Static Electricity with Fun', price: 200})
		// Add more here
	]);

	// This view turns a Service model into HTML
	var ToyView = Backbone.View.extend({
		tagName: 'li',

		events:{
			'click': 'toggleService'
		},

		initialize: function(){

			// Set up event listeners. The change backbone event
			// is raised when a property changes (like the checked field)

			this.listenTo(this.model, 'change', this.render);
		},

		render: function(){

			// Create the HTML

			this.$el.html('<input type="checkbox" value="1" name="' + this.model.get('title') + '" /> ' + this.model.get('title') + '<span>$' + this.model.get('price') + '</span>');
			this.$('input').prop('checked', this.model.get('checked'));

			// Returning the object is a good practice
			// that makes chaining possible
			return this;
		},

		toggleService: function(){
			this.model.toggle();
		}
	});

	// The main view of the application
	var App = Backbone.View.extend({

		// Base the view on an existing element
		el: $('#main'),

		initialize: function(){

			
			this.total = $('#total span');
			this.list = $('#toys');
			
						this.listenTo(toys, 'change', this.render);

			

			toys.each(function(toy){

				var view = new ToyView({ model: toy });
				this.list.append(view.render().el);

			}, this);			},

		render: function(){

			
			var total = 0;

			_.each(toys.getChecked(), function(elem){
				total += elem.get('price');
			});

			// Calculate Total Price for items
			this.total.text('$'+total);

			return this;

		}

	});

	new App();

});