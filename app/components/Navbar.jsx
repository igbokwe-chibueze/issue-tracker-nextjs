'use client'

import Link from 'next/link'
import Logo from '../asserts/images/creativa-favicon-color.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { links } from '../data/links';

const Navbar = () => {
    const pathname = usePathname();

  return (
    <nav>
        <Link href={'/'} className='flex items-center space-x-4'>
            <Image src={Logo} alt='logo' width={50} quality={100} placeholder='blur'/>

            <h1>Issue Tracker</h1>
        </Link>

        <div className=" ml-10 space-x-4">
            {links.map((link) => (
                <Link 
                    key={link.href} 
                    href={link.href}
                    className={`${pathname === link.href ? 'text-blue-700' : ''}`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    </nav>
  )
}

export default Navbar