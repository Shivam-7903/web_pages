import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import Description from'./components/description.jsx';
import contents from './object/content.jsx';
import Middle from './components/middle.jsx';
import context from'./object/context.jsx';
import context2 from'./object/context2.jsx';


const Context_mapping =(item)=>{
   return(
      <Middle
       logo={item.logo}
       h3={item.h3}
       about={item.about} />
   );
}




function App() {
  return (
   <div>
    
    <Header/>
     <Description
     
    img={contents[0].img}
    des={contents[0].des}
    h1={contents[0].h}
    /> 


   <div class="middleflex">
      {context.map(Context_mapping)}
    </div>


    <div class="left_des">
      <Description
        img={contents[1].img}
    des={contents[1].des}
    h1={contents[1].h}
    /> </div>


    <div class="middleflex">
       {context2.map(Context_mapping)}
    </div>



    <Description
      img={contents[2].img}
    des={contents[2].des}
    h1={contents[2].h1}
    /> 
   </div>
  );
}

export default App;
