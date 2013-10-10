var args = arguments[0] || {};

Ti.API.info("====================");
Ti.API.info(args.post_id);
Ti.API.info("====================");

posts = Alloy.Globals.posts;

var post = posts.get(args.post_id);


Ti.API.info("====================");
Ti.API.info(post.get('id'));
Ti.API.info(post.get('title'));
Ti.API.info(post.get('body'));
Ti.API.info("====================");

$.post_title.setText(post.get('title'));
$.post_body.setText(post.get('body'));
$.post_category.setText(post.get('category'));