import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero text="Welcome to My Movie Page!" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              This is my movie page project created as part of my React 201 course. Here, I've harnessed the power of a movie database to fetch and showcase the latest and greatest in cinema. From handling search results to gracefully handling 404 'not found' pages, this project is a testament to the skills and knowledge I've gained in React 201. Join me on this cinematic journey, and let's explore the world of movies together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
