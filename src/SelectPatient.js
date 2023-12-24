
import Item from './Item'
import { useState, useEffect } from "react";

const SelectPatient = ({ patients, setPatients, selected, setSelected }) => {
    useEffect(() => {
        fetch('http://0.0.0.0/returnPatients', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                setPatients(data)
            })
    }, [])
    return (
        <div>
            {
                patients.map(patient => <Item key={patient.Id} json={patient} selected={selected} setSelected={setSelected}></Item>)
            }
        </div>
    );
};

export default SelectPatient