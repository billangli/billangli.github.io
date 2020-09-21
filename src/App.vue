<template>
  <div id="app">
    <div id="navbar">
      <ul>
        <li style="float:left">
          <a href="#banner">
            <h5>Bill Ang Li</h5>
          </a>
        </li>
        <li>
          <a href="#about">
            <h5>About</h5>
          </a>
        </li>
        <li>
          <a href="#experience">
            <h5>Experience</h5>
          </a>
        </li>
        <li>
          <a href="#projects">
            <h5>Projects</h5>
          </a>
        </li>
        <li>
          <a href="#contact">
            <h5>Contact</h5>
          </a>
        </li>
        <li>
          <a href="#resume">
            <h5>Resume</h5>
          </a>
          <!-- todo: resume link -->
        </li>
      </ul>
    </div>
    <div id="banner">
      <img src="../public/cropped-headshot-small.png" alt="Bill's headshot" class="clip-circle" />
      <br />
      <img src="../public/signature.png" alt="Bill Ang Li" style="padding-top:20px;" />
      <h6>Computer Science student at the University of Toronto</h6>
      <h6>Looking for 2021 New Grad jobs</h6>
    </div>
    <div id="about">
      <div class="container">
        <h1>About Me</h1>
        <p>
          I love programming, playing basketball, learning guitar melodies and reading books. I am finishing up my
          degree of a Specialist in Computer Science and a Minor in Economics.
        </p>
      </div>
    </div>
    <div id="experience">
      <div class="container">
        <h1>Work Experience</h1>
        <div v-for="job in jobs" :key="job.position">
          <h2>{{ job.position }}</h2>
          <div style="clear: both;">
            <h3 class="alignLeft">{{ job.company }}</h3>
            <h3 class="alignRight">{{ job.date }}</h3>
          </div>
          <br />
          <ul id="job-description">
            <li v-for="line in job.descriptions" :key="line">{{ line }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div id="projects">
      <div class="container">
        <h1>Select Projects</h1>
        <p>Coming soon.</p>
      </div>
    </div>
    <div id="contact" style="padding: 20px 0 30px 0;">
      <div class="container">
        <h1>Contact Me</h1>
        <h2>Email</h2>
        <a href="mailto:bill.ang.li@hotmail.com">bill.ang.li@hotmail.com</a>
        <h2>GitHub</h2>
        <a href="github.com/billangli">@billangli</a>
        <h2>LinkedIn</h2>
        <a href="linkedin.com/in/billangli">Bill Ang Li</a>
      </div>
    </div>
    <div id="footer">
      <p style="text-align: center;">Created by Bill Ang Li, 2020</p>
    </div>
  </div>
</template>

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
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif&family=Roboto:wght@700&display=swap");

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
}

h1 {
  font-family: "Roboto", sans-serif;
  font-size: 2.5em;
  padding: 0;
}

h2 {
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  line-height: 0;
  margin: 30px 0 10px 0;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  line-height: 0;
  font-style: italic;
}

h5 {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 0;
  text-transform: uppercase;
}

h6 {
  font-family: "Noto Serif", serif;
  font-size: 24px;
  line-height: 0;
  margin: 40px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  line-height: 30px;
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
  background-color: white;
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

#banner {
  padding-top: 100px;
  padding-bottom: 40px;
  margin: 0;
  text-align: center;
  background-color: #c0f5fa;
}

.container {
  max-width: 800px;
  margin: auto;
}

#contact {
  background-color: #c0f5fa;
}
</style>
