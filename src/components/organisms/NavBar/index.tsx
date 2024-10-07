const Navbar = () => {
  return (
    <nav className="flex px-6 py-4 border bg-black border-b-[#EFEFEF]">
      <div className="flex items-center">
        <div className="w-10">
          <img src="/src/assets/mediaThumbnail.jpeg" alt="Altura-NFT" />
        </div>

        <span className="ml-5 text-xl text-white font-medium font-serif">
          NFT-GENERATOR
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
