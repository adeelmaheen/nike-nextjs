
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import blackmen from "../../public/assests/blackmen.png"

function AnnouncementBar() {
  return (
    
    <div className='w-full bg-gray-100 text-black flex justify-between items-center p-2 sm:h-[40px] md:h-[30px] lg:h-[38px] xl:h-[48px] 2xl:h-[50px]'>
      {/* Left side */}
      <div className='flex items-center gap-2 pl-4'>
      <Image src={blackmen} alt='blackmen'/>
        
        
      </div>

      {/* Right side */}
      <div className='flex items-end gap-2'>
      <div className="hidden md:flex gap-4 pr-4">
          <Link href="/find-store" className="hover:underline">
            Find a Store
          </Link>
          <span>|</span>
          <Link href="/contact" className="hover:underline">
            Help
          </Link>
          <span>|</span>
          <Link href="/about" className="hover:underline">
            Join Us
          </Link>
          <span>|</span>
          <Link href="/signup" className="hover:underline">
            Sign In
          </Link>
        </div>
    
       
      </div>
    </div>
  );
}

export default AnnouncementBar;