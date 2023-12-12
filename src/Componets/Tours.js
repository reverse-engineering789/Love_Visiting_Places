import React from 'react';
import './Tours.css';
import ShowMoreText from './ShowMoreText';
import { useState } from 'react';

function Tours() {
    const [visibleBlocks, setVisibleBlocks] = useState({
        Agra: true,
        Jaipur: true,
        Goa: true,
        Varanasi: true,
        Darjeeling: true,
        Jaisalmer: true,
        Kochi: true,
      });

     
// const [visibleBlocks, setVisibleBlocks] = useState(initialVisibleBlocks);
   
      const handleCancelClick = (city) => {
        setVisibleBlocks((prevVisibleBlocks) => ({
          ...prevVisibleBlocks,
          [city]: false,
        }));
      };

      // const handleResetClick = () => {
      //   setVisibleBlocks(initialVisibleBlocks);
      // };
     
      const maxLength = 180;
      

      // const areAllItemsHidden = Object.values(visibleBlocks).every((value) => !value);


      // if(visibleBlocks = ''){
      //   return(
      //     <div>
      //         <h2>No Tours Left</h2>
      //         <button onClick={Tours}>Refresh</button>
      //     </div>
      //   );
      // }

    const textAgra = 'Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.';
    

    const textJaipur = 'Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.';


    const textGoa = 'Goa is a small state on Indias western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.';


    const textVaranasi = "Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.";


    const textDarjeeling = "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's  here!";


    const textJaisalmer = "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.";


    const textKochi = "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.";

    
    // return (
    //   <div className='MainDiv'>
    //     {areAllItemsHidden ? (
    //       <div>
    //         <h2>No Tours Left</h2>
    //         <button onClick={handleResetClick}>Refresh</button>
    //       </div>
    //     ) : (
    //       Object.keys(visibleBlocks).map((city) => {
    //         if (visibleBlocks[city]) {
    //           const text = getTextForCity(city); // Define a function to get text based on city name
    //           return (
    //             <div className={`${city}Container`} key={city}>
    //               {/* Render your city content here */}
    //               {/* ... */}
    //               <button className="CancelBtn" onClick={() => handleCancelClick(city)}>
    //                 Cancel
    //               </button>
    //             </div>
    //           );
    //         }
    //         return null;
    //       })
    //     )}
    //   </div>
    // );
  return (
    <div className='MainDiv'>
    {visibleBlocks.Agra && (
      <div className="OneAgra">
      <div className="ImageAgra">
          <img src="https://cdn.thecodehelp.in/Agra.jpeg" alt="Agra" />
        </div>
        <div className="AllInfoAgra">
        <div className="NameAgra">Agra</div>
        <div className="PriceAgra">65,999  Rs/-</div>
        <div className="InfoAgra">
        <ShowMoreText text = {textAgra} maxLength = {maxLength}/>
           {/* Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.  */}
        </div> 
        </div>
        <button className = "CancelBtn" onClick={() => handleCancelClick('Agra')}>Cancel</button>
        {/* <ShowMoreText text="Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri."  /> */}
        
      </div>
    )}

      {/* Jaipur */}
      {visibleBlocks.Jaipur && (
      <div className="TwoJaipur">
      <div className="ImageJaipur">
          <img src="https://cdn.thecodehelp.in/Jaipur.jpeg" alt="Jaipur" />
        </div>
        <div className="AllInfoJaipur">
        <div className="NameJaipur">Jaipur</div>
        <div className="PriceJaipur">Price: 75,999 Rs/-</div>
        <div className="InfoJaipur">
        <ShowMoreText text = {textJaipur} maxLength = {maxLength}/>
        </div>
        </div>
        <button className = "CancelBtn" onClick={() => handleCancelClick('Jaipur')}>Cancel</button>
      </div> 
      )}

      {/* Goa */}
      {visibleBlocks.Goa && (
      <div className="ThreeGoa">
      <div className="ImageGoa">
          <img src="https://cdn.thecodehelp.in/Goa.jpeg" alt="Goa" />
        </div>
        <div className="AllInfoGoa">
        <div className="NameGoa">Goa</div>
        <div className="PriceGoa">Price: 65,956 Rs/-</div>
        <div className="InfoGoa">
        <ShowMoreText text = {textGoa} maxLength = {maxLength}/>
        </div>
        </div>
        <button className = "CancelBtn" onClick={() => handleCancelClick('Goa')}>Cancel</button>
      </div>
      )}

      {/* Varanasi */}
      {visibleBlocks.Varanasi && (
      <div className="FourVaranasi">
      <div className="ImageVaranasi">
          <img src="https://cdn.thecodehelp.in/Varanasi.jpeg" alt="Varanasi" />
        </div>
        <div className="AllInfoVaranasi">
        <div className="NameVaranasi">Varanasi</div>
        <div className="PriceVaranasi">Price: 86,656 Rs/-</div>
        <div className="InfoVaranasi">
        <ShowMoreText text = {textVaranasi} maxLength = {maxLength}/>
        </div>
        </div>
        <button className = "CancelBtn" onClick={() => handleCancelClick('Varanasi')}>Cancel</button>
      </div>
      )}

      {/* Darjeeling */}
      {visibleBlocks.Darjeeling && (
      <div className="FiveDarjeeling">
        <div className="ImageDarjeeling">
        <img src="https://cdn.thecodehelp.in/Darjeeling.jpeg" alt="Jaisalmer" />
        </div>
        <div className="AllInfoDarjeeling">
        <div className="NameDarjeeling">Darjeeling</div>
        <div className="PriceDarjeeling">Price: 56,656 Rs/</div>
        <div className="InfoDarjeeling">
        <ShowMoreText text = {textDarjeeling} maxLength = {maxLength}/>
        </div>
        </div>
        <button className = "CancelBtn" onClick={() => handleCancelClick('Darjeeling')}>Cancel</button>
      </div>
      )}

      {/* Jaisalmer */}
      {visibleBlocks.Jaisalmer && (
      <div className="SixJaisalmer">
      <div className="ImageJaisalmer">
          <img src="https://cdn.thecodehelp.in/Jaisalmer.jpeg" alt="Jaisalmer" />
        </div>
        <div className="AllInfoJaisalmer">
        <div className="NameJaisalmer">Jaisalmer</div>
        <div className="PriceJaisalmer">Price: 75,000 Rs/-</div>
        <div className="InfoJaisalmer">
        <ShowMoreText text = {textJaisalmer} maxLength = {maxLength}/>
        </div>
        </div>
        <button className = "CancelBtn" onClick={() => handleCancelClick('Jaisalmer')}>Cancel</button>
      </div>
      )}


    

      {/* Kochi */}
      {visibleBlocks.Kochi && (
      <div className="SevenKochi">
      <div className="ImageKochi">
          <img src="https://cdn.thecodehelp.in/Kochi.jpeg" alt="Kochi" />
        </div>
        <div className="AllInfoKochi">
        <div className="NameKochi">Kochi</div>
        <div className="PriceKochi">Price: 45,656 Rs/-</div>
        <div className="InfoKochi">
        <ShowMoreText text = {textKochi} maxLength = {maxLength}/>
        </div>       
        </div>
        <button className = "CancelBtn" onClick={() => handleCancelClick('Kochi')}>Cancel</button>
      </div>
      )}
    </div>
  );
}

export default Tours;


// import './Tours.css'
// import ShowMoreText from './ShowMoreText';

 // function Tours(){
//     return( 
//         <div className='MainDIv'>
//           <div className="OneAgra">
//            <div className="NameAgra">Agra
//              <div className="InfoAgra">
//            {/* <div className="text"> */}
//            "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
//            </div> 
//            <ShowMoreText text={InfoAgra} maxLength={maxLength} />
//            {/* <div className="image">
//                <a href="https://google.com" target="_blank" rel="noreferrer">
//            </div> */}
//            <div className="ImageAgra">
//                     {/* <a href="https://google.com" target="_blank" rel="noreferrer"> */}
//                         {/* You can add an image tag here */}
//                         <img src="https://cdn.thecodehelp.in/Agra.jpeg" alt="Agra" />
//                     {/* </a> */}
//                 </div>
//                 </div>
//                 </div>
//           </div>
//             {/* name: "Agra",
// 		info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
// 		image: "https://cdn.thecodehelp.in/Agra.jpeg",
// 		price: "35,758", */}




//         {/* 2 */}
//         <div className="TwoJaipur">
//            <div className="NameJaipur">Jaipur
//            <div className="InfoJaipur">
//            "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",

//            {/* <div className="image">
//                <a href="https://google.com" target="_blank" rel="noreferrer">
//            </div> */}
//            <div className="ImageJaipur">
//                     {/* <a href="https://google.com" target="_blank" rel="noreferrer"> */}
//                         {/* You can add an image tag here */}
//                         <img src="https://cdn.thecodehelp.in/Jaipur.jpeg" alt="Agra" />
//                     {/* </a> */}
//                     </div>
//                 </div>
//                 </div>
//           </div>
// 
//           3 

//           <div className="ThreeGoa">
//            <div className="NameGoa">Agra
//            <div className="InfoGoa">
//            "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",

//            {/* <div className="image">
//                <a href="https://google.com" target="_blank" rel="noreferrer">
//            </div> */}
//            <div className="ImageGoa">
//                     {/* <a href="https://google.com" target="_blank" rel="noreferrer"> */}
//                         {/* You can add an image tag here */}
//                         <img src="https://cdn.thecodehelp.in/Goa.jpeg" alt="Agra" />
//                     {/* </a> */}
//                     </div>
//                 </div>
//                 </div>
//           </div>


//           <div className="FourVaranasi">
//            <div className="NameVaranasi">Varanasi
//            <div className="InfoVaranasi">
//            "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",

//            {/* <div className="image">
//                <a href="https://google.com" target="_blank" rel="noreferrer">
//            </div> */}
//            <div className="ImageVaranasi">
//                     {/* <a href="https://google.com" target="_blank" rel="noreferrer"> */}
//                         {/* You can add an image tag here */}
//                         <img src="https://cdn.thecodehelp.in/Varanasi.jpeg" alt="Agra" />
//                     {/* </a> */}
//                     </div>
//                 </div>
//                 </div>
//           </div>


//           <div className="FiveDarjeeling">
//            <div className="NameDarjeeling">Agra
//            <div className="InfoDarjeeling">
//            "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
 
//            {/* <div className="image">
//                <a href="https://google.com" target="_blank" rel="noreferrer">
//            </div> */}
//            <div className="ImageDarjeeling">
//                     {/* <a href="https://google.com" target="_blank" rel="noreferrer"> */}
//                         {/* You can add an image tag here */}
//                         <img src="https://cdn.thecodehelp.in/Darjeeling.jpeg" alt="Agra" />
//                     {/* </a> */}
//                     </div>
//                 </div>
//                 </div>
//           </div>

         
//            {/* 6 */}

//           <div className="SixJaisalmer">
//            <div className="NameJaisalmer">Agra
//            <div className="InfoJaisalmer">
//            "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
     
//            {/* <div className="image">
//                <a href="https://google.com" target="_blank" rel="noreferrer">
//            </div> */}
//            <div className="ImageJaisalmer">
//                     {/* <a href="https://google.com" target="_blank" rel="noreferrer"> */}
//                         {/* You can add an image tag here */}
//                         <img src="https://cdn.thecodehelp.in/Jaisalmer.jpeg" alt="Agra" />
//                     {/* </a> */}
//                     </div>
//                 </div>
//                 </div>
//           </div>




// {/* 
//           7 */}

//           <div className="sevenKochi">
//            <div className="NameKochi">Agra
//            <div className="InfoKochi">
//            "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",

//            {/* <div className="image">
//                <a href="https://google.com" target="_blank" rel="noreferrer">
//            </div> */}
//            <div className="ImageKochi">
//                     {/* <a href="https://google.com" target="_blank" rel="noreferrer"> */}
//                         {/* You can add an image tag here */}
//                         <img src="https://cdn.thecodehelp.in/Kochi.jpeg" alt="Agra" />
//                     {/* </a> */}
//                     </div>
//                 </div>
//                 </div>
//           </div>
//         </div>
//     );
// }


// export default Tours;