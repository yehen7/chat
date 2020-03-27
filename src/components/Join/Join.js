import React ,{useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.css';
                                                                                                            
const Join=()=>{

    const[name,setName] = useState('');
    const[room,setRoom] = useState('');
    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                
                <div><input className="JoinInput" placeholder="Name" type="text" onChange={(event)=>setName(event.target.value)
                    
                }/></div>
                <div><input className="JoinInput mt-20" placeholder="Room" type="text" onChange={(event)=>setRoom(event.target.value)}/></div>
                <Link  onClick={event=>(!name || !room ) ? event.preventDefault() : null} to={`./chat?name=${name}&room=${room}`}>
                <button className="button mt-20" type="submit">SignIN</button>
                </Link>
            </div>

        </div>
    )
}
export default Join;