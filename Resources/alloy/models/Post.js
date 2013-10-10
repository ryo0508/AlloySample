exports.definition = {
    config: {
        URL: "http://localhost:3000/api/v1/posts",
        debug: 1,
        adapter: {
            type: "restapi",
            idAttribute: "id",
            collection_name: "post"
        },
        parentNode: "data"
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("post", exports.definition, []);

collection = Alloy.C("post", exports.definition, model);

exports.Model = model;

exports.Collection = collection;