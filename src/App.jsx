import "./App.css";
import Header from "./components/header";
import { FooterDev } from "./components/footer";

import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/home";
import ProfileDesa from "./pages/profilDesa";
import Listing from "./pages/listing";
import IDM from "./pages/infografis/idm";
import Berita from "./pages/berita";
import Belanja from "./pages/belanja";
import Pemerintah from "./pages/pemerintah";
import Galeri from "./pages/galeri";

import PPID from "./pages/ppid";

import Penduduk from "./pages/infografis/penduduk";
import APBDesa from "./pages/infografis/apbDesa";
import Stunting from "./pages/infografis/stunting";
import Bansos from "./pages/infografis/bansos";
import SDGs from "./pages/infografis/sdgs";

import DetailBerita from "./pages/detail/detailBerita";
import DetailBelanja from "./pages/detail/detailBelanja";
import PendudukAdmin from "./pages/admin/penduduk/penduduk";
import StuntingAdmin from "./pages/admin/stunting";
import APBDesaAdmin from "./pages/admin/apbdesa";
import BansosAdmin from "./pages/admin/bansos";
import SDGsAdmin from "./pages/admin/sdgs";
import IDMAdmin from "./pages/admin/IDM";
import NewsPageAdmin from "./pages/admin/news";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    // <BrowserRouter>
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/profile-desa" element={<ProfileDesa />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/pemerintah" element={<Pemerintah />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/infografis">
            <Route index element={<Penduduk />} />
            <Route path="idm" element={<IDM />} />
            <Route path="apb-desa" element={<APBDesa />} />
            <Route path="stunting" element={<Stunting />} />
            <Route path="bansos" element={<Bansos />} />
            <Route path="sdgs" element={<SDGs />} />
          </Route>

          {/* <Route path="/berita" element={<Berita />} /> */}

          <Route path="/berita">
            <Route index element={<Berita />} />
            <Route path=":id" element={<DetailBerita />} />
          </Route>

          <Route path="/belanja">
            <Route index element={<Belanja />} />
            <Route path=":id" element={<DetailBelanja />} />
          </Route>

          <Route path="/ppid">
            <Route index element={<PPID />} />
            <Route path="dasar-hukum" element={<IDM />} />
            <Route path="berkala" element={<APBDesa />} />
            <Route path="serta-merta" element={<Stunting />} />
            <Route path="setiap-saat" element={<Bansos />} />
          </Route>
        </Route>
        <Route path="/admin">
          <Route index element={<PendudukAdmin />} />
          <Route path="stunting" element={<StuntingAdmin />} />
          <Route path="apb-desa" element={<APBDesaAdmin />} />
          <Route path="bansos" element={<BansosAdmin />} />
          <Route path="idm" element={<IDMAdmin />} />
          <Route path="sdgs" element={<SDGsAdmin />} />
          <Route path="berita" element={<NewsPageAdmin />} />
          {/* <Route path="penduduk" element={<PendudukAdmin />} /> */}
        </Route>
        {/* <Route path="/infografis/penduduk" element={<Penduduk />} /> */}
      </Routes>
      {!isAdminRoute && <FooterDev />}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;