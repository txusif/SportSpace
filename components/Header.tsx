import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header
      className={`sticky top-0 z-20 py-5 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-7xl w-full border-b border-input mx-auto px-8`}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
