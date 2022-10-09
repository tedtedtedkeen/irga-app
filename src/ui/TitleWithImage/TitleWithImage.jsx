import React from "react";

function TitleWithImage({ 
  title,
  image
}) {
	
  return (
    <>
      <h2>
        { title }
      </h2>
      <img 
        src={image} 
        alt="Image" 
      />
		</>
  );
}

export { TitleWithImage };
