import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              I'm Matheus Oliveira, a second-year IT programming student at NSCC Canada. Alongside my academic journey, I've embarked on an exciting path to expand my skills and pivot my career direction by participating in the Ultimate 2023 Fullstack Web Development Bootcamp. This project holds special significance for me as it serves both personal and professional aspirations, helping me grow and adapt in ways that are invaluable for my future endeavors.
              <br />
              <br />
              Through this project, I'm gaining hands-on experience, enhancing my programming skills, and contributing to my growing portfolio. It's a testament to my commitment to learning, growth, and the pursuit of a rewarding career in web development. I invite you to explore this project with me and witness the journey of transformation and discovery it represents.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
