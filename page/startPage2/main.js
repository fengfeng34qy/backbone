define(['jquery', 'underscore', 'backbone', 'text!./page.html', 'mfp', 'sessioninfo', 'text!../../defaultcfg.json', 'text!../../protocolInfo.json'],
    function ($, _, Backbone, pageTemplate, mfp, sessioninfo, defaultcfg, protocolInfo) {
        var that;
        var userInfo = sessioninfo.userInfo;
        var timeFlag = true;
        var svnFlag = false;

        var StartPageView = Backbone.View.extend({

            template : _.template(pageTemplate),
            events : {
                'click #btn_submit' : 'loginSubmit',
                'click #backTowButton' : 'backTowButton',
            },
            initialize : function (e) {

                var cfgObj = JSON.parse(defaultcfg);

                defaultcfg = JSON.stringify(cfgObj);

                that = this;
                that.on("routed", this.display);
                value = e;
                //禁用BACK键
                document.addEventListener("backbutton", that.onBackKeyDown, false);
                app.router.trigger("ready", this);


            },

            readConfigInfo : function () {
                // 读取默认值
                //var mac;
                //如果设备编号是空的话说明是第一次赋值，给app.cfg只赋值一次默认值，防止浏览器运行保存配置信息的值被覆盖
                if (app.cfg.username == '') {
                    $.extend(app.cfg, JSON.parse(defaultcfg));
                }
                timeFlag && that.connectionAjax();
                

            },
            connectionAjax : function () {
                //首次进入显示双按钮和初始化时间不显示登录框
                that.$("#StartTime").css("display", "block");
                that.$("#anginloading").css("display", "none");
                that.$("#loginUerTowBtn").css("display", "block");
                that.$("#loginInfo").css("display", "none");
                that.$("#backTowButton").css("display", "none");
                that.$('#loginlogo').text("请选择用户角色");
                
                $.ajax({
                    method: 'post',
                    url: 'http://www.sunfengfeng.com/user/getUser',
                    data: {},  // 加encodeURI是为了把汉字转换ASCII编码
                    success: function(data){
                        console.log(data);
                        if(data.H_ret_code === '000000'){
                            // success(data);
                        }else{
                            // error(data);
                        }
                    },
                    error: function (e) {
                        console.log(e);
                        // $("body").mLoading('hide');
                    }
                })

            },
            display : function (render, e) {

                that.readConfigInfo();
                        
            },
            render : function () {

                this.setElement($(this.template()));
                
                return this;
            }

        });// QueueView

        return StartPageView;

    });//function+define