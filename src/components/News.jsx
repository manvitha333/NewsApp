import React from 'react'
import Image from 'next/image'
import { PlayCircle } from "lucide-react";

import { FaXTwitter, FaFacebook, FaInstagram, FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa6";




const News = () => {
  return (
    <div>

   
    <div className="lg:p-[50px] p-[30px]">
      {/* NEWS Heading */}         
      <h1 className="text-4xl font-bold text-red-600 hover:underline w-fit">
  NEWS
</h1>



      <hr className="border-t-2 border-black w-full mt-2 mb-6" />
      <div className="px-4 py-6">
     <div className=" gap-8 flex flex-col lg:flex-row">
        {/* Left Main News Section */}
        <div className="flex flex-col max-w-5xl">
          <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center md:items-start gap-6">
            {/* Left Content */}
            <div className="flex flex-col  justify-center mt-6 md:mt-[60px]   ">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight w-fit hover:underline">
  At least 24 dead in South Korea's 'worst ever fires'
</h1>

              <p className="text-gray-700 mt-2 text-sm md:text-base">
                The wildfires are threatening cultural sites and "rewriting the record books", according to authorities.
              </p>
              <div className="flex items-center  justify-start  text-gray-500 mt-3 text-xs md:text-sm">
                <p>2 hrs ago</p>
                <span className="mx-2">|</span>
                <p>Asia</p>
              </div>
            </div>

            {/* Right Image (With Hover Effect) */}
            <div className="flex-shrink-0 overflow-hidden rounded-md w-full lg:w-[552px] lg:h-[400px] md:w-auto">
              <Image
                src="/images/news1.png"
                width={552}
                height={400}
                alt="South Korea wildfire news image"
                className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Right Small News Section */}
        <div className="w-full lg:w-1/4 flex flex-col gap-2">
          <div className="relative overflow-hidden rounded-md">
            <Image
              src="/images/1sec2.png"
              width={250}
              height={250}
              alt="Historic Buddhist temple burns"
              className="rounded-md object-cover transition-opacity duration-300 hover:opacity-80 w-full md:w-[250px] lg:w-[250px]"
            />
            {/* Play Button Icon */}
            <PlayCircle className="absolute top-2 left-2 text-white bg-black/50 rounded-full p-1 w-8 h-8 transition-transform duration-300 hover:scale-110" />
          </div>
          <h1 className="text-sm font-bold relative w-fit hover:underline">
  Watch: Historic Buddhist temple burns in South Korea wildfires
</h1>

          <p className="text-gray-700 text-xs">
            The wildfires in the country have left dozens dead and caused thousands to evacuate.
          </p>
          <div className="flex items-center text-gray-500 text-xs">
            <p>3 hrs ago</p>
            <span className="mx-2">|</span>
            <p>Asia</p>
          </div>
        </div>
      </div>
    </div>    
      {/* {done mobile view} */}




     

      <hr className="border-t border-gray-300 w-full mt-5 mb-6" />

      <div className="flex flex-col lg:flex-row">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* News Card 1 */}
    <div className="border border-gray-100 p-2 rounded-md">
      <div className="overflow-hidden rounded-md">
        <Image src="/images/1sec3.png" width={200} height={200} alt="News image" className="rounded-md object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <h1 className="text-lg font-semibold mt-3 hover:underline">
        Trump adviser Mike Waltz takes 'full responsibility' for Signal group chat leak
      </h1>
      <p className="text-sm text-gray-600 mt-1">
        But the US national security adviser said he could not explain how a journalist was added to a chat discussing air strikes in Yemen.
      </p>
      <div className="flex items-center text-gray-500 mt-3 text-xs">
        <p>2 hrs ago</p> <span className="mx-2">|</span> <p>World</p>
      </div>
    </div>

    {/* News Card 2 */}
    <div className="border border-gray-100 p-2 rounded-md">
      <div className="overflow-hidden rounded-md">
        <Image src="/images/1sec4.png" width={200} height={200} alt="News image" className="rounded-md object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <h1 className="text-lg font-semibold mt-3 hover:underline">
        The row that rocked K-pop: NewJeans on courage of speaking out
      </h1>
      <p className="text-sm text-gray-600 mt-1">
        NewJeans talk to the BBC in their first interview since a court blocked their attempt to leave their record label.
      </p>
      <div className="flex items-center text-gray-500 mt-3 text-xs">
        <p>3 hrs ago</p> <span className="mx-2">|</span> <p>Asia</p>
      </div>
    </div>

    {/* News Card 3 */}
    <div className="border border-gray-100 p-2 rounded-md">
      <div className="overflow-hidden rounded-md">
        <Image src="/images/1sec5.png" width={200} height={200} alt="News image" className="rounded-md object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <h1 className="text-lg font-semibold mt-3 hover:underline">
        South Korea admits to 'mass exporting' children for adoption
      </h1>
      <p className="text-sm text-gray-600 mt-1">
        A report says the government is guilty of human rights violations in its overseas adoption programme.
      </p>
      <div className="flex items-center text-gray-500 mt-3 text-xs">
        <p>36 mins ago</p> <span className="mx-2">|</span> <p>Asia</p>
      </div>
    </div>

    {/* News Card 4 */}
    <div className="border border-gray-100 p-2 rounded-md">
      <div className="overflow-hidden rounded-md">
        <Image src="/images/1sec6.png" width={200} height={200} alt="News image" className="rounded-md object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <h1 className="text-lg font-semibold mt-3 hover:underline">
        The long, slow road to a ceasefire, with no guarantee of success
      </h1>
      <p className="text-sm text-gray-600 mt-1">
        The agreement comes after days of talks with the US in Saudi Arabia.
      </p>
      <div className="flex items-center text-gray-500 mt-3 text-xs">
        <p>14 hrs ago</p> <span className="mx-2">|</span> <p>Europe</p>
      </div>
    </div>
  </div>

  {/* Sidebar */}
  <div className="sm:w-full md:w-1/2 lg:w-1/4 ml-[10px] flex flex-col ">
    <div className="border border-gray-100 p-2 rounded-md">
      <h2 className="text-xl font-bold hover:underline">
        JD Vance will join wife in Greenland but trip scaled back
      </h2>
      <p className="text-sm text-gray-600 mt-1">
        Greenland's leaders have criticised planned visits by US officials after Trump's threats to annex the island.
      </p>
      <div className="flex items-center text-gray-500 mt-3 text-xs">
        <p>8 mins ago</p> <span className="mx-2">|</span> <p>US & Canada</p>
      </div>
    </div>

    
  </div>
</div>
 {/* {done mobile view} */}




    <hr className="border-t border-gray-300 w-full mt-5 mb-6" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[20px]">
  <div className="border border-gray-100 p-2 rounded-md">
    <h1 className="font-semibold text-lg hover:underline">
      India accused of meddling in Canada's Conservative Party race
    </h1>
    <div className="text-sm flex text-gray-600 mt-1">
      <p>13 hrs ago</p>
      <span className="mx-2">|</span>
      <p>US & Canada</p>
    </div>
  </div>

  <div className="border border-gray-100 p-2 rounded-md">
    <h1 className="font-semibold text-lg hover:underline">
      US officials begin trade talks in Delhi as tariff deadline nears
    </h1>
    <div className="text-sm flex text-gray-600 mt-1">
      <p>13 hrs ago</p>
      <span className="mx-2">|</span>
      <p>US & Canada</p>
    </div>
  </div>

  <div className="border border-gray-100 p-2 rounded-md">
    <h1 className="font-semibold text-lg hover:underline">
      Papua New Guinea blocks Facebook to 'limit' fake news and porn
    </h1>
    <div className="text-sm flex text-gray-600 mt-1">
      <p>13 hrs ago</p>
      <span className="mx-2">|</span>
      <p>US & Canada</p>
    </div>
  </div>

  <div className="border border-gray-100 p-2 rounded-md">
    <h1 className="font-semibold text-lg hover:underline">
      Harry quits charity set up in Diana's honour over internal row
    </h1>
    <div className="text-sm flex text-gray-600 mt-1">
      <p>13 hrs ago</p>
      <span className="mx-2">|</span>
      <p>US & Canada</p>
    </div>
  </div>

  <div className="border border-gray-100 p-2 rounded-md">
    <h1 className="font-semibold text-lg hover:underline">
      Thousands turn out for Turkey protests after more than 1,400 arrests
    </h1>
    <div className="text-sm flex text-gray-600 mt-1">
      <p>13 hrs ago</p>
      <span className="mx-2">|</span>
      <p>US & Canada</p>
    </div>
  </div>
</div>





    <hr className="border-t-2 border-black w-full mt-[20px] mb-6" />

    <h1 className="text-xl font-bold text-[black] hover:underline relative w-fit">
       More to Explore
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Main News Section */}
      <div className="flex flex-col max-w-5xl">
        <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center md:items-start gap-6">
          {/* Left Content */}
          <div className="flex flex-col  justify-center mt-6 md:mt-[60px] ">
          <h1 className="text-2xl font-bold text-gray-900 leading-tight relative w-fit hover:underline">
  Hounded and not guilty: A Bollywood media trial blows up in smoke
</h1>

            <p className="text-gray-700 mt-2 text-sm md:text-base">
              She was called "a gold digger" and "a murderer" after the death of her actor boyfriend Sushant Singh Rajput.
            </p>
            <div className="flex items-center  justify-start  text-gray-500 mt-3 text-xs md:text-sm">
              <p>11 hrs ago</p>
              <span className="mx-2">|</span>
              <p>Asia</p>
            </div>
          </div>

          {/* Right Image (With Hover Effect) */}
          <div className="flex-shrink-0 overflow-hidden rounded-md w-full lg:w-[552px] lg:h-[400px] md:w-auto">
            <Image
              src="/images/news2section.png"
              width={552}
              height={400}
              alt="Bollywood media trial news image"
              className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Right Small News Section */}
      <div className="w-full lg:w-1/4 flex flex-col gap-2">
        <div className="relative overflow-hidden rounded-md">
          <Image
            src="/images/2sec1.png"
            width={250}
            height={150}
            alt="Ceasefire talks news image"
            className="rounded-md object-cover transition-opacity duration-300 hover:opacity-80 w-full md:w-[250px] lg:w-[250px]"
          />
        </div>
        <h1 className="text-sm font-bold relative w-fit hover:underline">
  The long, slow road to a ceasefire, with no guarantee of success
</h1>

        <p className="text-gray-700 text-xs">
          The agreement comes after days of talks with the US in Saudi Arabia.
        </p>
        <div className="flex items-center text-gray-500 text-xs">
          <p>14 hrs ago</p>
          <span className="mx-2">|</span>
          <p>Europe</p>
        </div>
      </div>
    </div>



      <hr className="border-t border-gray-300 w-full mt-5 mb-6" />
      <div className=" mx-auto flex flex-col md:flex-row gap-6">
      {/* Left Side - Main News Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* News Card 1 */}
        <div className="pb-4">
          <Image
            src="/images/2sec3.png"
            width={700}
            height={450}
            alt="News image"
            className="w-full h-[250px] rounded-md object-cover transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-lg font-semibold mt-3 hover:underline cursor-pointer leading-tight">
            How an old school photo helped reunite childhood sweethearts after 85 years
          </h1>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
            Jim Dougal and Betty Davidson met again after attempts to trace everyone in a 1930s school photo.
          </p>
          <div className="flex items-center text-gray-500 mt-3 text-xs">
            <p>6 hrs ago</p>
            <span className="mx-2">|</span>
            <p>UK</p>
          </div>
        </div>

        {/* News Card 2 */}
        <div className=" pb-4">
          <Image
            src="/images/2sec4.png"
            width={600}
            height={450}
            alt="News image"
            className="w-full h-[250px] rounded-md object-cover transition-transform duration-300 hover:scale-105"
          />
          <h1 className="text-lg font-semibold mt-3 hover:underline cursor-pointer leading-tight">
            How 'free spirit' Raducanu is thriving without full-time coach
          </h1>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
            Emma Raducanu has never been afraid to do things differently. Without a full-time coach, the "free spirit" is thriving in Miami.
          </p>
          <div className="flex items-center text-gray-500 mt-3 text-xs">
            <p>21 hrs ago</p>
            <span className="mx-2">|</span>
            <p>Tennis</p>
          </div>
        </div>
      </div>

      {/* Right Side - Additional News */}
      <div className="w-full md:w-1/3 space-y-6">
        <div className="pb-4">
          <h2 className="text-lg font-semibold hover:underline cursor-pointer leading-tight">
            Millions of UK tyres meant for recycling sent to furnaces in India
          </h2>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
            The illegal makeshift plants cause serious health problems and huge environmental damage.
          </p>
          <div className="flex items-center text-gray-500 mt-3 text-xs">
            <p>1 day ago</p>
            <span className="mx-2">|</span>
            <p>UK</p>
          </div>
        </div>

        <div className=" pb-4">
          <h2 className="text-lg font-semibold hover:underline cursor-pointer leading-tight">
            One historian's 30-year quest to catch a national records thief
          </h2>
          <p className="text-sm text-gray-600 mt-1 leading-relaxed">
            One academic's mission to discover who stole 200 items from Scotland's national archives.
          </p>
          <div className="flex items-center text-gray-500 mt-3 text-xs">
            <p>1 day ago</p>
            <span className="mx-2">|</span>
            <p>Glasgow & West Scotland</p>
          </div>
        </div>
      </div>
    </div>
    <hr className="border-t border-gray-300 w-full mt-5 mb-6" />

    <div className="w-full h-fit bg-[#fffbfc] flex justify-center border-b ">
  <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-6 py-10">
    {/* Left Side - Text */}
    <div className="w-full md:w-1/2 space-y-4 px-6 text-center md:text-left">
      <p className="text-sm uppercase tracking-wide text-gray-500">
        Collaborating to clean up
      </p>
      <h1 className="text-3xl font-semibold leading-snug">
        How partnerships can help future-proof the ocean
      </h1>
      <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
        Learn More
      </button>
      <div className="flex justify-center md:justify-start items-center gap-2 text-sm text-gray-600 mt-2">
        <span>Paid and presented by</span>
        <Image
          src="/images/3sec2.png"
          width={80}
          height={40}
          alt="Hyundai logo"
        />
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        src="/images/sec3.png"
        width={600}
        height={350}
        alt="Ocean Cleanup"
        className="w-full rounded-lg object-cover"
      />
    </div>
  </div>
</div>


<div className="w-full border-t border-gray-300 py-6 px-4">
<hr className="border-t-2 border-black w-full mt-[20px] mb-6" />
      <h2 className="text-lg font-bold uppercase text-gray-800 mb-4">
        Most Watched
      </h2>
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
    {[
      "Watch: Australian senator wields dead salmon in parliament",
      "Two French air display jets crash in rehearsal",
      "Watch: Historic Buddhist temple burns in South Korea wildfires",
      "'It shouldn't happen again' - Americans react to Signal group chat leak",
      "The row over baby wombat grabbed by an influencer... in 60 seconds",
    ].map((item) => (
      <div key={item} className="flex items-start gap-2 w-full md:w-1/5">
        <span className="text-gray-400 text-lg md:text-[25px] font-bold">
          {/* Use array index + 1 for numbering */}
          {[
            "1", "2", "3", "4", "5"
          ][
            [
              "Watch: Australian senator wields dead salmon in parliament",
              "Two French air display jets crash in rehearsal",
              "Watch: Historic Buddhist temple burns in South Korea wildfires",
              "'It shouldn't happen again' - Americans react to Signal group chat leak",
              "The row over baby wombat grabbed by an influencer... in 60 seconds",
            ].indexOf(item)
          ]}
        </span>
        <p className="text-black font-bold text-sm md:text-base leading-snug">
          <span className="text-black font-bold">▶</span> {item}
        </p>
      </div>
    ))}
  </div>

</div>


    </div>
    <hr className="border-t-2 border-black w-full mt-[20px] mb-6" />

    <h1 className="text-xl font-bold text-[black] hover:underline relative w-fit">
       Also in NEWS
      </h1>


      <div className="max-w-7xl mx-auto px-4">
  <div className="flex flex-col md:flex-row gap-6">
    
    {/* Left Main News Section */}
    <div className="flex flex-col w-full md:max-w-5xl">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center mt-6 md:mt-[60px] w-full md:w-1/2">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight hover:underline">
            'Embarrassing' Brazil thrashed by Argentina in World Cup qualifying
          </h1>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            Brazil captain Marquinhos apologises to the fans after an "embarrassing" display in their 4-1 World Cup qualifying defeat to rivals Argentina in Buenos Aires.
          </p>
          <div className="flex items-center text-gray-500 mt-3 text-xs md:text-sm">
            <p>2 hrs ago</p>
            <span className="mx-2">|</span>
            <p>Asia</p>
          </div>
        </div>

        {/* Right Image (With Hover Effect) */}
        <div className="w-full md:w-[552px] h-[250px] md:h-[400px] overflow-hidden rounded-md">
          <Image
            src="/images/sec4.png"
            width={552}
            height={400}
            alt="South Korea wildfire news image"
            className="rounded-md object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>

    {/* Right Small News Section */}
    <div className="w-full md:w-[250px] flex flex-col gap-2">
      <div className="relative overflow-hidden rounded-md">
        <Image
          src="/images/4sec1.png"
          width={250}
          height={150}
          alt="Historic Buddhist temple burns"
          className="rounded-md object-cover w-full h-[150px] transition-opacity duration-300 hover:opacity-80"
        />
        {/* Play Button Icon */}
        <PlayCircle className="absolute top-2 left-2 text-white bg-black/50 rounded-full p-1 w-8 h-8 transition-transform duration-300 hover:scale-110" />
      </div>
      <h1 className="text-sm md:text-base font-bold hover:underline">
        British university fined £585k in free speech row
      </h1>
      <p className="text-gray-700 text-xs md:text-sm">
        The university is fined by the higher education regulator for failing to uphold freedom of speech.
      </p>
      <div className="flex items-center text-gray-500 text-xs">
        <p>3 hrs ago</p>
        <span className="mx-2">|</span>
        <p>Sussex</p>
      </div>
    </div>
  </div>
</div>


      <hr className="border-t border-gray-300 w-full mt-5 mb-6" />
      
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-6">
      {/* Left Section: News Cards */}
      <div className="flex justify-center md:justify-start gap-6">
        {/* News Card 1 */}
        <div className="w-full sm:w-[300px] md:w-[280px] border border-gray-100 p-2 rounded-md">
          <div className="overflow-hidden rounded-md">
            <Image
              src="/images/5sec1.png"
              width={450}
              height={350}
              alt="News image"
              className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
          <h1 className="text-lg font-semibold mt-3 hover:underline">
            Trump signs order aimed at overhauling US elections
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            The executive order would require proof of US citizenship on elections forms among other changes.
          </p>
          <div className="flex items-center text-gray-500 mt-3 text-xs">
            <p>11 hrs ago</p>
            <span className="mx-2">|</span>
            <p>US & Canada</p>
          </div>
        </div>

        {/* News Card 2 */}
        <div className="w-full sm:w-[300px] md:w-[280px] border border-gray-100 p-2 rounded-md">
          <div className="overflow-hidden rounded-md">
            <Image
              src="/images/5sec2.png"
              width={450}
              height={350}
              alt="News image"
              className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
          <h1 className="text-lg font-semibold mt-3 hover:underline">
            Papua New Guinea blocks Facebook to 'limit' fake news and porn
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            The sudden ban has triggered outcry, with critics calling it a violation of human rights.
          </p>
          <div className="flex items-center text-gray-500 mt-3 text-xs">
            <p>10 hrs ago</p>
            <span className="mx-2">|</span>
            <p>Asia</p>
          </div>
        </div>

        {/* News Card 3 */}
        <div className="w-full sm:w-[300px] md:w-[280px] border border-gray-100 p-2 rounded-md">
          <div className="overflow-hidden rounded-md">
            <Image
              src="/images/5sec3.png"
              width={450}
              height={350}
              alt="News image"
              className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
          <h1 className="text-lg font-semibold mt-3 hover:underline">
            India comedian won't apologise for joke that angered politicians
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Kunal Kamra's jokes, which went viral, outraged supporters of Maharashtra leader Eknath Shinde.
          </p>
          <div className="flex items-center text-gray-500 mt-3 text-xs">
            <p>1 day ago</p>
            <span className="mx-2">|</span>
            <p>Asia</p>
          </div>
        </div>
      </div>
    </div>
</div>


    <div className="w-full h-fit bg-[#fffbfc] flex justify-center border-b mt-[20px] ">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-6 py-10 px-6">
    {/* Left Side - Text */}
    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
      <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
        Embracing Change
      </p>
      <h1 className="text-4xl font-light leading-snug text-gray-900">
        How South Africa is unlocking growth
      </h1>
      <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
        Find Out More
      </button>
      <div className="flex justify-center md:justify-start items-center gap-2 text-sm text-gray-600 mt-2">
        <span>Provided by</span>
        <Image
          src="/images/6sec1.png"
          width={120}
          height={30}
          alt="Standard Bank logo"
        />
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="w-full md:w-1/2 flex justify-end">
      <Image
        src="/images/6sec.png"
        width={800}
        height={500}
        alt="Businessman"
        className="w-full  rounded-lg object-cover"
      />
    </div>
  </div>
</div>

<div className="w-full border-t border-gray-300 py-6">
<hr className="border-t-2 border-black w-full mt-[20px] mb-6" />
<h2 className="text-lg font-bold uppercase text-gray-900 mb-4">Most Read</h2>
<div className="max-w-7xl mx-auto px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
    {[
      "Trump has blown up the world order - and left Europe’s leaders scrabbling",
      "Mike Waltz takes 'full responsibility' for Signal group chat leak",
      "The row that rocked K-pop: NewJeans on courage of speaking out",
      "At least 24 dead in South Korea's 'worst ever fires'",
      "Russia says sanctions must be lifted before Ukraine maritime ceasefire can start",
      "JD Vance will join wife in Greenland but trip scaled back",
      "Harry quits charity set up in Diana's honour over internal row",
      "Trump signs order aimed at overhauling US elections",
      "South Korea admits to 'mass exporting' children for adoption",
      "Hundreds join Gaza's largest anti-Hamas protest since war began",
    ].map((news, idx) => (
      <div key={news} className="flex items-start gap-2">
        <span className="text-xl font-light text-gray-400">{idx + 1}</span>
        <p className="text-sm text-gray-900">{news}</p>
      </div>
    ))}
  </div>
</div>


</div>


<hr className="border-t-2 border-black w-full mt-[20px] mb-6" />
<h2 className="text-lg font-bold uppercase text-gray-900 mb-4">SPORT</h2>

<div className="flex flex-wrap lg:flex-nowrap gap-8">
  {/* Left Main News Section */}
  <div className="flex flex-col w-full lg:w-[65%]">
    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-6">
      {/* Left Content */}
      <div className="flex flex-col justify-center mt-[40px] text-center md:text-left">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight w-fit hover:underline">
          Max Verstappen becomes world champion four times in a row
        </h1>
        <p className="text-gray-700 mt-2 text-sm md:text-base">
          Red Bull deliver one of the most ruthless driver moves in F1 history after deciding to drop Liam Lawson after just two races.
        </p>
        <div className="flex items-center justify-center md:justify-start text-gray-500 mt-3 text-xs md:text-sm">
          <p>2 hrs ago</p>
          <span className="mx-2">|</span>
          <p>Formula 1</p>
        </div>
      </div>

      {/* Right Image (With Hover Effect) */}
      <div className="w-full md:w-[500px] overflow-hidden rounded-md">
        <Image
          src="/images/sec7.png"
          width={500}
          height={300}
          alt="F1 News"
          className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  </div>

  {/* Right Small News Section */}
  <div className="w-full sm:w-[300px] flex flex-col gap-2">
    <div className="relative overflow-hidden rounded-md">
      <Image
        src="/images/7sec2.png"
        width={300}
        height={250}
        alt="Brazil News"
        className="rounded-md object-cover transition-opacity duration-300 hover:opacity-80"
      />
      {/* Play Button Icon */}
      <PlayCircle className="absolute top-2 left-2 text-white bg-black/50 rounded-full p-1 w-8 h-8 transition-transform duration-300 hover:scale-110" />
    </div>
    <h1 className="text-sm font-bold hover:underline">What's going on with Brazil?</h1>
    <p className="text-gray-700 text-xs">
      South American football writer Tim Vickery analyses what is going wrong for Brazil following their 4-1 defeat by Argentina.
    </p>
    <div className="flex items-center text-gray-500 text-xs">
      <p>3 hrs ago</p>
      <span className="mx-2">|</span>
      <p>Brazil</p>
    </div>
  </div>
</div>

{/* News Cards Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[20px]">
  {/* News Card 1 */}
  <div className="border border-gray-100 p-2 rounded-md">
    <div className="overflow-hidden rounded-md">
      <Image
        src="/images/7sec3.png"
        width={450}
        height={350}
        alt="US Elections"
        className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <h1 className="text-lg font-semibold mt-3 hover:underline">
      Trump signs order aimed at overhauling US elections
    </h1>
    <p className="text-sm text-gray-600 mt-1">
      The executive order would require proof of US citizenship on election forms among other changes.
    </p>
    <div className="flex items-center text-gray-500 mt-3 text-xs">
      <p>11 hrs ago</p>
      <span className="mx-2">|</span>
      <p>US & Canada</p>
    </div>
  </div>

  {/* News Card 2 */}
  <div className="border border-gray-100 p-2 rounded-md">
    <div className="overflow-hidden rounded-md">
      <Image
        src="/images/7sec4.png"
        width={450}
        height={350}
        alt="Papua New Guinea"
        className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <h1 className="text-lg font-semibold mt-3 hover:underline">
      Papua New Guinea blocks Facebook to 'limit' fake news and porn
    </h1>
    <p className="text-sm text-gray-600 mt-1">
      The sudden ban has triggered outcry, with critics calling it a violation of human rights.
    </p>
    <div className="flex items-center text-gray-500 mt-3 text-xs">
      <p>10 hrs ago</p>
      <span className="mx-2">|</span>
      <p>Asia</p>
    </div>
  </div>

  {/* News Card 3 */}
  <div className="border border-gray-100 p-2 rounded-md">
    <div className="overflow-hidden rounded-md">
      <Image
        src="/images/7sec5.png"
        width={450}
        height={350}
        alt="India Comedian"
        className="rounded-md object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <h1 className="text-lg font-semibold mt-3 hover:underline">
      Indian comedian won't apologise for joke that angered politicians
    </h1>
    <p className="text-sm text-gray-600 mt-1">
      Kunal Kamra's jokes, which went viral, outraged supporters of Maharashtra leader Eknath Shinde.
    </p>
    <div className="flex items-center text-gray-500 mt-3 text-xs">
      <p>1 day ago</p>
      <span className="mx-2">|</span>
      <p>Asia</p>
    </div>
  </div>
</div>

    <hr className="border-t-2 border-black w-full mt-[20px] mb-6" />

    <div className="w-full h-fit bg-[#fffbfc] flex justify-center border-b mt-[20px] ">
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-6 py-10 px-6">
    {/* Left Side - Text */}
    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
      <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
      Pass the ball!
      </p>
      <h1 className="text-4xl font-light leading-snug text-gray-900">
      Beach soccer is coming to the Seychelles
      </h1>
      <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
        Discover More
      </button>
      <div className="flex justify-center md:justify-start items-center gap-2 text-sm text-gray-600 mt-2">
        <span>Paid and presented by

</span>
        <Image
          src="/images/8sec1.png"
          width={120}
          height={30}
          alt="Standard Bank logo"
        />
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="w-full md:w-1/2 flex justify-end">
      <Image
        src="/images/8sec2.png"
        width={900}
        height={600}
        alt="Businessman"
        className="w-full  rounded-lg object-cover"
      />
    </div>
  </div>
</div>



    </div>
    <div className="w-full h-[300px]  border-b bg-[#f3f3ff]  py-6 ">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Left Side - Logo and Links */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-xl font-bold text-gray-900">News Digest</h1>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-[40px] text-[15px] ">
          <span className="hover:underline cursor-pointer">Terms of Use</span>
          <span className="hover:underline cursor-pointer">About Us</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Cookies</span>
          <span className="hover:underline cursor-pointer">Accessibility Help</span>
          <span className="hover:underline cursor-pointer">Contact Us</span>
          <span className="hover:underline cursor-pointer">Advertise</span>
          <span className="hover:underline cursor-pointer">Do Not Sell My Info</span>
          <span className="hover:underline cursor-pointer">Tech Support</span>
        </div>
        <p className="text-xs text-gray-500 mt-3 flex justify-center">
          Copyright 2025 News Digest. All rights reserved. The News Digest is <i>not responsible for the content of external sites.</i>
          <b className="hover:underline cursor-pointer"> Read about our approach to external linking.</b>
        </p>
      </div>

      {/* Right Side - Social Icons */}
      <div className="flex gap-4 mt-4 md:mt-0">
        <span className="text-gray-600 hover:text-black cursor-pointer">
          <FaXTwitter className="w-6 h-6" />
        </span>
        <span className="text-gray-600 hover:text-black cursor-pointer">
          <FaFacebook className="w-6 h-6" />
        </span>
        <span className="text-gray-600 hover:text-black cursor-pointer">
          <FaInstagram className="w-6 h-6" />
        </span>
        <span className="text-gray-600 hover:text-black cursor-pointer">
          <FaTiktok className="w-6 h-6" />
        </span>
        <span className="text-gray-600 hover:text-black cursor-pointer">
          <FaLinkedin className="w-6 h-6" />
        </span>
        <span className="text-gray-600 hover:text-black cursor-pointer">
          <FaYoutube className="w-6 h-6" />
        </span>
      </div>
    </div>
  </div>
  </div>
  )
}

export default News
