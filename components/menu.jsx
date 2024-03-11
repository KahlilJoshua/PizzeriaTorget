import Kebab from "./kebab";
import Kyckling from "./kyckling";
import Pizza from "./pizza";
import Salad from "./salad";
import Pasta from "./pasta";
import Alacarte from "./alacarte";

import { useEffect, useState } from "react";

export default function Menu() {

  const [menu, setMenu] = useState(0);
  const subM = [<Pizza/>, <Kebab/>, <Kyckling/>, <Salad/>, <Pasta/>, <Alacarte/>]
  useEffect(()=>{

  })

  function checkMenu(){
    switch(menu){
      case 0:
        return subM.map((element)=>{return element})
        break;
      case 1:
        return subM[0]
        break;
      case 2:
        return subM[1]
        break;
      case 3:
        return subM[2]
        break;
      case 4:
        return subM[3]
        break;
      case 5:
        return subM[4]
        break;
      case 6:
        return subM[5]
        break;
    }
  }

  return (
    <div className="menu">
        <div className="menuUl">
            <div className="wrapper">
                <h2 onClick={()=>{setMenu(1)}}>Pizza</h2>
                <h2 onClick={()=>{setMenu(2)}}>Kebab</h2>
                <h2 onClick={()=>{setMenu(3)}}>Kyckling</h2>
                <h2 onClick={()=>{setMenu(4)}}>Salad</h2>
                <h2 onClick={()=>{setMenu(5)}}>Pasta</h2>
                <h2 onClick={()=>{setMenu(6)}}>A la carte</h2>
            </div>
        </div>
        {checkMenu()}
    </div>
  )

}

