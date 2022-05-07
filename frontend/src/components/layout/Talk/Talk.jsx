import React, {useState, useEffect} from "react";
import "./Talk.css";
import { Link } from "react-router-dom";
import axios from 'axios';

const NotFound = () => {
    const [letsTalkDesc, setLetsTalkDesc] = useState('')
    const LetsTalk = async () => {
        const letsTalk = await axios.get( '/api/v1/letstalk' )
        const letsTalkDesc = letsTalk.data.letsTalkDescs[ 0 ].letsTalkDesc
        setLetsTalkDesc(letsTalkDesc)
    }
    useEffect( () => {
        LetsTalk()
    })
    return (
        <div className="talk">
            <h2 className="productsHeading productsHeading2">Get In Touch</h2>
            <div className="innerTalk">
                <p>{letsTalkDesc}</p>
                <Link to="/contact">Say Hellow</Link>
            </div>
        </div>
    );
};

export default NotFound;
