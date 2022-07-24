import './DefaultLayout.scss';
import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="layout-wraper">
            <div className="layout-sidebar">
                <Sidebar />
            </div>
            <div className="layout-content">
                <Header />
                <div className="container">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
