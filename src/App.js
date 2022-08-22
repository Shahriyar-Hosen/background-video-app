import React from "react";
import "./App.css";

const App = () => {
  const menuToggle = document.querySelector(".toggle");
  const showcase = document.querySelector(".showcase");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    showcase.classList.toggle("active");
  });
  return (
    <div>
      <h1>this is background video app</h1>
      {/* <!-- Video Source -->
  <!-- https://www.pexels.com/video/aerial-view-of-beautiful-resort-2169880/ --> */}
      <section class="showcase">
        <header>
          <h2 class="logo">Travel</h2>
          <div class="toggle"></div>
        </header>
        <video
          src="https://traversymedia.com/downloads/videos/explore.mp4"
          muted
          loop
          autoplay
        ></video>
        <div class="overlay"></div>
        <div class="text">
          <h2>Never Stop To </h2>
          <h3>Exploring The World</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="/#">Explore</a>
        </div>
        <ul class="social">
          <li>
            <a href="/#">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <div class="menu">
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">News</a>
          </li>
          <li>
            <a href="/#">Destination</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
