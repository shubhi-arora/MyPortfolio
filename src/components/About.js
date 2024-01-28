import React from "react";

export default function About() {
  return (
    <div className="row about-row1">
      <div className="col-lg-6 col-sm-12">
        <h1 className="about-h1">Shubhi Arora</h1>
        <p className="about-p">
          Hi! I am a Full-stack Developer and a Competitive Programmer.
          Currently, I am in my final year (2024 Graduate) pursuing B.Tech in Computer Science &
          Engineering from IIIT Una, Himachal Pradesh.{" "}
        </p>
        <p className="about-p">
          When it comes to coding, my primary language is C++. My goal is to
          become the best software developer. If there is anything new I can
          learn, I am open to it. Taking a look into data science, artificial
          intelligence and many more upcoming tech subjects would be of great
          interest to me in the future.
        </p>
        <a className="btn btn-primary btn-lg about-btn" href="https://drive.google.com/file/d/1j0-wGgS-zDR3Iqj-ISXmCqIzOHDhREcV/view?usp=sharing" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" className="about-svg" fill="gold" height="22" width="25" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>Resumé</a>
      </div>
      <div className="col-lg-6 col-sm-12">
        <div className="row">
          <div className="col">
            <img
              src="./images/img1.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              max-width="100%"
              height="100%"
              alt="Shubhi"
            />
          </div>
          <div className="col">
            <img
              src="./images/img5.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              max-width="100%"
              height="47%"
              alt="Shubhi"
            />
            <img
              src="./images/img4.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              max-width="100%"
              height="47%"
              alt="Shubhi"
            />
          </div>
          <div className="col col-right">
            <img
              src="./images/img2.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              max-width="100%"
              height="100%"
              alt="Shubhi"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
