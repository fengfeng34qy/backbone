define(['jquery', 'underscore','backbone', 'router'],
    function($, _, Backbone, Router) {
        var App = Backbone.View.extend({

            events: {
                "routed":"路由完成",	//构建页面并dom中生成页面完成
                "warn":"发生警告",
                "ready":"视图加载完成"	//页面完成数据加载后需要触发该事件，router调用相应渲染方法，该方法应该在集合加载数据完成后触发
            },

            initialize: function() {
                console.log('app init');	
                this.router = new Router();
                Backbone.history.start();
                this.cfg={
                    //普通用户名及密码,用户类型判断
                    "username": ""
                };

            }

        });

        return App;
    });
// define(['backbone'],function(Backbone){
//     var App = Backbone.View.extend({
//         initialize: function(){
//             console.log('app init');
//         }
//     });
//     return App;
// });
