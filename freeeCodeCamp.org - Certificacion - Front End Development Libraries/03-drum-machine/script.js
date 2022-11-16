
//array de audios
const audios = [
    {
        identificador: 1,
        id: "Heater 1",
        letra: "Q",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        identificador: 2,
        id: "Heater 2",
        letra: "W",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        identificador: 3,
        id: "Heater 3",
        letra: "E",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        identificador: 4,
        id: "Heater 4",
        letra: "A",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        identificador: 5,
        id: "Clap",
        letra: "S",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        identificador: 6,
        id: "Open-HH",
        letra: "D",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        identificador: 7,
        id: "Kick-n'-Hat",
        letra: "Z",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        identificador: 8,
        id: "Kick",
        letra: "X",
        src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        identificador: 9,
        id: "Closed-HH",
        letra: "C",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
]

//Componente App
function App() {

  const valueID = audios.map(iterador =>  iterador.id);
  
  //state de audios.id
  const [idLetra, setIdLetra] = React.useState("Drum Machine");
  //state color teclas
  const [color, setColor] = React.useState(false);

  
  //evento del teclado
  React.useEffect(() => {
    document.addEventListener("keydown", function(e) {
      escucharAudio(e.key.toUpperCase());
    })
        
    return () => {
    }
    
  }, [])


  //function audio - letra
  const escucharAudio = (valueLetra) => {
    const audioID = document.getElementById(valueLetra);
    setColor(true);
    setTimeout(() => {
      setColor(false)
    }, 300);
    audioID.currentTime = 0;
    audioID.play(); //disparar src audio
      //condicional audios.id
    if(valueLetra === "Q") {
      setIdLetra(valueID[0])
    } else if (valueLetra === "W") {
      setIdLetra(valueID[1])
    } else if (valueLetra === "E") {
      setIdLetra(valueID[2])
    } else if (valueLetra === "A") {
      setIdLetra(valueID[3])
    } else if (valueLetra === "S") {
      setIdLetra(valueID[4])
    } else if (valueLetra === "D") {
      setIdLetra(valueID[5])
    } else if (valueLetra === "Z") {
      setIdLetra(valueID[6])
    } else if (valueLetra === "X") {
      setIdLetra(valueID[7])
    } else if (valueLetra === "C") {
      setIdLetra(valueID[8]) 
    } else {
      setIdLetra("play") 
    } 
  }

 
  return (
    <div className="App">
       <div id="drum-machine">
            <div id='display' className={`${color && "btn-color"}`}>{idLetra}</div>
            <div className='contenedor-clickLetras'>
              {
              audios.map(el => {
                return <div 
                          onClick={ () => escucharAudio(el.letra)} 
                          className="drum-pad" 
                          key={el.identificador} 
                          id={el.id}>
                            {el.letra}
                            <audio src={el.src} className='clip' id={el.letra}/>
                        </div>
              })
              }
            </div>
        </div>
    </div>
  );
}



ReactDOM.render(<App />,document.getElementById("root"))