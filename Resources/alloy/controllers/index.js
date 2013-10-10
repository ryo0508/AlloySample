function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId1 = Ti.UI.createWindow({
        title: "basic rows",
        id: "__alloyId1"
    });
    $.__views.main_menu = Ti.UI.createTableView({
        id: "main_menu"
    });
    $.__views.__alloyId1.add($.__views.main_menu);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.__alloyId1,
        id: "tab1",
        title: "Basic TableView"
    });
    $.__views.index.addTab($.__views.tab1);
    $.__views.__alloyId2 = Ti.UI.createWindow({
        title: "Section TableView",
        id: "__alloyId2"
    });
    $.__views.__alloyId4 = Ti.UI.createTableViewSection({
        headerTitle: "hogehoge",
        id: "__alloyId4"
    });
    var __alloyId5 = [];
    __alloyId5.push($.__views.__alloyId4);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        title: "row1",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        title: "row2",
        id: "__alloyId7"
    });
    $.__views.__alloyId4.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        title: "row3",
        id: "__alloyId8"
    });
    $.__views.__alloyId4.add($.__views.__alloyId8);
    $.__views.__alloyId3 = Ti.UI.createTableView({
        data: __alloyId5,
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        id: "tab2",
        title: "Section TableView"
    });
    $.__views.index.addTab($.__views.tab2);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var row_data = [ {
        id: "api_sample",
        title: "API SAMPLE",
        hasChild: true,
        dst: "api_sample"
    }, {
        id: "login",
        title: "LOGIN SAMPLE",
        hasChild: true,
        dst: "login"
    } ];
    rows = [];
    row_data.map(function(row) {
        rows.push(Titanium.UI.createTableViewRow(row));
    });
    $.main_menu.appendRow(rows);
    $.main_menu.addEventListener("click", function(e) {
        Ti.API.info("================================================");
        Ti.API.info(e.rowData.title);
        Ti.API.info(e.rowData.dst);
        Ti.API.info("================================================");
        if ("" != e.rowData.dst) {
            var args = {};
            var view = Alloy.createController(e.rowData.dst, args).getView();
            $.tab1.open(view);
        }
    });
    $.index.open();
    Alloy.Globals.tab1 = $.tab1;
    Alloy.Globals.tab2 = $.tab2;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;