import React from "react";
import "./identity.css";

const Identity = () => {
  return (
    <div className="identity">

    <div className="testimonial-card">
      <div className="testimonial-header">
        <p><strong>NAME:</strong> AMAN KUMAR</p>
        <p><strong>ROLE:</strong> WEB DEVELOPER</p>
        <p><strong>COMPANY:</strong> UNFINISHED</p>
        <p><strong>PROJECT:</strong> PORTFOLIO</p>
      </div>
      <div className="testimonial-body">
        <img
          src="/aman.jpeg"
          alt="Aman Kumar"
          className="testimonial-image"
        />
        <p className="testimonial-text">
          
          From the initial meeting to the final delivery, Aman has created a feeling of trust and delivered everything we asked of him. The quality of his work speaks for itself and he is able to execute at a pace. He is an excellent Web developer and we will be calling on his services again, very soon.
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default Identity;
