import React, { useEffect, useState } from "react";
function OurPresence() {
    const partnerLocations = {
    Delhi: {
      state: "New Delhi",
      type: "Network Hub",
      partners: [
  /*
    Future backend partner object:

    {
      id: "",
      partnerName: "",
      instituteName: "",
      city: "",
      address: "",
      status: ""
    }
  */
],
    },

    Lucknow: {
      state: "Uttar Pradesh",
      type: "Network Hub",
      partners: [],
    },

    Mumbai: {
      state: "Maharashtra",
      type: "Network Hub",
      partners: [],
    },

    Bengaluru: {
      state: "Karnataka",
      type: "Network Hub",
      partners: [],
    },

    Chennai: {
      state: "Tamil Nadu",
      type: "Network Hub",
      partners: [],
    },

    Kolkata: {
      state: "West Bengal",
      type: "Network Hub",
      partners: [],
    },
  };

  const [counts, setCounts] = useState({
    states: 0,
    institutes: 0,
    students: 0,
    cities: 0,
  });
    const [selectedLocation, setSelectedLocation] = useState(null);
    const handleLocationSelect = (location) => {
  setSelectedLocation(location);

  setTimeout(() => {
    document
      .querySelector(".selected-location-panel")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }, 150);
};
    const [activeHighlight, setActiveHighlight] = useState(null);

  useEffect(() => {
    const targets = {
      states: 24,
      institutes: 500,
      students: 25,
      cities: 100,
    };

    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        states: Math.floor(targets.states * easeOut),
        institutes: Math.floor(targets.institutes * easeOut),
        students: Math.floor(targets.students * easeOut),
        cities: Math.floor(targets.cities * easeOut),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);
    const selectedPartnerLocation =
    selectedLocation
      ? partnerLocations[selectedLocation]
      : null;

  return (
    <section className="our-presence">

      <div className="our-presence-container">

        <div className="our-presence-heading">

          <span>
            OUR PRESENCE
          </span>

          <h2>
            Growing Across India
          </h2>

          <p>
            Connecting institutions, empowering students,
            and building a stronger learning network.
          </p>

        </div>


        <div className="our-presence-content">

          {/* INDIA MAP */}
          <div className="our-presence-map-card">

            <div className="our-presence-map">

  <div className="india-map-wrapper">

    {/* INDIA MAP */}

    <img
      src="/maps/india-map.svg"
      alt="India Presence Map"
      className="india-presence-map"
    />
    

    {/* CONNECTION LINES */}

<svg
  className="presence-connections"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  aria-hidden="true"
>
  <line x1="34.4" y1="32.4" x2="44.6" y2="37.9" />
  <line x1="44.6" y1="37.9" x2="64.9" y2="50.9" />
  <line x1="64.9" y1="50.9" x2="22.5" y2="61.2" />
  <line x1="22.5" y1="61.2" x2="35.4" y2="78.8" />
  <line x1="35.4" y1="78.8" x2="42.8" y2="78.5" />
</svg>

    {/* LOCATION DOTS */}

    <div
  className={`presence-dot dot-1 ${
  selectedLocation === "Delhi" ? "location-active" : ""
}`}
  onClick={() => handleLocationSelect("Delhi")}
  onKeyDown={(event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleLocationSelect("Delhi");
  }
}}
  role="button"
  tabIndex={0}
  aria-label="View Delhi partner details"
>
  <div className="presence-tooltip">
    <strong>Delhi</strong>
    <span>New Delhi, India</span>
    <small>Network Hub</small>
  </div>
</div>

    <div
  className={`presence-dot dot-2 ${
  selectedLocation === "Lucknow" ? "location-active" : ""
}`}
  onClick={() => handleLocationSelect("Lucknow")}
  onKeyDown={(event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleLocationSelect("Lucknow");
  }
}}
  role="button"
  tabIndex={0}
  aria-label="View Lucknow partner details"
>
  <div className="presence-tooltip">
    <strong>Lucknow</strong>
    <span>Uttar Pradesh, India</span>
    <small>Network Hub</small>
  </div>
</div>

<div
  className={`presence-dot dot-3 ${
  selectedLocation === "Mumbai" ? "location-active" : ""
}`}
  onClick={() => handleLocationSelect("Mumbai")}
  onKeyDown={(event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleLocationSelect("Mumbai");
  }
}}
  role="button"
  tabIndex={0}
  aria-label="View Mumbai partner details"
>
  <div className="presence-tooltip">
    <strong>Mumbai</strong>
    <span>Maharashtra, India</span>
    <small>Network Hub</small>
  </div>
</div>

<div
  className={`presence-dot dot-4 ${
  selectedLocation === "Bengaluru" ? "location-active" : ""
}`}
  onClick={() => handleLocationSelect("Bengaluru")}
  onKeyDown={(event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleLocationSelect("Bengaluru");
  }
}}
  role="button"
  tabIndex={0}
  aria-label="View Bengaluru partner details"
>
  <div className="presence-tooltip">
    <strong>Bengaluru</strong>
    <span>Karnataka, India</span>
    <small>Network Hub</small>
  </div>
</div>
<div
  className={`presence-dot dot-5 ${
  selectedLocation === "Channai" ? "location-active" : ""
}`}
  onClick={() => handleLocationSelect("Channai")}
  
  onKeyDown={(event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleLocationSelect("Channai");
  }
}}
  role="button"
  tabIndex={0}
  aria-label="View Channai partner details"
>
  <div className="presence-tooltip">
    <strong>Channai</strong>
    <span>Tamilnadu, India</span>
    <small>Network Hub</small>
  </div>
</div>

<div
  className={`presence-dot dot-6 ${
  selectedLocation === "Kolkata" ? "location-active" : ""
}`}
  onClick={() => handleLocationSelect("Kolkata")}
  onKeyDown={(event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleLocationSelect("Kolkata");
  }
}}
  role="button"
  tabIndex={0}
  aria-label="View Kolkata partner details"
>
  <div className="presence-tooltip">
    <strong>Chennai</strong>
    <span>Tamil Nadu, India</span>
    <small>Network Hub</small>
  </div>
</div>

<div className="presence-dot dot-6">
  <div className="presence-tooltip">
    <strong>Kolkata</strong>
    <span>West Bengal, India</span>
    <small>Network Hub</small>
  </div>
</div>


  </div>

</div>
{/* MAP HIGHLIGHT CARDS */}

<div
  className={`map-highlight-card highlight-partnership ${
    activeHighlight === "partnerships"
      ? "highlight-active"
      : ""
  }`}
  onClick={() => setActiveHighlight("partnerships")}
  onKeyDown={(event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setActiveHighlight("partnerships");
  }
}}
  role="button"
  tabIndex={0}
  aria-label="View Strong Partnerships"
>
  <div className="map-highlight-icon">♧</div>

  <div>
    <strong>Strong Partnerships</strong>
    <span>
      Building trusted academic relationships
    </span>
  </div>
</div>


<div
  className={`map-highlight-card highlight-quality ${
    activeHighlight === "quality"
      ? "highlight-active"
      : ""
  }`}
  onClick={() => setActiveHighlight("quality")}
  onKeyDown={(event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setActiveHighlight("quality");
  }
}}
  role="button"
  tabIndex={0}
  aria-label="View Quality and Certification"
>
  <div className="map-highlight-icon">✦</div>

  <div>
    <strong>Quality & Certification</strong>
    <span>
      Focused on quality training standards
    </span>
  </div>
</div>

<div
  className={`map-highlight-card highlight-success ${
    activeHighlight === "success"
      ? "highlight-active"
      : ""
  }`}
  onClick={() => setActiveHighlight("success")}
  onKeyDown={(event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setActiveHighlight("success");
  }
}}
  role="button"
  tabIndex={0}
  aria-label="View Student Success"
>
  <div className="map-highlight-icon">♙</div>

  <div>
    <strong>Student Success</strong>
    <span>
      Supporting learning and career growth
    </span>
  </div>
</div>

<div
  className={`map-highlight-card highlight-growth ${
    activeHighlight === "growth"
      ? "highlight-active"
      : ""
  }`}
  onClick={() => setActiveHighlight("growth")}
  onKeyDown={(event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setActiveHighlight("growth");
  }
}}
  role="button"
  tabIndex={0}
  aria-label="View Continuous Growth"
>
  <div className="map-highlight-icon">↗</div>

  <div>
    <strong>Continuous Growth</strong>
    <span>
      Expanding our academic ecosystem
    </span>
  </div>
</div>

          </div>
          {/* SELECTED LOCATION PANEL */}

{selectedLocation && selectedPartnerLocation && (
  <div className="selected-location-panel">

    <div className="selected-location-header">

      <div className="selected-location-icon">
        ⌖
      </div>

      <div>
        <span>SELECTED LOCATION</span>
        <h3>{selectedLocation}</h3>
      </div>

      <button
        type="button"
        onClick={() => setSelectedLocation(null)}
        aria-label="Close location details"
      >
        ×
      </button>

    </div>


    <div className="selected-location-meta">
      <span>
        {selectedPartnerLocation.state}
      </span>

      <span>
        {selectedPartnerLocation.type}
      </span>
    </div>


    <div className="selected-location-partners">

  <div className="selected-partners-title">
    <span>PARTNER INSTITUTES</span>

    <strong>
      {selectedPartnerLocation.partners.length}
    </strong>
  </div>

  {selectedPartnerLocation.partners.length > 0 ? (
  <div className="partner-directory-list">
    {selectedPartnerLocation.partners.map((partner) => (
      <div
        className="partner-directory-card"
        key={partner.id}
      >
        <strong>{partner.partnerName}</strong>
        <span>{partner.instituteName}</span>
        <span>{partner.city}</span>
        <span>{partner.address}</span>
      </div>
    ))}
  </div>
) : (
  <div className="selected-location-empty">
    Partner institute details will appear here once available.
  </div>
)}

</div>

  </div>
)}
{/* CONTINUOUS GROWTH INFORMATION PANEL */}

{activeHighlight === "growth" && (
  <div className="highlight-information-panel">

    <div className="highlight-information-icon">
      ↗
    </div>

    <div className="highlight-information-content">
      <span>CONTINUOUS GROWTH</span>

      <h3>Continuous Growth</h3>

      <p>
        Expanding our academic ecosystem through
        new partnerships, learning opportunities,
        training initiatives, and wider access to
        quality education.
      </p>
    </div>

    <button
      type="button"
      onClick={() => setActiveHighlight(null)}
      aria-label="Close continuous growth information"
    >
      ×
    </button>

  </div>
)}
{/* STUDENT SUCCESS INFORMATION PANEL */}

{activeHighlight === "success" && (
  <div className="highlight-information-panel">

    <div className="highlight-information-icon">
      ♙
    </div>

    <div className="highlight-information-content">
      <span>STUDENT SUCCESS</span>

      <h3>Student Success</h3>

      <p>
        Supporting students through structured learning,
        practical training, assessment, and certification
        to help them move forward with confidence.
      </p>
    </div>

    <button
      type="button"
      onClick={() => setActiveHighlight(null)}
      aria-label="Close student success information"
    >
      ×
    </button>

  </div>
)}
{/* HIGHLIGHT INFORMATION PANEL */}

{activeHighlight === "partnerships" && (
  <div className="highlight-information-panel">

    <div className="highlight-information-icon">
      ♧
    </div>

    <div className="highlight-information-content">
      <span>OUR PARTNERSHIPS</span>

      <h3>Strong Partnerships</h3>

      <p>
        Building trusted academic relationships with
        institutions and education partners to create
        a stronger learning ecosystem.
      </p>
    </div>

    <button
      type="button"
      onClick={() => setActiveHighlight(null)}
      aria-label="Close partnership information"
    >
      ×
    </button>

  </div>
)}
{/* QUALITY INFORMATION PANEL */}

{activeHighlight === "quality" && (
  <div className="highlight-information-panel">

    <div className="highlight-information-icon">
      ✦
    </div>

    <div className="highlight-information-content">
      <span>QUALITY & CERTIFICATION</span>

      <h3>Quality & Certification</h3>

      <p>
        Focused on quality training, structured learning,
        and certification support to help create a
        reliable academic experience for students.
      </p>
    </div>

    <button
      type="button"
      onClick={() => setActiveHighlight(null)}
      aria-label="Close quality and certification information"
    >
      ×
    </button>

  </div>
)}


          {/* NETWORK INFO */}
          <div className="our-presence-info">

            <span className="our-presence-info-label">
              OUR NETWORK
            </span>

            <h3>
              A Growing Academic Network
            </h3>

            <div className="presence-stats">

  <div>
    <strong>{counts.states}+</strong>
    <span>States</span>
  </div>

  <div>
    <strong>{counts.institutes}+</strong>
    <span>Institutes</span>
  </div>

  <div>
    <strong>{counts.students}K+</strong>
    <span>Students</span>
  </div>

  <div>
    <strong>{counts.cities}+</strong>
    <span>Cities</span>
  </div>

</div>

            <button
  type="button"
  onClick={() => {
    document
      .getElementById("network-overview")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }}
>
  Explore Our Network
  <span>→</span>
</button>

          
          </div>

        </div>

      </div>
      <div id="network-overview" className="network-overview">



  <div className="network-overview-heading">

    <span>NETWORK OVERVIEW</span>



    <h3>Our Growing Network</h3>



    <p>

      Explore our expanding academic network across India.

    </p>

  </div>



  <div className="network-overview-grid">

  <div className="network-overview-card">

  <div className="network-card-icon">
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="9"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  </div>

  <strong>{counts.states}+</strong>
  <span>States Covered</span>

</div>

  <div className="network-overview-card">
    <div className="network-card-icon">◉</div>
    <strong>{counts.cities}+</strong>
    <span>Cities Reached</span>
  </div>

  <div className="network-overview-card">
    <div className="network-card-icon">▦</div>
    <strong>{counts.institutes}+</strong>
    <span>Partner Institutes</span>
  </div>

  <div className="network-overview-card">
    <div className="network-card-icon">♙</div>
    <strong>{counts.students}K+</strong>
    <span>Students Connected</span>
  </div>

</div>



</div>
{/* CONNECT WITH CERTIPORT */}

<div className="connect-certipo​​rt">

  <div className="connect-certipo​​rt-heading">
    <span>CONNECT WITH CERTIPORT</span>

    <p>
      Our offices and branch network across India,
      working together to deliver quality education
      and exceptional support.
    </p>
  </div>


  {/* MAIN OFFICES */}

  <div className="main-office-grid">

    <div className="office-card">
      <div className="office-icon">⌂</div>

      <div>
        <span>REGISTERED OFFICE</span>
        <h3>Bangalore</h3>

        <p>
          No.5, 2nd Floor, Nehru Main Road,
          Near Empire Restaurant, Kammanahalli,
          Bangalore, Karnataka-560084
        </p>
      </div>
    </div>


    <div className="office-card">
      <div className="office-icon">▦</div>

      <div>
        <span>CORPORATE OFFICE</span>
        <h3>Mumbai</h3>

        <p>
          Plot No. 84, Opp Sitaladevi Mandir,
          Kranti Chowk, Jogeshwari East,
          Mumbai, Maharashtra-400060
        </p>
      </div>
    </div>


    <div className="office-card">
      <div className="office-icon">⌖</div>

      <div>
        <span>SALES OFFICE</span>
        <h3>NOIDA</h3>

        <p>
          Near Adobe Company, Stadium Road
          Sector 22, Gautam Buddh Nagar,
          Uttar Pradesh-201301
        </p>
      </div>
    </div>

  </div>


  {/* BRANCH OFFICES */}

  <div className="branch-section">

    <div className="branch-section-heading">
      <span>BRANCH OFFICES</span>
    </div>


    <div className="branch-grid">

      <div className="branch-card">
        <h3>Uttarakhand</h3>
        <strong>Pithoragarh</strong>
        <b>Commerce Coaching Classes</b>
        <p>
          Cinema Line, Near Tent House
          Pithoragarh, Uttarakhand-400060
        </p>
      </div>


      <div className="branch-card">
        <h3>Uttar Pradesh</h3>
        <strong>Kanpur</strong>
        <b>E-Basics</b>
        <p>
          77/4, First Floor, Block 8 Nandlal
          Chauraha, Govind Nagar Kanpur,
          Uttar Pradesh-208006
        </p>
      </div>


      <div className="branch-card">
        <h3>Madhya Pradesh</h3>
        <strong>Indore</strong>
        <b>Rajpoot Computer Institute</b>
        <p>
          4-B Office Road, Nandbag Colony,
          Indore, Madhya Pradesh-452006
        </p>
      </div>


      <div className="branch-card">
        <h3>Rajasthan</h3>
        <strong>Ajmer</strong>
        <b>MCIT</b>
        <p>
          358/4, First Police Line Circle
          Todermal Lane, Civil Line,
          Near Narayan Nikunj, Ajmer-305001
        </p>
      </div>


      <div className="branch-card">
        <h3>Haryana</h3>
        <strong>Mahendragarh</strong>
        <b>Aakash Computer Education</b>
        <p>
          Railway Station Road, Narnaul
          Mahendragarh, Haryana-123001
        </p>
      </div>


      <div className="branch-card">
        <h3>Andhra Pradesh</h3>
        <strong>Guntur</strong>
        <b>Infomax Computer & Technical Education</b>
        <p>
          Plot No.5-37-197, 1st Floor,
          4/9 Brodipet, Guntur,
          Andhra Pradesh-522002
        </p>
      </div>


      <div className="branch-card">
        <h3>Jharkhand</h3>
        <strong>Ranchi</strong>
        <b>ByTech Academy</b>
        <p>
          Opp Machli Park, Kadru Diversion Road
          Doranda, Ranchi,
          Jharkhand-834002
        </p>
      </div>


      <div className="branch-card">
        <h3>Uttar Pradesh</h3>
        <strong>Deoria</strong>
        <b>Smart Institute of Computer Learning</b>
        <p>
          Civil Lines Road, Renuka Complex
          Deoria, Uttar Pradesh-274001
        </p>
      </div>


      <div className="branch-card">
        <h3>West Bengal</h3>
        <strong>Darjeeling</strong>
        <b>DIIT Darjeeling</b>
        <p>
          Dr. Yen Singh Road Near Yuma
          Nursing Home Darjeeling,
          West Bengal-734101
        </p>
      </div>


      <div className="branch-card">
        <h3>Uttar Pradesh</h3>
        <strong>Mirzapur</strong>
        <b>Vindhya Institute of Computer Education</b>
        <p>
          Nr. Dubey Building, Narghat
          Trimohani Road Mirzapur,
          Uttar Pradesh-231001
        </p>
      </div>


      <div className="branch-card">
        <h3>Uttar Pradesh</h3>
        <strong>Kushinagar</strong>
        <b>IPT Computer Education</b>
        <p>
          NH-28, Nr Baghauch Mod,
          Fazilnagar, Kushinagar,
          Uttar Pradesh-274401
        </p>
      </div>


      <div className="branch-card">
        <h3>Uttar Pradesh</h3>
        <strong>Unnao</strong>
        <b>Future Net Computer Institute</b>
        <p>
          68, Station Road, Opposite Sevayojan
          Karyalay, Jagganath Ganj,
          Station Lines, Unnao,
          Uttar Pradesh-209801
        </p>
      </div>


      <div className="branch-card">
        <h3>Madhya Pradesh</h3>
        <strong>Gwalior</strong>
        <b>Institute of Computer Education</b>
        <p>
          Ayan Complex, Naya Bazaar,
          Ward No. 46, Gwalior,
          Madhya Pradesh-474009
        </p>
      </div>


      <div className="branch-card">
        <h3>West Bengal</h3>
        <strong>Kolkata</strong>
        <b>AIITA Computer Training Centre</b>
        <p>
          Sammilani Club, Prithibi,
          13/4 (6B), Sahapur Main Road
          Landmark, Kolkata,
          West Bengal-700038
        </p>
      </div>


      <div className="branch-card">
        <h3>Uttar Pradesh</h3>
        <strong>Jaunpur</strong>
        <b>UnSkills Computer Education</b>
        <p>
          2nd Floor, Near Primary School,
          Ranipur, Road, Mariahu,
          Uttar Pradesh-222161
        </p>
      </div>

    </div>

  </div>


  {/* PR & COMMUNICATION */}

  <div className="pr-communication">

    <div>
      <span>FOR PR & COMMUNICATION</span>

      <p>
        For enquiries, collaborations and
        communication, connect with us.
      </p>
    </div>

    <div className="pr-contact">
      <strong>Phone</strong>
      <span>09818447820</span>

      <strong>Mail ID</strong>
      <span>marketing@certiportacademy.com</span>
    </div>

  </div>

</div>

    </section>
    
  );
}

export default OurPresence;