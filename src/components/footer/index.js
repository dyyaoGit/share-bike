import React,{Component} from 'react'
import './index.scss'

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="footer">
                版权所有：DY-YAO（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：dyyaoGit
            </div>
        )

    }
}

export default Footer