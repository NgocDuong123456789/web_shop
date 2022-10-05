import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Fragment} from 'react'
import "./App.css";
import { PublicRoute } from "./Component/Routes/Route";
import { DefaultLayout } from "./Component/Layouts/DefaultLayout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {PublicRoute.map((route, index) => {
             const Layouts = route.component;
            const Layout =route.check  === null ?  Fragment : DefaultLayout
           
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Layouts />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
