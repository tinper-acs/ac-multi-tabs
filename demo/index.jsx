
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
var DemoArray = [{"example":<Demo1 />,"title":" 多页签组件","code":"/**\n *\n * @title 多页签组件\n * @description 基于应用平台\n *\n */\n\nimport React, { Component } from 'react';\nimport TabBox from '../../src/index';\n\nconst menus = [{\n        id: 1,\n        router: 'home',\n        title: \"home\"\n    },{\n        id: 2,\n        router: '0001',\n        title: \"节点1\"\n    },{\n        id: 3,\n        router: '0002',\n        title: \"节点2\"\n    },{\n        id: 4,\n        router: '0003',\n        title: \"节点3\"\n    }];\n\nclass Demo1 extends Component {\n    render () {\n        return (\n            <div className=\"demoPadding\">\n                <TabBox menus={menus} tabNum={3}/>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 基于应用平台"}]


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

