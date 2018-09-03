import React, {Component} from "react"
import './index.css'
// 我是最基础的 item 卧槽
export default class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    toggleTaskStatus = () => {
        console.log("toggleTaskStatus")
    }

    delTask = () => {
        let {item, deleteTask} = this.props

        deleteTask(item)
        console.log("delTask")
    }

    render() {
        let {item} = this.props
        /** 预期会获得 id text status */
        return (
            <div className="item-container">


                <div className="item-inner" onClick={this.toggleTaskStatus.bind(this)}>
                    <span className="chk-container">
                        <checkbox className="chk"/>
                        <span className="text">{item.text}</span>
                    </span>
                </div>


                <div className="del-container" onClick={this.delTask}>
                    <span>删除</span>
                </div>
            </div>
        )
    }
}