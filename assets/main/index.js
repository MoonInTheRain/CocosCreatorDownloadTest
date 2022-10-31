System.register("chunks:///_virtual/main",["./RsourceLoader.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/RsourceLoader.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,r,o,n,a,i,s,c,u,p,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,i=e._decorator,s=e.Sprite,c=e.resources,u=e.instantiate,p=e.SpriteFrame,l=e.Component}],execute:function(){var d,f,m,v,b;a._RF.push({},"4d9bcWbN+5Pqq0Qtgy1tz0q","RsourceLoader",void 0);var h=i.ccclass,y=i.property;e("RsourceLoader",(d=h("RsourceLoader"),f=y(s),d((b=t((v=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a))||this,o(t,"baseItem",b,n(t)),t}return r(t,e),t.prototype.start=function(){var e=this;this.baseItem.node.active=!1;for(var t=function(t){var r=t.toFixed();c.load(r,(function(o,n){if(!o){var a=n,i=u(e.baseItem.node);i.active=!0,i.name=r,i.setParent(e.baseItem.node.parent);var c=t%16,l=-(t-c)/16;i.setPosition(c,l),i.getComponent(s).spriteFrame=p.createWithImage(a)}}))},r=0;r<256;r++)t(r)},t}(l)).prototype,"baseItem",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=v))||m));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});