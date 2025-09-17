import VideoContainer from "./(components)/VideoContainer";
import Landing from "./(components)/Landing";
import Services from "./(components)/Services";
import Equipe from "./(components)/Equipe";
import Handicap from "./(components)/Handicap";


export default function Home() {
  return (
    <div className="w-screen min-h-[200vh] relative overflow-x-hidden">
      <VideoContainer />
      <Landing />
      <Services />
      <Equipe />
      <Handicap />   
    </div >
  );
}

