import React, {Component} from "react"
/**
 * 底下submit 新的任务用的
 */
import TodoForm from "../todoform"
/**
 * 亲爱的 list 小队长
 */
import TodoList from "../todolist"

import "./index.css"

export default class TodoBox extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     list: [
        //         {
        //             id: 1,
        //             status: 1,
        //             text: "StarLikeRain React 1"
        //         },
        //         {
        //             id: 2,
        //             status: 0,
        //             text: "StarLikeRain React 2"
        //         },
        //         {
        //             id: 3,
        //             status: 1,
        //             text: "StarLikeRain React 3"
        //         },
        //         {
        //             id: 4,
        //             status: 0,
        //             text: "StarLikeRain React 4"
        //         },
        //     ]
        // }
        this.state = {
            list: [
                {
                    id: 1,
                    status: 1,
                    text: "StarLikeRain React 1"
                }
            ]
        }
    }

    componentWillMount = () => {
        if (window.localStorage.dataStats) {
            this.setState({
                list: JSON.parse(window.localStorage.dataStats)
            })
        }
    }

    shouldComponentUpdate = () => {
        setTimeout(() => {
            window.localStorage.dataStats = JSON.stringify(this.state.list) // 保存到local storage 看看
        }, 500)
        return true
    }

    toggleStatus = (item) => {
        let index = this.state.list.findIndex((item1) => {
            return item1.id === item.id  // 卧槽这里刚才只写了一个「等号」 真恶心
        })
        let list = [...this.state.list] // 拷贝了一份，不是地址引用
        // 切换 status
        list[index].status === 1 ? (list[index].status = 0) : (list[index].status = 1)
        window.listt = list
        this.setState({
            list: list
        })

    }

    deleteTask = (item) => {
        let index = this.state.list.findIndex((item1) => {
            return item1.id === item.id  // 卧槽这里刚才只写了一个「等号」 真恶心
        })
        let list = [...this.state.list] // 拷贝了一份，不是地址引用
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

    saveTask = (text) => {
        this.setState({
            list: this.state.list.concat({
                id: this.generatedID(),
                text: text,
                status: 0
            })
        })
    }

    generatedID = () => {
        return Math.floor(Math.random() * 9000) + 1000
    }

    render() {

        let {list} = this.state
        return (
            <div className="TodoBox-container">

                <TodoList list={list} deleteTask={this.deleteTask}
                          toggleStatus={this.toggleStatus}
                />
                <TodoForm saveTask={this.saveTask}/>


            </div>
        )
    }
}