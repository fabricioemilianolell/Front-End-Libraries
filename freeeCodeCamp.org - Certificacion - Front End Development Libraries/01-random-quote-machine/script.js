

//componente citas aleatorias y color aleatorio
const RandomQuote = ( { random, quotesAleatorio, color }) => {
  
    return (
        <div className="contenedor" style={{backgroundColor: color}}>

            <div id="quote-box">
                <p id="text" style={{color: color}}>{ random.text }</p>
                <h3 id="author" style={{color: color}}>- {  random.author } </h3>
                <div id="contenedor-btn">
                    <button 
                    id="new-quote"
                    style={{backgroundColor: color}}
                    onClick={quotesAleatorio}>
                        New Quote
                    </button>
                    <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" style={{backgroundColor: color}}>Twitter</a>
                </div>
            </div>
        
        </div>
  )
}



//citas texto - autor
const RandomQuotations = [
    {
        text: "I get up every morning determined to both change the world and have one hell of a good time. Sometimes this makes planning my day difficult.",
        author: "E. B. White"
    },
    {
        text: "If two men agree on everything, you may be sure that one of them is doing the thinking.",
        author: "Lyndon B. Johnson"
    },
    {
        text: "We cannot control the evil tongues of others; but a good life enables us to disregard them.",
        author: "Cato the Elder"
    },
    {
        text: "In general we are least aware of what our minds do best.",
        author: "Marvin Minsky"
    },
    {
        text: "To be one's self, and unafraid whether right or wrong, is more admirable than the easy cowardice of surrender to conformity.",
        author: "Irving Wallace"
    },
    {
        text: "Life is too short for traffic.",
        author: "Dan Bellack"
    },
    {
        text: "I don't know how to have casual conversation. You think you're talking about one thing, and either you are and it's incredibly boring, or you're not because it's subtext and you need a decoder ring.",
        author: "Sara B. Cooper"
    },
    {
        text: "[S]he refused to be bored chiefly because she wasn’t boring.",
        author: "Zelda Fitzgerald,"
    },
    {
        text: "If it doesn't feel right, don't do it. That's the lesson. That lesson alone, will save you a lot of grief. Even doubt means don't.",
        author: "Oprah Winfrey "
    },
    {
        text: "Hide not your talents, they for use were made. What's a sun-dial in the shade?",
        author: "Benjamin Franklin"
    },
    {
        text: "Ultimately, the only power to which man should aspire is that which he exercises over himself.",
        author: "Elie Wiesel "
    }  
];


//componente principal
function App() {
  
  //state frases aleatorias
  const [random, setRandom] = React.useState(RandomQuotations[0]);
  //state color aleatorio
  const [color, setColor] = React.useState("#CCEEGG")

  
  //función - frases aleatorias - color aleatorio
  const randomQuotesAleatorio = () => {
      const frasesAleatorias = Math.floor(Math.random() * RandomQuotations.length);
      setRandom(RandomQuotations[frasesAleatorias])

      //color aleatorio
      const arrayBackground = ["#5F9EA0","#00008B","#A52A2A","#8A2BE2","#FF7F50","#FF1493", "#8FBC8F", "#BDB76B"];
      const backgroundAleatorias = Math.floor(Math.random() * arrayBackground.length);
      setColor(arrayBackground[backgroundAleatorias]);
    };


  return (
    <div className="App">
        <RandomQuote random={random} quotesAleatorio={randomQuotesAleatorio} color={color}/>
    </div>
  );
}



ReactDOM.render(<App />,document.getElementById("root"))