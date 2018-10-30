(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{160:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("You may add additional features to the Vuex ORM through plugins. Plugins usually add global-level functionality to Vuex ORM. Vuex ORM plugin works very similar to "),s("a",{attrs:{href:"https://vuex.vuejs.org/en/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Plugin"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Here is the list of available plugins.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuex-orm/plugin-axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM Axios"),s("OutboundLink")],1),t._v(" – A plugin to sync the store against a RESTful API.")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuex-orm/plugin-graphql",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM GraphQL"),s("OutboundLink")],1),t._v(" – A plugin to sync the store against a "),s("a",{attrs:{href:"https://graphql.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraphQL"),s("OutboundLink")],1),t._v(" API.")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuex-orm/plugin-search",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM Search"),s("OutboundLink")],1),t._v(" – This plugin adds a search() method to filter records using fuzzy search logic from the "),s("a",{attrs:{href:"http://fusejs.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fuse.js"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Use plugins by calling the VuexORM.use() method.")]),t._v(" "),t._m(9),s("p",[t._v("You can optionally pass in some options too.")]),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugins")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"available-plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#available-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Available Plugins")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"writing-a-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" Writing a Plugin")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("A Vuex ORM plugin should be an object that exposes an "),n("code",[this._v("install")]),this._v(" method. The method will be called with the Vuex ORM components such as Model, Repo, Query and such, as the first argument, along with possible options.")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// `components` contains Vuex ORM objects such as Model and Query.")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// The plugin author can then extend those objects to add")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// whatever features it needs.")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("components"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Add global (static) method or property.")]),t._v("\n    components"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("globalMethod")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// Logic...")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Add an instance method or property.")]),t._v("\n    components"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Query"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function-variable function"}},[t._v("instanceMethod")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// Logic...")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"extendable-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extendable-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Extendable Components")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("The following components are included within the "),n("code",[this._v("components")]),this._v(" argument.")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[t._v("Model")]),t._v(" "),s("li",[t._v("Query")]),t._v(" "),s("li",[t._v("Attribute")]),t._v(" "),s("li",[t._v("Type")]),t._v(" "),s("li",[t._v("Attr")]),t._v(" "),s("li",[t._v("String")]),t._v(" "),s("li",[t._v("Number")]),t._v(" "),s("li",[t._v("Boolean")]),t._v(" "),s("li",[t._v("Increment")]),t._v(" "),s("li",[t._v("Relation")]),t._v(" "),s("li",[t._v("HasOne")]),t._v(" "),s("li",[t._v("BelongsTo")]),t._v(" "),s("li",[t._v("HasMany")]),t._v(" "),s("li",[t._v("HasManyBy")]),t._v(" "),s("li",[t._v("BelongsToMany")]),t._v(" "),s("li",[t._v("HasManyThrough")]),t._v(" "),s("li",[t._v("MorphTo")]),t._v(" "),s("li",[t._v("MorphOne")]),t._v(" "),s("li",[t._v("MorphMany")]),t._v(" "),s("li",[t._v("MorphToMany")]),t._v(" "),s("li",[t._v("MorphedByMany")]),t._v(" "),s("li",[t._v("Getters")]),t._v(" "),s("li",[t._v("RootGetters")]),t._v(" "),s("li",[t._v("Actions")]),t._v(" "),s("li",[t._v("RootActions")]),t._v(" "),s("li",[t._v("RootMutations")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"using-a-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-a-plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" Using a Plugin")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VuexORM "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@vuex-orm/core'")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" plugin "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'vuex-orm-plugin'")]),t._v("\n\nVuexORM"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("VuexORM"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" someOption"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);n.default=e.exports}}]);