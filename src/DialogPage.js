import { useState } from "react";
import SelectPatient from './SelectPatient'
import GetDialog from './DialogField'
import ShowPatientStatus from './PatientStatus'


const DialogPage = () => {
    const [patients, setPatients] = useState([])
    const [selected, setSelected] = useState([])
    return (
        <div>
            <h2>Patients Dialog System</h2>
            <SelectPatient patients={patients} setPatients={setPatients} setSelected={setSelected}></SelectPatient>
            <ShowPatientStatus selected={selected}></ShowPatientStatus>
            <GetDialog selected={selected} setSelected={setSelected} patients={patients}></GetDialog>
        </div>
    );
};
export default DialogPage;