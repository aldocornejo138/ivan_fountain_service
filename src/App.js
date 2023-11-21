import { Route, Routes } from "react-router-dom";
import Riverside from "./components/locations/Riverside.js";
import Corona from "./components/locations/Corona.js";
import Home from "./components/home/Home.js";
import ScrollToTop from "./components/constants/ScrollToTop.js";
import MorenoValley from "./components/locations/MorenoValley.js";
import Temecula from "./components/locations/Temecula.js";
import Hemet from "./components/locations/Hemet.js";
import LakeElsinore from "./components/locations/LakeElsinore.js";
import Poway from "./components/locations/Poway.js";
import SanDiego from "./components/locations/SanDiego.js";
import SanMarcos from "./components/locations/SanMarcos.js";
import RanchoMirage from "./components/locations/RanchoMirage.js";
import PalmSprings from "./components/locations/PalmSprings.js";
import Indio from "./components/locations/Indio.js";
import Carlsbad from "./components/locations/Carlsbad.js";
import ChulaVista from "./components/locations/ChulaVista.js";
import ElCajon from "./components/locations/ElCajon.js";
import Encinitas from "./components/locations/Encinitas.js";
import Escondido from "./components/locations/Escondido.js";
import Oceanside from "./components/locations/Oceanside.js";
import Vista from "./components/locations/Vista.js";
import RanchoSantaFe from "./components/locations/RanchoSantaFe.js";
import FallBrook from "./components/locations/FallBrooke.js";
import CathedralCity from "./components/locations/CathedralCity.js";
import PalmDesert from "./components/locations/PalmDesert.js";
import LaQuinta from "./components/locations/LaQuinta.js";
import Murrieta from "./components/locations/Murrieta.js";
import FrenchValley from "./components/locations/FrenchValley.js";
import Menifee from "./components/locations/Menifee.js";
import Wildomar from "./components/locations/Wildomar.js";
import LosAngeles from "./components/locations/LosAngeles.js";
import SantaAna from "./components/locations/SantaAna.js";
import Irvine from "./components/locations/Irvine.js";
import Anaheim from "./components/locations/Anaheim.js";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fountain-service-riverside" element={<Riverside />} />
        <Route path="/fountain-service-corona" element={<Corona />} />
        <Route
          path="/fountain-service-moreno-valley"
          element={<MorenoValley />}
        />
        <Route path="/fountain-service-temecula" element={<Temecula />} />
        <Route path="/fountain-service-hemet" element={<Hemet />} />
        <Route
          path="/fountain-service-lake-elsinore"
          element={<LakeElsinore />}
        />
        <Route path="/fountain-service-poway" element={<Poway />} />
        <Route path="/fountain-service-san-diego" element={<SanDiego />} />
        <Route path="/fountain-service-san-marcos" element={<SanMarcos />} />
        <Route
          path="/fountain-service-rancho-mirage"
          element={<RanchoMirage />}
        />
        <Route
          path="/fountain-service-palm-springs"
          element={<PalmSprings />}
        />
        <Route path="/fountain-service-oceanside" element={<Oceanside />} />
        <Route path="/fountain-service-vista-ca" element={<Vista />} />
        <Route path="/fountain-service-vista" element={<Vista />} />
        <Route path="/fountain-service-indio" element={<Indio />} />
        <Route path="/rancho-santa-fe" element={<RanchoSantaFe />} />
        <Route
          path="/fountain-service-rancho-santa-fe"
          element={<RanchoSantaFe />}
        />
        <Route path="/fountain-service-fallbrook" element={<FallBrook />} />
        <Route
          path="/fountain-service-cathedral-city"
          element={<CathedralCity />}
        />
        <Route path="/fountain-service-palm-desert" element={<PalmDesert />} />
        <Route path="/fountain-service-la-quinta" element={<LaQuinta />} />
        <Route path="/fountain-service-escondido" element={<Escondido />} />
        <Route path="/fountain-service-carlsbad" element={<Carlsbad />} />
        <Route path="/outdoor-fountains-chula-vista" element={<ChulaVista />} />
        <Route path="/fountain-service-chula-vista" element={<ChulaVista />} />

        <Route path="/fountain-service-el-cajon" element={<ElCajon />} />
        <Route path="/fountains-encinitas" element={<Encinitas />} />
        <Route path="/fountain-service-encinitas" element={<Encinitas />} />
        <Route path="/fountain-service-murrieta" element={<Murrieta />} />
        <Route
          path="/fountain-service-french-valley"
          element={<FrenchValley />}
        />
        <Route path="/fountain-service-menifee" element={<Menifee />} />
        <Route path="/fountain-service-wildomar" element={<Wildomar />} />
        <Route path="/fountain-service-los-angeles" element={<LosAngeles />} />
        <Route path="/fountain-service-santa-ana" element={<SantaAna />} />
        <Route path="/fountain-service-irvine" element={<Irvine />} />
        <Route path="/fountain-service-anaheim" element={<Anaheim />} />
      </Routes>
    </div>
  );
}

export default App;
