import MainNavigation from "./MainNavigation";

const  RootLayout = ({ children }) => {
    return (
        <div className="content">
            <MainNavigation />
            {children}
        </div>
    );
}
export default RootLayout;