import $ from "jquery"
import { useEffect } from "react";
export const Jquery = () => {
useEffect(() => {
  alert($("#input").val())
})
  return(
      <>
      <div>
        <h1>This is a React App.</h1>
      </div>
      <div>
        <input  id="input" value="Jquery in React Js?"/>
      </div>
      </>
     )
  }
export default Jquery