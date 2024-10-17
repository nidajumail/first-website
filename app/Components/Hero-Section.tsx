const Hero=()=>{
    return(
        <section>
            <div className="flex-1 font-extrabold lg:text-4xl text-pink-950">Hello,I'm Treasure of Beauty</div>
        <p className="font-lg lg:text-lg text-pink-800" >Welcome to Treasures of Beauty, your ultimate aesthetic parlor where elegance meets artistry. Our mission is to unveil the beauty within you through personalized treatments and exceptional care. From luxurious skincare and rejuvenating facials to expertly crafted makeup and transformative body treatments, we offer a serene escape tailored to your unique needs. Our skilled professionals are dedicated to enhancing your natural beauty. At Treasures of Beauty, we believe that beauty is not just a look but a feeling. Indulge in our services and experience the artistry of beauty today! </p>
        
            <div >
       <div className="flex justify-evenly">
       <img src="/hero.sec.jpg" alt="HERO"
        width={300}
        height={300}
        className="absolute-transform"/>
        <img src="girl.webp"alt="picture"  width={300}
        height={300}/>
        <img src="cosmetic.jpg"alt="picture"  width={300}
        height={300}/>
         <img src="photo.jpg"alt="picture"  width={300}
        height={300}/>
       </div >
       <div className="flex justify-evenly font-bold text-lg text-pink-950" >  
       <div>Radiant Glow</div>
      
       <div>Nourish, Revitalize, Protect.</div>
       <div>Beauty Enhancement</div>
       <div>
       Hydrate Deeply</div>

       </div>
       <button className="ml-96 mr-96 px-9 py-3 rounded-full text-pink-950 font-bold  bg-gradient-to-br from-pink-500 to-purple-600
       hover:bg-green-500">Book Me</button>
       </div>
       
    </section>
    )
}
export default Hero;