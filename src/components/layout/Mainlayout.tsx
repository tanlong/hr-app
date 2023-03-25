import React, { Fragment } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const Mainlayout: React.FC<any> = ({ children }) => {
    return (
        <Fragment>
            <Sidebar />
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    <Header />
                    {children}
                </div>
                {/* End of Main Content */}
                {/* Footer */}
                <footer className="sticky-footer bg-white mt-3">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright © HR Admin 2023</span>
                        </div>
                    </div>
                </footer>
                {/* End of Footer */}
            </div>
            {/* End of Content Wrapper */}
        </Fragment>
    )
}
