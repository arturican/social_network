import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {About} from "./components/About/About";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <div className='App-content'>
                <About/>
                <Profile/>
            </div>


        </div>
    );
}

export default App;
