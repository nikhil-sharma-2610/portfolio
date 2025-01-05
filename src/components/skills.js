import React, { useState, useEffect } from "react";
import "./Skills.css";
import myImage from "./marketing.png";

const data = [
  {
    label: "Marketing",
    text: `Marketing involves promoting and selling products or services, including market research and advertising. Effective marketing strategies are crucial for business success.\n
    Key Strategies:
    1. Market Research: Understanding the target audience and market trends.
    2. Branding: Establishing a strong brand identity.
    3. Content Marketing: Creating valuable content to attract and engage customers.
    4. Social Media Marketing: Utilizing social platforms to reach and interact with the audience.
    5. SEO: Optimizing online content to improve search engine rankings.\n
    Implementation:
    - Identify target audience and their needs.
    - Develop a unique value proposition.
    - Create a marketing plan with specific goals and timelines.
    - Execute campaigns across chosen channels.
    - Monitor performance and adjust strategies as needed.
    `,
    imageUrl: myImage,
  },
  {
    label: "Organizing",
    text: "This is the text for Organizing",
    imageUrl: myImage,
  },
  {
    label: "Management",
    text: "This is the text for Management",
    imageUrl: myImage,
  },
  {
    label: "Sports person",
    text: "This is the text for Sports Person",
    imageUrl: myImage,
  },
  {
    label: "Social worker",
    text: "This is the text for Social Worker",
    imageUrl: myImage,
  },
];

const Skills = () => {
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0); // Track selected skill
  const [selectedSkillData, setSelectedSkillData] = useState(data[0]); // Initialize with first skill

  useEffect(() => {
    setSelectedSkillData(data[selectedSkillIndex]); // Update displayed skill on index change
  }, [selectedSkillIndex]); // Dependency array ensures update on index change

  const handleLabelClick = (index) => {
    setSelectedSkillIndex(index);
  };

  return (
    <div>
      <div className="container1">Nikhil Sharma</div>
      <div className="container2">
        <div className="con">{selectedSkillData.text}</div>
        <div className="subcontainer">
          <ul className="skills-ul">
            {data.map((item, index) => (
              <li key={index}>
                <p className="sub" onClick={() => handleLabelClick(index)}>
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {selectedSkillData && selectedSkillData.imageUrl && (
        <img className="image" src={selectedSkillData.imageUrl} alt="Logo" />
      )}
      <div className="container3">{selectedSkillData.label}</div>
    </div>
  );
};

export default Skills;
