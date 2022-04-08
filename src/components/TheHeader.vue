<template>
  <div class="wrapper">
    <video
      id="background-video"
      autoplay
      loop
      muted
      poster="../assets/img/poster.png"
    >
      <source src="../assets/vid/earth.mp4" type="video/mp4" />
    </video>
    <the-navbar></the-navbar>
    <div class="title">
      <h1 class="text-3d" id="curveText">
        <span class="word">One</span> <span class="word">nation</span> <span class="word">family</span>
      </h1>
      <!-- <h2>La montre classique par excellence</h2> -->
    </div>
    <div class="arrow">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import anime from "animejs/lib/anime.es.js";

export default {
  components: {
    TheNavbar,
  },
  mounted() {
    anime.timeline({ loop: false }).add({
      targets: ".text-3d .word",
      scale: [14, 1],
      opacity: [0, 1],
      easing: "easeOutCirc",
      duration: 1200,
      delay: (el, i) => 1000 * i,
      complete: function () {
        document
          .getElementById("curveText")
          .addEventListener("mouseenter", function () {
            document.getElementById("curveText").classList.add("glow");
          });
        document
          .getElementById("curveText")
          .addEventListener("mouseleave", function () {
            document.getElementById("curveText").classList.remove("glow");
          });
      },
    });
  },
};
</script>

<style scoped>
#background-video {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}

.word {
  display: inline-block;
  line-height: 1em;
}

.title {
  margin-top: 42vh;
  color: white;
  text-align: center;
  -webkit-text-stroke: 1px #938e8e;
}

.title h1 {
  font-weight: bold;
  letter-spacing: 4px;
  /* font-weight: 500; */
  text-transform: uppercase;
  font-size: 4.5rem;
  line-height: 1.1;
}

.title h2 {
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: 300;
  font-size: 2.5rem;
  line-height: 1.3;
}

.text-3d {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  line-height: 1em;
  color: #ffffff;
  font-weight: bold;
  font-size: 106px;
  text-shadow: 0px 0px 0 rgb(216, 216, 216), 1px 1px 0 rgb(187, 187, 187),
    2px 2px 0 rgb(158, 158, 158), 3px 3px 0 rgb(129, 129, 129),
    4px 4px 3px rgba(0, 0, 0, 0), 4px 4px 1px rgba(0, 0, 0, 0.5),
    0px 0px 3px rgba(0, 0, 0, 0.2);
}

.glow {
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #05e6cd,
      0 0 40px #07d0a2, 0 0 50px #00e68d, 0 0 60px #00e6d1, 0 0 70px #00e698;
  }

  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
      0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}

/*scroll*/

.arrow {
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.arrow span {
  display: block;
  width: 25px;
  height: 25px;
  border-bottom: 3px solid #ffffff;
  border-right: 3px solid #ffffff;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
}
.arrow span:nth-child(2) {
  animation-delay: -0.2s;
}
.arrow span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}
</style>
