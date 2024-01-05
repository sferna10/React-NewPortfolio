import { useState } from 'react' ;
import Project from "../Project";

function Portfolio() {

const [projects] = useState([
{
    name: 'Professional Portfolio',
    description: 'HTML and CSS',
    link: "https://sferna10.github.io/Portfolio_HTML-CSS/",
    repo: "https://github.com/sferna10/Portfolio_HTML-CSS"
},
{   name: 'Password Generator',
    description: 'JavaScript',
    link: "https://github.com/sferna10/Password-Generator",
    repo: "https://sferna10.github.io/Password-Generator/"
},
{   name: 'Quiz_Challenge',
    description: ' dkdfds',
    link: "https://github.com/sferna10/Quiz_Challenge",
    repo: "https://sferna10.github.io/Quiz_Challenge/"
},
{   name: 'Work_Day_Scheduler',
    description: 'JavaScript',
    link: "https://github.com/sferna10/Work_Day_Scheduler",
    repo: " https://sferna10.github.io/Work_Day_Scheduler/"
},
{   name: 'Employee-Tracker-Database',
    description: 'JavaScript',
    link: "https://github.com",
    repo: "https://github.com"
},
{   name: 'Note-Taker-Challenge',
    description: 'JavaScript',
    link: "https://github.com/sferna10/Note-Taker-Challenge",
    repo: "https://github.com"
},
{   name: 'Professiona_README_generator',
    description: 'JavaScript',
    link: "https://github.com/sferna10/Professional_README_generator",
    repo: " https://sferna10.github.io/Professional_README_generator/"
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