import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import Image from "next/image"



export default function SalePage() {
    return (
      <>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Sale</h1>
        <p>Great deals on Nike products. Shop now and save!</p>
      </div>
      <div className="w-full flex justify-center items-center mt-10 mb-1 ">
        <div className="w-[80%]">
          {/* container boxes */}
         
          <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
              {/* box1 */}
              <div>
              <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
            {/* Image */}
            <Image
              src={"/blackShort.png"}
              width={150}
              height={100}
              alt="game-images"
            />
      <span className='bg-red-500 px-2 rounded-md text-white  absolute top-0 left-0'>-40%</span>
      <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

            {/* Add to Cart */}
            <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Add to Cart
            </button>
           </div>

              <h1 className="font-bold font-sans pt-2 ">Black Short </h1>
              <span className="text-red-500 font-bold">$120</span> <span className="text-gray-400 font-bold line-through ml-2">$160</span>
              
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                <span className='text-gray-400'>(88)</span>

               </div>
              </div>
              {/* box2 */}
              <div>
              <div className="group bg-neutral-100 shadow-md sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
            {/* Image */}
            <Image
              src={"/bshoeS.png"}
              width={150}
              height={100}
              alt="game-images"
            />
      <span className='bg-red-500 px-2 rounded-md text-white  absolute top-0 left-0'>-25%</span>
      <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

            {/* Add to Cart */}
            <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Add to Cart
            </button>
           </div>
              <h1 className="font-bold font-sans pt-2 ">Black shoes</h1>
              <span className="text-red-500 font-bold">$920</span> <span className="text-gray-400 font-bold line-through ml-2">$1160</span>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                <span className='text-gray-400'>(90)</span>

               </div>
              </div>
              {/* box 3 */}
              <div>
              <div  className=" group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px]  h-[180px] flex justify-center items-center"> 
                  <Image src={"/menTshirt.png"}
                  width={150} height={100} 
                  alt="game-images">
                  </Image>
                  <span className='bg-red-500 px-2 rounded-md text-white  absolute top-0 left-0'>-32%</span>
      <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

            {/* Add to Cart */}
            <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Add to Cart
            </button>
              </div>
              <h1 className="font-bold font-sans pt-2">Men's T-Shirt</h1>
              <span className="text-red-500 font-bold">$1500</span> <span className="text-gray-400 font-bold line-through ml-2">$2240</span>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                <span className='text-gray-400'>(95)</span>

               </div>
              </div>
              {/* box4 */}
             <div>
             <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center"> 
                  <Image src={"/menshoes2.png"}
                  width={150} height={100} 
                  alt="game-images">
                  </Image>
                  <span className='bg-red-500 px-2  rounded-md text-white  absolute top-0 left-0'>-40%</span>
      <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

            {/* Add to Cart */}
            <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Add to Cart
            </button>
              </div>
              <h1 className="font-bold font-sans pt-2">Men's Shoes </h1>
              <span className="text-red-500 font-bold">$320</span> <span className="text-gray-400 font-bold line-through ml-2">$630</span>
              <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 ">
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                <span className='text-gray-400'>(99)</span>
               </div>
             </div>
             {/* box complete */}
             
          </div>
      </div>
   </div>
  <div className='w-full flex justify-center items-center'>
  <div className='w-[80%] flex justify-center  border-b-2 border-neutral-100 pb-10'>
  <button className='bg-red-500 hover:bg-red-600 py-2 px-5 text-white rounded-sm  '>View All Products</button>
  </div>
  </div>

{/* =================================================== */}
<main>
         <div id='products' className="w-full flex justify-center items-center mt-10 mb-1 ">
            {/* container */}
            <div className="w-[80%]">
                {/* container boxes */}
                <div className="flex flex-col">
                    <h3 className="text-red-500 font-bold border-l-8  border-red-400 pl-3 ml-1">Our Products</h3>
                    <div className="flex ">
                    <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">Explore Our Products</h1> </div>
                </div>
                <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
                    {/* box1 */}
                    <div className='pt-4'>
                    <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                  {/* Image */}
                  <Image
                    src={"/men-sando.png"}
                    width={100}
                    height={100}
                    alt="game-images"
                  />
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                 </div>

                    <h1 className="font-bold font-sans pt-2 ">Men's Clothing</h1>
                    <span className="text-red-500 font-bold">$100</span> 
                    
                    
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(88)</span>

                     
                    </div>
                    {/* box2 */}
                    <div className='pt-4'>
                    <div className="group  bg-neutral-100 shadow-md sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                  {/* Image */}
                  <Image
                    src={"/gHoodie.png"}
                    width={150}
                    height={100}
                    alt="game-images"
                  />
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                 </div>
                    <h1 className="font-bold font-sans pt-2 ">Hoodies</h1>
                    <span className="text-red-500 font-bold">$360</span> 
                    <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(95)</span>

                     
                    </div>
                    {/* box 3 */}
                    <div className='pt-4'>
                    <div  className=" group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px]  h-[180px] flex justify-center items-center"> 
                        <Image src={"/Yhoodie.png"}
                        width={150} height={100} 
                        alt="game-images">
                        </Image>
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                    </div>
                    <h1 className="font-bold font-sans pt-2">Hoodies</h1>
                    <span className="text-red-500 font-bold">$700</span>
                    <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(325)</span>

                    </div>
                    {/* box4 */}
                    <div className='pt-4'>
                   <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center"> 
                        <Image src={"/skybgirl.png"}
                        width={150} height={100} 
                        alt="game-images">
                        </Image>
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                    </div>
                    <h1 className="font-bold font-sans pt-2">Girl's Clothing </h1>
                    <span className="text-red-500 font-bold">$1500</span>
                    <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(3145)</span>
                   </div>
                   {/* other boxes */}
                                         
                   {/* box complete */}
                   
                </div>
                <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
                    {/* box1 */}
                    <div className='pt-4'>
                    <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                  {/* Image */}
                  <Image
                    src={"/menshirt.png"}
                    width={150}
                    height={100}
                    alt="game-images"
                  />
            <span className='bg-green-500 px-2 rounded-md text-white  absolute top-2 left-2'>New</span>
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                 </div>

                    <h1 className="font-bold font-sans pt-2 ">Men's Wear</h1>
                    <span className="text-red-500 font-bold">$960</span>                     
                    <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(65)</span>
                      
                    </div>
                    {/* box2 */}
                    <div className='pt-4'>
                    <div className="group bg-neutral-100 shadow-md sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                  {/* Image */}
                  <Image
                    src={"/girlsshoeP.png"}
                    width={150}
                    height={100}
                    alt="game-images"
                  />
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                 </div>
                    <h1 className="font-bold font-sans pt-2 ">Girl's Shoes</h1>
                    <span className="text-red-500 font-bold">$1160</span>
                    <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(25)</span>
                    </div>
                    {/* box 3 */}
                    <div className='pt-4'>
                    <div  className=" group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px]  h-[180px] flex justify-center items-center"> 
                        <Image src={"/Btrouser.png"}
                        width={150} height={100} 
                        alt="game-images">
                        </Image>
                        <span className='bg-green-500 px-2 rounded-md text-white  absolute top-2 left-2'>New</span>
                        <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                    </div>
                    <h1 className="font-bold font-sans pt-2">Trouser's</h1>
                    <span className="text-red-500 font-bold">$600</span> 
                    <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(55)</span>
                    </div>
                    {/* box4 */}
                    <div className='pt-4'>
                   <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center"> 
                        <Image src={"/womenshoes.png"}
                        width={150} height={100} 
                        alt="game-images">
                        </Image>
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                    </div>
                    <h1 className="font-bold font-sans pt-2">Women's Shoes </h1>
                    <span className="text-red-500 font-bold">$600</span> 
                    <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={solidStar} className='space-x-1 ml-1 text-yellow-400 text-md'/>
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(55)</span>
                   </div>
                                         
                   {/* box complete */}
                   
                </div>

            </div>
         </div>
        <div className='w-full flex justify-center items-center'>
        <div className='w-[80%] flex justify-center  border-b-2 border-neutral-100 pb-10 pt-6'>
        <button className='bg-red-500 hover:bg-red-600 py-2 px-5 text-white rounded-sm  '>View All Products</button>
        </div>
        </div>
    
         </main>

      </>
      
    
  
  
  
      
    )
  }
  
  