import { NavLink } from "react-router-dom";

import { Carousel } from "nuka-carousel";

import works from "../../data/works.json";

function Home() {
  const latestWorks = works.slice(Math.max(works.length - 5, 0));
  console.log("Latest works:", latestWorks);

  return (
    <div className="home flex flex-col h-full w-full bg-slate-100 sm:overflow-y-hidden">
      <div className="home-header flex bg-slate-400 h-[10%] w-full items-center p-9">
        <h2 className="home-title text-3xl">Bienvenue&nbsp;!</h2>
      </div>
      <div className="home-content flex flex-col p-9 space-y-9 overflow-y-scroll">
        <p className="home-introduction text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dui non quam
          euismod sagittis. Ut tristique laoreet ex, et laoreet lacus vehicula quis. Maecenas neque
          ligula, dapibus nec massa id, sollicitudin maximus arcu. Donec congue, erat vitae
          consectetur gravida, nibh purus luctus elit, sed convallis ante felis a lorem. Morbi sed
          auctor velit, in tincidunt nisi. Nulla eget orci sagittis, sodales nisi sed, viverra nunc.
        </p>
        <div className="home-slider bg-slate-300 flex flex-col  w-full space-y-9 p-3">
          <h3 className="text-xl">Dernières œuvres</h3>
          <div className="slider-container items-center">
            <Carousel
              scrollDistance="slide"
              autoplay
              showDots
              showArrows
              wrapMode="wrap"
              className="bg-slate-500 border-6 border-pink-500 border-solid mx-auto w-[600px] max-sm:w-[200px]"
            >
              {latestWorks.map((work) => (
                <img
                  key={work.id}
                  src={work.imageUrl}
                  alt="desc"
                  className="flex hover:cursor-pointer hover:scale-110 transition duration-200 "
                />
              ))}
            </Carousel>
          </div>
        </div>
        <NavLink to={"/galerie"}>
          <button type="button" className="border-2 py-2 px-4 flex m-auto">
            Voir la galerie
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
