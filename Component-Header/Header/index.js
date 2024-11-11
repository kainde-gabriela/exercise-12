import Generations from "./Generations";
import Logo from "./Logo";

const Header = ({ headerText }) => {
    return (
        <>
            <h1>{headerText}</h1>
            <Logo logoText = "Logo props" />
            <Generations genText = "Generations props" />
        </>
    );
};


export default Header;