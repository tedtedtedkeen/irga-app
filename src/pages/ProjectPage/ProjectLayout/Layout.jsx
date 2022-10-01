import React from 'react';

const Layout = ({
  id,
  title,
  category,
  img,
  year,
  status,
  square,
  idea,
  country,
  client,
  address
}) => {
  return (
    <div>
      <h1> { title } </h1>
      <h2> { id } </h2>
      <p>
        { idea }
      </p>
    </div>
  )
};

export { Layout };