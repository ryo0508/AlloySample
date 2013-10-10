var row_data = [
  { id: "api_sample", title: "API SAMPLE", hasChild: true, dst: "api_sample"},
  { id: "login", title: "LOGIN SAMPLE", hasChild: true, dst: "login" }
];

rows = [];

row_data.map(function(row){
  rows.push(Titanium.UI.createTableViewRow(row));
});

$.main_menu.appendRow(rows);

$.main_menu.addEventListener('click', function(e) {
  Ti.API.info("================================================");
  Ti.API.info(e.rowData.title);
  Ti.API.info(e.rowData.dst);
  Ti.API.info("================================================");
  
  if(e.rowData.dst != "") {
    var args = {};
    var view = Alloy.createController(e.rowData.dst, args).getView();
    $.tab1.open(view);    
  };
});



$.index.open();

Alloy.Globals.tab1 = $.tab1;
Alloy.Globals.tab2 = $.tab2;