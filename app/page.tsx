import Image from "next/image";
import '../css/hero.css'

export default function Home() {
  return (

    <div>
    
    <header>
     <div className='header-main'>
     <div className='header-logo'>
        <img src="/images/fire.png" alt="Description of the image" />
        </div>
        

        <div className='header-ul'>
            <ul>
                <li>about</li>
                <li>points</li>
                <li>waitlist</li>
            </ul>
        </div>
     </div>
    </header>
        <section className='Animated '>
       
        <div className='main-Animated'>
        <div className='badal'>
        <img src="/images/badalgo.png" alt="Description of the image" />
        {/* <img src="/images/badal2.png" alt="Description of the image" />
        <img src="/images/badal.png" alt="Description of the image" />
        <img src="/images/badal2.png" alt="Description of the image" />
        <img src="/images/badal.png" alt="Description of the image" />
        <img src="/images/badal2.png" alt="Description of the image" />
        <img src="/images/badal.png" alt="Description of the image" />
        <img src="/images/badal2.png" alt="Description of the image" />
        <img src="/images/badal.png" alt="Description of the image" />
        <img src="/images/badal2.png" alt="Description of the image" /> */}
        

        </div>
        <div className='contunir'>
            <div className='Animated-tital'>
                <h3>gamble for free</h3>
                <h2>earn points</h2>
                <ul>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M15.7492 14.6252H17.9994V16.8748H16.8743V18H14.6247V15.7503H13.4995V13.5H15.7492V14.6252ZM2.24962 14.6252H0V16.8748H1.12511V18H3.37473V15.7503H4.49985V13.5H2.25023V14.6252H2.24962ZM13.4995 4.5H14.6247V5.62515H15.7498V11.2503H14.6247V12.3755H12.375V14.6252H11.2499V13.5H10.1248V15.7503H7.87458V13.5H6.74947V14.6252H5.62435V12.3755H3.37473V11.2503H2.24962V5.62515H3.37473V4.5H4.49985V3.37485H5.62496V2.24969H12.375V3.37485H13.5002V4.5H13.4995ZM7.87458 10.1252V7.87546H6.74947V6.75031H4.49985V7.87546H3.37473V10.1252H4.49985V11.2503H6.74947V10.1252H7.87458ZM13.4995 7.87485V6.7497H11.2499V7.87485H10.1248V10.1245H8.99969V11.2497H7.87458V12.3748H10.1248V10.1245H11.2499V11.2497H13.4995V10.1245H14.6247V7.87485H13.4995ZM4.49985 3.37485V2.24969H3.37473V0H1.12511V1.12515H0V3.37485H2.24962V4.5H3.37473V3.37485H4.49985ZM16.8743 1.12515V0H14.6247V2.24969H13.4995V3.37485H14.6247V4.5H15.7498V3.37485H18V1.12515H16.8749H16.8743Z" fill="#FF5E4F"/>
</svg> <div  data-glitch="Click LAUNCH APP"className="glitch">Click LAUNCH APP </div></li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M15.7492 14.6252H17.9994V16.8748H16.8743V18H14.6247V15.7503H13.4995V13.5H15.7492V14.6252ZM2.24962 14.6252H0V16.8748H1.12511V18H3.37473V15.7503H4.49985V13.5H2.25023V14.6252H2.24962ZM13.4995 4.5H14.6247V5.62515H15.7498V11.2503H14.6247V12.3755H12.375V14.6252H11.2499V13.5H10.1248V15.7503H7.87458V13.5H6.74947V14.6252H5.62435V12.3755H3.37473V11.2503H2.24962V5.62515H3.37473V4.5H4.49985V3.37485H5.62496V2.24969H12.375V3.37485H13.5002V4.5H13.4995ZM7.87458 10.1252V7.87546H6.74947V6.75031H4.49985V7.87546H3.37473V10.1252H4.49985V11.2503H6.74947V10.1252H7.87458ZM13.4995 7.87485V6.7497H11.2499V7.87485H10.1248V10.1245H8.99969V11.2497H7.87458V12.3748H10.1248V10.1245H11.2499V11.2497H13.4995V10.1245H14.6247V7.87485H13.4995ZM4.49985 3.37485V2.24969H3.37473V0H1.12511V1.12515H0V3.37485H2.24962V4.5H3.37473V3.37485H4.49985ZM16.8743 1.12515V0H14.6247V2.24969H13.4995V3.37485H14.6247V4.5H15.7498V3.37485H18V1.12515H16.8749H16.8743Z" fill="#FF5E4F"/>
</svg> <div  data-glitch="Connect your wallet"className="glitch">Connect your wallet</div></li>
<li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M15.7492 14.6252H17.9994V16.8748H16.8743V18H14.6247V15.7503H13.4995V13.5H15.7492V14.6252ZM2.24962 14.6252H0V16.8748H1.12511V18H3.37473V15.7503H4.49985V13.5H2.25023V14.6252H2.24962ZM13.4995 4.5H14.6247V5.62515H15.7498V11.2503H14.6247V12.3755H12.375V14.6252H11.2499V13.5H10.1248V15.7503H7.87458V13.5H6.74947V14.6252H5.62435V12.3755H3.37473V11.2503H2.24962V5.62515H3.37473V4.5H4.49985V3.37485H5.62496V2.24969H12.375V3.37485H13.5002V4.5H13.4995ZM7.87458 10.1252V7.87546H6.74947V6.75031H4.49985V7.87546H3.37473V10.1252H4.49985V11.2503H6.74947V10.1252H7.87458ZM13.4995 7.87485V6.7497H11.2499V7.87485H10.1248V10.1245H8.99969V11.2497H7.87458V12.3748H10.1248V10.1245H11.2499V11.2497H13.4995V10.1245H14.6247V7.87485H13.4995ZM4.49985 3.37485V2.24969H3.37473V0H1.12511V1.12515H0V3.37485H2.24962V4.5H3.37473V3.37485H4.49985ZM16.8743 1.12515V0H14.6247V2.24969H13.4995V3.37485H14.6247V4.5H15.7498V3.37485H18V1.12515H16.8749H16.8743Z" fill="#FF5E4F"/>
</svg> <div  data-glitch="Enter your invite code"className="glitch">Enter your invite code </div></li>
                </ul>
                    <div className='Animated-btn-box'> 
                    <button className='launch'>launch app </button>
                    <button>learn more</button>
                    </div>
            </div>
        </div>

        <div className='play'>
        <img   src="/images/hello.png" alt="Description of the image" />
        <img className='blinker'  src="/images/play2.png" alt="Description of the image" />

        </div>
        </div>
        </section>

    </div>
   
  );
}
