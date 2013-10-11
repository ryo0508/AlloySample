exports.definition = {
	config: {
	  "URL": "http://localhost:3000/api/v1/posts",
		debug: 1,
		adapter: {
			type: "restapi",
			idAttribute: "id",
			collection_name: "post"
		},
		parentNode: "data"
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};