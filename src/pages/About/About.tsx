import { Container } from "react-bootstrap";

const About = () => {
  const headingClassNames = "text-warning text-center";
  const paragraphClassNames = "text-secondary indent";
  return (
    <Container>
      <h2 className={headingClassNames}>About Weather Imp</h2>
      <p className={paragraphClassNames}>
        I made this app to practice fetching data from external APIs. The app
        gets your device's location from navigator.geolocation or gets another
        location from a provided US zip code and fetches the weather forecast
        from <a href="https://www.weatherapi.com/">Weatherapi </a> through the
        back-end that I built with Express.js and TypeScript{" "}
        <a href="https://jonathan-potter-weather-api.herokuapp.com/">here</a>.
        It then presents the current weather conditions, the hourly forecast and
        the three-day forecast on seperate pages that the user can navigate to.
      </p>
      <p className={paragraphClassNames}>
        The repository for this app is on GitHub{" "}
        <a href="https://github.com/JonathanDPotter/weather-imp">here</a>.
      </p>
      <h3 className={headingClassNames}>Technologies Used</h3>
      <p className={paragraphClassNames}>
        I built this app using React and Typescript. This app uses Bootstrap,
        React Bootstrap and SASS for styling, Jest for testing, React Router for
        routing, Axios for API calls, and React Context for global state
        management.
      </p>
    </Container>
  );
};

export default About;
