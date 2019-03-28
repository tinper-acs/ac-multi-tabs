
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
const pkg = require('../package.json')




const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" 多页签组件","code":"/**\n *\n * @title 多页签组件\n * @description 基于应用平台\n *\n */\n\nimport React, { Component } from 'react';\nimport {Button} from 'tinper-bee';\nimport AcMultiTabs from '../../src/index';\n\nlet index = 0;\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            menus: [{\n                id: 0,\n                router: 'home',\n                title: \"home\"\n            }]\n        }\n    }\n\n    // 增加\n    add = (e) => {\n        e.stopPropagation();\n        ++index;\n        const newTab = {\n            id: index++ ,\n            title: `节点: ${index}`,\n            router: `/节点: ${index}`,\n        };\n        this.setState({\n            menus: this.state.menus.concat(newTab),\n        });\n    }\n\n    handleChange = (v) => {\n        console.log(v)\n        this.setState({\n            menus : v\n        })\n    }\n    \n    render () {\n        const { menus } = this.state;\n        return (\n            <div className=\"demoPadding\">\n                <Button colors=\"primary\" onClick={this.add} style={{margin: '8px'}}>增加</Button>\n                <AcMultiTabs menus={menus} onChange={this.handleChange}/>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 基于应用平台"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ process.env.NODE_ENV==='development'?code:code.replace('../../src/index.js',pkg.name).replace('../../src/index',pkg.name) }</code></pre>
                </Panel>
            </Col>
        )
    }
}

export default class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

