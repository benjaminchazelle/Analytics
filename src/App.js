import React from 'react';
import './App.css';
import Header from './components/Header'
import SideContainer from "./containers/SideContainer";
import DashboardContainer from "./containers/DashboardContainer";

function App() {

    return (
        <>
            <SideContainer/>
            <Header/>
            <DashboardContainer/>

        </>
    )
}

export default App;
