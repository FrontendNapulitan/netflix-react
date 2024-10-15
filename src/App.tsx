import { Fragment } from "react/jsx-runtime";
import "./App.css";
import heroImg from "./assets/banner.jpg";
import Header from "./components/UI/Header/Header";

const App = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <Header></Header>
        <div className="hero">
          <div className="wrapperHeroContent">
            <div id="title">Film, serie TV e tanto altro, senza limiti</div>
            <div id="subtitle">A partire da 5,49 €. Disdici quando vuoi.</div>
            <div id="disclaimer">Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o riattivare il tuo abbonamento.</div>
            <div className="inputAndButton">
              <input type="text" placeholder="Indirizzo email" />
              <button>Inizia <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg></button>
              </div>
          </div>
        </div>
        <img src={heroImg} alt="banner" />
      </div>
    </Fragment>
  );
};

export default App;
