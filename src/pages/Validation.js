import React from "react"
import Clients from "../components/Clients"

export default function Validation({clients, setClients}){
    return (
        <>
            <h1>
                Validation
            </h1>
            <Clients clients={clients} setClients={setClients}/>
        </>
    )
}