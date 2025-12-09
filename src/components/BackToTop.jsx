 import { useState, useEffect } from "react";
 import "../componenetsCSS/backToTop.css"; // We'll create this

 const BackToTop = () => {
   const [visible, setVisible] = useState(false);

   const toggleVisibility = () => {
     if (window.scrollY > 300) {
       // show after 300px scroll
       setVisible(true);
     } else {
       setVisible(false);
     }
   };

   const scrollToTop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };

   useEffect(() => {
     window.addEventListener("scroll", toggleVisibility);
     return () => window.removeEventListener("scroll", toggleVisibility);
   }, []);

   return (
     <div
       className={`back-to-top ${visible ? "show" : ""}`}
       onClick={scrollToTop}
     >
       ↑
     </div>
   );
 };

 export default BackToTop;


 