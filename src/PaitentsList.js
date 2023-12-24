
import Item from './Item'

import { useState, useEffect } from "react";
const SelectPatient = ({ patients, setPatients, selected, setSelected }) => {
    const getJsonRequest = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: "Hello", message: "World" })
    };
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://0.0.0.0/returnPatients', getJsonRequest)
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                setPatients(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            {
                posts.map(patient => <Item key={patient.Id} json={patient} selected={selected} setSelected={setSelected}></Item>)
            }
        </div>
    );
};

export default SelectPatient