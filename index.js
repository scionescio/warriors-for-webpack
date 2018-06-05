import ReactDOM from 'react-dom'
import React from 'react'
import NewWarrior from './components/newWarrior'
import { Provider } from "react-redux"
import store from "./components/store"


ReactDOM.render(<Provider store={store}>
    <NewWarrior />
</Provider>, document.getElementById("root"));
