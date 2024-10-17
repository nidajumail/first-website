import Link from "next/link"
const Footer= () => {
    return(

        <footer >
            <ul className=" gap-2 text-2xl font-bold flex justify-center py-10 px-4 bg-slate-300 ">
                <li >
                <Link href="/details">Contact Details</Link>
                </li>
              <div className="flex  gap-2"  >
                <img src="insta.jpg" alt="whatsapp" width="30" height="20"/>
                <img src="book.png" alt="whatsapp" width="30" height="20"/>
               
             <img src="whatsapp.png" alt="whatsapp" width="30" height="20"/>
             
             </div>
       </ul>
     
        </footer>
    )
}
export default Footer;
// className=" Hover:bg-blue-500