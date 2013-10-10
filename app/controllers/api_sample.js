var args = arguments[0] || {};

posts = Alloy.Globals.posts;

var rows = [];

posts.map(function(p){
  Ti.API.info("================================================");
  Ti.API.info(p.get('id'));
  Ti.API.info(p.get('title'));
  Ti.API.info(p.get('body'));
  Ti.API.info(p.get('category'));
  Ti.API.info("================================================");
  
  var row = {
    title:   p.get('title'),
    post_id: p.get('id'),
  };
  
  var new_row = Titanium.UI.createTableViewRow(row);
  
  rows.push(new_row);
  
});

$.posts_table.appendRow(rows);

$.posts_table.addEventListener('click', function(e) {
  Ti.API.info("================================================");
  Ti.API.info(e.rowData.title);
  Ti.API.info(e.rowData.post_id);
  Ti.API.info("================================================");
  
  if(e.rowData.dst != "") {
    var args = { post_id: e.rowData.post_id };
    var view = Alloy.createController('detail', args).getView();
    Alloy.Globals.tab1.open(view);    
  };
});