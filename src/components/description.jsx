import React from "react"
import Button from './button.jsx';


function Description(props){
    return(
    //    <div> <img src={props.img} alt="pta nii"/>
        <div class="description">
          
           <div>
           <h1>{props.h}</h1>
           <h1>{props.h1}</h1>
           <h1>{props.h2}</h1>
            <p>{props.des}</p>
          
    <Button/>
            </div>
        </div>
        // </div>
    );
}
export default Description;