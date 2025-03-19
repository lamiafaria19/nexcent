import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">Nexcent</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Service</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Feature</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Product</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Testimonial</a></li>
          <li className="nav-item"><a className="nav-link" href="#">FAQ</a></li>
          <li className="nav-item"><a className="btn btn-success" href="#">Sign Up</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <header className="text-center py-5 bg-light">
    <div className="container">
      <h1>Lessons and insights from <span className="text-success">8 years</span></h1>
      <p>Where to grow your business as a photographer: site or social media?</p>
      <a className="btn btn-success" href="#">Register</a>
    </div>
  </header>
);

const Clients = () => (
  <section className="text-center py-5">
    <div className="container">
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="d-flex justify-content-center gap-3">
        <span>🔵</span> <span>⚫</span> <span>🟡</span> <span>🟠</span>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="container text-center py-5">
    <h2>Manage your entire community in a single system</h2>
    <p>Who is Nexcent suitable for?</p>
    <div className="row">
      <div className="col-md-4"><h4>Membership Organizations</h4></div>
      <div className="col-md-4"><h4>National Associations</h4></div>
      <div className="col-md-4"><h4>Clubs and Groups</h4></div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-dark text-white text-center py-4">
    <p>&copy; 2025 Nexcent Ltd. All rights reserved.</p>
  </footer>
);

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;