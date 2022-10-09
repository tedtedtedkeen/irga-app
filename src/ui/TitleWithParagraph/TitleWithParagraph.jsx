import React from "react";

function TitleWithParagraph({ 
  title,
  bodytext
}) {
	
  return (
    <>
      <h2>
        { title }
      </h2>
      <p>
        { bodytext }
      </p>
		</>
  );
}

export { TitleWithParagraph };