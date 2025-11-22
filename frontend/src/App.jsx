import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  let [apps,setApps] = useState([])
  let [topapps,setTopApps] = useState([])
  const [search,setSearch] = useState("")
  const getapps = async()=>{
      try {
        const {data} = await axios.get("http://localhost:8080/apps")
        if(data){
          setApps(data);
          setTopApps(data);
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    useEffect(() => {
      getapps()
    }, [])
    if(search){
      apps = apps.filter((app)=>{
        const searchTerm = search.toLowerCase();
        return (
          app.name.toLowerCase().includes(searchTerm) || 
          app.description.toLowerCase().includes(searchTerm)
        );
      });
    }
  return (
    <>
    <header className="nav">
  
      <div className="nav-left">
        <img
          src="/src/images/google-play_732208.png"
          alt="Play Store Logo"
          className="nav-logo"
        />
        <span className="nav-title">Play Store</span>
      </div>

    
      <nav className="nav-menu">
        <a href="#">Home</a>
        <a href="#">Notifications</a>
        <a href="#">About</a>
      </nav>

     
      <button className="profile-btn">Profile</button>
    </header>
    <div className='para'>
      <div><h1>Market place of apps</h1></div>
      <div className='subpara'>Boost your efficiency with smart features.
Clean UI, quick performance, zero hassle.
Get things done effortlessly.</div>
<div><img id='mainimg' src='/src/images/ChatGPT_Image_Nov_19__2025__10_12_15_AM-removebg-preview 1.png'/></div>
<div></div>
    </div>

    <div className='topcontainer'>
      <div><h2>Top Apps</h2></div>
      <div>
      <div className='appscontainer'>{topapps.map(topapp=>(
        <div key={topapp._id}>{topapp.top === "yes" ? <Card name={topapp.name.toUpperCase()} description={topapp.description} stars={topapp.stars} img={topapp.img}/>:""}</div>
      ))}</div>
      </div>
    </div>
    <div>
<input value={search} onChange={e=>setSearch(e.target.value)} class="input" name="text" placeholder="Search..." type="search"/></div>
    <div className='topcontainer'>
      <div><h2>All Apps</h2></div>
     <div className='appscontainer_'>{apps.map(app=>(
        <div key={app._id}><Card name={app.name.toUpperCase()} description={app.description} stars={app.stars} img={app.img}/></div>
      ))}</div>
    </div>
    <div className='footer'><div className='ft '>
      <div className='logo_'>
        <img
          src="/src/images/google-play_732208.png"
          alt="Play Store Logo"
         
        />
        <span>Play Store</span>
      </div>
      <div id='fp'>Thank you for choosing our app.
We’re committed to delivering a smooth and reliable experience.
Your feedback helps us improve with every update.</div>
      <div><img src='/src/images/Social Icons.png'/></div>
      </div>
      <div className='ft'><div>Site Map</div>
      <div id='fs'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Resources & News</a>
        <a href='#'>Contact</a>
        </div></div>
      <div className='ft'><div>Legal</div>
      <div id='fs'>
        <a href='#'>Privacy Policy</a>
        <a href='#'>Terms of services</a>
        </div>
      </div></div>
    </>
  )
}

export default App
