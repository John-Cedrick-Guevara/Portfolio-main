import "./index.css";
import { NavComponent } from "./Components/NavComponent";
import { FooterComponent } from "./Components/FooterComponent";

function App() {
  const technologies = [
    "html",
    "css",
    "js",
    "react",
    "tailwind",
    "next",
    "vscode",
    "prisma",
    "typescript"
  ];

  const projects = [
    {
      name: "Random Quote Generator",
      description: "A simple website with API to fetch random quotes",
      image: "randomquote",
      link: "https://github.com/John-Cedrick-Guevara/Advice-generator",
    },
    {
      name: "Easybank Landing Page",
      description:
        "A functional and responsive landing page. Resources from frontend mentor",
      image: "easybankLandingPage",
      link: "https://github.com/John-Cedrick-Guevara/easybank-landing-page-master",
    },
    {
      name: "Master Craft landing Page",
      description:
        "A functional and responsive landing page. Resources from frontend mentor",
      image: "mastercraftLandingPage",
      link: "https://github.com/John-Cedrick-Guevara/crowdfunding-product-page-main",
    },
    {
      name: "Meme Generator",
      description:
        "A random meme generator where you can edit the text and have random image",
      image: "memeGenerator",
      link: "https://github.com/John-Cedrick-Guevara/meme-generator",
    },
    {
      name: "Multi Step Game Subscription",
      description:
        "A responsice and functional multi step page for game subscription. Resources from frontend mentor",
      image: "multiStep",
      link: "https://github.com/John-Cedrick-Guevara/multi-step-form-main",
    },
    {
      name: "Bookmark",
      description:
        "A responsive and functional landing page for bookmark subscription. Resources from frontend mentor",
      image: "bookmarkLandingPage",
      link: "https://github.com/John-Cedrick-Guevara/bookmark-landing-page",
    },
    {
      name: "Sunny Side",
      description:
        "A responsive and functional landing page. Resources from frontend mentor",
      image: "sunnysideLandingPage",
      link: "https://github.com/John-Cedrick-Guevara/sunnyside-agency-landing-page-main",
    },
    {
      name: "To-do",
      description:
        "A responsive and functional todo app where you can filter finished and unfinished tasks. Resources from frontend mentor",
      image: "todo",
      link: "https://github.com/John-Cedrick-Guevara/Todo-app",
    },
    {
      name: "Calculator",
      description:
        "A functional calculator with 3 color themes. Resources from frontend mentor",
      image: "calculator",
      link: "https://github.com/John-Cedrick-Guevara/Calcaulator-app",
    },
    {
      name: "Countries API",
      description:
        "REST countries api with color theme switcher. A responsive and functional website where you can filter countries by region and search specific country. Resources from frontend mentor",
      image: "countries",
      link: "https://github.com/John-Cedrick-Guevara/countries-api",
    },
    {
      name: "Job Listing Filtering",
      description:
        "A responsive and functional job listing where you can sort jobs. Resources from frontend mentor",
      image: "joblisting",
      link: "https://github.com/John-Cedrick-Guevara/Job-Listing/tree/main/listing",
    },
  ];

  const downloadResume = () => {
    const fileUrl = "resume.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "resume_file.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <>
      <NavComponent />

      {/* hero section */}
      <section id="home" className="heroBg h-full md:h-svh">
        <div className=" px-10 flex flex-col items-center h-full justify-around xl:flex-row md:p-10 md:container md:mx-auto ">
          <div className="xl:w-1/2 text-center xl:text-left">
            <h1 className="text-white text-xl font-bold md:text-3xl">
              Hello, I'm{" "}
              <span className="text-5xl md:text-7xl font-black text-[#DCCFED] block">
                Front End{" "}
                <span className="text-6xl md:text-8xl block">Developer</span>
              </span>
            </h1>
            <p className="text-white font-semibold md:text-lg mt-6 mx-auto xl:mx-2 md:w-3/4">
              I build things for the front end. Hello, I'm John Cedrick Guevara
              a front end developer and also a 1st year college student.
            </p>

            <div>
              <button
                onClick={downloadResume}
                className="button text-lg mt-10 rounded bg-[#DCCFED] p-2 font-bold text-[#291c3A] lg:mt-20 hover:bg-[#291c3A] hover:text-[#DCCFED] transition-colors"
              >
                Download my resume
              </button>
            </div>
          </div>

          <img className="h-auto w-60 lg:w-80" src="me.png" alt="" />
        </div>
      </section>

      {/* about me / technologies */}
      <section className=" p-10  scroll-smooth">
        <div className="container flex flex-col gap-10 mx-auto">
          {/* about me  */}

          <div id="about" className="self-start lg:w-1/2 pt-20">
            <h1 className="text-[#291c3A] font-bold text-3xl my-3 md:text-4xl">
              About me
            </h1>
            <p className="text-[#331C52] font-semibold text-justify md:text-lg w-full">
              I'm John Cedrick Guevara, a 1st-year college student and
              passionate front-end developer with skills in HTML, CSS,
              JavaScript, and framework like ReactJS. I specialize in creating
              responsive, user-focused web applications that merge design with
              functionality. Eager to solve challenges and continuously expand
              my knowledge, I aim to build high-quality, accessible websites
              that provide seamless experiences. Let's collaborate and turn
              ideas into impactful digital solutions!
            </p>
          </div>
          {/* technologies */}
          <div id="skills" className=" self-end lg:w-1/3 pt-20">
            <h1 className="text-[#291c3A] font-bold text-3xl md:text-4xl  mb-1">
              My skills
            </h1>
            <p className="text-[#331C52] font-semibold text-justify mb-4 md:text-lg">
              Technologies I've been using recently.
            </p>

            <div className="flex items-center justify-start gap-4 flex-wrap xl:max-w-xl">
              {technologies.map((item) => (
                <img
                  className="h-auto w-20 md:w-20  rounded bg-[#291c3a] p-2"
                  key={item}
                  src={`techs/${item}.png`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* projects */}

      <section id="projects" className=" px-10 pb-32 pt-20 ">
        <div className="container mx-auto">
          <h1 className="text-[#331C52] text-3xl font-bold self-start mt-5 md:text-4xl">
            My Projects
          </h1>
          <p className="self-start mt-2 mb-5 md:text-lg">
            Projects I've built currently
          </p>
          <div className="flex flex-wrap items-center justify-center ">
            {projects.map((item) => (
              <div
                key={item.name}
                className="bg-[#DCCFED] p-2 rounded max-h-full h-[450px] max-w-xs m-2 flex flex-col justify-between "
              >
                <div>
                  <img
                    className="object-fill rounded h-52 w-full"
                    src={`projects/${item.image}.jpg`}
                    alt={item.name}
                  />
                  <h1 className="text-[#331C52] font-bold text-xl my-2">
                    {item.name}
                  </h1>
                  <p className="text-[#331C52] font-normal text-md ">
                    {item.description}
                  </p>
                </div>

                <a
                  className="bg-[#291C3A] text-white flex items-center justify-center p-2 rounded gap-2 font-semibold"
                  href={item.link}
                >
                  <img
                    className="h-auto w-6 "
                    src="github.png"
                    alt=""
                  />{" "}
                  See Code
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterComponent />
    </>
  );
}

export default App;
