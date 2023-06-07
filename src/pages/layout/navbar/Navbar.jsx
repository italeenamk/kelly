import './navbar.css';


const Navbar = () => {
  return(
      <>
          <section className="top-navbar-content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-3 col-sm-12">
                          <div className="top-navbar-logo-content">
                              <a href="">Kelly</a>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                          <div className="top-navbar-list-content">
                              <ul>
                                  <li><a href="">Home</a></li>
                                  <li><a href="">About</a></li>
                                  <li><a href="">Resume</a></li>
                                  <li><a href="">Services</a></li>
                                  <li><a href="">Portfolio</a></li>
                                  <li><a href="">Contact</a></li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-12">
                          <div className="top-navbar-icon-content">
                              <i className="fa-brands fa-twitter"></i>
                              <i className="fa-brands fa-facebook-f"></i>
                              <i className="fa-brands fa-instagram"></i>
                              <i className="fa-brands fa-linkedin-in"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Navbar;