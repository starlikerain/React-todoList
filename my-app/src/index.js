import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./App"
import TodoBox from "./todobox/index"  // 代办框框

import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
    <TodoBox />, document.getElementById("root"))
registerServiceWorker()
