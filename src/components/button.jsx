import React from "react";


function Button(){
    return(
        <div className="Button">
        <div className="input">
            <input type="email" id="email" placeholder= "Your e-mail"/>
        </div>
        <div >
               <button className="button">Notify me</button>

        </div>
        </div>
    );
}
export default Button;