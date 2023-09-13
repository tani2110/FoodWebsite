import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="container">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            {/* <svg className="bi" width="30" height="24"><use xlink: href="#bootstrap"></use></svg> */}
          </Link>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          {/* <li className="ms-3"><Link className="text-body-secondary" href="/"><svg className="bi" width="24" height="24"><use xlink: href="#twitter"></use></svg></Link></li>
                <li className="ms-3"><Link className="text-body-secondary" href="/"><svg className="bi" width="24" height="24"><use xlink: href="#instagram"></use></svg></Link></li>
                <li className="ms-3"><Link className="text-body-secondary" href="/"><svg className="bi" width="24" height="24"><use xlink: href="#facebook"></use></svg></Link></li> */}
        </ul>
      </div>
    </div>
  );
}
