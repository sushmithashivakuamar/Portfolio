import styled from "styled-components";
import tw from "twin.macro";
import ReactGa from "react-ga4";

const Project = () => {
  return (
    <>
      <header
        id="Project"
        className="flex flex-col items-center gap-4 mt-28 mb-16"
      >
        <h2 className="text-3xl tablet:text-4xl text-center font-headings text-indigo-500 dark:text-teal-500">
          PROJECTS
        </h2>
        <h1 className="text-5xl tablet:text-6xl text-center font-headings dark:text-gray-200">
          A collection of Academic and Personal Projects
        </h1>
      </header>

      {/* //* 1st Card  */}
      <MainGrid className="bg-gradient-to-b from-violet-50 to-violet-300  border-violet-100 dark:from-slate-900 dark:to-fuchsia-700 dark:border-fuchsia-800 dark:border-t ">
        <LeftGrid className="order-2">
          <h2 className="text-5xl dark:text-gray-200">
          Multilingual Stack-Overflow-Retrieval-System 
          </h2>
          <p>
          • Full-stack application using Flask and Django for multilingual query processing on Stack Overflow data. 
          Optimized data analysis with Google BigQuery, ensuring secure access via OAuth 2.0.
        
          </p>
          <div>
            <Button
              href="https://github.com/sushmithashivakuamar/Analyzing-Stack-Overflow-Data-with-Multilingual-Support"
              target="_blank"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "Multilingual Stack-Overflow-Retrieval-System",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
            Source Code
              <svg
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="group"
              >
                <path
                  className="transition opacity-0 group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Button>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Multilingual Stack-Overflow-Retrieval-System"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://upload.wikimedia.org/wikipedia/commons/f/f7/Stack_Overflow_logo.png"
              className="!m-0 !max-w-[90%] !max-h-[90%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>
        


      {/* //* 2nd Card  */}
      <MainGrid className="bg-gradient-to-b from-sky-50 to-amber-300 border-amber-100 dark:from-slate-900 dark:to-rose-700 dark:border-rose-800 dark:border-t ">
        <LeftGrid className="order-1">
          <h2 className="text-6xl dark:text-gray-200">TrelloClone Project </h2>
          <p>
          Task management platform using Spring Boot, incorporating object-oriented programming and design patterns for enhanced maintainability. 
          The system effectively manages task updates and real-time tracking, processing over 700 tasks to date. Integrated MySQL for reliable data storage. 
            
          </p>
          <div>
          <Button
              href="https://github.com/sushmithashivakuamar/TrelloClone"
              rel="noreferrer"
              className="group"
              onClick={() => {
                ReactGa.event({
                  category: "TrelloClone Project",
                  action: "Source code",
                });
                navigator.vibrate(900);
              }}
            >
              Source Code
              <svg
                fill="none"
                width="12"
                height="12"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="group"
              >
                <path
                  className="transition opacity-0 group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Button>        
          </div>
        </LeftGrid>
        <main className="select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="TrelloClone Project"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="data:image/jpeg;base64,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"
              className="!ml-0 !max-w-[60%] !max-h-[60%] !p-12"
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>

      {/* //* 3rd Card  */}
      <MainGrid className="bg-gradient-to-b from-sky-50 to-sky-300 border-sky-100 dark:from-slate-900 dark:to-pink-700 dark:border-pink-800 dark:border-t ">
        <LeftGrid className="order-2">
          <h2 className="text-6xl dark:text-gray-200">Travel Management System  </h2>
          <p>
          Travel management platform with AngularJS and Node.js, integrating real-time booking APIs and SQL database.
          This system manages task updates and real-time tracking, processing over 700 tasks to date. 
          Implemented comprehensive testing and used Git for version control, ensuring smooth development and deployment.🚀💥💣
          </p>
          <div>
          </div>
        </LeftGrid>
        <main className="md:order-2 select-none">
          <Span1>
            <Span2>
              <Span2Img
                alt="UX Design"
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27924%27%20height=%27718%27/%3e"
              />
            </Span2>
            <Img
              alt="Travel Management System"
              decoding="async"
              data-nimg="intrinsic"
              srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UQiBPcb2_GlHcRyO3OuqpyoGnXBosBVNag&s"
              className="!ml-0 !max-w-[100%] !max-h-[100%] !p-12"
              data-aos="fade-left"
              data-aos-offset="400"
              data-aos-duration="500"
              loading="lazy"
            />
          </Span1>
        </main>
      </MainGrid>
      
    </>
  );
};

const MainGrid = styled.section`
  ${tw`
    grid
    grid-cols-1
    gap-2
    rounded-[2.5rem]
    mb-20
    p-2
    md:p-0
    md:grid-cols-2
    `}
`;

const LeftGrid = styled.article`
  ${tw`
  flex
  flex-col
  self-end 
  col-span-1 
  text-center 
  !mb-20 
  md:text-left
  md:m-8
  md:ml-20 
`}

  &>h2 {
    ${tw` 
    font-headings 
    font-bold 
    mt-0 
    ml-2 
    mb-10
    `}
  }

  & > p {
    ${tw`
      font-sans 
      text-3xl
      ml-2 
      pr-4
      md:text-left
      dark:text-gray-200
    `}
  }
`;

const Button = styled.a`
  ${tw`
    bg-midnight 
    text-white 
    inline-flex 
    text-[1.7rem] 
    items-center 
    rounded-full 
    font-semibold 
    no-underline
    transition
    px-10 
    py-3.5 
    mt-16 
    dark:bg-gray-200 
    dark:text-midnight 
    hover:bg-slate-700 
    select-none
  `}

  svg {
    ${tw`
      stroke-2 
      stroke-white 
      mt-0.5 
      ml-4 
      -mr-3 
      dark:stroke-midnight
    `}
  }
`;


const Span1 = styled.span`
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  overflow: hidden;
  background: none;
  opacity: 1;
  border: 0px;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span2 = styled.span`
  box-sizing: border-box;
  display: block;
  background: none;
  opacity: 1;
  border: 0px;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
`;

const Span2Img = styled.img`
  display: block;
  background: none;
  opacity: 1;
  border: 0px;
  max-width: 100%;
  width: initial;
  height: initial;
  margin: 0px;
  padding: 0px;
`;

const Img = styled.img`
  display: block;
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  object-fit: fill;
  border: none;
  padding: 0rem;
  margin: auto;
  width: auto !important;
  min-width: 100%;
  min-height: 100%;

  ${tw`
    md:ml-32
    md:[height: 68rem]
  `}
`;

export { Project, Button };