import React, { useEffect } from 'react';
import './bar.css';
 
export default function Bar(props) {
  
  useEffect(()=>{
    function loadStatAnimation() {
      let i = 0;
      if (i === 0) {
        i = 1;
        var elem = document.querySelector(`#stat-${props.id}`);
        var width = 1;
        var id = setInterval(frame, 10);
        
        function frame() {
          if (width >= props.value) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
    }
    loadStatAnimation()
  }, [props.value, props.id]);
  
  return (
    <div className={"meter"}>
      <span id={`stat-${props.id}`}style={{width: props.value+"%", backgroundColor: props.color}}></span>
    </div>
  );
}
