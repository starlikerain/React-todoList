import React, {Component} from "react"

import TodoItem from "../todoitem" // ITEM 来吧！
import Footer from "../footer"

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.STATUS_DONE = 1;
        this.state = {}
    }

    render() {
        let {list, deleteTask} = this.props // 每一条的数据哦

        let comps = list.map((item) => {
            return <TodoItem deleteTask={deleteTask} item={item} key={item.id}/>
        })

        let totalCount = list.length
        let doneCount = list.filter((status) => {
            return status.status === this.STATUS_DONE
        }).length

        return (
            <div className="list-container">
                <div className="title">
                    标题React TodoList
                </div>


                <div className="list">
                    {/* 这是 for 出来的列表 */}
                    {comps}
                </div>


                <div className="footer">
                    {/* 总结一下完成状态 */}
                    <Footer doneCount={doneCount} totalCount={totalCount}></Footer>
                </div>
            </div>
        )
    }
}