import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "El chicho",
      foto:
        "https://pm1.narvii.com/7256/bbf5a71dc7f4df9b5291d36b885b404f657e3c59r1-770-504v2_128.jpg",
    },
    {
      id: 2,
      nombre: "Torpedo Lopez",
      foto:
        "https://www.bitbol.la/files/image/24/24617/6189733876181_1024_520!.jpg?s=f18ead517b942f0953a85b40091a0890&d=1636472209",
    },
    {
      id: 3,
      nombre: "Moco Rodriguez",
      foto:
        "https://i.pinimg.com/280x280_RS/58/bc/e5/58bce5548986cf5ba9c2824dfdae199d.jpg",
    },
    {
      id: 4,
      nombre: "Julian Goal",
      foto:
        "https://www.fcbayernmexico.com/wp-content/uploads/thomas-muller-bayern-munich-2019-20_1vme8n8jgzey51r4nmvk920ke7.jpg",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }
  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }
  if (action.type === "QUITAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }
  if (action.type === "QUITAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }

  return state;
};

export default createStore(reducerEntrenador);
