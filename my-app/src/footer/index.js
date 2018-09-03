import React, {Component} from "react"

/***
 * 最外侧的 form 表单
 */
export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {doneCount, totalCount} = this.props
        return (
            <div className="footer-container">
                {doneCount} 未完成 / 总数 {totalCount}
            </div>
        )
    }
}