import { useEffect, useState } from "react";
import "./LocatePartner.css";
import indiaLocations from "../data/indiaLocations";
const partnerData = [
  {
    name: "Certiport Academy Training Center",
    id: "CA-000125",
    state: "Uttar Pradesh",
    district: "Lucknow",
    city: "Lucknow",
    pincode: "226001",
    type: "Computer Institute",
    status: "Verified",
  },
  {
    name: "Certiport Academy Skill Center",
    id: "CA-000218",
    state: "Maharashtra",
    district: "Pune",
    city: "Pune",
    pincode: "411001",
    type: "Training Center",
    status: "Verified",
  },
  {
    name: "Certiport Academy Computer Institute",
    id: "CA-000342",
    state: "Rajasthan",
    district: "Jaipur",
    city: "Jaipur",
    pincode: "302001",
    type: "Computer Institute",
    status: "Verified",
  },
  {
    name: "Certiport Academy Digital Center",
    id: "CA-000467",
    state: "Madhya Pradesh",
    district: "Bhopal",
    city: "Bhopal",
    pincode: "462001",
    type: "Educational Institute",
    status: "Verified",
  },
];

function LocatePartner() {
    const [selectedPartner, setSelectedPartner] = useState(null);
const [searchTerm, setSearchTerm] = useState("");
const [selectedState, setSelectedState] = useState("");
const [selectedDistrict, setSelectedDistrict] = useState("");
const [selectedType, setSelectedType] = useState("");
const [sortBy, setSortBy] = useState("newest");
const [visibleCount, setVisibleCount] = useState(4);
    const filteredPartners = partnerData
  .filter((partner) => {
    const search = searchTerm.trim().toLowerCase();

    const matchesSearch =
  !search ||
  partner.name.toLowerCase().includes(search) ||
  partner.id.toLowerCase().includes(search) ||
  partner.state.toLowerCase().includes(search) ||
  partner.district.toLowerCase().includes(search) ||
  partner.city.toLowerCase().includes(search) ||
  partner.pincode.toLowerCase().includes(search);

    const matchesState =
      !selectedState || partner.state === selectedState;

    const matchesDistrict =
      !selectedDistrict || partner.district === selectedDistrict;

    const matchesType =
      !selectedType || partner.type === selectedType;

    return matchesSearch && matchesState && matchesDistrict && matchesType;
  })
  .sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "oldest") {
      return b.id.localeCompare(a.id);
    }

    return a.id.localeCompare(b.id);
  });
  useEffect(() => {
  setVisibleCount(4);
}, [searchTerm, selectedState, selectedDistrict, selectedType, sortBy]);
  return (
    <div className="locate-partner-page">

      {/* ================= HERO ================= */}

      <section className="partner-hero">

        <div className="partner-hero-content">

          <span className="partner-eyebrow">
            OUR PARTNERS
          </span>

          <h1>
            Locate a <span>Partner</span>
          </h1>

          <p>
            Find an Authorized Certiport Academy Institute
            Near You
          </p>

          <div className="partner-hero-features">

            <div className="partner-feature">
              <span className="partner-feature-icon">✓</span>
              <span>Verified<br />Partners</span>
            </div>

            <div className="partner-feature">
              <span className="partner-feature-icon">●</span>
              <span>Quality<br />Education</span>
            </div>

            <div className="partner-feature">
              <span className="partner-feature-icon">◆</span>
              <span>Pan India<br />Network</span>
            </div>

            <div className="partner-feature">
              <span className="partner-feature-icon">▮</span>
              <span>Building<br />Better Futures</span>
            </div>

          </div>

        </div>

        <div className="partner-hero-visual">

          <div className="partner-hero-circle"></div>

          <img
  src="/partner/partner-female.png"
  alt="Certiport Academy Partner"
  className="partner-hero-person"
/>

        </div>

      </section>
      {/* ================= PARTNER SEARCH ================= */}

<section className="partner-search-section">

  <div className="partner-search-card">

    {/* SEARCH ROW */}

    <div className="partner-search-row">

      <div className="partner-search-input">

        <span className="partner-search-icon">
          🔍
        </span>

        <input
  type="text"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  placeholder="Search Institute Name, Partner ID, City, District or Pincode..."
/>

      </div>

      <button
        type="button"
        className="partner-search-button"
      >
        Search
      </button>

      <button
  type="button"
  className="partner-reset-button"
  onClick={() => {
  setSearchTerm("");
  setSelectedState("");
  setSelectedDistrict("");
  setSelectedType("");
  setSortBy("newest");
  setVisibleCount(4);
}}
>
  ↻<span>Reset</span>
</button>

    </div>


    {/* FILTER ROW */}

    <div className="partner-filter-row">

      {/* STATE */}

      <div className="partner-filter-field">

        <label>Select State</label>

        <select
  value={selectedState}
  onChange={(e) => {
  setSelectedState(e.target.value);
  setSelectedDistrict("");
}}
>
          <option value="">All States</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Delhi">Delhi</option>
        </select>

      </div>


      {/* DISTRICT */}

      <div className="partner-filter-field">

  <label>Select District</label>

  <select
    value={selectedDistrict}
    onChange={(e) => setSelectedDistrict(e.target.value)}
    disabled={!selectedState}
  >
    <option value="">
      {selectedState ? "All Districts" : "Select State First"}
    </option>

    {(indiaLocations[selectedState] || []).map((district) => (
      <option key={district} value={district}>
        {district}
      </option>
    ))}
  </select>

</div>

      {/* INSTITUTE TYPE */}

      <div className="partner-filter-field">

        <label>Institute Type</label>

        <select
  value={selectedType}
  onChange={(e) => setSelectedType(e.target.value)}
>
          <option value="">All Types</option>
          <option value="Computer Institute">
            Computer Institute
          </option>
          <option value="Training Center">
            Training Center
          </option>
          <option value="Educational Institute">
            Educational Institute
          </option>
        </select>

      </div>


      {/* SORT */}

      <div className="partner-filter-field">

        <label>Sort By</label>

        <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="name">Institute Name</option>
        </select>

      </div>

    </div>

  </div>

</section>
{/* ================= PARTNER STATISTICS ================= */}

<section className="partner-stats-section">

  <div className="partner-stats-card">

    {/* REGISTERED PARTNERS */}

    <div className="partner-stat-item">

      <div className="partner-stat-icon">
        🏢
      </div>

      <div className="partner-stat-content">
        <strong>500+</strong>
        <span>Registered Partners</span>
      </div>

    </div>


    {/* ACTIVE TRAINING CENTERS */}

    <div className="partner-stat-item">

      <div className="partner-stat-icon">
        👥
      </div>

      <div className="partner-stat-content">
        <strong>350+</strong>
        <span>Active Training Centers</span>
      </div>

    </div>


    {/* STATES */}

    <div className="partner-stat-item">

      <div className="partner-stat-icon">
        📍
      </div>

      <div className="partner-stat-content">
        <strong>28</strong>
        <span>States &amp; UTs</span>
      </div>

    </div>


    {/* VERIFIED PARTNERS */}

    <div className="partner-stat-item">

      <div className="partner-stat-icon">
        ✓
      </div>

      <div className="partner-stat-content">
        <strong>100%</strong>
        <span>Verified Partners</span>
      </div>

    </div>


    {/* TAGLINE */}

    <div className="partner-stat-tagline">
      <strong>Education</strong>
      <span>Has No Boundaries</span>
    </div>

  </div>

</section>
{/* ================= PARTNER RESULTS ================= */}

<section className="partner-results-section">

  <div className="partner-results-header">

    <div>
      <span className="partner-results-eyebrow">
        AUTHORIZED NETWORK
      </span>

      <h2>
        Our <span>Partners</span>
      </h2>

      <p>
        Discover verified Certiport Academy institutes near you.
      </p>
    </div>

    <div className="partner-results-count">
  <strong>{filteredPartners.length}</strong>
  <span>
    {filteredPartners.length === 1 ? "Partner Found" : "Partners Found"}
  </span>
</div>

  </div>


  {/* ================= PARTNER GRID ================= */}

  <div className="partner-results-grid">

  {filteredPartners.length > 0 ? (

    filteredPartners.slice(0, visibleCount).map((partner) => (

      <article className="partner-card" key={partner.id}>

        <div className="partner-card-top">

          <div className="partner-card-logo">
            CA
          </div>

          <span className="partner-verified-badge">
            ✓ Verified
          </span>

        </div>

        <h3>
          {partner.name}
        </h3>

        <div className="partner-id">
          Partner ID: <strong>{partner.id}</strong>
        </div>

        <div className="partner-location">
          📍 {partner.city}, {partner.state}
        </div>

        <div className="partner-type">
          🏢 {partner.type}
        </div>

        <button
          type="button"
          className="partner-view-button"
          onClick={() =>
            setSelectedPartner({
              name: partner.name,
              id: partner.id,
              location: `${partner.city}, ${partner.state}`,
              type: partner.type,
              status: partner.status,
            })
          }
        >
          View Details →
        </button>

      </article>

    ))

  ) : (

    <div className="partner-no-results">

      <div className="partner-no-results-icon">
        🔍
      </div>

      <h3>No Partners Found</h3>

      <p>
        No authorized partner matches your selected search or filter criteria.
      </p>

      <button
        type="button"
        className="partner-no-results-button"
        onClick={() => {
          setSearchTerm("");
          setSelectedState("");
          setSelectedDistrict("");
          setSelectedType("");
          setVisibleCount(4);
        }}
      >
        Clear Filters
      </button>

    </div>

  )}

</div>


  {/* ================= LOAD MORE ================= */}

  {visibleCount < filteredPartners.length && (
  <div className="partner-results-more">

    <button
      type="button"
      className="partner-load-more-button"
      onClick={() => setVisibleCount((prev) => prev + 4)}
    >
      Load More Partners
      <span>↓</span>
    </button>

  </div>
)}

</section>
{/* ================= PARTNER DETAILS MODAL ================= */}

{selectedPartner && (
  <div
    className="partner-modal-overlay"
    onClick={() => setSelectedPartner(null)}
  >

    <div
      className="partner-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        type="button"
        className="partner-modal-close"
        onClick={() => setSelectedPartner(null)}
      >
        ×
      </button>

      <div className="partner-modal-header">

        <div className="partner-modal-logo">
          CA
        </div>

        <div>
          <span className="partner-modal-status">
            ✓ Verified Partner
          </span>

          <h2>{selectedPartner.name}</h2>

          <p>
            Partner ID: <strong>{selectedPartner.id}</strong>
          </p>
        </div>

      </div>


      <div className="partner-modal-details">

        <div className="partner-modal-item">
          <span>Institute Type</span>
          <strong>{selectedPartner.type}</strong>
        </div>

        <div className="partner-modal-item">
          <span>Location</span>
          <strong>{selectedPartner.location}</strong>
        </div>

        <div className="partner-modal-item">
          <span>Verification Status</span>
          <strong>{selectedPartner.status}</strong>
        </div>

        <div className="partner-modal-item">
          <span>Partner Status</span>
          <strong>Active</strong>
        </div>

      </div>


      <div className="partner-modal-footer">

        <span>
          ✓ Authorized Certiport Academy Partner
        </span>

        <button
          type="button"
          className="partner-modal-done"
          onClick={() => setSelectedPartner(null)}
        >
          Close
        </button>

      </div>

    </div>

  </div>
)}

    </div>
  );
}

export default LocatePartner;