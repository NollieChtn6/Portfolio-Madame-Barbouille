import { NavLink } from "react-router-dom";
function About() {
  return (
    <div className="about flex flex-col h-full w-full bg-slate-100 sm:overflow-y-hidden">
      <div className="about-header flex bg-slate-400 h-[10%] w-full items-center p-9">
        <h2 className="about-title text-3xl">Qui suis-je ?</h2>
      </div>
      <div className="about-content flex max-lg:flex-col p-6 bg-slate-300 overflow-y-scroll h-full">
        <div className="img-container flex w-1/3 max-lg:w-full h-full bg-slate-900 items-center justify-center">
          <img
            src="https://picsum.photos/400/600"
            alt="Lorem Ipsum"
            className="object-contain max-w-full max-h-full"
          />
        </div>
        <div className="details-container flex flex-col max-md:flex-col space-y-6 p-9 w-2/3 max-lg:w-full items-center">
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit tellus,
            faucibus laoreet scelerisque nec, gravida et risus. Suspendisse pulvinar dictum tempor.
            Ut eu dolor dictum, feugiat nisl a, venenatis metus. Morbi lacinia laoreet est, sit amet
            iaculis ipsum congue ut. Maecenas vel vestibulum diam. Maecenas gravida arcu eu lacinia
            scelerisque. Phasellus ac sodales lectus. Morbi rutrum, mi et gravida eleifend, nulla
            lacus pulvinar massa, sed vestibulum ipsum mauris nec turpis.
          </p>
          <div className="btn-container p-6">
            <NavLink to="/galerie" className="m-auto">
              Mon travail
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
