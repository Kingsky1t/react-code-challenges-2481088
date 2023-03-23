import { useEffect } from "react";

export default function WindowEvent() {
     const action = () => {
          alert("mouse pressed");
     };
     useEffect(() => {
          window.addEventListener("dblclick",action);
          return () => {
               window.removeEventListener("dblclick",action);
          };
     }, []);
     return <h2>Window event active</h2>;
}
