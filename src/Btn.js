import { useState } from "react";

function Btn() {
    const [text, setText] = useState({
        text: "LightMode",
        color: "Yellow",
    });

    let LightMode = true;
    function OnCover() {
        LightMode = !LightMode;
        if (LightMode !== true) {
            setText({
                text: "DarkMode",
                color: "black",
            });
        }
        else {
            setText({
                text: "LightMode",
                color: "yellow"
            });
        }
    }

    return (
        <div>
            <h1 style={{ color: text.color }}>{text.text}</h1>
            <button onClick={OnCover}>Modunu değiştir</button>
        </div>
    );
}

export default Btn;
