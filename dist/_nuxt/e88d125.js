(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{468:function(t,e,n){"use strict";n(31);e.a={methods:{formatDateToLongDate:function(t){if(t){var e=new Date(t);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())}return""},getDateFullYear:function(t){return t?new Date(t).getFullYear():""},getMonthYear:function(t){if(t){var e=new Date(t);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getFullYear())}return""}}}},491:function(t,e,n){"use strict";n.r(e);var o=n(226),r=n(227),l=n(127),c=(n(35),n(468)),v={name:"MoviesPoster",props:{value:{type:Object,default:function(){}},type:{type:String,default:"movie"}},mixins:[c.a],computed:{movieName:function(){return"movie"===this.type?this.value.title:this.value.name},movieDate:function(){return""!==this.value.release_date||""!==this.value.first_air_date?"movie"===this.type?this.formatDateToLongDate(this.value.release_date):this.formatDateToLongDate(this.value.first_air_date):""},moviePath:function(){return"movie"===this.type?"/movies/".concat(this.value.id):"/tv-shows/".concat(this.value.id)},imgUrl:function(){var t,e;return null!==(t=this.value)&&void 0!==t&&t.poster_path?"//image.tmdb.org/t/p/w220_and_h330_face/".concat(null===(e=this.value)||void 0===e?void 0:e.poster_path):"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}}},h=n(71),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"ma-2",attrs:{to:t.moviePath,color:"transparent",height:"360",width:"195",flat:"",link:""}},[e(r.a,{staticClass:"ma-2",attrs:{img:t.imgUrl,height:"270",width:"180",flat:""}}),t._v(" "),e(o.a,{staticStyle:{position:"absolute",bottom:"65px",left:"20px"},attrs:{size:"40",color:"grey"}}),t._v(" "),e(l.a,{staticClass:"d-flex flex-column align-start my-6"},[e("h6",{staticClass:"text-md-subtitle-2 font-weight-black"},[t._v("\n      "+t._s(t.movieName)+"\n    ")]),t._v(" "),e("h6",{staticClass:"text-md-subtitle-2 font-weight-light"},[t._v("\n      "+t._s(t.movieDate)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);