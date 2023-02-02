import Meta from "@/components/meta";
import Navbar from "./navbar";

const Layout = ({children}: any) => {
    return (
        <div>
            <Meta />
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
