import works from "../../data/works.json";
import WorkCard from "./WorkCard";

function Gallery() {
  return (
    <div className="gallery flex flex-col h-full w-full bg-slate-100 overflow-y-hidden">
      <div className="gallery-header flex bg-slate-400 h-[10%] w-full items-center p-9">
        <h2 className="gallery-title text-3xl">Galerie</h2>
      </div>
      <div className="gallery-content flex-grow p-9 max-h-[900px] overflow-y-scroll">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-9 justify-items-center max-w-[1200px] mx-auto">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
