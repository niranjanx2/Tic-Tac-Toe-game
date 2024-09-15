import { useState } from 'react';
export default function Player({initialName, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName)
    function handleEdit(){
        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let buttonName = "Edit";
    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        buttonName='Save';
    }
    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{buttonName}</button>
        </li>
    )
}

