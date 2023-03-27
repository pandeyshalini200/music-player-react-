import { useEffect, useState } from "react";
import Players from "./Components/Players";


function App() {

  const [songs] = useState([
    {
      title: "mere liye",
      artist: "Akhil Sachdeva",
      img_src: "./images/mere liye.jpeg",
      src: "./songs/Mere Liye - Broken but Beautiful Season 3 128 Kbps.mp3"
    },
    {
      title: "apna bana le",
      artist: "Arijit Singh",
      img_src: "./images/apna bna le.jpeg",
      src: "./songs/Apna-Bana-Le(PagalWorld).mp3"
    },
    {
      title: "Beharam Rang",
      artist: "Shilpa Rao",
      img_src: "./images/besharamrang.jpeg",
      src: "./songs/128-Besharam RanG -Pathaan 128 Kbps.mp3"
    },
    {
      title: "Har Har Shambhu",
      artist: "Jeetu Sharma",
      img_src: "./images/har har shambhoo.jpeg",
      src: "./songs/Har Har Shambhu Shiv Mahadeva Jeetu Sharma 128 Kbps.mp3"
    },
    {
      title: "Jaani tera na",
      artist: "sunanda sharma",
      img_src: "./images/Jaani-Tera-Naa.jpeg",
      src: "./songs/Jaani_Tera_Naa_1.mp3"
    },
    {
      title: "Kahani Suno",
      artist: "Kaifi Khalil",
      img_src: "./images/kahanisuno.jpeg",
      src: "./songs/Kahani Suno 2 Kaifi Khalil 128 Kbps.mp3"
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(()=>{
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  },[currentSongIndex, songs.length])


  return (
    <div className="App">
      <Players
        currentSongIndex = {currentSongIndex}
        setCurrentSongIndex = {setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs = {songs}
      />
    </div>
  );
}

export default App;
