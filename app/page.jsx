"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* START HOME */}
      <section id="home" className="home_bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="home_content">
                  <h1>Purdue is the best choice for everyone!</h1>
                  <p>It is a long established fact that reader will be distracted readable content of a page when looking at its layout.</p>
                </div>
                <div className="home_btn">
                  <Link href="/courses" className="cta">
                    <span>Explore Courses</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="home_me_img">
                  <img src="/assets/images/all-img/home-image.png" className="img-fluid" alt="Hero illustration" />
                  <div className="home_ps">
                    <img src="/assets/images/icon/user2.svg" alt="" />
                    <h2>7500+</h2>
                    <span>Active student</span>
                  </div>
                  <div className="home_ps2">
                    <img src="/assets/images/icon/file2.svg" alt="" />
                    <h2>4500+</h2>
                    <span>Online Course</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END HOME */}

      {/* START COUNTER */}
      <section className="count_area counter_feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter count_one">
                <span className="ti-folder sc_one"></span>
                <h2 className="counter-num">134</h2>
                <p>Our Online Course</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter count_two">
                <span className="ti-medall-alt sc_two"></span>
                <h2 className="counter-num">299</h2>
                <p>Academic Programs</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter count_three">
                <span className="ti-id-badge sc_three"></span>
                <h2 className="counter-num">684</h2>
                <p>Certified Students</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single-counter count_four">
                <span className="ti-user sc_four"></span>
                <h2 className="counter-num">941</h2>
                <p>Enrolled Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END COUNTER */}

      {/* START ABOUT US HOME ONE */}
      <section className="ab_one section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_img">
                <img src="/assets/images/all-img/about1.png" className="img-fluid" alt="About Purdue" />
                <div className="wc_year">
                  <h3><span>6k+</span> <br />Happy Clients</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="ab_content">
                <h2>Create, Learn &amp; grow your skills from anywhere.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply.</p>
              </div>
              <div className="abmv">
                <i className="fa-regular fa-lightbulb"></i>
                <h4>Discover the joy of lifelong learning</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div>
              <div className="abmv">
                <i className="fa-solid fa-satellite-dish"></i>
                <h4>Build a real community</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div>
              <div className="cta_two">
                <Link href="/about" className="cta">
                  <span>Discover More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END ABOUT US HOME ONE */}

      {/* START TOP PROMO FEATURES */}
      <section className="tp_feature section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>Start Learning</h4>
            <h1>Build Better skills, faster From Today.</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp">
                <h3>Award Winning</h3>
                <i className="fa-solid fa-medal"></i>
                <p>Lorem ipsum dolor sit amet consectetur notted adipisicing elit.</p>
                <Link href="/about" className="cta">
                  <span>Learn More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp st_one">
                <h3>Quality Education</h3>
                <i className="fa-solid fa-book-journal-whills"></i>
                <p>Lorem ipsum dolor sit amet consectetur notted adipisicing elit.</p>
                <Link href="/about" className="cta">
                  <span>Learn More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp st_two">
                <h3>Expert Teachers</h3>
                <i className="fa-solid fa-user-graduate"></i>
                <p>Lorem ipsum dolor sit amet consectetur notted adipisicing elit.</p>
                <Link href="/faculty" className="cta">
                  <span>Learn More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tp st_three">
                <h3>Lifetime Support</h3>
                <i className="fa-solid fa-headset"></i>
                <p>Lorem ipsum dolor sit amet consectetur notted adipisicing elit.</p>
                <Link href="/contact" className="cta">
                  <span>Learn More</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TOP PROMO FEATURES */}

      {/* START TOPIC / CATEGORIES */}
      <section className="topic_content_p2 section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Start Learning</h4>
            <h1>Popular Categories From Today.</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_one">
                <img src="/assets/images/icon/ct1.svg" alt="" />
                <h2><Link href="/courses">IT &amp; Software</Link></h2>
                <span>71 Courses</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_two">
                <img src="/assets/images/icon/ct2.svg" alt="" />
                <h2><Link href="/courses">Digital Program</Link></h2>
                <span>59 Courses</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_three">
                <img src="/assets/images/icon/ct3.svg" alt="" />
                <h2><Link href="/courses">Finance Marketing</Link></h2>
                <span>68 Courses</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_four">
                <img src="/assets/images/icon/ct4.svg" alt="" />
                <h2><Link href="/courses">Modern Physics</Link></h2>
                <span>83 Courses</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_five">
                <img src="/assets/images/icon/ct5.svg" alt="" />
                <h2><Link href="/courses">Music Production</Link></h2>
                <span>37 Courses</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_six">
                <img src="/assets/images/icon/ct6.svg" alt="" />
                <h2><Link href="/courses">Website Design</Link></h2>
                <span>51 Courses</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_seven">
                <img src="/assets/images/icon/ct6.svg" alt="" />
                <h2><Link href="/courses">UI/UX Design</Link></h2>
                <span>38 Courses</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="single_tca sc_eight">
                <img src="/assets/images/icon/ct6.svg" alt="" />
                <h2><Link href="/courses">Health &amp; Fitness</Link></h2>
                <span>43 Courses</span>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div className="cc_btn">
                <Link href="/courses" className="cta">
                  <span>View All Categories</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TOPIC */}

      {/* START WHY CHOOSE US */}
      <section className="marketing_content_area section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Why Choose Purdue</h4>
            <h1>Find the best features of Purdue.</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-school"></i>
                  <h2><Link href="/about">Learn More <br />Anywhere</Link></h2>
                </div>
                <p>The results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some.</p>
                <Link href="/about">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-person-chalkboard"></i>
                  <h2><Link href="/faculty">Expert <br />Instructor</Link></h2>
                </div>
                <p>The results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some.</p>
                <Link href="/faculty">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-people-group"></i>
                  <h2><Link href="/about">Team <br />Management</Link></h2>
                </div>
                <p>The results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some.</p>
                <Link href="/about">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-book"></i>
                  <h2><Link href="/courses">Course <br />Planning</Link></h2>
                </div>
                <p>The results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some.</p>
                <Link href="/courses">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-chalkboard-user"></i>
                  <h2><Link href="/about">Teacher <br />Monitoring</Link></h2>
                </div>
                <p>The results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some.</p>
                <Link href="/about">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="single_feature_one">
                <div className="sf_top">
                  <i className="fa-solid fa-ticket"></i>
                  <h2><Link href="/contact">24/7 Strong <br />Support</Link></h2>
                </div>
                <p>The results with a friend who couldn’t believe it was written by an AI. is worth every Yaley and then some.</p>
                <Link href="/contact">Read More <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END WHY CHOOSE US */}

      {/* START TOP COURSES */}
      <div className="best-course section-padding">
        <div className="container">
          <div className="section-title">
            <h4>Popular Courses</h4>
            <h1>Choose Our Top Courses</h1>
          </div>
          <div className="course-list row">
            {/* Course 1 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="course-item d-flex">
                <div className="course-inner">
                  <div className="course-img">
                    <img src="/assets/images/course/c1.png" alt="course" />
                    <div className="course-price">$150</div>
                  </div>
                  <div className="course-content">
                    <div className="ccategory"><a href="#">Data Science</a></div>
                    <h3><Link href="/courses">Professional Ceramic Moulding for Beginners</Link></h3>
                    <div className="crating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <span>5.0 / 28 Rating</span>
                    </div>
                    <div className="cmeta">
                      <span>
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3.75h11.875a.625.625 0 01.625.625v9.375"/></svg>
                        25 Lessons
                      </span>
                      <span className="cmtime">
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.625V10h4.375"/><path stroke="#2c7aff" strokeMiterlimit="10" strokeWidth="1.5" d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652"/></svg>
                        8 Hours
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover align-self-center">
                  <div className="chover_content">
                    <div className="ccategory"><a href="#">Data Science</a></div>
                    <h3><Link href="/courses">Professional Ceramic Moulding for Beginners</Link></h3>
                    <div className="hcourse-price">$150.00</div>
                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.</p>
                    <div className="hcmeta">
                      <span>
                        <img src="/assets/images/all-img/avator.png" alt="img" />
                        <a href="#">Theme Ocean</a>
                      </span>
                      <span><i className="fa-solid fa-star"></i> 5.0 (2k)</span>
                    </div>
                    <div className="text-center">
                      <Link href="/registration" className="cta">
                        <span>Enroll Now</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="course-item d-flex">
                <div className="course-inner">
                  <div className="course-img">
                    <img src="/assets/images/course/c2.png" alt="course" />
                    <div className="course-price">$120</div>
                  </div>
                  <div className="course-content">
                    <div className="ccategory"><a href="#">Management</a></div>
                    <h3><Link href="/courses">Ultimate Photoshop Training: From Beginner</Link></h3>
                    <div className="crating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <span>5.0 / 28 Rating</span>
                    </div>
                    <div className="cmeta">
                      <span>
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3.75h11.875a.625.625 0 01.625.625v9.375"/></svg>
                        25 Lessons
                      </span>
                      <span className="cmtime">
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.625V10h4.375"/><path stroke="#2c7aff" strokeMiterlimit="10" strokeWidth="1.5" d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652"/></svg>
                        8 Hours
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover align-self-center">
                  <div className="chover_content">
                    <div className="ccategory"><a href="#">Management</a></div>
                    <h3><Link href="/courses">Ultimate Photoshop Training: From Beginner</Link></h3>
                    <div className="hcourse-price">$120.00</div>
                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.</p>
                    <div className="hcmeta">
                      <span>
                        <img src="/assets/images/all-img/avator.png" alt="img" />
                        <a href="#">Theme Ocean</a>
                      </span>
                      <span><i className="fa-solid fa-star"></i> 5.0 (2k)</span>
                    </div>
                    <div className="text-center">
                      <Link href="/registration" className="cta">
                        <span>Enroll Now</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="course-item d-flex">
                <div className="course-inner">
                  <div className="course-img">
                    <img src="/assets/images/course/c3.png" alt="course" />
                    <div className="course-price">$170</div>
                  </div>
                  <div className="course-content">
                    <div className="ccategory"><a href="#">Graphics</a></div>
                    <h3><Link href="/courses">Basic Fundamentals of Interior &amp; Graphics Design</Link></h3>
                    <div className="crating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <span>5.0 / 28 Rating</span>
                    </div>
                    <div className="cmeta">
                      <span>
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3.75h11.875a.625.625 0 01.625.625v9.375"/></svg>
                        25 Lessons
                      </span>
                      <span className="cmtime">
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.625V10h4.375"/><path stroke="#2c7aff" strokeMiterlimit="10" strokeWidth="1.5" d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652"/></svg>
                        8 Hours
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover align-self-center">
                  <div className="chover_content">
                    <div className="ccategory"><a href="#">Graphics</a></div>
                    <h3><Link href="/courses">Basic Fundamentals of Interior &amp; Graphics Design</Link></h3>
                    <div className="hcourse-price">$170.00</div>
                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.</p>
                    <div className="hcmeta">
                      <span>
                        <img src="/assets/images/all-img/avator.png" alt="img" />
                        <a href="#">Theme Ocean</a>
                      </span>
                      <span><i className="fa-solid fa-star"></i> 5.0 (2k)</span>
                    </div>
                    <div className="text-center">
                      <Link href="/registration" className="cta">
                        <span>Enroll Now</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course 4 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-12">
              <div className="course-item d-flex">
                <div className="course-inner">
                  <div className="course-img">
                    <img src="/assets/images/course/c4.png" alt="course" />
                    <div className="course-price">$140</div>
                  </div>
                  <div className="course-content">
                    <div className="ccategory"><a href="#">Development</a></div>
                    <h3><Link href="/courses">WordPress for Beginners – Master WordPress</Link></h3>
                    <div className="crating">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <span>5.0 / 28 Rating</span>
                    </div>
                    <div className="cmeta">
                      <span>
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.376 6.25H3.126a.625.625 0 00-.626.625v8.75c0 .345.28.625.625.625h11.25c.346 0 .626-.28.626-.625v-8.75a.625.625 0 00-.625-.625z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3.75h11.875a.625.625 0 01.625.625v9.375"/></svg>
                        25 Lessons
                      </span>
                      <span className="cmtime">
                        <svg fill="none" viewBox="0 0 20 20"><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 5.625V10h4.375"/><path stroke="#2c7aff" strokeMiterlimit="10" strokeWidth="1.5" d="M10 16.875a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z"/><path stroke="#2c7aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.303 2.045l2.652 2.652M2.045 4.697l2.652-2.652"/></svg>
                        8 Hours
                      </span>
                    </div>
                  </div>
                </div>
                <div className="course-hover align-self-center">
                  <div className="chover_content">
                    <div className="ccategory"><a href="#">Development</a></div>
                    <h3><Link href="/courses">WordPress for Beginners – Master WordPress</Link></h3>
                    <div className="hcourse-price">$140.00</div>
                    <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor.</p>
                    <div className="hcmeta">
                      <span>
                        <img src="/assets/images/all-img/avator.png" alt="img" />
                        <a href="#">Theme Ocean</a>
                      </span>
                      <span><i className="fa-solid fa-star"></i> 5.0 (2k)</span>
                    </div>
                    <div className="text-center">
                      <Link href="/registration" className="cta">
                        <span>Enroll Now</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END TOP COURSES */}

      {/* START VIDEO */}
      <section className="vid_area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="video-area">
                <a href="https://www.youtube.com/watch?v=RXv_uIN6e-Y" target="_blank" rel="noreferrer" className="video-button">
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="cp_content">
                <h4>Best Online Learning Platform</h4>
                <h2>One Platform &amp; Many Courses For You</h2>
                <p>From practical skills to advanced certifications, build your professional career with expert mentorship and recognized qualifications.</p>
                <ul>
                  <li><span className="ti-check"></span> 9/10 Average Satisfaction Rate</li>
                  <li><span className="ti-check"></span> 96% Completion Rate</li>
                  <li><span className="ti-check"></span> Friendly Environment &amp; Expert Teachers</li>
                </ul>
              </div>
              <div className="cp_btn">
                <Link href="/courses" className="cta">
                  <span>Explore Our Courses</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END VIDEO */}

      {/* START TEAM */}
      <section className="team_member section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>Our Instructors</h4>
            <h1>Our Expert Instructors</h1>
          </div>
          <div className="row text-center">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="our-team">
                <div className="team-content">
                  <h3 className="title">Stephen Cronin</h3>
                  <span className="post">Designer</span>
                  <div className="sth_det2">
                    <span className="ti-file"> <u>5 Courses</u></span>
                    <span className="ti-user"> <u>12 Students</u></span>
                  </div>
                </div>
                <div className="team_img">
                  <img src="/assets/images/team/1.jpg" alt="Stephen Cronin" />
                  <ul className="social">
                    <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="our-team">
                <div className="team_img">
                  <img src="/assets/images/team/2.jpg" alt="Rachel Park" />
                  <ul className="social">
                    <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Rachel Park</h3>
                  <span className="post">Developer</span>
                  <div className="sth_det2">
                    <span className="ti-file"> <u>19 Courses</u></span>
                    <span className="ti-user"> <u>41 Students</u></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="our-team">
                <div className="team-content">
                  <h3 className="title">Dan Billson</h3>
                  <span className="post">Marketer</span>
                  <div className="sth_det2">
                    <span className="ti-file"> <u>14 Courses</u></span>
                    <span className="ti-user"> <u>33 Students</u></span>
                  </div>
                </div>
                <div className="team_img">
                  <img src="/assets/images/team/3.jpg" alt="Dan Billson" />
                  <ul className="social">
                    <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="our-team">
                <div className="team_img">
                  <img src="/assets/images/team/4.jpg" alt="Gina Mellow" />
                  <ul className="social">
                    <li><a href="#" className="top_f_facebook"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" className="top_f_twitter"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#" className="top_f_instagram"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#" className="top_f_linkedin"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Gina Mellow</h3>
                  <span className="post">Co-founder</span>
                  <div className="sth_det2">
                    <span className="ti-file"> <u>11 Courses</u></span>
                    <span className="ti-user"> <u>27 Students</u></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TEAM */}

      {/* START TESTIMONIALS */}
      <section className="testi_home_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>Testimonials</h4>
            <h1>What Students Say About Purdue</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial shadow-sm p-4 bg-white rounded-3 h-100">
                <div className="testi_pic_title d-flex align-items-center mb-3">
                  <div className="pic me-3">
                    <img src="/assets/images/all-img/t1.png" alt="Student Avatar" className="rounded-circle" width="60" height="60" />
                  </div>
                  <div>
                    <h4 className="mb-0">Kallu Mastan</h4>
                    <small className="text-muted">Diploma in IT Graduate</small>
                  </div>
                </div>
                <p>The practical project assignments and mentorship helped me secure my first remote software developer role immediately after graduation.</p>
                <div className="text-warning mt-3">
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial shadow-sm p-4 bg-white rounded-3 h-100">
                <div className="testi_pic_title d-flex align-items-center mb-3">
                  <div className="pic me-3">
                    <img src="/assets/images/all-img/t2.png" alt="Student Avatar" className="rounded-circle" width="60" height="60" />
                  </div>
                  <div>
                    <h4 className="mb-0">Kader Kaku</h4>
                    <small className="text-muted">Graphic Design Student</small>
                  </div>
                </div>
                <p>Outstanding experience! The curriculum is 100% focused on modern market standards and freelancing portfolio creation.</p>
                <div className="text-warning mt-3">
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="testimonial shadow-sm p-4 bg-white rounded-3 h-100">
                <div className="testi_pic_title d-flex align-items-center mb-3">
                  <div className="pic me-3">
                    <img src="/assets/images/all-img/t3.png" alt="Student Avatar" className="rounded-circle" width="60" height="60" />
                  </div>
                  <div>
                    <h4 className="mb-0">Mittha Hasina</h4>
                    <small className="text-muted">English Language Master</small>
                  </div>
                </div>
                <p>Great value, supportive teachers, and state-of-the-art computer labs. I strongly recommend everyone to enroll here.</p>
                <div className="text-warning mt-3">
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star me-1"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END TESTIMONIALS */}

      {/* START BLOG */}
      <section id="blog" className="blog_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h4>News &amp; Updates</h4>
            <h1>Our Latest Articles</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="single_blog">
                <img src="/assets/images/blog/1.jpg" className="img-fluid" alt="Blog 1" />
                <div className="img_info">
                  <span>August 26, 2025 | <a href="#">Education</a></span>
                </div>
                <div className="content_box">
                  <h2><Link href="/news">Professional Mobile Painting and Sculpting</Link></h2>
                  <Link href="/news" className="cta">
                    <span>Read More</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="single_blog">
                <img src="/assets/images/blog/2.jpg" className="img-fluid" alt="Blog 2" />
                <div className="img_info">
                  <span>August 28, 2025 | <a href="#">Design</a></span>
                </div>
                <div className="content_box">
                  <h2><Link href="/news">Professional Ceramic Moulding for Beginner</Link></h2>
                  <Link href="/news" className="cta">
                    <span>Read More</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className="single_blog">
                <img src="/assets/images/blog/3.jpg" className="img-fluid" alt="Blog 3" />
                <div className="img_info">
                  <span>August 30, 2025 | <a href="#">Marketing</a></span>
                </div>
                <div className="content_box">
                  <h2><Link href="/news">Education Is About Creating Leaders For Tomorrow</Link></h2>
                  <Link href="/news" className="cta">
                    <span>Read More</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END BLOG */}

      {/* START INSTRUCTOR+FREE COURSE */}
      <section className="insfreecourse section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="single_ins">
                <div className="single_ins_content">
                  <h4>Build Your Career</h4>
                  <h1>Become an Instructor</h1>
                  <p>Learn at your own pace, move between multiple professional tracks.</p>
                  <Link href="/careers" className="cta">
                    <span>Apply Now</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
                <div className="single_ins_img">
                  <img src="/assets/images/all-img/become-ins.png" className="img-fluid" alt="Become an Instructor" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="single_ins">
                <div className="single_ins_content">
                  <h4>Build Your Career</h4>
                  <h1>Get Free Guidance</h1>
                  <p>Speak to our academic counselors for career pathways and scholarship options.</p>
                  <Link href="/contact" className="cta">
                    <span>Contact Us</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </Link>
                </div>
                <div className="single_ins_img">
                  <img src="/assets/images/all-img/free-course.png" className="img-fluid" alt="Free Courses" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END INSTRUCTOR+FREE COURSE */}

      {/* START NEWSLETTER */}
      <section className="newsletter_area section-padding">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="subs_form">
                <h3>Subscribe to our newsletter, we respect your privacy.</h3>
                <p>Stay informed about new admissions, batch schedules, workshops, and career opportunities.</p>
                <form action="#" className="home_subs" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" className="subscribe__input" placeholder="Enter your Email Address" />
                  <button type="submit" className="subscribe__btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END NEWSLETTER */}

      {/* FOOTER */}
      <Footer />
    </>
  );
}
