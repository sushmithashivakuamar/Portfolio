import tw from "twin.macro";
import Ruler from "./Hr";
import ReactGa from "react-ga4";

const Work = () => {
  return (
    <>
      <main>
        <h1
          id="Work"
          className="text-5xl font-headings mt-36 font-bold dark:text-teal-500"
        >
          Work Experience
        </h1>
        <p className="font-sans text-3xl mb-16 dark:text-gray-200">
          Here's a quick rundown of my most recent experiences.
        </p>
      </main>

      <section>
        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://github.com/Bhanu1776/IT-Dept-Website"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Internships",
                    action: "Checking Internship repository",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  SDE & Data Science Researcher
                </h3>
              </a>
              <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200">
                  Nexis Student Technology Lab
              </p>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; February 2023 - March 2024 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
          • Spearheaded a team of <strong>2</strong> in developing a full-stack predictive analytics platform leveraging Python, Pandas, and Scikitlearn,
            with Node.js and React for building a dynamic frontend, analyzing 500,000+ data points to assess and evaluate
            financial service accessibility.
            <br />
            <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Achievements: &nbsp;
            </span> */}
           • Orchestrated the development of an AI-powered fashion recommendation application using Django, Node.js, and
           React, integrating real-time weather APIs to boost user retention by 30%. <br /><br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Contact: &nbsp;
            </span> */}
            • Enhanced AI analytics by employing TensorFlow and Keras for real-time trend and user engagement modeling, utilized
              AWS S3 for data storage and PostgreSQL for data management, while Apache Airflow automated the data pipelines,
              achieving a 60% increase in efficiency.
             <br />
            
          </p>
        </Article>
        
      </section>
      <section>
        <Article>
          <div className="relative pb-12 md:col-span-2">
            <div className="sticky top-28">
              <svg
                className="absolute left-[-38px] md:left-[-50px] color-bg-default color-fg-muted bg-white dark:bg-dark rounded-full dark:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
              >
                <path
                  fillRule="evenodd"
                  d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                  fill="currentColor"
                ></path>
              </svg>
              <a
                href="https://github.com/Bhanu1776/IT-Dept-Website"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  ReactGa.event({
                    category: "Internships",
                    action: "Checking Internship repository",
                  });
                }}
              >
                <h3 className="p-0 m-0 pt-2 text-4xl font-bold mb-4 dark:text-gray-200">
                  Software Developer
                </h3>
              </a>
              <p className="p-0 m-0 text-3xl mb-2 dark:text-gray-200">
                  Accenture
              </p>
              <p className="p-0 m-0 text-2xl dark:text-gray-200 text-gray-500 before:content-['['] dark:before:text-teal-500 before:text-indigo-500 after:text-indigo-500 after:font-bold before:font-bold after:content-[']'] dark:after:text-teal-500 after:text-indigo-500after:font-bold">
                &nbsp; November 2020 - July 2022 &nbsp;
              </p>
            </div>
          </div>
          <p className="relative pb-4 md:border-b dark:text-gray-200 md:border-gray-300 md:dark:border-gray-400 md:col-span-3 text-[1.7rem] font-sans">
          • Managed a 5-person team in a server migration project, deploying applications as Spring Boot microservices containerized with Docker and Kubernetes, which improved system reliability by 30%.           <br />
          <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Achievements: &nbsp;
            </span> */}
            • Automated client data migrations with Celery, reducing manual tasks by 70%. Enhanced front-end efficiency by creating an Angular-based UI for payment processing and integrating GraphQL and REST APIs to optimize data retrieval in client applications <br />
            <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Contact: &nbsp;
            </span> */}
            • Developed a secure payment system for Nationwide Building Society using Django, transitioning data from XML to JSON and integrating REST APIs for enhanced system compatibility and interoperability.  <br />
            <br />
             {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Contact: &nbsp;
            </span> */}
            •	Championed state management with Redux and improved asynchronous operations in Node.js, reducing server response times by 40% and ensuring consistent, high-quality user interactions.<br />
            <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Contact: &nbsp;
            </span> */}
             • Collaborated with a team of 3 using Software Development Life Cycle (SDLC) and Agile methodologies to deliver high-quality payment solutions in a fast-paced banking environment.
             <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Contact: &nbsp;
            </span> */}
            <br />
            <br />
            •	Architected real-time data pipelines with Apache Kafka for customer trend analysis, improving predictive accuracy by 30%, and integrated Python machine learning algorithms to optimize analytics and decision-making.
            <br />
            <br />
            {/* <span className="font-semibold text-slate-800 dark:text-gray-200">
              Contact: &nbsp;
            </span> */}
            •	Enhanced infrastructure scalability with AWS services (DynamoDB, EC2, EMR) and streamlined CI/CD pipelines with Jenkins and Git, cutting deployment times by 70%. 
            <br />
            <br />
            •	Enforced Test-Driven Development (TDD) practices with unit tests to reduce overall bugs by 20%, utilized Datadog for rigorous monitoring, and applied systematic debugging strategies for production issue resolution.
          </p>
        </Article>
        
      </section>
      <Ruler />
    </>
  );
};

const Article = tw.article` 
  relative 
  grid 
  md:grid-cols-5 
  md:pl-8 
  -mb-12 
  md:gap-10 
  before:content-[''] 
  mx-12 
  before:block 
  before:h-full 
  before:absolute 
  before:left-[-25px] 
  md:before:left-[-17px] 
  before:border-l-2 
  before:border-gray-300 
  dark:before:border-gray-700 
  md:space-x-4 pb-8
`;

export default Work;
