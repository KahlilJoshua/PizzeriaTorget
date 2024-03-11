import { useRef, useState } from "react"
import Header from "./components/header"
import Homepage from "./components/homepage"
import Footer from "./components/footer"
import Menu from "./components/menu"
const App = ()=>{
  //Page selector
  let [page, setpage] = useState(0)
  
  console.log(page)
  function checkPage(page){
    switch(page){
      case 0:

        return <Homepage/>;
        break;
      case 1: 

       return <Menu/>
       break;
    }
  }

  //App
  return(
    <div>
      <Header data={page} fn={setpage}/>
      
      {checkPage(page)}
        
      <Footer/>
    </div>
  )
}
export default App