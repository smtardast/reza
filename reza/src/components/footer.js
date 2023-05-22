function Footer() {
  return (
    <div className="row sticky-bottom p-1 pt-5 pb-5">
      <div className="col-4 footer1 text-start">
        <div className="row">
          <a href="#top" className="footert">
            Reza Tardast
          </a>
        </div>
      </div>
      <div className="col-4 footer2 text-center">
        <div className="row">
          <a href="#top">
            <i className="bi bi-arrow-up"></i>
          </a>
          {/*  arrow alternatives       
<i class="bi bi-chevron-up"></i>
<i class="bi bi-chevron-compact-up"></i>
 */}{" "}
        </div>
      </div>
      <div className="col-4 footer3 text-end">
        <div className="row">
          <ul className="list-inline ">
            <li className="list-inline-item pl-5 pr-5">
              <a href="http://" className="footersocial footersocial1">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item pl-5 pr-5">
              <a href="http://" className="footersocial footersocial1">
                <i className="bi bi-envelope"></i>
              </a>
            </li>
            <li className="list-inline-item pl-5 pr-5">
              <a href="http://" className="footersocial footersocial1">
                <img src="" alt=""></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
