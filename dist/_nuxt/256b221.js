(window.webpackJsonp=window.webpackJsonp||[]).push([[5,12,14,15,18,20,21,22,23],{468:function(t,e,n){"use strict";n(31);e.a={methods:{formatDateToLongDate:function(t){if(t){var e=new Date(t);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())}return""},getDateFullYear:function(t){return t?new Date(t).getFullYear():""},getMonthYear:function(t){if(t){var e=new Date(t);return"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getFullYear())}return""}}}},473:function(t,e,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("197fcea4",content,!0,{sourceMap:!1})},474:function(t,e,n){var r=n(27)(!1);r.push([t.i,'.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).warning,.v-chip:not(.v-chip--outlined).info{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover::before{opacity:.04}.theme--light.v-chip:focus::before{opacity:.12}.theme--light.v-chip--active:hover::before,.theme--light.v-chip--active::before{opacity:.12}.theme--light.v-chip--active:focus::before{opacity:.16}.theme--dark.v-chip{border-color:rgba(255,255,255,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover::before{opacity:.08}.theme--dark.v-chip:focus::before{opacity:.24}.theme--dark.v-chip--active:hover::before,.theme--dark.v-chip--active::before{opacity:.24}.theme--dark.v-chip--active:focus::before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px !important;min-width:24px !important;width:24px !important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:hover,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:active{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link::before{transition:opacity .3s cubic-bezier(0.25, 0.8, 0.5, 1)}.v-chip--link:focus::before{opacity:.32}.v-chip--clickable{cursor:pointer;user-select:none}.v-chip--clickable:active{box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-leave-active,.v-chip__filter.expand-x-transition-enter{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px !important;width:32px !important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px !important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent !important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=r},480:function(t,e,n){"use strict";n(8),n(9),n(16),n(11),n(17);var r=n(26),l=n(3),o=(n(5),n(12),n(473),n(10)),c=n(128),v=n(151),h=n(44),d=n(152),f=n(36),m=n(74),_=n(77),x=n(157),y=n(13);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(h.a,x.a,_.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return w(w(w(w({"v-chip":!0},_.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(_.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(r.a)(e,2),l=n[0],o=n[1];t.$attrs.hasOwnProperty(l)&&Object(y.a)(l,o,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(v.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(c.b,t)},genClose:function(){var t=this;return this.$createElement(v.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),r=n.tag,data=n.data;data.attrs=w(w({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var l=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(l,data),e)}})},484:function(t,e,n){"use strict";var r=n(3),l=n(152),o=n(10),c=n(13),v=n(2).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(r.a)({},this.activeClass,this.isActive)}),element):(Object(c.c)("v-item should only contain a single element",this),element)):(Object(c.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(o.a)(v,Object(l.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(o.a)(v,Object(l.a)("slideGroup")).extend({name:"v-slide-item"})},489:function(t,e,n){"use strict";n(9),n(12),n(16),n(17);var r=n(3),l=(n(5),n(33),n(8),n(32),n(67),n(307),n(42),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(50),n(49),n(11),n(80),n(235),n(2)),o=n(81),c=n(0);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],f=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=d.reduce((function(t,e){return t["offset"+Object(c.y)(e)]={type:[String,Number],default:null},t}),{}),_=d.reduce((function(t,e){return t["order"+Object(c.y)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(f),offset:Object.keys(m),order:Object.keys(_)};function y(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var l=e.replace(t,"");r+="-".concat(l)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var C=new Map;e.a=l.a.extend({name:"v-col",functional:!0,props:h(h(h(h({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,l=e.children,c=(e.parent,"");for(var v in n)c+=String(n[v]);var h=C.get(c);return h||function(){var t,e;for(e in h=[],x)x[e].forEach((function(t){var r=n[t],l=y(e,t,r);l&&h.push(l)}));var l=h.some((function(t){return t.startsWith("col-")}));h.push((t={col:!l||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),C.set(c,h)}(),t(n.tag,Object(o.a)(data,{class:h}),l)}})},493:function(t,e,n){"use strict";n.r(e);var r=n(227),l=n(127),o={name:"MovieCastsPoster"},c=n(71),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"ma-2",attrs:{color:"transparent",height:"255",width:"138",flat:""}},[e(r.a,{staticClass:"ma-2",attrs:{img:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",height:"175",width:"125",flat:""}}),t._v(" "),e(l.a,{staticClass:"d-flex flex-column align-start my-6"},[e("h6",{staticClass:"text-md-subtitle-2 font-weight-black"},[t._v("\n      John Doe\n    ")]),t._v(" "),e("h6",{staticClass:"text-md-subtitle-2 font-weight-light"},[t._v("\n      John\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},494:function(t,e,n){"use strict";n.r(e);var r=n(227),l=n(127),o=n(304),c=n(145),v=n(225),h=n(150),d={name:"MovieSocialReview"},f=n(71),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",t._l(3,(function(n,d){return e(r.a,{key:d,staticClass:"mb-5",attrs:{flat:""}},[e(l.c,[e(c.a,[e(v.a,{attrs:{size:"55"}},[e(o.a,{attrs:{src:"https://cdn.vuetifyjs.com/images/lists/1.jpg"}})],1),t._v(" "),e(h.a,[e(h.c,{staticClass:"text-h6"},[t._v("\n            A review by Faraz Khan\n          ")]),t._v(" "),e(h.b,{staticClass:"caption mt-2"},[t._v("\n            Written by Faraz Khan on October 22, 2022\n          ")]),t._v(" "),e(h.b,{staticClass:"mt-4"},[t._v("\n            Well it wasn't disappointing...\n          ")])],1)],1)],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports},495:function(t,e,n){"use strict";n.r(e);var r=n(304),l=n(222),o=n(145),c=n(224),v=n(225),h=n(150),d={name:"MovieSocialDiscussion"},f=n(71),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"transparent"},t._l(4,(function(n,l){return e(o.a,{key:l,staticClass:"mb-5 grey darken-4"},[e(v.a,[e(r.a,{attrs:{src:"https://cdn.vuetifyjs.com/images/lists/1.jpg"}})],1),t._v(" "),e(h.a,[e(h.c,{staticClass:"subtitle-2"},[t._v("\n        I never said I was a hero.\n      ")])],1),t._v(" "),e(c.a,{staticClass:"caption"},[t._v("\n      Nov 23, 2022 at 10:54 AM "),e("br"),t._v("\n      by NeoLosman\n    ")])],1)})),1)}),[],!1,null,null,null);e.default=component.exports},496:function(t,e,n){"use strict";n.r(e);var r=n(227),l=n(465),o=n(483),c=n(484),v={name:"MovieMediaTrailers"},h=n(71),component=Object(h.a)(v,(function(){var t=this._self._c;return t(l.a,{staticClass:"pa-0"},[t(r.a,{staticClass:"transparent",attrs:{flat:""}},[t(o.b,{staticClass:"pa-0",attrs:{"active-class":"success","show-arrows":""}},this._l(15,(function(e){return t(c.a,{key:e},[t(r.a,{staticClass:"ma-2",attrs:{color:"transparent",height:"280",width:"535",flat:""}},[t(r.a,{staticClass:"ma-2",attrs:{img:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",height:"260",width:"520",flat:""}})],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},497:function(t,e,n){"use strict";n.r(e);var r=n(227),l=n(465),o=n(483),c=n(484),v={name:"MovieMediaPosters"},h=n(71),component=Object(h.a)(v,(function(){var t=this._self._c;return t(l.a,{staticClass:"pa-0"},[t(r.a,{staticClass:"transparent",attrs:{flat:""}},[t(o.b,{staticClass:"pa-0",attrs:{"active-class":"success","show-arrows":""}},this._l(15,(function(e){return t(c.a,{key:e},[t(r.a,{staticClass:"ma-2",attrs:{color:"transparent",height:"285",width:"195",flat:""}},[t(r.a,{staticClass:"ma-2",attrs:{img:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",height:"270",width:"180",flat:""}})],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},505:function(t,e,n){"use strict";n.r(e);var r=n(227),l=n(127),o={name:"MoviePoster",props:{poster:{type:String,default:""}},computed:{imgUrl:function(){return this.poster?"//image.tmdb.org/t/p/w300_and_h450_bestv2/".concat(this.poster):"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}}},c=n(71),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"ma-2",attrs:{color:"transparent",height:"510",width:"315",flat:""}},[e(r.a,{staticClass:"ma-2",attrs:{img:t.imgUrl,height:"450",width:"300",flat:""}}),t._v(" "),e(l.a,{staticClass:"d-flex flex-column align-start my-6"})],1)}),[],!1,null,null,null);e.default=component.exports},506:function(t,e,n){"use strict";n.r(e);var r=n(226),l=n(449),o=n(223),c=(n(35),n(5),n(468)),v={name:"MovieSummary",props:{type:{type:String,default:"movie"},value:{type:Object,default:function(){}}},mixins:[c.a],computed:{movieName:function(){var t,e;return"movie"===this.type?null===(t=this.value)||void 0===t?void 0:t.title:null===(e=this.value)||void 0===e?void 0:e.name},movieDate:function(){var t,e;return null!==(t=this.value)&&void 0!==t&&t.release_date||null!==(e=this.value)&&void 0!==e&&e.first_air_date?this.formatDateToLongDate(this.value.release_date)||this.formatDateToLongDate(this.value.first_air_date):""},movieGenres:function(){var t;return((null===(t=this.value)||void 0===t?void 0:t.genres)||[]).reduce((function(t,e){return t+="".concat(e.name," • ")}),"")}}},h=n(71),component=Object(h.a)(v,(function(){var t,e=this,n=e._self._c;return n("div",[n("h4",{staticClass:"text-h4 font-weight-black"},[e._v("\n    "+e._s(e.movieName)+"\n  ")]),e._v(" "),n("h6",{staticClass:"text-subtitle-1 font-weight-medium"},[e._v("\n    "+e._s(e.movieGenres)+"\n  ")]),e._v(" "),n("div",{staticClass:"d-flex flex-wrap align-center my-4"},[n("div",{staticClass:"d-flex justify-center align-center"},[n(r.a,{attrs:{size:"80",color:"grey"}}),e._v(" "),e._m(0)],1),e._v(" "),n("div",{staticClass:"d-flex align-center"},[n(l.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"grey"}},[n(o.a,{attrs:{dark:"",small:""}},[e._v("\n          mdi-format-list-bulleted\n        ")])],1),e._v(" "),n(l.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"grey"}},[n(o.a,{attrs:{dark:"",small:""}},[e._v("\n          mdi-heart\n        ")])],1),e._v(" "),n(l.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"grey"}},[n(o.a,{attrs:{dark:"",small:""}},[e._v("\n          mdi-bookmark\n        ")])],1),e._v(" "),n(l.a,{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"grey"}},[n(o.a,{attrs:{dark:"",small:""}},[e._v("\n          mdi-star\n        ")])],1)],1),e._v(" "),n(l.a,{staticClass:"text-capitalize",attrs:{plain:""}},[n(o.a,{attrs:{left:""}},[e._v("\n        mdi-play\n      ")]),e._v("\n      Play Trailer\n    ")],1)],1),e._v(" "),n("h6",{staticClass:"text-h6 font-weight-bold"},[e._v("\n    Overview\n  ")]),e._v(" "),n("p",{staticClass:"font-weight-light"},[e._v("\n    "+e._s(null===(t=e.value)||void 0===t?void 0:t.overview)+"\n  ")])])}),[function(){var t=this,e=t._self._c;return e("h6",{staticClass:"text-subtitle-2 font-weight-bold mx-4"},[t._v("\n        User "),e("br"),t._v(" Score\n      ")])}],!1,null,null,null);e.default=component.exports},507:function(t,e,n){"use strict";n.r(e);var r=n(483),l=n(484),o={name:"MovieCasts",data:function(){return{model:null}}},c=n(71),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-12 mx-15"},[e("h5",{staticClass:"text-h5 ml-15"},[t._v("\n    Casts\n  ")]),t._v(" "),e(r.b,{staticClass:"pa-0",attrs:{"active-class":"success","show-arrows":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(15,(function(t){return e(l.a,{key:t},[e("MovieCastsPoster")],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MovieCastsPoster:n(493).default})},508:function(t,e,n){"use strict";n.r(e);var r=n(573),l=n(593),o=n(591),c=n(570),v={name:"MovieSocial",data:function(){return{tab:null,items:["Reviews","Discussions"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}},h=n(71),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-12 mx-15"},[e("div",{staticClass:"d-flex align-center"},[e("h5",{staticClass:"text-h5 mx-15"},[t._v("\n      Social\n    ")]),t._v(" "),e(o.a,{attrs:{"background-color":"transparent",color:"green"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(n){return e(r.a,{key:n,staticClass:"text-capitalize"},[t._v("\n        "+t._s(n)+" 8\n      ")])})),1)],1),t._v(" "),e(c.a,{staticClass:"mx-15 my-8 transparent",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(n){return e(l.a,{key:n},["Reviews"===n?e("MovieSocialReview"):t._e(),t._v(" "),"Discussions"===n?e("MovieSocialDiscussion"):t._e()],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MovieSocialReview:n(494).default,MovieSocialDiscussion:n(495).default})},509:function(t,e,n){"use strict";n.r(e);var r=n(573),l=n(593),o=n(591),c=n(570),v={name:"MovieMedia",data:function(){return{tab:null,items:["Trailers","Posters"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}},h=n(71),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-12 mx-15"},[e("div",{staticClass:"d-flex align-center"},[e("h5",{staticClass:"text-h5 mx-15"},[t._v("\n      Media\n    ")]),t._v(" "),e(o.a,{attrs:{"background-color":"transparent",color:"green"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(n){return e(r.a,{key:n,staticClass:"text-capitalize"},[t._v("\n        "+t._s(n)+" 8\n      ")])})),1)],1),t._v(" "),e(c.a,{staticClass:"mx-15 my-8 transparent",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(n){return e(l.a,{key:n},["Trailers"===n?e("MovieMediaTrailers"):t._e(),t._v(" "),"Posters"===n?e("MovieMediaPosters"):t._e()],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MovieMediaTrailers:n(496).default,MovieMediaPosters:n(497).default})},510:function(t,e,n){"use strict";n.r(e);var r=n(227),l=n(127),o=n(463),c=n(483),v=n(484),h=(n(35),{name:"MovieRecommendations",props:{title:{type:String,default:""},movies:{type:Array,default:function(){return[]}}}}),d=n(71),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-12 mx-15"},[e(o.a,{staticClass:"mb-8 ml-15"},[e("h5",{staticClass:"text-h5"},[t._v("\n      "+t._s(t.title)+"\n    ")])]),t._v(" "),e(c.b,{staticClass:"px-10",attrs:{"active-class":"success","show-arrows":""}},t._l(t.movies,(function(n){return e(v.a,{key:n.id},[e(r.a,{staticClass:"ma-2",attrs:{to:"/movies/".concat(n.id),color:"transparent",height:"340",width:"165",link:"",flat:""}},[e(r.a,{staticClass:"ma-2",attrs:{img:"//image.tmdb.org/t/p/w220_and_h330_face/".concat(n.poster_path),height:"225",width:"150",flat:""}}),t._v(" "),e(l.a,{staticClass:"d-flex flex-column align-start my-6"},[e("h6",{staticClass:"text-md-subtitle-2 font-weight-black"},[t._v("\n            "+t._s(n.name||n.title)+"\n          ")])])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports},511:function(t,e,n){"use strict";n.r(e);var r=n(449),l=n(480),o=n(223),c=n(304),v=n(222),h=n(145),d=n(225),f=n(150),m=n(463),_={name:"MovieDetails",data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},x=n(71),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-column my-12"},[e(m.a,{staticClass:"mt-0"},t._l(t.icons,(function(n){return e(r.a,{key:n,staticClass:"mx-2 white--text",attrs:{icon:""}},[e(o.a,{attrs:{size:"24px"}},[t._v("\n        "+t._s(n)+"\n      ")])],1)})),1),t._v(" "),e("div",{staticClass:"my-4"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"my-8 mr-8"},[e("h6",{staticClass:"text-subtitle-1 font-weight-medium"},[t._v("\n        Keywords\n      ")]),t._v(" "),e("h6",{staticClass:"text-subtitle-2 font-weight-light"},t._l(5,(function(n,r){return e(l.a,{key:r,staticClass:"mr-2 mb-2",attrs:{label:"",small:""}},[t._v("\n          "+t._s("Keyword ".concat(r+1))+"\n        ")])})),1)])]),t._v(" "),e("hr",{staticClass:"mr-8"}),t._v(" "),e("div",{staticClass:"my-8 mr-8"},[e("h6",{staticClass:"text-subtitle-1 font-weight-medium"},[t._v("\n      Top Contributors\n    ")]),t._v(" "),e(v.a,{staticClass:"transparent",attrs:{"two-line":""}},t._l(4,(function(n,r){return e(h.a,{key:r,staticClass:"px-0"},[e(d.a,[e(c.a,{attrs:{src:"https://cdn.vuetifyjs.com/images/lists/1.jpg"}})],1),t._v(" "),e(f.a,[e(f.c,[t._v("\n            "+t._s(r+10)+"\n          ")]),t._v(" "),e(f.b,[t._v("\n            johndoe\n          ")])],1)],1)})),1)],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-2"},[e("h6",{staticClass:"text-subtitle-1 font-weight-medium"},[t._v("\n        Status\n      ")]),t._v(" "),e("h6",{staticClass:"text-subtitle-2 font-weight-light"},[t._v("\n        Released\n      ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-2"},[e("h6",{staticClass:"text-subtitle-1 font-weight-medium"},[t._v("\n        Original Language\n      ")]),t._v(" "),e("h6",{staticClass:"text-subtitle-2 font-weight-light"},[t._v("\n        English\n      ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-2"},[e("h6",{staticClass:"text-subtitle-1 font-weight-medium"},[t._v("\n        Budget\n      ")]),t._v(" "),e("h6",{staticClass:"text-subtitle-2 font-weight-light"},[t._v("\n        $250,000.00\n      ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-2"},[e("h6",{staticClass:"text-subtitle-1 font-weight-medium"},[t._v("\n        Revenue\n      ")]),t._v(" "),e("h6",{staticClass:"text-subtitle-2 font-weight-light"},[t._v("\n        $5,325,078.00\n      ")])])}],!1,null,null,null);e.default=component.exports},528:function(t,e,n){var content=n(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("0cd63bd9",content,!0,{sourceMap:!1})},529:function(t,e,n){var r=n(27)(!1);r.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%, 0);will-change:transform;transition:.3s opacity cubic-bezier(0.25, 0.8, 0.5, 1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=r},592:function(t,e,n){"use strict";n(33),n(528);var r=n(2).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),l=n(10),o=Object(l.a)(r);e.a=o.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}})}}]);