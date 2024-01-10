import { removeHyphensAndCapitalize } from "../../utils/helpers";
//import * as Project from '../../assets';

function Project(props) {
  const { name, repo, link, description } = props.project;

  return (
    <div className="project" key={name}>
      <img
        src={Project[name]}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)},</a>
          &nbsp;
          <a href={repo}>
            <i className="fab fa-github" />
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
