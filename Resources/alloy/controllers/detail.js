function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.detail_body = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "detail_body"
    });
    $.__views.detail.add($.__views.detail_body);
    $.__views.post_title = Ti.UI.createLabel({
        id: "post_title"
    });
    $.__views.detail_body.add($.__views.post_title);
    $.__views.post_body = Ti.UI.createLabel({
        id: "post_body"
    });
    $.__views.detail_body.add($.__views.post_body);
    $.__views.post_category = Ti.UI.createLabel({
        id: "post_category"
    });
    $.__views.detail_body.add($.__views.post_category);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("====================");
    Ti.API.info(args.post_id);
    Ti.API.info("====================");
    posts = Alloy.Globals.posts;
    var post = posts.get(args.post_id);
    Ti.API.info("====================");
    Ti.API.info(post.get("id"));
    Ti.API.info(post.get("title"));
    Ti.API.info(post.get("body"));
    Ti.API.info("====================");
    $.post_title.setText(post.get("title"));
    $.post_body.setText(post.get("body"));
    $.post_category.setText(post.get("category"));
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;