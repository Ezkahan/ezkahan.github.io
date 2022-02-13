import React from 'react'
import { ISkill } from "../../interfaces/ISkill";

const Skill: React.FC<ISkill> = ({ logo, title, year }) => {
  return (
    <div className="col-span-4 lg:col-span-3 flex flex-col items-center justify-center text-center w-full border px-4 py-3 rounded-lg">
      <img src={logo} className="h-6 lg:h-12" alt={title} />
      <p className="font-montserrat-bold text-xs mt-3">{title}</p>
      <small className='text-green text-xs opacity-75'>{year} year</small>
    </div>
  );
};

export default Skill;
