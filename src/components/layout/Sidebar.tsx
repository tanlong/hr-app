import { Fragment } from "react";
import {
    ArrowCircleLeft2,
    Briefcase,
    CalendarEdit,
    ClipboardText,
    CloseSquare,
    DocumentText,
    FingerScan,
    MedalStar,
    Personalcard,
    PresentionChart,
    SecurityUser,
    UserEdit,
} from "iconsax-react";
import { Route, Routes } from "react-router-dom";
import { Emloyees } from "../../pages/Emloyees";
export const Sidebar = () => {
    return (
        <Fragment>
            {/* Sidebar */}
            <ul
                className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
                {/* Sidebar - Brand */}
                <a
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    href="#"
                >
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">HR Admin</div>
                </a>
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" href="#">
                        <PresentionChart
                            size="20"
                            color="white"
                            variant="Bulk"
                            style={{ marginRight: "8" }}
                        />
                        <span>Thống kê</span>
                    </a>
                </li>
                {/* Heading */}
                <div className="sidebar-heading heading-main">
                    Quản lý nhân sự
                </div>
                <li className="nav-item">
                    <Routes>
                        <Route path="employees" element={<Emloyees />} />
                    </Routes>
                    <a className="nav-link" href="#">
                        <Personalcard
                            size="20"
                            color="white"
                            variant="Bulk"
                            style={{ marginRight: "8" }}
                        />
                        <span>Danh sách nhân sự</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <FingerScan
                            size="20"
                            color="white"
                            variant="Bulk"
                            style={{ marginRight: "8" }}
                        />
                        <span>Chấm công</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <DocumentText
                            size="20"
                            color="white"
                            variant="Bulk"
                            style={{ marginRight: "8" }}
                        />
                        <span>QL Hợp đồng lao động</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <Briefcase
                            size="20"
                            color="white"
                            variant="Bulk"
                            style={{ marginRight: "8" }}
                        />
                        <span>QL Đào tạo và phát triển</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <SecurityUser
                            size="20"
                            color="white"
                            variant="Bulk"
                            style={{ marginRight: "8" }}
                        />
                        <span>Quản lý bảo hiểm</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <ClipboardText
                            size="20"
                            color="white"
                            variant="Bulk"
                            style={{ marginRight: "8" }}
                        />
                        <span>Quản lý thử việc</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <UserEdit
                            size="20"
                            color="white"
                            variant="Bulk"
                            style={{ marginRight: "8" }}
                        />
                        <span>Quản lý tuyển dụng</span>
                    </a>
                </li>
                <div className="sidebar-heading heading-main">
                    Chế độ phúc lợi
                </div>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <MedalStar
                            size="20"
                            color="white"
                            variant="Bulk"
                            style={{ marginRight: "8" }}
                        />
                        <span>Khen thưởng</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <CloseSquare
                            size="20"
                            color="white"
                            variant="Bulk"
                            style={{ marginRight: "8" }}
                        />
                        <span>Kỷ luật</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <CalendarEdit
                            size="20"
                            color="white"
                            variant="Bulk"
                            style={{ marginRight: "8" }}
                        />
                        <span>Nghỉ phép</span>
                    </a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline mb-3">
                    <button id="sidebarToggle">
                        <ArrowCircleLeft2
                            size="32"
                            color="white"
                            variant="Bulk"
                        />
                    </button>
                </div>
            </ul>
            {/* End of Sidebar */}
        </Fragment>
    );
};
