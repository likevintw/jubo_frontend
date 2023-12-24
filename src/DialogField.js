
import { useState } from "react";


const GetDialog = ({ selected, setSelected, patients }) => {
    const [dialog, setDialog] = useState("")
    let text = ""
    let dialogInput = null
    let editButton = null
    let saveButton = null
    let buffer = null
    if (selected <= 0) {
        text = ""
        dialogInput = null
        editButton = null
        saveButton = null
    } else {
        text = "Add Dialog"
        dialogInput = <input type="text" value={dialog} onChange={keyInDialog}></input>
        editButton = <button onClick={EditDialog}>Edit</button>
        saveButton = <button onClick={SaveDialog}>Save</button>
    }
    function EditDialog() {
        setDialog(selected.Dialog)
    }

    function sendPost() {
        const sendJsonRequest = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Id: selected.Id,
                Dialog: dialog
            })
        };
        fetch('http://0.0.0.0/updateDialog', sendJsonRequest)
            .then(response => response.json())
            .then(data => {
                console.log(data.status)
            })
    }
    function SaveDialog() {
        if (dialog !== '') {
            setSelected({
                "Id": selected.Id,
                "Name": selected.Name,
                "OrderId": selected.OrderId,
                "Illness": selected.Illness,
                "Gender": selected.Gender,
                "History": selected.History,
                "Dialog": dialog
            })
            buffer = patients.filter(function (user) {
                return user.Id === selected.Id
            });
            buffer[0].Dialog = dialog
            setDialog("")
            sendPost()
        }
    }
    function keyInDialog(e) {
        setDialog(e.target.value)
    }
    return (
        <div>
            <p>{text}</p>
            <p>{dialogInput}</p>
            {editButton}
            {saveButton}
        </div>
    );
};
export default GetDialog