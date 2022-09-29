import React from 'react';
import { ProjectsNav } from '../ProjectsNav';
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const ProjectsHeader = ({ 
  open = f => f,
  state 
}) => {
  return (
    <div>
      <ProjectsNav />
      <button
        onClick={() => open(state)}
      >
        <HiOutlineMenuAlt4 />
      </button>
    </div>
  )
};

export { ProjectsHeader };