import { NavLink } from "react-router-dom";

import type { Work } from "../../@types/types";

import { PiMagnifyingGlassPlusDuotone } from "react-icons/pi";

interface WorkInterface {
  work: Work;
}

function WorkCard({ work }: WorkInterface) {
  return (
    <div className="work-card relative flex flex-col h-[300px] w-[200px] bg-slate-400 overflow-hidden group rounded-md ">
      <img src={work.imageUrl} alt={work.altDescription} className="h-full w-full object-fill" />
      <div className="sheet bg-slate-800/50 absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <NavLink to={`/galerie/${work.slug}`}>
          <button type="button">
            <PiMagnifyingGlassPlusDuotone size={50} color="#ffffff" />
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default WorkCard;
