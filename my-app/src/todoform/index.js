import React, {Component} from "react"
import './index.css'
/***
 * 最外侧的 form 表单
 */
export default class TodoForm extends Component {

    constructor(props) {
        super(props)
    }

    submitTask = (e) => {
        e.preventDefault() // 求你了 form 不要瞎几把提交表单好不好
        let {saveTask} = this.props // 上一级的函数对象类似 json
        let {value} = this.ipt
        if (value) {
            saveTask(value)
            this.ipt.value = ""
        }
    }

    render() {

        return (
            <div className="form-container">
                <form className="form">
                    <div className="ipt-container">
                        <input className="wannaDoSth" type="text" placeholder="你想要做点什么"
                               ref={(ipt) => {
                                   this.ipt = ipt
                               }}
                        />
                    </div>
                    <div className="btn-save-container" onClick={this.submitTask}>
                        <button>SAVE TASK</button>
                    </div>
                </form>
            </div>
        )
    }
}