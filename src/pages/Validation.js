import React from "react"
import Clients from "../components/Clients"
import './Pages.css'

export default function Validation({clients, setClients}){
    return (
        <div className="validation-page">
            <h1>
                Validation
            </h1>
            {/* REMEMBER TO FIX THIS */}
            {clients ? <Clients clients={clients} setClients={setClients}/> :
             <h2> Nothing to show </h2>}
        </div >
    )
}