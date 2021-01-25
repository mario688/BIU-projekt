import React from "react"
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import Body from "./Body";
import ChooseQuiz from "./ChooseQuiz";



export default function Home() {
    return (
        <>
            <meta charSet="utf-8"/>
            <title>TeleMed</title>
        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">Quizzy </h1>
              
                <p>Sprawdź swoją wiedzę w różnych dziedzinach</p>
              
            </div>
            <ChooseQuiz/>
        </div>
        <Body/>
        <NaviBar/>
        <Footer/>
        </>
    )
}