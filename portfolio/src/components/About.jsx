import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "10" },
    { text: "Companies Work", count: "01" }
  ];

 


  const navigateToResume = () => {
    window.open("../assets/images/Suhas_Sambargi_2SD22CS109.pdf", "_blank");
  };
  

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
            <p className="text-justify leading-7 w-11/12 mx-auto">
  Hi, I'm <strong>Suhas Sabambargi</strong>, a UI/UX Designer and Front-End Developer with a deep passion for building intuitive digital experiences. I come from a background where curiosity and creativity have always driven me — and over time, I’ve transformed those traits into technical skills and team leadership.
  <br />
  I proudly belong to a place where learning is a continuous journey, and I’ve grown through hands-on experiences, peer collaborations, and challenges that pushed me beyond the classroom. From tinkering with design tools like <strong>Figma</strong>, to developing scalable web applications in <strong>React</strong>, and even diving into <strong>AI/ML projects</strong> with Python, I’ve steadily evolved from a curious learner into a confident creator.
  <br />
  My passion lies in <strong>designing interfaces that feel natural</strong> and <strong>solving real-world problems with code</strong>. I lead <strong>Team QWERTY</strong>, a team of 7 that developed the full-stack website for our college fest <strong>Insignia</strong>, where I took charge of front-end development and UI/UX strategy. I’ve also explored system-level thinking — setting up a server from scratch, securing browser-based quiz platforms, and more.
  <br />
  Beyond projects, I’m deeply invested in <strong>personal growth</strong> and <strong>community impact</strong>. I help conduct monthly, course-certified workshops that equip fellow students with industry-relevant tech skills. Every step I take is focused on becoming not just a better developer, but also a better collaborator and leader.
</p>

              {/* <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div> */}
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
