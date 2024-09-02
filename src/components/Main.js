import React from 'react';
import '../components/Main.css';
import img1 from '../data/car.jpg';
import img2 from '../data/computer.jpg';
import img3 from '../data/cranes.jpg';
import img4 from '../data/coding.jpg';
import img5 from '../data/everest.jpg';
import img6 from '../data/motorbike.jpg';
import img7 from '../data/news.jpg';
import img8 from '../data/tajmahal.jpg';
import img9 from '../data/vlog.jpg';
function SideBar(){
    return(
        <div className="Section">
            <div className='SideBar'>
                <div className='SideLogo'>
                    <i class="fa-brands fa-youtube"></i><span></span>YouTube
                </div>
                <div className='SideItem'>
                    <i class="fa-solid fa-house"></i><span></span>Home
                </div>
                <div className='SideItem'>
                    <i className="fa-solid fa-fire"></i><span></span>Trending
                </div>
                <div className='SideItem'>
                    <i className="fa-solid fa-tv"></i><span></span>Subscriptions
                </div>
                <div className='SideItem'>
                    <i className="fa-solid fa-book"></i><span></span>Library
                </div>
                <div className='SideItem'>
                    <i className="fa-solid fa-clock-rotate-left"></i><span></span>History
                </div>
            </div>
            <div className='content'>
                <div className='NavBar'>
                <div className='Header'>
                    <input type="text" className="search-bar" placeholder="Search" /><span></span><i class="fa-solid fa-magnifying-glass"></i>
                </div>
                </div>
                <div className='video'>
                    <div className='video-container'>
                        <img src={img1} alt='car'></img>
                        <div className='info'>
                            <div className='title'>My FIRST RACE in Formula 4</div>
                            <div className='description'>Bass Kerala <br></br>21.4M views &#x2022; 2 years ago</div>
                        </div>
                    </div>
                    <div className='video-container'>
                        <img src={img2} alt='tech'></img>
                        <div className='info'>
                            <div className='title'>I bought the World's RAREST Tech!</div>
                            <div className='description'>Mrwhosetheboss<br></br>60 lakh views &#x2022; 2 months ago</div>
                        </div>
                    </div>
                    <div className='video-container'>
                        <img src={img3} alt='cranes'></img>
                        <div className='info'>
                            <div className='title'>Kaja Puyal storm live attack to Pamban</div>
                            <div className='description'>SVR daily<br></br>27k views &#x2022; 5 years ago</div>
                        </div>
                    </div>
                    <div className='video-container'>
                        <img src={img4} alt='coding'></img>
                        <div className='info'>
                            <div className='title'>How to Start Coding?</div>
                            <div className='description'>Apna college <br></br>76 lakhs views &#x2022; 2 years ago</div>
                        </div>
                    </div>
                    <div className='video-container'>
                        <img src={img5} alt='mount'></img>
                        <div className='info'>
                            <div className='title'>Death on Mt. Everest</div>
                            <div className='description'>ITCOG <br></br>37 lakh views &#x2022; 2 years ago</div>
                        </div>
                    </div>
                    <div className='video-container'>
                        <img src={img6} alt='motorbike'></img>
                        <div className='info'>
                            <div className='title'>Top 5 last lap battles in 2019</div>
                            <div className='description'>MotoGP <br></br>2.6 crore views &#x2022; 4 years ago</div>
                        </div>
                    </div>
                    <div className='video-container'>
                        <img src={img7} alt='news'></img>
                        <div className='info'>
                            <div className='title'>Wolf attacks in Uttar Pradesh</div>
                            <div className='description'>India Today<br></br>12 lakh views &#x2022; Updated 4 hours ago</div>
                        </div>
                    </div>
                    <div className='video-container'>
                        <img src={img8} alt='tajmahal'></img>
                        <div className='info'>
                            <div className='title'>TAJ MAHAL (Agra, India): full tour</div>
                            <div className='description'>the luxury<br></br>62 lakh views &#x2022; 4 years ago</div>
                        </div>
                    </div>
                    <div className='video-container'>
                        <img src={img9} alt='vlog'></img>
                        <div className='info'>
                            <div className='title'>Playing TOILET PAPER GAME </div>
                            <div className='description'>Sourav's vlog<br></br>35 lakh views &#x2022; 3 days ago</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideBar;