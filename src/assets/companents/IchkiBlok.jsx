import React from "react";

function IchkiBlok() {
  return (
<section className="insights-section">
      <div className="insights-container">
        {/* Chap tomon - matn qismi */}
        <div className="insights-content">
          <h2 className="insights-heading">
            Get <span className="insights-highlight">insights</span> that help
            your business grow.
          </h2>

          <p className="insights-text">
            Discover The Benefits Of Data Analytics And Make Better Decisions
            Regarding Revenue, Customer Experience, And Overall Efficiency.
          </p>

          <div className="insights-stats">
            <div className="stat-item">
              <h3 className="stat-number">10k+</h3>
              <p className="stat-label">Companies</p>
            </div>

            <div className="stat-item">
              <h3 className="stat-number">314</h3>
              <p className="stat-label">Templates</p>
            </div>

            <div className="stat-item">
              <h3 className="stat-number">12M+</h3>
              <p className="stat-label">Queries</p>
            </div>
            
          </div>
        </div>

        {/* O'ng tomon - rasm qismi */}
        <div className="">
          <img src="./Bitmao.png
            "
            alt="Team working together"
            className="insights-image"
          />
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default IchkiBlok;
