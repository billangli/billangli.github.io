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
          degree of a Specialist in Computer Science and a Minor in Economics. I
        </p>
      </div>
    </div>
    <div id="experience">
      <div class="container">
        <h1>Work Experience</h1>
        <!-- <Job v-for="job in jobs" v-bind:position="job.position" /> -->
      </div>
    </div>
    <div id="projects">
      <div class="container">
        <h1>Select Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus qui accusantium dicta cum pariatur sint
          esse, cupiditate alias minus fugit obcaecati dolores doloremque rerum dolorem inventore corporis aperiam
          placeat neque et mollitia adipisci repellendus. Explicabo, mollitia expedita ad accusamus non illum totam
          consequuntur suscipit, a autem ut atque sapiente, minima cum architecto blanditiis enim aliquid corporis
          exercitationem iste? Est repellendus voluptatibus ratione quisquam ullam possimus voluptate doloribus iste
          exercitationem, libero sunt facere laboriosam labore at. Excepturi cupiditate, libero aperiam sunt similique
          unde porro pariatur laboriosam autem magni, minus fugiat incidunt enim. Obcaecati eaque totam facere, sequi
          qui vero molestiae. Sed.
        </p>
      </div>
    </div>
    <div id="contact">
      <div class="container">
        <h1>Contact Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed quaerat id quo itaque ipsum blanditiis
          commodi obcaecati molestias, modi consectetur cumque, quasi quia quae fuga fugit maxime. Corporis nihil velit
          at delectus asperiores laboriosam illum doloremque sed ab veniam facilis laborum vero ipsum, incidunt optio
          error suscipit deleniti. Numquam.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import Job from "./components/Job";

export default {
  name: "App",
  // components: { Job },
  // data() {
  //   return {
  //     jobs: [
  //       {
  //         position: "soft",
  //         company: "bmo",
  //         date: "last year",
  //         descriptions: ["y", "df"],
  //       },
  //     ],
  //   };
  // },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  margin: 0;
  padding: 0;
}

h1 {
  font-family: "Roboto", sans-serif;
  font-size: 48px;
  padding: 0;
}

h2 {
  font-family: "Roboto", sans-serif;
  font-size: 28px;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
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
  font-size: 20px;
  line-height: 30px;
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
