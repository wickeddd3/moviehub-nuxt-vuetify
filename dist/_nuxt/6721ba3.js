(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{589:function(t,n,e){"use strict";e.r(n);var o=e(226),l=e(227),r=e(127),c=e(304),d=(e(35),e(5),e(31),{name:"SearchResultsPerson",props:{value:{type:Object,default:function(){}}},methods:{imgUrl:function(){var t,n;return null!==(t=this.value)&&void 0!==t&&t.poster_path?"//image.tmdb.org/t/p/w220_and_h330_face/".concat(null===(n=this.value)||void 0===n?void 0:n.profile_path):"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"},knownFor:function(){var t,n,e=null===(t=this.value)||void 0===t?void 0:t.known_for.reduce((function(t,n){return t+=" ".concat(n.original_title," • ")}),"");return"".concat(null===(n=this.value)||void 0===n?void 0:n.known_for_department," • ").concat(e)}}}),v=e(71),component=Object(v.a)(d,(function(){var t,n=this,e=n._self._c;return e(l.a,{staticClass:"mb-5",attrs:{height:"80",rounded:""}},[e("div",{staticClass:"d-flex flex-no-wrap"},[e(o.a,{attrs:{height:"80",width:"80","min-width":"80",tile:""}},[e(c.a,{attrs:{src:n.imgUrl()}})],1),n._v(" "),e("div",{staticClass:"text-truncate"},[e(r.d,{staticClass:"subtitle-1 font-weight-bold py-2"},[n._v("\n        "+n._s(null===(t=n.value)||void 0===t?void 0:t.name)+"\n      ")]),n._v(" "),e("div",{staticClass:"subtitle-2 px-4 font-weight-light text-truncate"},[n._v("\n        "+n._s(n.knownFor())+"\n      ")])],1)],1)])}),[],!1,null,null,null);n.default=component.exports}}]);