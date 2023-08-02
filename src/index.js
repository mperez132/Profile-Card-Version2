import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillData = [
  {
    name: "React",
    level: "Intermediate",
    color: "#00ffff"
  },
  {
    name: "C++",
    level: "Intermediate",
    color: "#5301eb"
  },
  {
    name: "C",
    level: "Intermediate",
    color: "orange"
  },
  {
    name: "C#",
    level: "Intermediate",
    color: "#27c92f"
  },
  {
    name: "Game Design",
    level: "Advanced",
    color: "yellow"
  },
  {
    name: "Sound Design",
    level: "Intermediate",
    color: "#f62d05"
  },
  {
    name: "Rabbitmq",
    level: "Beginner",
    color: "pink"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar photoName="pathfinder.jpg" name="Moises Pathfinder"></Avatar>
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.photoName} alt={props.name} />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Moises Perez</h1>
      <body>
        Proficient Programmer and Game Developer who is successful in
        progressing on project milestones and creating new solutions surrounding
        user feedback. A driven developer who is knowledgeable in creating quick
        game prototypes and creating design documents for project systems. A
        highly effective and flexible individual who values teamwork and
        passionate organizations to achieve customer goals.
      </body>
    </div>
  );
}

function SkillList() {
  const skills = skillData;
  const numSkills = skillData.length;
  return (
    <main>
      {numSkills > 0 ? (
        <ul className="skill-list">
          {skills.map((skill) => (
            <Skill skillObj={skill} key={skill.name} />
          ))}
        </ul>
      ) : (
        <div className="skill-list">
          <p className="skill" style={{ backgroundColor: "#c4defe" }}>
            It appears we don't have any skills or it's just broken lmao.
          </p>
        </div>
      )}
      {/* <Skill skill="React" emoji="😱" color="orange" />
      <Skill skill="C++" emoji="😩" color="#597cd2" />
      <Skill skill="Game Design" emoji="👽" color="#e04f15" />
      <Skill skill="C#" emoji="😤" color="#27c92f" />
      <Skill skill="Sound Design" emoji="🥵" color="#c4defe" /> */}
    </main>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.name} </span>
      <span>
        {/* //Beginner 👶
        //Intermediate 👍
        //Advanced 💪 */}
        {skillObj.level === "Advanced" && "💪"}
        {skillObj.level === "Intermediate" && "👍"}
        {skillObj.level === "Beginner" && "👶"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
