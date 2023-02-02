import Navbar from "./navbar";

const Layout = ({children}: any) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
