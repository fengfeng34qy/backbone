(function () {
    var root = this;
    require.config({
        //注册的库从加载页面目录算起，相对路径从当前页面baseurl算起
        baseUrl: document.URL.substring(0, document.URL.lastIndexOf("/") + 1),
        // baseUrl: './',
        shim: {
                    'jquery': {
                        exports: '$'
                    },
                    'underscore': {
                        exports: '_'
                    },
                    "angular": {
                        exports: "angular"
                    },
                    'backbone': {
                        deps: ['underscore', 'jquery'],
                        exports: 'Backbone'
                    },
                    'backbone.iobind': {
                        deps: ['underscore', 'jquery', 'backbone'],
                        exports: 'Backbone'
                    },
                    'backbone.iosync': {
                        deps: ['underscore', 'jquery', 'backbone'],
                        exports: 'Backbone'
                    },
                    'socketio': {
                        exports: 'io'
                    },
                    'crypt': {
                        exports: 'crypt'
                    },
                    'smartWizard': {
                        deps: ['jquery'],
                        exports: '$'
                    },
                    'maskedInput': {
                        deps: ['jquery'],
                        exports: '$.mask'
                    },
                    'jqueryUI': {
                        deps: ['jquery'],
                    },
                    'keyboard': {
                        deps: ['jquery'],
                    },
                    'kbscramble': {
                        deps: ['keyboard'],
                    },
                    'flot': {
                        exports: '$.flot'
                    },
                    'flot.pie': {
                        deps: ['jquery', 'flot'],
                        exports: '$.flot'
                    },
                    'flot.stack': {
                        deps: ['jquery', 'flot'],
                        exports: '$.flot'
                    },
                    'threshold': {
                        deps: ['jquery', 'flot'],
                        exports: '$.flot'
                    },
                    'barframe': {
                        deps: ['jquery', 'flot'],
                        exports: '$.flot'
                    },
                    'pdfjs': {
                        exports: 'PDFJS'
                    },
                    'iscroll': {
                        exports: 'iScroll'
                    },
                    'pdfjsworker': {
                        exports: 'Pdfjsworker'
                    },
                    'steps': {
                        exports: '$.fn.steps'
                    },

                },
        paths: {
            jquery: 'libs/jquery',
            // jqm: 'libs/jquery.mobile-1.4.5',
            underscore: 'libs/underscore/underscore',
            backbone: 'libs/backbone/backbone',
            text: 'libs/text',
            router: 'libs//router',
            FastClick: 'libs/fastclick.js',
            app: 'js/app',
            mfp: 'libs/index',
            'crypto-js': 'libs/crypto-js',              // 加密控件
            md5: 'libs/md5',
            fileop: 'libs/fileop',
            maskedinput: 'libs/askedinput/jquery.maskedinput-jqmw',
            wizard: 'libs/wizard/jquery.steps-jqmw',
        }

    });
    //预加载库启动平台和应用
    require(['app'],function (App) {
        root.app = new App();
    });

}).call(this);


