import { useParams } from "react-router";
import { NavLink, useNavigate } from "react-router-dom";

import { IoBackspaceOutline } from "react-icons/io5";

import type { Work } from "../../@types/types";
import works from "../../data/works.json";

function WorkPage() {
  // Useful resource: https://njirumwai.hashnode.dev/react-router-6-go-back-how-to-go-back-using-react-router-v6
  const navigate = useNavigate();
  // get category where slug === :slug
  const { slug } = useParams();
  const selectedWork: Work | undefined = works.find((work) => work.slug === slug);
  const supplies: string[] | undefined = selectedWork?.artSupplies;
  const tags: string[] | undefined = selectedWork?.tags;

  if (!selectedWork) {
    return (
      <div className="work flex flex-col h-full w-full bg-slate-100 sm:overflow-y-hidden">
        <div className="work-header flex bg-slate-400 h-[10%] w-full items-center p-9">
          <h2 className="work-title text-3xl">Œuvre non trouvée</h2>
        </div>
        <div className="work-content flex flex-col p-6 bg-slate-300 overflow-y-scroll h-full items-center justify-center">
          <p className="text-lg">L&rsquo;œuvre que vous recherchez n&rsquo;existe pas.</p>
          <NavLink to="/galerie" className="mt-6 flex items-center">
            <IoBackspaceOutline size={30} className="mr-3" />
            Retour à la galerie
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="work flex flex-col h-full w-full bg-slate-100 sm:overflow-y-hidden">
      <div className="work-header flex bg-slate-400 h-[10%] w-full items-center p-9">
        <h2 className="work-title text-3xl">
          {selectedWork.title} ({selectedWork.year})
        </h2>
      </div>
      <div className="work-content flex max-lg:flex-col p-6 bg-slate-300 overflow-y-scroll h-full">
        <div className="img-container flex w-1/3 max-lg:w-full h-full bg-slate-900 items-center justify-center">
          <img
            src="https://picsum.photos/350/550"
            alt="Lorem Ipsum"
            className="object-contain max-w-full max-h-full"
          />
        </div>
        <div className="details-container flex flex-col space-y-6 p-9 w-2/3 max-lg:w-full">
          <p>Format : {selectedWork.format}</p>
          <ul>
            Matériel utilisé :{" "}
            {supplies?.map((suppliesItem) => (
              <li key={selectedWork.id}>•&nbsp;{suppliesItem}</li>
            ))}
          </ul>
          <p className="work-description text-md">{selectedWork.description}</p>
          <div className="tags-container flex space-x-3">
            {tags?.map((tagsItem) => (
              <div
                key={selectedWork.id}
                className="tag flex bg-slate-200 rounded-md px-3 content-center"
              >
                #{tagsItem}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="btn-container p-6">
        <button type="button" onClick={() => navigate(-1)} className="flex items-center">
          <IoBackspaceOutline size={30} className="mr-3" />
          Retour à la galerie
        </button>
      </div>
    </div>
  );
}

export default WorkPage;
