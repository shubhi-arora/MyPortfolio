import React from "react";

export default function Experience() {
  return (
    <section id="experience">
      <h1 className="exp-h1">Professional Experience</h1>

      <div className="row">
        <div className="col-lg-6">
          <div className="card exp-card-new">
            <div class="card-header exp-card-header">
              <img
                className="exp-card-img"
                src="./images/ms.png"
                alt=""
                width="60px"
                height="60px"
              />
              <div className="exp-card">
                <h1 className="exp-card-header-h1">Microsoft</h1>
                <p className="exp-card-header-p">
                  Software Engineer Intern | May 2023 - July 2023
                </p>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">
                <span className="badge bg-secondary">C#</span>
                <span className="badge bg-secondary">SQL</span>
                <span className="badge bg-secondary">Azure CosmosDB</span>
              </p>
              <a
                href="https://drive.google.com/file/d/1WbXDUN-Pz1ecRlWn9zCoboAcQ7-HknXc/view?usp=drive_link"
                className="btn btn-primary bg-dark exp-card-btn"
                target="_blank"
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  width="18"
                  viewBox="0 50 576 512"
                  fill="gold"
                >
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>{" "}
                Certificate
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card exp-card-new">
            <div class="card-header exp-card-header">
              <img
                className="exp-card-img"
                src="./images/amex.png"
                alt=""
                width="60px"
                height="60px"
              />
              <div className="exp-card">
                <h1 className="exp-card-header-h1">American Express</h1>
                <p className="exp-card-header-p">
                  Data Analyst Intern | Jan 2023 - May 2023
                </p>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">
                <span className="badge bg-secondary">Python</span>
                <span className="badge bg-secondary">SQL</span>
                <span className="badge bg-secondary">Sisense BI Tool</span>
                <span className="badge bg-secondary">Hive</span>
              </p>

              <a
                href="https://drive.google.com/file/d/1VoVXo92eMWFae8uPcary17YSEPzWCZ6C/view?usp=drive_link"
                className="btn btn-primary bg-dark exp-card-btn"
                target="_blank"
                
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="18"
                  width="18"
                  viewBox="0 50 576 512"
                  fill="gold"
                >
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>{" "}
                Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
