import { Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
