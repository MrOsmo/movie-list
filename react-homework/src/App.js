import './App.css';
import Heading from './Components/Heading/Heading';
import Pictures from './Components/Pictures/Pictures';
import Movies from './Components/Movies/Movies';

function App() {

  return (
    <div className="movie-layout">
      <header className="movie-background">
        <div className="movie-search">
          <div className="movie-inputs">
            <Heading text="● Movie List ●" />
            <div className='movie-pictures'>
           <Pictures image="https://www.guiltybit.com/wp-content/uploads/2022/04/doctor-strange-nuevo-poster.webp" imageHeading ="Doctor Strange in the Multiverse of Madness"/>
           <Pictures image="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQQIs-UXdn4HJuBLnIfVUzByRW7w_-Vy5kp5R7vNZNo_1KtZ828zGj4PC6uNFvkrFLbcQZ5RIPtrMVk8GTXCvHoXA0_BMdfKnjNKccpSSVcLIHrs8JR9iPWK.jpg?r=f29" imageHeading ="Wednesday"/>
           <Pictures image="https://static.kino.de/9c/52/96/cf4f27a495a46468bb376bb7de_ZmMgN2EyNDMxN2FmZmZmIDE5MjAgMTA4MAM5MmNmYTU2ODNiZA==_92fa4d1e329defd4f1b22c3034_yyaxmdiwedu3ncsykzewmwjyzsaxotiwidewodadmwm5yteyztriyzm.jpg" imageHeading ="Jumanji"/>
           <Pictures image="https://i-viaplay-com.akamaized.net/viaplay-prod/298/856/1576846577-6224bd6b2221a71985e08f8fab45dacdd2ac00ee.jpg?width=1600&height=900" imageHeading ="Joker"/>
           <Pictures image="https://images-0.rakuten.tv/storage/snapshot/shot/f9308318-4167-4c45-8256-5e127715bb38-harry-potter-and-the-philosopher-s-stone-1627298696-width936-quality90.jpeg" imageHeading ="Harry Potter"/>
            </div>
           <Movies/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
