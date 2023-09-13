import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="section-containter flex justify-between items-center my-5">
        <div>
        <Image
        src="/logo.svg"
        alt="Logo"
        width={100}
        height={47}
        className="object-contain"
      />
        </div>

        <div className="flex items-center gap-8">
            <p>Nav 1</p>
            <p>Nav 2</p>
            <p>Nav 3</p>
        </div>
      
    </nav>
  );
};

export default Navbar;
