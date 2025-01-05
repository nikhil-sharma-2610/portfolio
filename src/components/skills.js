import React, { useState, useEffect } from "react";
import "./Skills.css";
import myImage from "./marketing.png";

const data = [
  {
    label: "Marketing",
    text: `As the Marketing Head of Zeal Society, I leveraged my strategic and promotional skills to enhance engagement and visibility. For the treasure hunt event, I designed creative campaigns and utilized social media to build excitement, resulting in record participation. I also organized SSB-style interviews to attract passionate individuals, creating a buzz around our unique selection process. By consistently promoting the society's vision and activities, I showcased its value, which led to a significant increase in both event participation and inductions. My efforts strengthened Zeal's presence and fostered a vibrant, enthusiastic community.`,
    imageUrl: myImage,
  },
  {
    label: "SAMP Head",
    text: "As the Head of the Student Alumni Mentorship Program (SAMP) at my college, run under the guidance of IIT Bombay mentors, I oversee the holistic guidance and support of first- and second-year students. From assisting during their admission process to addressing academic challenges and personal concerns, I ensure the program provides a nurturing environment for their growth. By fostering a culture of trust and mentorship, I help students navigate their initial years with confidence. Whether it's resolving academic issues, organizing workshops, or offering a listening ear for personal challenges, I strive to make SAMP a pillar of support for every student involved.",
    imageUrl: myImage,
  },
  {
    label: "PR Head",
    text: "As the Public Relations Head of Kalakaar Theatre, I manage the communication and coordination between our club and other college clubs, as well as external organizations, during various cultural events. My role involves liaising with different student bodies to ensure smooth collaboration, promoting our theatre’s activities, and establishing strong relationships with other institutions. Whether it’s organizing joint events, sharing event details, or managing inquiries, I ensure effective communication that enhances our club’s visibility and fosters positive interactions with other cultural groups. This role has helped strengthen Kalakaar Theatre's presence both within and beyond our college.",
    imageUrl: myImage,
  },
  {
    label: "Sports person",
    text: "As a dedicated member of the college volleyball team, I have actively participated in numerous tournaments both within the college and at external events. My involvement has not only honed my skills on the court but also fostered teamwork, discipline, and resilience. Competing in various plays has allowed me to represent my college with pride, contributing to the team’s success and building strong connections with fellow athletes from other institutions. This experience has been an essential part of my personal growth, both in sports and in leadership.",
    imageUrl: myImage,
  },
  {
    label: "Social worker",
    text: "I have actively worked with underprivileged students to help them learn the Scratch programming language, using gamification techniques to make the learning process engaging and effective. By incorporating elements of games, I created an interactive environment that motivated the students to grasp complex concepts in a fun and accessible way. This approach not only enhanced their coding skills but also fostered critical thinking and problem-solving abilities. It was a rewarding experience to witness their growth and development while making technology and learning more accessible to those who needed it the most.",
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
