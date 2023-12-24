
const Item = ({ json, selected, setSelected }) => {
    function setPatient() {
        setSelected(json)
        console.log(json)
    }
    return (
        <div>
            <p>ID: {json.Id} Name: {json.Name}
                <button onClick={setPatient}>Edit</button></p>
        </div >
    );
};

export default Item;