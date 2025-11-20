// src/app/components/Navbar.tsx
import Image from "next/image";

export default function Navbar() {
  return (
    <nav 
      className="w-full max-w-[1440px] mx-auto h-[93px] flex justify-between items-center px-[120px] py-6"
      style={{ background: '#04070F' }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/avenir-logo.png" 
          alt="Avenir AI" 
          width={120} 
          height={40}
        />
      </div>
      
      <div className="text-white">Menu</div>
    </nav>
  );
}