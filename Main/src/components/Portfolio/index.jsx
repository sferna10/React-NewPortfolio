import { useState } from 'react' ;
import Project from "../Project";

function Portfolio() {

const [projects] = useState([
{
    name: 'Professional Portfolio',
    description: 'HTML and CSS',
    link: "https://github.com",
    repo: "https://github.com"
},
{   name: 'Password Generator',
    description: 'JavaScript',
    link: "https://github.com",
    repo: "https://github.com"
},
{   name: 'Quiz_Challenge',
    description: ' dkdfds',
    link: "https://github.com",
    repo: "https://github.com"
},
{   name: 'Work_Day_Scheduler',
    description: 'JavaScript',
    link: "https://github.com",
    repo: "https://github.com"
},
{   name: 'Employee-Tracker-Database',
    description: 'JavaScript',
    link: "https://github.com",
    repo: "https://github.com"
},
{   name: 'Note-Taker-Challenge',
    description: 'JavaScript',
    link: "https://github.com",
    repo: "https://github.com"
},
{   name: 'Professiona_README_generator',
    description: 'JavaScript',
    link: "https://github.com",
    repo: "https://github.com"
},
{   name: 'FinalVersionPortfolio',
    description: 'JavaScript',
    link: "https://github.com",
    repo: "https://github.com"
},
{   name: 'E-commerce-Back_End',
    description: 'JavaScript',
    link: "https://github.com",
    repo: "https://github.com"
},
{   name: 'Weather_Dashboard_forecast',
    description: 'JavaScript',
    link: "https://github.com",
    repo: "https://github.com"
},
{    name: 'Web-optimization',
     description: 'JavaScript',
     link: "https://github.com",
     repo: "https://github.com"
},
]);
return (
     <div>
    <div className="flex-row">
     {projects.map ((project, idx) => (
      <Project
       project={project}
            key={"project" + idx}
            />
     ))}
       </div>
    </div>
    );
    }
    export default Portfolio;