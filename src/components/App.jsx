import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import Jugadores from "./Jugadores";
import EquipoSeleccionado from "./EquipoSeleccionado";

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Equipo final</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
);

export default App;
