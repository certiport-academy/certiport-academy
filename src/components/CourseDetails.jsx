import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Layers,
  FileText,
  Clock3,
  ChevronRight,
  GraduationCap,
  BookOpen,
  IndianRupee,
  Award,
  Monitor,
  ShieldCheck,
  Target,
  Users,
  Trophy,
  Download,
  Share2,
  MessageCircle,
  Heart,
} from "lucide-react";

import { courses } from "../data/courses";

function CourseDetails() {

  const { courseId } = useParams();

  const [expandedModule, setExpandedModule] = useState(null);

  const course =
  courses.find((item) => item.id === courseId) || courses[0];

  return (
    <section className="course-details-page">

      <div className="course-details-container">

        {/* ================= BREADCRUMB ================= */}

        <div className="course-breadcrumb">
          <span>Home</span>
          <ChevronRight size={14} />
          <span>Courses</span>
          <ChevronRight size={14} />
          <strong>{course.name}</strong>
        </div>


        {/* ================= PAGE HEADER ================= */}

        <div className="course-modules-header">

  <div className="course-modules-header-content">

    <h2>Course Modules</h2>
    <p>
  Detailed syllabus and topics covered in course
</p>

<div className="course-module-education-icons">

  <span>
    <BookOpen size={18} />
  </span>

  <span>
    <Monitor size={18} />
  </span>

  <span>
    <GraduationCap size={18} />
  </span>

</div>


  </div>

  <div className="course-header-actions">

    <button className="course-action share">
      Share
    </button>

    <button className="course-action enquiry">
      Enquiry
    </button>

    <button className="course-action favourite">
      Add to Favourite
    </button>

  </div>

</div>


        {/* ================= COURSE STATS ================= */}

        <div className="course-stats-card">

          <div className="course-stat">

            <div className="course-stat-icon blue">
              <Layers size={22} />
            </div>

            <div>
              <span>Total Modules</span>
              <strong>{course.modules?.length || 0}</strong>
            </div>

          </div>


          <div className="course-stat">

            <div className="course-stat-icon green">
              <FileText size={22} />
            </div>

            <div>
              <span>Total Topics</span>
<strong>
  {course.modules?.reduce(
    (total, module) => total + (module.topics?.length || 0),
    0
  )}
</strong>
            </div>

          </div>


          <div className="course-stat">

            <div className="course-stat-icon orange">
              <Clock3 size={22} />
            </div>

            <div>
              <span>Duration</span>
              <strong>{course.duration}</strong>
            </div>

          </div>


          <div className="course-progress">

            <div className="course-progress-heading">
              <span>Course Progress</span>
              <small>1 of 6 completed</small>
            </div>

            <div className="course-progress-bar">
              <div className="course-progress-fill" />
            </div>

          </div>

        </div>


        {/* ================= MAIN CONTENT ================= */}

        <div className="course-details-layout">


          {/* ================= MODULES ================= */}

          <div className="course-modules">

            {course.modules?.map((module, index) => (

              <article
                className="course-module-card"
                key={index}
              >

                <div className="module-number">
                  <strong>
                    {String(index + 1).padStart(2, "0")}
                  </strong>

                  <span>MODULE</span>
                </div>


                <div className="module-icon">
                  {index === 0 && <Monitor size={22} />}
                  {index === 1 && <Layers size={22} />}
                  {index === 2 && <GlobeIcon />}
                  {index === 3 && <IndianRupee size={22} />}
                  {index === 4 && <FileText size={22} />}
                  {index === 5 && <GraduationCap size={22} />}
                </div>


                <div className="module-content">

                  <h3>
                    {module.name}
                  </h3>


                  {expandedModule === index ? (

  <div className="module-topics module-topics-expanded">

    {module.topics?.map((topic, topicIndex) => (

      <span key={topicIndex}>
        <i>✓</i>
        {topic}
      </span>

    ))}

  </div>

) : (

  <div className="module-topics">

    {module.topics?.slice(0, 4).map(
      (topic, topicIndex) => (

        <span key={topicIndex}>
          <i>✓</i>
          {topic}
        </span>

      )
    )}

    {module.topics?.length > 4 && (
      <span className="more-topics">
        +{module.topics.length - 4} more
      </span>
    )}

  </div>

)}

                </div>


                <button
  className="module-arrow"
  onClick={() =>
    setExpandedModule(
      expandedModule === index ? null : index
    )
  }
>
  <ChevronRight
    size={20}
    className={
      expandedModule === index
        ? "module-arrow-open"
        : ""
    }
  />
</button>

              </article>

            ))}

          </div>


          {/* ================= COURSE OVERVIEW ================= */}

          <aside className="course-overview-card">

            <div className="course-student-image">

              <img
                src={course.overviewImage || course.image}
                alt={`${course.name} Course Overview`}
            />

            </div>


            <div className="course-overview-content">

              <h2>
                <h2>
                {course.name} Course Overview
              </h2>
              </h2>


              <div className="overview-line" />


              <div className="overview-item">

                <div className="overview-icon blue">
                  <GraduationCap size={20} />
                </div>

                <div>
                  <small>Course Name</small>

                  <strong>
                    {course.name} – {course.fullName}
                  </strong>
                </div>

              </div>


              <div className="overview-item">

                <div className="overview-icon green">
                  <Clock3 size={20} />
                </div>

                <div>
                  <small>Duration</small>

                  <strong>
                    {course.duration}
                  </strong>
                </div>

              </div>


              <div className="overview-item">

                <div className="overview-icon orange">
                  <BookOpen size={20} />
                </div>

                <div>
                  <small>Eligibility</small>

                  <strong>
                    10th Pass / Equivalent
                  </strong>
                </div>

              </div>


              <div className="overview-item">

                <div className="overview-icon blue">
                  <IndianRupee size={20} />
                </div>

                <div>
                  <small>Fees</small>

                  <strong>
                    {course.fees}
                  </strong>
                </div>

              </div>


              <div className="overview-item">

                <div className="overview-icon green">
                  <Award size={20} />
                </div>

                <div>
                  <small>Certificate</small>

                  <strong>
                    Certiport Academy Certificate
                  </strong>
                </div>

              </div>


              <div className="overview-item">

                <div className="overview-icon blue">
                  <Monitor size={20} />
                </div>

                <div>
                  <small>Mode</small>

                  <strong>
                    Regular
                  </strong>
                </div>

              </div>


              <button className="download-brochure">
                <Download size={18} />
                Download Brochure
              </button>

            </div>

          </aside>

        </div>


        {/* ================= BENEFITS ================= */}

        <div className="course-benefits">

          <div className="benefit-item">

            <div className="benefit-icon blue">
              <ShieldCheck size={23} />
            </div>

            <div>
              <strong>Industry Relevant Syllabus</strong>
              <span>
                Updated and aligned with industry standards.
              </span>
            </div>

          </div>


          <div className="benefit-item">

            <div className="benefit-icon green">
              <Target size={23} />
            </div>

            <div>
              <strong>Practical Oriented Training</strong>
              <span>
                Learn by doing with real-world practical exercises.
              </span>
            </div>

          </div>


          <div className="benefit-item">

            <div className="benefit-icon blue">
              <Users size={23} />
            </div>

            <div>
              <strong>Experienced Trainers</strong>
              <span>
                Learn from skilled and experienced trainers.
              </span>
            </div>

          </div>


          <div className="benefit-item">

            <div className="benefit-icon orange">
              <Trophy size={23} />
            </div>

            <div>
              <strong>Placement Assistance</strong>
              <span>
                Better opportunities with career support.
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


/* Small globe icon without adding another package */

function GlobeIcon() {
  return (
    <span className="simple-globe-icon">
      ◎
    </span>
  );
}


export default CourseDetails;