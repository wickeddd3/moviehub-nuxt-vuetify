(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{468:function(t,e,n){"use strict";n(31);e.a={methods:{formatDateToLongDate:function(t){if(t){var e=new Date(t);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())}return""},getDateFullYear:function(t){return t?new Date(t).getFullYear():""},getMonthYear:function(t){if(t){var e=new Date(t);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getFullYear())}return""}}}},588:function(t,e,n){"use strict";n.r(e);var o=n(226),r=n(227),l=n(127),c=n(304),v=(n(35),n(468)),d={name:"SearchResultsMovie",props:{value:{type:Object,default:function(){}}},mixins:[v.a],methods:{movieDate:function(t){return this.formatDateToLongDate(t.release_date)||this.formatDateToLongDate(t.first_air_date)||""},imgUrl:function(){var t,e;return null!==(t=this.value)&&void 0!==t&&t.poster_path?"//image.tmdb.org/t/p/w220_and_h330_face/".concat(null===(e=this.value)||void 0===e?void 0:e.poster_path):"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}}},h=n(71),component=Object(h.a)(d,(function(){var t,e,n,v=this,d=v._self._c;return d(r.a,{staticClass:"mb-5",attrs:{height:"170",rounded:""}},[d("div",{staticClass:"d-flex flex-no-wrap"},[d(o.a,{attrs:{height:"170",width:"110","min-width":"110",tile:""}},[d(c.a,{attrs:{src:v.imgUrl()}})],1),v._v(" "),d("div",{staticClass:"text-truncate"},[d(l.d,{staticClass:"subtitle-1 font-weight-bold"},[v._v("\n        "+v._s((null===(t=v.value)||void 0===t?void 0:t.title)||(null===(e=v.value)||void 0===e?void 0:e.name))+"\n      ")]),v._v(" "),d(l.b,{staticClass:"font-weight-medium text--disabled"},[v._v("\n        "+v._s(v.movieDate(v.value))+"\n      ")]),v._v(" "),d("div",{staticClass:"subtitle-2 px-4 pb-4 font-weight-light text-truncate"},[v._v("\n        "+v._s(null===(n=v.value)||void 0===n?void 0:n.overview)+"\n      ")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);