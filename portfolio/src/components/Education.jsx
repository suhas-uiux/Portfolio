import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-arrow",
      degree: 'Schooling',
      institution: 'Shantiniketan Public School Khanapur',
      grades: 'CGPA: 8.24',
      year: ' [2013-2019]',
      desc: "I completed my schooling at a particular school from classes 3 to 10. During this time, I held the responsibility of being the captain of a school group named Godavari and served as the cultural minister. I also had a keen interest in sports and represented my school in a state-level football tournament",
    },
    {
      logo: "logo-play",
      degree: 'PUC(1 and 2)',
      institution: 'Prerana PU science college, Hubli',
      grades: 'Grade: 88.9% ',
      year: ' [2019-2021]',
      desc: "I completed my class 12  education at Prerana PU college ,where I studied Science with PCMB.",       
    },
    {
      logo: "logo-play",
      degree: 'Bachelor of Engineering',
      institution: 'Shri Dharmasthala Manjunateshwar College of Engineering and Technology',
      grades: 'CGPA: 8 ',
      year: ' [2022-present]',
      desc: "I am currently pursuing my engineering studies at SDMCET. I lead Team QWERTY as the UI/UX Designer and Front-End Developer for the college fest 'Insignia.' I also actively participate in conducting workshops to help students enhance their skills",       
    },

  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
          My <span className="text-cyan-600">Education</span>
        </h3>
      <p className="text-lg text-center font-normal ">My educational details are as follows.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <ion-icon name={edu.logo} class="text-primary text-xl mr-2" />
            <div className="text-lg font-medium mb-2 text-gray-700">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.grades}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
