import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai"
import { FaClipboardList } from "react-icons/fa"
import { MdSettings } from "react-icons/md"

function Sidebar(props) {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleSelection = (option) => {
        console.log(option);
        switch (option) {
            case 1:
                navigate('/inicio')
                break;
            case 2: 
                navigate('/informe')
                break;
            case 3:
                navigate('/register')
                break;
            default:
                break;
        }
    }

    return (
        <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
            {/* <button onClick={toggleMenu}>☰</button> */}
            <nav className="menu">
                <AiFillHome size={50} color={props.page == 1 ? '#D3DEF5' : '#A5A5A5'} onClick={()=> handleSelection(1)}/>
                <FaClipboardList size={50} color={props.page == 2 ? '#D3DEF5' : '#A5A5A5'} onClick={()=> handleSelection(2)}/>
                <MdSettings size={50} color={props.page == 3 ? '#D3DEF5' : '#A5A5A5'} onClick={()=> handleSelection(3)}/>
            </nav>
        </div>
    )
}

export default Sidebar;