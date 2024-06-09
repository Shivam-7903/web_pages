import React from "react"

function Middle(props){
        return(<div class="middle">
      
          <div class="logo">  
                {props.logo}</div>
          <div class="text">
            <h3>{props.h3}</h3>
            <p>{props.about}
            </p></div>
        </div>)   
}
export default Middle;