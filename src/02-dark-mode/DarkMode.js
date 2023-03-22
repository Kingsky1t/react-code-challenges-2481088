import { useState } from "react";
export default function DarkMode() {
     const [mode, setMode] = useState(false);
     return (
          <div className={`page ${mode ? "dark-mode" : null}`}>
               <button
                    className='dark-mode-button'
                    onClick={() => {
                         setMode(true);
                    }}>
                    Dark Mode
               </button>
               <button
                    className='light-mode-button'
                    onClick={() => {
                         setMode(false);
                    }}>
                    Light Mode
               </button>
          </div>
     );
}
