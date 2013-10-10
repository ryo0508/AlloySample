function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "api_sample";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.api_sample = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "api_sample"
    });
    $.__views.api_sample && $.addTopLevelView($.__views.api_sample);
    $.__views.posts_table = Ti.UI.createTableView({
        id: "posts_table"
    });
    $.__views.api_sample.add($.__views.posts_table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    posts = Alloy.Globals.posts;
    var rows = [];
    posts.map(function(p) {
        Ti.API.info("================================================");
        Ti.API.info(p.get("id"));
        Ti.API.info(p.get("title"));
        Ti.API.info(p.get("body"));
        Ti.API.info(p.get("category"));
        Ti.API.info("================================================");
        var row = {
            title: p.get("title"),
            post_id: p.get("id")
        };
        var new_row = Titanium.UI.createTableViewRow(row);
        rows.push(new_row);
    });
    $.posts_table.appendRow(rows);
    $.posts_table.addEventListener("click", function(e) {
        Ti.API.info("================================================");
        Ti.API.info(e.rowData.title);
        Ti.API.info(e.rowData.post_id);
        Ti.API.info("================================================");
        if ("" != e.rowData.dst) {
            var args = {
                post_id: e.rowData.post_id
            };
            var view = Alloy.createController("detail", args).getView();
            Alloy.Globals.tab1.open(view);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;