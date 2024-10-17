
import Link from "next/link"

const Header =()=>{
    return(
        <main> <nav> 
        <ul className="flex justify-center gap-7
         py-6  text-2xl text-pink-950"><li><Link href="/">Home</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/contacts">Contacts</Link></li>
      </ul>
      </nav>
      
      </main>
    )
}
export default Header;
