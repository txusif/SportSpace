import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header
      className={`z-10 py-5 max-w-7xl black w-full border-b border-input mx-auto px-8`}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
