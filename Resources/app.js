var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.posts = Alloy.createCollection("post");

Alloy.Globals.posts.fetch();

Alloy.createController("index");