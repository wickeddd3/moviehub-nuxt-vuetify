(window.webpackJsonp=window.webpackJsonp||[]).push([[41,13],{521:function(t,e,o){"use strict";o.r(e);var n=o(226),r=o(449),c=o(227),l=o(127),v=o(304),m={name:"MovieCurrentSeason"},d=o(71),component=Object(d.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-12 mx-15"},[e("h5",{staticClass:"text-h5 mx-15 mb-8"},[t._v("\n    Current Season\n  ")]),t._v(" "),e(c.a,{staticClass:"mx-15 mb-5",attrs:{height:"200",rounded:""}},[e("div",{staticClass:"d-flex flex-no-wrap"},[e(n.a,{attrs:{height:"200",width:"140","min-width":"140",tile:""}},[e(v.a,{attrs:{src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"}})],1),t._v(" "),e("div",{staticClass:"d-flex flex-column justify-center text-truncate"},[e(l.d,{staticClass:"title-1 font-weight-bold"},[t._v("\n          Season 8\n        ")]),t._v(" "),e(l.b,{staticClass:"font-weight-medium text--disabled"},[t._v("\n          2022 | 18 Episodes\n        ")]),t._v(" "),e("div",{staticClass:"subtitle-2 px-4 pb-4 font-weight-light text-truncate"},[t._v("\n          Season 8 of Prison Break premiered on December 25, 2022.\n        ")])],1)],1)]),t._v(" "),e(r.a,{staticClass:"mx-15",attrs:{text:"",color:"green"}},[t._v("\n    View All Seasons\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},582:function(t,e,o){"use strict";o.r(e);var n=o(489),r=o(592),c=o(463),l=(o(8),o(9),o(12),o(16),o(11),o(17),o(3)),v=(o(5),o(42),o(50),o(129));function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"TvShowPage",computed:d({},Object(v.c)({tvshow:"movie/tvshows/current",recommendation:"movie/tvshows/recommendation",isEmptyRecommendation:"movie/tvshows/recommendation/empty"})),created:function(){Promise.all([this.fetchMovie(this.$route.params.id),this.fetchRecommendation(this.$route.params.id)])},methods:d({},Object(v.b)({fetchMovie:"movie/tvshows/current/get",fetchRecommendation:"movie/tvshows/recommendation"}))},h=o(71),component=Object(h.a)(f,(function(){var t,e=this,o=e._self._c;return o("div",[o(r.a,{attrs:{dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",height:"570"}},[o(c.a,{staticClass:"mx-12 my-15",attrs:{align:"start",justify:"center"}},[o(n.a,{attrs:{cols:"3"}},[o("MoviePoster",{attrs:{poster:null===(t=e.tvshow)||void 0===t?void 0:t.poster_path}})],1),e._v(" "),o(n.a,{attrs:{cols:"9","align-self":"center"}},[o("MovieSummary",{attrs:{type:"tvshow",value:e.tvshow}})],1)],1)],1),e._v(" "),o(c.a,[o(n.a,{attrs:{cols:"9"}},[o("MovieCasts"),e._v(" "),o("MovieCurrentSeason"),e._v(" "),o("MovieSocial"),e._v(" "),o("MovieMedia"),e._v(" "),e.isEmptyRecommendation?e._e():o("MovieRecommendations",{attrs:{title:"Recommendations",movies:e.recommendation}})],1),e._v(" "),o(n.a,{attrs:{cols:"3"}},[o("MovieDetails")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MoviePoster:o(505).default,MovieSummary:o(506).default,MovieCasts:o(507).default,MovieCurrentSeason:o(521).default,MovieSocial:o(508).default,MovieMedia:o(509).default,MovieRecommendations:o(510).default,MovieDetails:o(511).default})}}]);