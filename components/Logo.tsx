import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-primary text-xl">
      <h1 className="scroll-m-20 text-2xl md:text-3xl lg:text-4xl font-black uppercase text-center tracking-tighter leading-none space-x-0.5">
        <span>Sport</span>
        <span className="text-white bg-primary pl-0.5 pr-1">Space</span>
      </h1>
    </Link>
  );
};

export default Logo;
