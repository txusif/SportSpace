import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header
      className={`sticky top-0 z-20 py-5 bg-background max-w-7xl w-full border-b border-input mx-auto px-8`}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
