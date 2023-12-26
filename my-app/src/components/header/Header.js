// import "./Header.css"
// import play from '../header/img/play.png'

// const Header = () => {
//     return ( 
//         <main>
//             <div className="MainContent">
//                 <img src={play}></img>
//                 <h1>Best place to buy rocket</h1>
//                 <h2>Quis ipsum pellentesque nulla nulla elementum sagittis dictum</h2>
//                 <div>
//                     <button className="MainBtn1">Try a demo</button>
//                     <button className="MainBtn2">Buy now</button>
//                 </div>
//             </div>
//         </main>
//      );
// }

// let MainBtn1 = document.querySelector('.MainBtn1');

// MainBtn1.addEventListener('click', function() {
//     MainBtn1.computedStyleMap.color = "blue";
// });
 
// export default Header;



















// import React, { useEffect } from 'react';
// import "./Header.css";
// import play from '../header/img/play.png';

// const Header = () => {
//   useEffect(() => {
//     const MainBtn1 = document.querySelector('.MainBtn1');
//     const MainBtn2 = document.querySelector('.MainBtn2');
    
//     const handleMouseOver = () => {
//       MainBtn2.style.backgroundColor = "#B85C38";
//       MainBtn2.style.border = "solid 2px #B85C38";
//       MainBtn2.style.transition = "0.15s";

      
//     };

//     const handleMouseOut = () => {
//       MainBtn2.style.backgroundColor = ""; // Возвращаем цвет фона в исходное значение
//       MainBtn2.style.border = ""; // Возвращаем стиль рамки в исходное значение

      
//     };

//     if (MainBtn2) {
//       MainBtn2.addEventListener('mouseover', handleMouseOver);
//       MainBtn2.addEventListener('mouseout', handleMouseOut);
//     }

//     return () => {
//       if (MainBtn2) {
//         MainBtn2.removeEventListener('mouseover', handleMouseOver);
//         MainBtn2.removeEventListener('mouseout', handleMouseOut);
//       }
//     };
//   }, []);

//   return ( 
//     <main>
//       <div className="MainContent">
//         <img src={play} alt="Play button" />
//         <h1>Best place to buy rocket</h1>
//         <h2>Quis ipsum pellentesque nulla nulla elementum sagittis dictum</h2>
//         <div>
//           <button className="MainBtn1">Try a demo</button>
//           <button className="MainBtn2">Buy now</button>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Header;



import React, { useEffect } from 'react';
import "./Header.css";
import play from '../header/img/play.png';

const Header = () => {
  useEffect(() => {
    const MainBtn1 = document.querySelector('.MainBtn1');
    const MainBtn2 = document.querySelector('.MainBtn2');
    
    const handleMouseOver = () => {
      MainBtn2.style.backgroundColor = "#B85C38";
      MainBtn2.style.border = "solid 2px #B85C38";
      MainBtn2.style.transition = "0.15s";

      MainBtn1.style.background = "none"
      MainBtn1.style.border = "2px solid white"
      MainBtn1.style.transition = "0.15s";

      
    };

    const handleMouseOver2 = () => {
        MainBtn1.style.backgroundColor = "";
        MainBtn1.style.border = "";
        MainBtn1.style.transition = "0.15s";

        MainBtn2.style.backgroundColor = "";
        MainBtn2.style.border = "";
    }

    

    if (MainBtn2) {
      MainBtn1.addEventListener('mouseover', handleMouseOver2);
      MainBtn2.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      if (MainBtn2) {
        MainBtn1.removeEventListener('mouseover', handleMouseOver2);
        MainBtn2.removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, []);

  return ( 
    <main>
      <div className="MainContent">
        <img src={play} alt="Play button" />
        <h1>Best place to buy rocket</h1>
        <h2>Quis ipsum pellentesque nulla nulla elementum sagittis dictum</h2>
        <div>
          <button className="MainBtn1">Try a demo</button>
          <button className="MainBtn2">Buy now</button>
        </div>
      </div>
    </main>
  );
}

export default Header;




