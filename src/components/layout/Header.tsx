import { Personalcard } from 'iconsax-react'
import React, { Fragment } from 'react'

export const Header = () => {
    return (
        <Fragment>
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button
                    id="sidebarToggleTop"
                    className="btn btn-link d-md-none rounded-circle mr-3"
                >
                    <i className="fa fa-bars" />
                </button>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                    <div className="topbar-divider d-none d-sm-block" />
                    {/* Nav Item - User Information */}
                    <li className="nav-item dropdown no-arrow">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="userDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <Personalcard
                                size="24"
                                color="#FF8A65"
                                variant="Bulk"
                                style={{ marginRight: "8" }}
                            />
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                                Nguyễn Văn Anh
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* End of Topbar */}
        </Fragment>
    )
}
