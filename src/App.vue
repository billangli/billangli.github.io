<template>
  <div id="app">
    <div id="navbar">
      <ul>
        <li style="float: left">
          <a href="#">
            <h5>Bill Ang Li</h5>
            <div class="underline"></div>
          </a>
        </li>
        <li>
          <a href="#about">
            <h5>About</h5>
            <div class="underline"></div>
          </a>
        </li>
        <li>
          <a href="#experience">
            <h5>Experience</h5>
            <div class="underline"></div>
          </a>
        </li>
        <li>
          <a href="#projects">
            <h5>Projects</h5>
            <div class="underline"></div>
          </a>
        </li>
        <li>
          <a href="#contact">
            <h5>Contact</h5>
            <div class="underline"></div>
          </a>
        </li>
        <li>
          <a href="resume.pdf" target="_blank">
            <h5>Resume</h5>
            <div style="background-color: var(--red)">
              <div class="underline"></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div id="banner">
      <img
        src="../public/cropped-headshot-small.png"
        alt="Bill's headshot"
        class="clip-circle"
      />
      <br />
      <img
        src="../public/signature.png"
        alt="Bill Ang Li"
        style="padding-top: 20px"
      />
      <h6>Computer Science student at the University of Toronto</h6>
      <h6>Seeking New Grad 2021 opportunities</h6>
    </div>
    <div id="about" class="container">
      <h1>About Me</h1>
      <p style="line-height: 30px">
        I love programming, playing basketball, learning guitar melodies and
        reading books. I worked on some back-end tasks at my time at the Bank of
        Montreal, I worked part-time as a data engineer at the Toronto General
        Hospital and now I am learning front-end development by contributing to
        an open-source project.
      </p>
    </div>
    <div id="experience" class="container">
      <h1>Work Experience</h1>
      <div v-for="job in jobs" :key="job.position">
        <h2>{{ job.position }}</h2>
        <div style="clear: both; height: 1.5em; width: 100%">
          <h3 class="alignLeft">{{ job.company }}</h3>
          <h3 class="alignRight">{{ job.date }}</h3>
        </div>
        <ul id="job-description">
          <li v-for="line in job.descriptions" :key="line">{{ line }}</li>
        </ul>
      </div>
    </div>
    <div id="projects" class="container">
      <h1>Select Projects</h1>
      <div
        v-for="project in projects"
        :key="project"
        style="display: flex; margin-bottom: 20px"
      >
        <div class="project-img-container">
          <div class="img-overlay">
            <a :href="project.url" target="_blank">
              <img
                :src="project.image"
                :alt="project.alt"
                class="project-img"
                style="display: block"
              />
            </a>
          </div>
        </div>
        <div style="display: table; margin: 15px; height: 75px">
          <div style="display: table-cell; vertical-align: middle">
            <h2 style="margin: 0">{{ project.title }}</h2>
            <h3>{{ project.description }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div id="contact" style="padding: 20px 0 30px 0">
      <div class="container">
        <h1>Contact Me</h1>
        <div style="display: flex; justify-content: space-between">
          <a class="contact-entry" href="mailto:bill.ang.li@hotmail.com">
            <img src="email.png" alt="GitHub Icon" class="icon" />
            <div>
              <h2>Email</h2>
              <p>bill.ang.li@hotmail.com</p>
            </div>
          </a>
          <a
            class="contact-entry"
            href="https://www.github.com/billangli"
            target="_blank"
          >
            <img src="github.png" alt="GitHub Icon" class="icon" />
            <div>
              <h2>GitHub</h2>
              <p>@billangli</p>
            </div>
          </a>
          <a
            class="contact-entry"
            href="https://www.linkedin.com/in/billangli"
            target="_blank"
          >
            <img src="linkedin.png" alt="GitHub Icon" class="icon" />
            <div>
              <h2>LinkedIn</h2>
              <p>Bill Ang Li</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div id="footer">
      <h4 style="text-align: center"><strong>Bill Ang Li</strong> - 2020</h4>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif&family=Roboto:wght@700&display=swap");

body {
  margin: 0;
  padding: 0;
  --blue: #c0f5fa;
  --red: #fc5f39;
  --green: #a8de00;
  --light-gray: #e7ebee;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
}

h1 {
  font-family: "Roboto", sans-serif;
  font-size: 2.5em;
  margin-bottom: 0.5em;
}

h2 {
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  margin: 0;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  font-style: italic;
  margin-top: 0.5em;
  margin-bottom: 0;
}

h4 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  margin: 0;
  padding: 1em;
}

h5 {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 1em;
  margin-bottom: 0;
}

h6 {
  font-family: "Noto Serif", serif;
  font-size: 24px;
  line-height: 0;
  margin: 40px;
}

a {
  color: black;
  text-decoration: none;
  padding: 0;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  margin: 0;
}

.alignLeft {
  float: left;
}

.alignRight {
  float: right;
}

#job-description li {
  line-height: 25px;
}

#navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--light-gray);
  text-align: right;
}

#navbar li {
  display: inline-block;
}

#navbar li a {
  display: block;
  text-align: center;
  padding: 0 15px;
  color: black;
  text-decoration: none;
}

.underline {
  width: 100%;
  height: 0.4em;
  margin-bottom: 0.8em;
  transition: 0.5s ease;
}

#navbar a:hover .underline {
  background-color: var(--green);
}

#banner {
  padding-top: 8em;
  padding-bottom: 2em;
  margin: 0;
  text-align: center;
  background-color: var(--blue);
}

.container {
  max-width: 800px;
  margin: auto;
  padding-top: 50px;
}

#job-description li {
  line-height: 30px;
}

.project-img {
  max-height: 100px;
  max-width: 100px;
}

.img-overlay {
  background: rgba(0, 0, 0, 0);
  transition: 0.5s ease;
  padding: 10px;
  text-align: center;
}

.project-img-container:hover .img-overlay {
  background-color: var(--green);
}

.contact-entry {
  display: flex;
  padding: 10px;
  transition: 0.5s ease;
}

.contact-entry:hover {
  background-color: var(--red);
}

.icon {
  width: 48px;
  height: 48px;
  margin-right: 10px;
}

/* #contact {
  background-color: var(--blue);
} */

#footer {
  background: var(--light-gray);
}
</style>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      jobs: [
        {
          position: "Data Engineer Work Study Student",
          company: "Toronto General Hospital",
          date: "2018-05 - 2020-04",
          descriptions: [
            "Automated web traffic metric reporting using Python, including data collection, processing and analysis",
            "Led team in the design and development of a provincial clinical tool that recruits potential organ donors",
            "Managed over 20 Python scripts to ensure daily data delivery to the research team",
            "Improved data scraping and processing by creating diagnostic tests",
            "Automated the process for storing backups of WebEx meeting recordings on Vimeo using Python",
          ],
        },
        {
          position: "Software Developer Intern",
          company: "Bank of Montreal",
          date: "2019-05 - 2019-08",
          descriptions: [
            "Created a C# application for comparing GemFire clusters to ensure that all data was uploaded to the cloud",
            "Laid groundwork for migration from Netezza to Greenplum databases to improve performance for the production support team",
            "Debugged and expanded an F# build tool for packaging and deploying code used by the Middleware team",
          ],
        },
      ],
      projects: [
        {
          title: "ActivityWatch",
          description: "Contributor to Open-Source Project",
          image: "activitywatch.png",
          alt: "ActivityWatch Logo",
          url: "https://activitywatch.net/",
        },
        {
          title: "Restaurant Inventory and Staff Manager",
          description: "Class Project",
          image: "restaurant-system-square.png",
          alt: "Inventory App",
          url: "https://github.com/billangli/RestaurantSystem",
        },
        {
          title: "Gesture-based Musical Instrument",
          description: "1st Place Facebook Demo at Hack the North 2018",
          image: "synthly.png",
          alt: "Synthly App",
          url: "https://devpost.com/software/synthly",
        },
        {
          title: "Spotify Song Recommender Based on User Mood",
          description: "Best Use of Innovative AI at Hack Western 4",
          image: "bella.png",
          alt: "Bella App",
          url: "https://devpost.com/software/freeplay",
        },
        {
          title: "Vacant Library Seat Detector",
          description: "1st Place at Hack the 6ix 2017",
          image: "seat-me-square.png",
          alt: "Seat Me App",
          url: "https://github.com/kx1235/WeCamSee",
        },
      ],
    };
  },
};
</script>
