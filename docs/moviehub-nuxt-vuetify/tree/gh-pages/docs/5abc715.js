(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{468:function(t,e,n){"use strict";n(31);e.a={methods:{formatDateToLongDate:function(t){if(t){var e=new Date(t);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())}return""},getDateFullYear:function(t){return t?new Date(t).getFullYear():""},getMonthYear:function(t){if(t){var e=new Date(t);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getFullYear())}return""}}}},506:function(t,e,n){"use strict";n.r(e);var r=n(226),l=n(449),o=n(223),v=(n(35),n(5),n(468)),c={name:"MovieSummary",props:{type:{type:String,default:"movie"},value:{type:Object,default:function(){}}},mixins:[v.a],computed:{movieName:function(){var t,e;return"movie"===this.type?null===(t=this.value)||void 0===t?void 0:t.title:null===(e=this.value)||void 0===e?void 0:e.name},movieDate:function(){var t,e;return null!==(t=this.value)&&void 0!==t&&t.release_date||null!==(e=this.value)&&void 0!==e&&e.first_air_date?this.formatDateToLongDate(this.value.release_date)||this.formatDateToLongDate(this.value.first_air_date):""},movieGenres:function(){var t;return((null===(t=this.value)||void 0===t?void 0:t.genres)||[]).reduce((function(t,e){return t+="".concat(e.name," • ")}),"")}}},d=n(71),component=Object(d.a)(c,(function(){var t,e=this,n=e._self._c;return n("div",[n("h4",{staticClass:"text-h4 font-weight-black"},[e._v("\n    "+e._s(e.movieName)+"\n  ")]),e._v(" "),n("h6",{staticClass:"text-subtitle-1 font-weight-medium"},[e._v("\n    "+e._s(e.movieGenres)+"\n  ")]),e._v(" "),n("div",{staticClass:"d-flex flex-wrap align-center my-4"},[n("div",{staticClass:"d-flex justify-center align-center"},[n(r.a,{attrs:{size:"80",color:"grey"}}),e._v(" "),e._m(0)],1),e._v(" "),n("div",{staticClass:"d-flex align-center"},[n(l.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"grey"}},[n(o.a,{attrs:{dark:"",small:""}},[e._v("\n          mdi-format-list-bulleted\n        ")])],1),e._v(" "),n(l.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"grey"}},[n(o.a,{attrs:{dark:"",small:""}},[e._v("\n          mdi-heart\n        ")])],1),e._v(" "),n(l.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"grey"}},[n(o.a,{attrs:{dark:"",small:""}},[e._v("\n          mdi-bookmark\n        ")])],1),e._v(" "),n(l.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"grey"}},[n(o.a,{attrs:{dark:"",small:""}},[e._v("\n          mdi-star\n        ")])],1)],1),e._v(" "),n(l.a,{staticClass:"text-capitalize",attrs:{plain:""}},[n(o.a,{attrs:{left:""}},[e._v("\n        mdi-play\n      ")]),e._v("\n      Play Trailer\n    ")],1)],1),e._v(" "),n("h6",{staticClass:"text-h6 font-weight-bold"},[e._v("\n    Overview\n  ")]),e._v(" "),n("p",{staticClass:"font-weight-light"},[e._v("\n    "+e._s(null===(t=e.value)||void 0===t?void 0:t.overview)+"\n  ")])])}),[function(){var t=this,e=t._self._c;return e("h6",{staticClass:"text-subtitle-2 font-weight-bold mx-4"},[t._v("\n        User "),e("br"),t._v(" Score\n      ")])}],!1,null,null,null);e.default=component.exports}}]);