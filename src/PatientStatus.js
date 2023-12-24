



const ShowPatientStatus = ({ selected }) => {
    let id = ""
    let name = ""
    let orderID = ""
    let illness = ""
    let gender = ""
    let history = ""
    let dialog = ""
    if (selected <= 0) {
        id = ""
        name = ""
        orderID = ""
        illness = ""
        gender = ""
        history = ""
        dialog = ""
    } else {
        id = "ID: " + selected.Id
        name = "Name: " + selected.Name
        orderID = "Order ID:" + selected.OrderId
        illness = "Illness:" + selected.Illness
        gender = "Gender:" + selected.Gender
        history = "History:" + selected.History
        if (selected.Dialog) {
            dialog = "Dialog:" + selected.Dialog
        } else {
            dialog = "Dialog: None"
        }
    }
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{orderID}</p>
            <p>{illness}</p>
            <p>{gender}</p>
            <p>{history}</p>
            <p>{dialog}</p>
        </div>
    );
};

export default ShowPatientStatus