exports.definition = {
	config: {
	  "URL": "http://localhost:3000/api/v1/posts",
		// columns: {
		    // "id": "int",
		    // "title": "string",
		    // "body": "string",
		    // "category": "int"
		// },
		debug: 1,
		adapter: {
			type: "restapi",
			idAttribute: "id",
			collection_name: "post"
		},
		parentNode: "data"
		// parentNode: function(data) {
		  // var entries = [];
// 		  
		  // _.each(data.data, function(_entry) {
		    // var entry = {};
// 		    
		    // Ti.API.info(_entry);
		    // Ti.API.info(_entry.category);
		    // Ti.API.info(_entry.body);
// 		    
		    // entry.id = _entry.id;
		    // entry.title = _entry.title;
		    // entry.body = _entry.body;
		    // entry.category = _entry.category;
// 		    
		    // entries.push(entry);
		  // });
// 		  
		  // return entries;
		// }
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