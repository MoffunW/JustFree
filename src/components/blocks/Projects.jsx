import BlockHeader from "../BlockHeader";
import "./Projects.scss";
import Project from "../Project";
function Projects(props) {
    return (
        <div className="projects">
            <BlockHeader
                title="Current Progress"
                subtitle="This table will show you how your current projects are behaving."
            />
            <Project done="44" color="#df468e" />
            <Project done="37" color="#2979ff" />
            <Project done="87" color="#00bfa5" />
            <Project done="33" color="#a0f" />
        </div>
    );
}

export default Projects;
