(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{254:function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _setPrototypeOf=__webpack_require__(31),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=__webpack_require__(34),_create2=_interopRequireDefault(_create),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_tinperBee=__webpack_require__(88),_index=__webpack_require__(256),_index2=_interopRequireDefault(_index);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_create2.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(e,t):e.__proto__=t)}!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(5)).enterModule;e&&e(module)}();var index=0,Demo1=function(_Component){function Demo1(e){_classCallCheck(this,Demo1);var t=_possibleConstructorReturn(this,_Component.call(this,e));return t.add=function(e){e.stopPropagation(),++index;var r={id:index++,title:"节点: "+index,router:"/节点: "+index};t.setState({menus:t.state.menus.concat(r)})},t.handleChange=function(e){console.log(e),t.setState({menus:e})},t.state={menus:[{id:0,router:"home",title:"home"}]},t}return _inherits(Demo1,_Component),Demo1.prototype.render=function(){var e=this.state.menus;return _react2.default.createElement("div",{className:"demoPadding"},_react2.default.createElement(_tinperBee.Button,{colors:"primary",onClick:this.add,style:{margin:"8px"}},"增加"),_react2.default.createElement(_index2.default,{menus:e,onChange:this.handleChange}))},Demo1.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},Demo1}(_react.Component),_default=Demo1;exports.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(5)).default;e&&(e.register(index,"index","/Users/lucian/Projects/yonyou/tinper/ACS/AC/ac-multi-tabs/demo/demolist/Demo1.js"),e.register(Demo1,"Demo1","/Users/lucian/Projects/yonyou/tinper/ACS/AC/ac-multi-tabs/demo/demolist/Demo1.js"),e.register(_default,"default","/Users/lucian/Projects/yonyou/tinper/ACS/AC/ac-multi-tabs/demo/demolist/Demo1.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(5)).leaveModule;e&&e(module)}()}).call(this,__webpack_require__(12)(module))},256:function(e,t,r){"use strict";(function(e){t.__esModule=!0;var a=function(e){return e&&e.__esModule?e:{default:e}}(r(257));!function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(5)).enterModule;t&&t(e)}();var o=a.default;t.default=o,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(5)).default;e&&e.register(o,"default","/Users/lucian/Projects/yonyou/tinper/ACS/AC/ac-multi-tabs/src/index.js")}(),function(){var t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:r(5)).leaveModule;t&&t(e)}()}).call(this,r(12)(e))},257:function(module,exports,__webpack_require__){"use strict";(function(module){exports.__esModule=!0;var _setPrototypeOf=__webpack_require__(31),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=__webpack_require__(34),_create2=_interopRequireDefault(_create),_stringify=__webpack_require__(258),_stringify2=_interopRequireDefault(_stringify),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(1),_propTypes2=_interopRequireDefault(_propTypes),_reactDom=__webpack_require__(2),_reactDom2=_interopRequireDefault(_reactDom),_tinperBee=__webpack_require__(88);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_create2.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(e,t):e.__proto__=t)}!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(5)).enterModule;e&&e(module)}(),__webpack_require__(261);var propTypes={menus:_propTypes2.default.array,onChange:_propTypes2.default.func},defaultProps={menus:[],onChange:function(){}},Tab=function(_Component){function Tab(e){_classCallCheck(this,Tab);var t=_possibleConstructorReturn(this,_Component.call(this,e)),r=void 0===sessionStorage.tabNotice||sessionStorage.tabNotice,a=[];return"menus"in e&&(a=e.menus||[]),t.state={tabNotice:JSON.parse(r),moreMenuList:[],tabsMore:!1,current:"",menus:a||[],tabNum:0},t.setCurrent=t.setCurrent.bind(t),t.del=t.del.bind(t),window.closeWin=t.del,t}return _inherits(Tab,_Component),Tab.prototype.componentWillReceiveProps=function(e){e.menus!==this.props.menus&&this.setState({menus:e.menus})},Tab.prototype.setCurrent=function(e){var t=this.state.moreMenuList,r=this.props.menus,a={},o=!1;if(t.length>0){for(var n=0;n<t.length;n++){if(t[n].id===e){o=!0,a=t[n];break}o=!1}if(o){for(n=0;n<r.length;n++)r[n].id===e&&r.splice(n,1);r.splice(1,0,a)}}this.setState({current:e,menus:r}),sessionStorage.current=(0,_stringify2.default)({current:e})},Tab.prototype.del=function(e){for(var t=this.state,r=t.menus,a=t.current,o=this.props.onChange,n=JSON.parse((0,_stringify2.default)(r)),i=0,s=0;s<n.length;s++)e==n[s].id&&(n.splice(s,1),i=s-1);var c={menus:n};return a==e&&(c.current=n[i].id,c.router=n[i].router),c.tabNum=n.length,sessionStorage.tabs=(0,_stringify2.default)(c.menus),sessionStorage.current=(0,_stringify2.default)({current:c.current}),this.setState({menus:c.menus,tabNum:c.tabNum}),o&&o(c.menus),n},Tab.prototype.notice=function(){var e=this.props.tabNotice;sessionStorage.tabNotice=!e,actions.app.updateState({tabNotice:!e})},Tab.prototype.componentDidUpdate=function(){},Tab.prototype.tabNotice=function(){if(this.props.menus.length>=3){var e=ReactDOM.findDOMNode(this.refs.tabNotice);e&&(e.style.display=""),setTimeout(function(){e&&(e.style.display="none")},2e3)}},Tab.prototype.tabsMoreClick=function(){var e=this.state.tabsMore;this.setState({tabsMore:!e})},Tab.prototype.showHeaderClick=function(){var e=this.props.showHeader;actions.app.updateState({showHeader:!e})},Tab.prototype.render=function(){var e=this,t=this.state,r=t.menus,a=t.tabNum,o=t.tabsMore,n=t.current,i=this.props,s=(i.showNotice,i.tabNotice,i.showHeader,i.intl,i.sideShowPosition),c=i.leftExpanded,u=[];this.state.moreMenuList=[];var l=o?"show":"hide";return _react2.default.createElement("div",{id:"portalTabs",className:["tabs ui-tabs-num-"+a,"left"===s?"tabs-show-left":"",c?"tabs-show-left-expand":""].join(" ")},_react2.default.createElement("div",{className:"tabs-list-box"},_react2.default.createElement("ul",{className:"tabs-list"},r.map(function(t,r){var a,o=0==r?"":_react2.default.createElement(_tinperBee.Icon,{type:"uf-close-c",onClick:e.del.bind(this,t.id),key:t.router}),i=0==r?_react2.default.createElement(_tinperBee.Icon,{type:"uf-home"}):t.title,s=0==r?"home-item":"",c=n==t.id?"selected":"";return r>10?(u.push(t),e.state.moreMenuList=u):a=_react2.default.createElement("li",{key:t.id,className:c+" "+s},_react2.default.createElement("a",{onClick:e.setCurrent.bind(this,t.id),href:"javascript:;",title:t.title},i),o),a}),r.length>11?_react2.default.createElement("li",{className:"tabs-more",onClick:e.tabsMoreClick.bind(this)},_react2.default.createElement("a",{href:"javascript:;"},"更多"),o?_react2.default.createElement("i",{className:"uf uf-gridcaretarrowup tabs-up"}):_react2.default.createElement("i",{className:"uf uf-treearrow-down tabs-up"}),_react2.default.createElement("ul",{className:"tabs-more-list tabs-more-list-"+l},u.map(function(t,r){return _react2.default.createElement("li",{key:t.id},_react2.default.createElement("a",{onClick:e.setCurrent.bind(this,t.id),href:"javascript:;",title:t.title},t.title))}))):"")))},Tab.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},Tab}(_react.Component);Tab.propTypes=propTypes,Tab.defaultProps=defaultProps;var _default=Tab;exports.default=_default,function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(5)).default;e&&(e.register(propTypes,"propTypes","/Users/lucian/Projects/yonyou/tinper/ACS/AC/ac-multi-tabs/src/TabBox/index.js"),e.register(defaultProps,"defaultProps","/Users/lucian/Projects/yonyou/tinper/ACS/AC/ac-multi-tabs/src/TabBox/index.js"),e.register(Tab,"Tab","/Users/lucian/Projects/yonyou/tinper/ACS/AC/ac-multi-tabs/src/TabBox/index.js"),e.register(_default,"default","/Users/lucian/Projects/yonyou/tinper/ACS/AC/ac-multi-tabs/src/TabBox/index.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(5)).leaveModule;e&&e(module)}()}).call(this,__webpack_require__(12)(module))},92:function(module,exports,__webpack_require__){"use strict";(function(module){var _setPrototypeOf=__webpack_require__(31),_setPrototypeOf2=_interopRequireDefault(_setPrototypeOf),_create=__webpack_require__(34),_create2=_interopRequireDefault(_create),_react=__webpack_require__(0),_react2=_interopRequireDefault(_react),_reactDom=__webpack_require__(2),_reactDom2=_interopRequireDefault(_reactDom),_beeLayout=__webpack_require__(115),_beePanel=__webpack_require__(121),_beeDrawer=__webpack_require__(162),_beeDrawer2=_interopRequireDefault(_beeDrawer),_beeClipboard=__webpack_require__(173),_beeClipboard2=_interopRequireDefault(_beeClipboard);__webpack_require__(250);var _Demo=__webpack_require__(254),_Demo2=_interopRequireDefault(_Demo);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=(0,_create2.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(_setPrototypeOf2.default?(0,_setPrototypeOf2.default)(e,t):e.__proto__=t)}!function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(5)).enterModule;e&&e(module)}();var DemoArray=[{example:_react2.default.createElement(_Demo2.default,null),title:" 多页签组件",code:"/**\n *\n * @title 多页签组件\n * @description 基于应用平台\n *\n */\n\nimport React, { Component } from 'react';\nimport {Button} from 'tinper-bee';\nimport AcMultiTabs from '../../src/index';\n\nlet index = 0;\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            menus: [{\n                id: 0,\n                router: 'home',\n                title: \"home\"\n            }]\n        }\n    }\n\n    // 增加\n    add = (e) => {\n        e.stopPropagation();\n        ++index;\n        const newTab = {\n            id: index++ ,\n            title: `节点: ${index}`,\n            router: `/节点: ${index}`,\n        };\n        this.setState({\n            menus: this.state.menus.concat(newTab),\n        });\n    }\n\n    handleChange = (v) => {\n        console.log(v)\n        this.setState({\n            menus : v\n        })\n    }\n    \n    render () {\n        const { menus } = this.state;\n        return (\n            <div className=\"demoPadding\">\n                <Button colors=\"primary\" onClick={this.add} style={{margin: '8px'}}>增加</Button>\n                <AcMultiTabs menus={menus} onChange={this.handleChange}/>\n            </div>\n        )\n    }\n}\n\n\n",desc:" 基于应用平台"}],Demo=function(_Component){function Demo(e){_classCallCheck(this,Demo);var t=_possibleConstructorReturn(this,_Component.call(this,e));return t.handleClick=function(){t.setState({open:!t.state.open})},t.fCloseDrawer=function(){t.setState({open:!1})},t.state={open:!1},t}return _inherits(Demo,_Component),Demo.prototype.render=function(){var e=this.props,t=e.title,r=e.example,a=e.code,o=e.desc,n=e.scss_code,i=_react2.default.createElement("div",null,_react2.default.createElement("p",{className:"component-title"},t),_react2.default.createElement("p",null,o),_react2.default.createElement("span",{className:"component-code",onClick:this.handleClick}," 查看源码 ",_react2.default.createElement("i",{className:"uf uf-arrow-right"})," "));return _react2.default.createElement(_beeLayout.Col,{md:12,id:t.trim(),className:"component-demo"},_react2.default.createElement(_beePanel.Panel,{header:i},r),_react2.default.createElement(_beeDrawer2.default,{className:"component-drawerc",title:t,show:this.state.open,placement:"right",onClose:this.fCloseDrawer},_react2.default.createElement("div",{className:"component-code-copy"}," JS代码",_react2.default.createElement(_beeClipboard2.default,{action:"copy",text:a})),_react2.default.createElement("pre",{className:"pre-js"},_react2.default.createElement("code",{className:"hljs javascript"},a.replace("../../src/index","ac-multi-tabs").replace("../../src","ac-multi-tabs"))),n?_react2.default.createElement("div",{className:"component-code-copy copy-css"}," SCSS代码",_react2.default.createElement(_beeClipboard2.default,{action:"copy",text:n})):null,n?_react2.default.createElement("pre",{className:"pre-css"},_react2.default.createElement("code",{className:"hljs css"},n)):null))},Demo.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},Demo}(_react.Component),DemoGroup=function(_Component2){function DemoGroup(e){return _classCallCheck(this,DemoGroup),_possibleConstructorReturn(this,_Component2.call(this,e))}return _inherits(DemoGroup,_Component2),DemoGroup.prototype.render=function(){return _react2.default.createElement(_beeLayout.Row,null,DemoArray.map(function(e,t){return _react2.default.createElement(Demo,{example:e.example,title:e.title,code:e.code,scss_code:e.scss_code,desc:e.desc,key:t})}))},DemoGroup.prototype.__reactstandin__regenerateByEval=function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)},DemoGroup}(_react.Component);_reactDom2.default.render(_react2.default.createElement(DemoGroup,null),document.getElementById("root")),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(5)).default;e&&(e.register(DemoArray,"DemoArray","/Users/lucian/Projects/yonyou/tinper/ACS/AC/ac-multi-tabs/demo/index.js"),e.register(Demo,"Demo","/Users/lucian/Projects/yonyou/tinper/ACS/AC/ac-multi-tabs/demo/index.js"),e.register(DemoGroup,"DemoGroup","/Users/lucian/Projects/yonyou/tinper/ACS/AC/ac-multi-tabs/demo/index.js"))}(),function(){var e=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(5)).leaveModule;e&&e(module)}()}).call(this,__webpack_require__(12)(module))}},[[92,1,2,3]]]);