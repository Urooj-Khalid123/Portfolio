import Image from "next/image";




const Hero = () => {
  return (
     <div className="flex min-h-screen  items-center justify-center">
      <div className="w-2/6">
        <Image 
          className="bg-cover" 
          src="/portfolio.jpg" 
          alt="Portfolio Image" 
          width={800} 
          height={800} 
        />
      </div>
   
    <div className="flex  flex-shrink-0 w-2/4">

    <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
<div className="hidden lg:block"><div/>
     <div className=" flex flex-col justify-center text-[100px] sm:text-[130px] font-bold leading-tight pl-32 pt-16">
        <p data-aos="zoom-in-up">I’m</p>
        <p data-aos="zoom-in-up">Urooj</p>
        <p data-aos="zoom-in-up">Khalid</p>
      </div>
     </div>
</div>
    </div>

    </div>

   
  
  );
}

export default Hero
