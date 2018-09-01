import React, {Component} from "react"
/**
 * 亲爱的 list 小队长
 */
import TodoList from '../todolist' 
export default class TodoBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[
                {
                    id:1,
                    status:0,
                    text:'StarLikeRain React 1'
                },
                {
                    id:2,
                    status:0,
                    text:'StarLikeRain React 2'
                },
                {
                    id:3,
                    status:0,
                    text:'StarLikeRain React 3'
                },
                {
                    id:4,
                    status:0,
                    text:'StarLikeRain React 4'
                },
            ]
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                name:"Rain"
            })
        },2000)
    }

    render() {
        let {list} = this.state;
        return (
            <TodoList list={list}/>
        )
    }
}