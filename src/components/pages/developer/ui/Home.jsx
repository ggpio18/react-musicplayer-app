import React from 'react'
import { FaCompass, FaPodcast, FaMusic, FaUser, FaCalendarAlt, FaHistory, FaHeart, FaDownload, FaUserCircle} from 'react-icons/fa';

const Home = () => {
  return (
    <>
        <div className="flex bg-[#1e1b2e] text-white min-h-screen">
      <aside className="sidebar w-1/6 bg-[#0b0a13] h-screen p-8 rounded-l-2xl">
        <div className="mb-8">
          <ul className="space-y-4">
            <li className="flex items-center space-x-2"><FaCompass /> <span>Explore</span></li>
            <li className="flex items-center space-x-2"><FaPodcast /> <span>Podcast</span></li>
            <li className="flex items-center space-x-2"><FaMusic /> <span>Albums</span></li>
            <li className="flex items-center space-x-2"><FaUser /> <span>Artists</span></li>
            <li className="flex items-center space-x-2"><FaCalendarAlt /> <span>Events</span></li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-gray-400">My Music</h3>
          <ul className="space-y-4 mt-2">
            <li className="flex items-center space-x-2"><FaHistory /> <span>Recently Played</span></li>
            <li className="flex items-center space-x-2"><FaHeart /> <span>Favorite Songs</span></li>
            <li className="flex items-center space-x-2"><FaDownload /> <span>Local Files</span></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-400">Playlists</h3>
          <ul className="space-y-4 mt-2">
            <li>My Daily Mix</li>
            <li>Good Vibes</li>
            <li>Tropical House</li>
            <li>Happy Chill Good</li>
          </ul>
        </div>
      </aside>

      <main className="main-content flex-1 flex flex-col bg-[#131225] rounded-t-2xl p-8">
        <div className="header flex justify-between items-center mb-8 bg-[#f03d72] rounded-2xl p-4">
          <input type="text" placeholder="Search for music, artists etc." className="flex-grow bg-transparent text-white placeholder-gray-400 p-2" />
          <div className="flex items-center ml-4">
            <FaUserCircle className="text-2xl" />
            <span className="ml-2">Pio Aranza</span>
          </div>
        </div>

        <div className="content flex flex-col space-y-8">
          <div>
            <h2 className="text-2xl">New Albums</h2>
            <div className="flex space-x-4 mt-4">
              <div className="highlight bg-[#f03d72] p-4 rounded-lg">
                <img src="https://placehold.co/150x150" alt="Album cover" className="rounded-md" />
                <p>Ghostmusic</p>
                <p>Devna</p>
              </div>
              <div>
                <img src="https://placehold.co/150x150" alt="Album cover" className="rounded-md" />
                <p>Freaking Me Out</p>
                <p>Ava Max</p>
              </div>
              <div>
                <img src="https://placehold.co/150x150" alt="Album cover" className="rounded-md" />
                <p>Electro Collection</p>
                <p>Deep City</p>
              </div>
              <div>
                <img src="https://placehold.co/150x150" alt="Album cover" className="rounded-md" />
                <p>The Alley</p>
                <p>Currice</p>
              </div>
              <div>
                <img src="https://placehold.co/150x150" alt="Album cover" className="rounded-md" />
                <p>Party Dancer</p>
                <p>DJ Khaled</p>
              </div>
              <div>
                <img src="https://placehold.co/150x150" alt="Album cover" className="rounded-md" />
                <p>Summer Vibes</p>
                <p>Ghostmusic</p>
              </div>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="w-1/2 gap-5">
              <h2 className="text-2xl">Top Charts</h2>
              <ul className="space-y-2 mt-4">
                <li className="highlight flex justify-between items-center p-2 bg-[#f03d72] rounded-lg">
                  <span>Go Away Girl Mix</span>
                  <span>3:28</span>
                  <FaHeart />
                </li>
                <li className="flex justify-between items-center p-2">
                  <span>Abstract Walking</span>
                  <span>2:47</span>
                  <FaHeart />
                </li>
                <li className="flex justify-between items-center p-2">
                  <span>Hotline Miami Mix</span>
                  <span>2:52</span>
                  <FaHeart />
                </li>
                <li className="flex justify-between items-center p-2">
                  <span>Getting Over You</span>
                  <span>4:15</span>
                  <FaHeart />
                </li>
                <li className="flex justify-between items-center p-2">
                  <span>The Subway Song</span>
                  <span>3:01</span>
                  <FaHeart />
                </li>
              </ul>
            </div>

            <div className="w-1/2">
              <h2 className="text-2xl">Playlists</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <img src="https://placehold.co/100x100" alt="Playlist cover" className="rounded-md" />
                  <p>Summer Vibes</p>
                </div>
                <div>
                  <img src="https://placehold.co/100x100" alt="Playlist cover" className="rounded-md" />
                  <p>Mind Right</p>
                </div>
                <div>
                  <img src="https://placehold.co/100x100" alt="Playlist cover" className="rounded-md" />
                  <p>Ultimate Indie</p>
                </div>
                <div>
                  <img src="https://placehold.co/100x100" alt="Playlist cover" className="rounded-md" />
                  <p>Jazzy Dinner</p>
                </div>
                <div>
                  <img src="https://placehold.co/100x100" alt="Playlist cover" className="rounded-md" />
                  <p>Pop Hits</p>
                </div>
                <div>
                  <img src="https://placehold.co/100x100" alt="Playlist cover" className="rounded-md" />
                  <p>Roots Rising</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="playback-bar fixed bottom-0 left-0 right-0 flex justify-between items-center bg-[#f03d72] p-4 rounded-t-2xl">
          <img src="https://placehold.co/50x50" alt="Current track cover" className="rounded-md" />
          <div className="flex flex-col items-center">
            <span>Go Away Girl Mix</span>
            <span>Swanky Tunes</span>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default Home