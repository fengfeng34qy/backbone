(function(e,r){"object"==typeof exports?module.exports=exports=r(require("./core")):"function"==typeof define&&define.amd?define(["./core"],r):r(e.CryptoJS)})(this,function(e){return function(r){var t=e,i=t.lib,o=i.WordArray,n=i.Hasher,c=t.algo,s=[],a=[];(function(){function e(e){for(var t=r.sqrt(e),i=2;t>=i;i++)if(!(e%i))return!1;return!0}function t(e){return 0|4294967296*(e-(0|e))}for(var i=2,o=0;64>o;)e(i)&&(8>o&&(s[o]=t(r.pow(i,.5))),a[o]=t(r.pow(i,1/3)),o++),i++})();var f=[],u=c.SHA256=n.extend({_doReset:function(){this._hash=new o.init(s.slice(0))},_doProcessBlock:function(e,r){for(var t=this._hash.words,i=t[0],o=t[1],n=t[2],c=t[3],s=t[4],u=t[5],p=t[6],h=t[7],d=0;64>d;d++){if(16>d)f[d]=0|e[r+d];else{var l=f[d-15],y=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,v=f[d-2],m=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;f[d]=y+f[d-7]+m+f[d-16]}var x=s&u^~s&p,_=i&o^i&n^o&n,g=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),b=(s<<26|s>>>6)^(s<<21|s>>>11)^(s<<7|s>>>25),q=h+b+x+a[d]+f[d],S=g+_;h=p,p=u,u=s,s=0|c+q,c=n,n=o,o=i,i=0|q+S}t[0]=0|t[0]+i,t[1]=0|t[1]+o,t[2]=0|t[2]+n,t[3]=0|t[3]+c,t[4]=0|t[4]+s,t[5]=0|t[5]+u,t[6]=0|t[6]+p,t[7]=0|t[7]+h},_doFinalize:function(){var e=this._data,t=e.words,i=8*this._nDataBytes,o=8*e.sigBytes;return t[o>>>5]|=128<<24-o%32,t[(o+64>>>9<<4)+14]=r.floor(i/4294967296),t[(o+64>>>9<<4)+15]=i,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=n.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA256=n._createHelper(u),t.HmacSHA256=n._createHmacHelper(u)}(Math),e.SHA256});