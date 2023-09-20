import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex-center fixed w-full py-7 top-0 border-b-2 border-black-200 text-white z-50'>
      <div className='flex-between w-full mx-auto px-6 xs:px-8 sm:px-16 max-w-screen-2xl'>
        <Link href='/'>
          <Image
            src='/educode-logo.svg'
            alt='json logo'
            width={65}
            height={45}
          />
        </Link>

        <Image
          src='/hamburger-menu.svg'
          alt='Hamburger menu'
          width={30}
          height={30}
          className='block md:hidden'
        />

        <ul className='flex-center max-md:hidden gap-x-3 md:gap-x-10'>
          <li className='body-text text-gradient_blue-purple !font-bold'>
            <Link href='https://jsmastery.pro/next13' target='_blank'>
              Next.js 13 Course
            </Link>
          </li>
          <li className='body-text !font-normal'>
            <Link href='https://jsmastery.pro/masterclass' target='_blank'>
              Masterclass
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
