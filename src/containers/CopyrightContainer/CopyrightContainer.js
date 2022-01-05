import React from "react";
import { copyright } from "../../portfolioData";
import "./CopyrightContainer.css";

export default function CopyrightContainer() {
  return (
  
    <section className="copyright p-3 text-center">
      <div>
        <a style={{color:"white"}}href="mailto:gadalkabi@gmail.com">gadalkabi@gmail.com</a>
        {/* {copyright.first__word}  {copyright.second__word} */}
      </div>
       </section>
      
  );
}
