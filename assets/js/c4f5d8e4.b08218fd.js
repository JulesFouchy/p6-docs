"use strict";(self.webpackChunkp6_docs=self.webpackChunkp6_docs||[]).push([[195],{9526:function(e,a,n){n.r(a),n.d(a,{default:function(){return h}});var r=n(6742),t=n(2263),c=n(6698),s=n(6010),l=n(7294),i="heroBanner_1ZBZ",o="buttons_irzW";function u(){var e=(0,t.Z)().siteConfig;return l.createElement("header",{className:(0,s.Z)("hero hero--primary",i)},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement("div",{className:o},l.createElement(r.Z,{className:"button button--secondary button--lg",to:"/tutorials"},"Let's get started \ud83d\ude80"))))}function h(){(0,t.Z)().siteConfig;return l.createElement(c.Z,{description:"Description will go into a meta tag in <head />"},l.createElement(u,null),l.createElement("main",null))}},6979:function(e,a,n){var r=n(7294),t=n(4184),c=n.n(t),s=n(5977),l=n(2263),i=n(8084);a.Z=function(e){var a=(0,r.useRef)(!1),t=(0,r.useRef)(null),o=(0,r.useState)(!1),u=o[0],h=o[1],d=(0,s.k6)(),m=(0,l.Z)(),f=m.siteConfig,p=void 0===f?{}:f,b=m.isClient,E=void 0!==b&&b,g=p.baseUrl,_=(0,i.usePluginData)("docusaurus-lunr-search"),v=function(){a.current||(Promise.all([fetch(""+g+_.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+g+_.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(878),n.e(452)]).then(n.bind(n,7780)),Promise.all([n.e(532),n.e(343)]).then(n.bind(n,3343))]).then((function(e){var a=e[0],n=e[1],r=e[2].default;0!==a.length&&(!function(e,a,n){new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var r=g+n.url;document.createElement("a").href=r,d.push(r)}})}(a,n,r),h(!0))})),a.current=!0)},S=(0,r.useCallback)((function(a){t.current.contains(a.target)||t.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return E&&v(),r.createElement("div",{className:"navbar__search",key:"search-box"},r.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:S,onKeyDown:S,tabIndex:0}),r.createElement("input",{id:"search_input_react",type:"search",placeholder:u?"Search":"Loading...","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:v,onMouseOver:v,onFocus:S,onBlur:S,ref:t,disabled:!u}))}}}]);