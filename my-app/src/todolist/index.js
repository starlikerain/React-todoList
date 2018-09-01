import React, { Component } from "react"

import TodoItem from '../todoitem' // ITEM 来吧！

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let {list} = this.props; // 每一条的数据哦
        
        let comps = list.map((item) => {
            return <TodoItem item={item} key={item.id} />;
        })

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
                </div>
            </div>
        )
    }
}