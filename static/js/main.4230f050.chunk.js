(this["webpackJsonpgovdata-dashboard"]=this["webpackJsonpgovdata-dashboard"]||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var a=e(0),o=e.n(a),r=e(2),c=e.n(r),i=(e(12),e(3)),s=e(4),u=e(6),l=e(5),d=(e(13),function(t){Object(u.a)(e,t);var n=Object(l.a)(e);function e(t){var a;return Object(i.a)(this,e),(a=n.call(this,t)).state={data:null},a}return Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://www.govdata.de/ckan/api/3/action/organization_list?all_fields=true").then((function(t){return t.json()})).then((function(n){return t.setState({data:n})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.data)}}]),e}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,n,e){t.exports=e(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.4230f050.chunk.js.map