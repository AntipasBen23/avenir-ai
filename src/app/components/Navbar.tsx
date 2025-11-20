// src/app/components/Navbar.tsx

export default function Navbar() {
  return (
    <nav 
      className="w-full max-w-[1440px] mx-auto h-[93px] flex justify-between items-center px-[120px] py-6"
      style={{ background: '#04070F' }}
    >
      {/* Temporary content to see the navbar */}
      <div className="text-white">Logo</div>
      <div className="text-white">Menu</div>
    </nav>
  );
}