
//Componente principal - lógica calculadora
function Calculadora() {
  
    const [input, setInput] = React.useState(0);
    const [output, setOutput] = React.useState(0);
  
    const operadores = ["+","/","*","-"];
    const [operador1,operador2,operador3,operador4] = operadores;
    
      const valores = {
      value1: 1,
      value2: 2,
      value3: -1,
      value4: -2,
    };
    
    const {value1,value2,value3,value4} = valores;
    const noEsNumber = isNaN;
    
    
    //inputs numeros
    const entradaNumeros = (e) => {
      if (input === 0 && e.target.textContent === "0") {
        setInput(parseFloat(e.target.textContent));
        
      } else if (input === 0) {
        setInput(e.target.textContent);
        setOutput(e.target.textContent);
        
      } else if (
        noEsNumber(output.charAt(output.length - value1)) &&
        noEsNumber(output.charAt(output.length - value2)) &&
        output.charAt(output.length - value3) !== "."
      ) {
        setOutput((resultadoPrevio) => resultadoPrevio.slice(0, value3));
        setOutput((resultadoPrevio) => resultadoPrevio + "-" + e.target.textContent);
        setInput(e.target.textContent);
        
      } else if ( 
        (!(input === operador1)) && (!(input === operador2)) && (!(input === operador3)) && (!(input === operador4))
  
      ) {
        setInput(input + e.target.textContent);
        setOutput(output + e.target.textContent);
        
      } else if (!(input === Number)) {
        setOutput(output + e.target.textContent);
        setInput(e.target.textContent);
      } else if (input.includes(".")) {
        setInput(input + e.target.textContent);
        setOutput(output + e.target.textContent);
      }
    }
    
    
    //operadores
    const administrarOperadores = (e) => {
      if (e.target.textContent === operador4 && input !== Number) {
        if (
          noEsNumber(output.charAt(output.length - value1)) &&  
          noEsNumber(output.charAt(output.length - value2))
        ) {
          setInput(e.target.textContent);
         
        } else {
          setOutput(output + e.target.textContent);
          setInput(e.target.textContent);
         
        }
      } else if (noEsNumber(input)) {
        if (
          noEsNumber(output.charAt(output.length - value1)) &&
          noEsNumber(output.charAt(output.length - value2))
        ) {
          setOutput(output.slice(0, value4) + e.target.textContent);
         
        } else {
          setOutput(output.slice(0, value3) + e.target.textContent);
          setInput(e.target.textContent);
          
        }
      } else {
        setOutput((resultadoPrevio) => resultadoPrevio + e.target.textContent);
        setInput(e.target.textContent);
        
      }
    }
  
  
    //decimales - punto
    const puntoDecimal = (e) => {
      if (noEsNumber(input)) {
        setInput(".");
        setOutput(output + e.target.textContent);
        
      } else if (input.includes(".")) {
        setInput(input);
        
      } else if (
        (!(input === operador1)) || (!(input === operador2)) || (!(input === operador3)) || (!(input === operador4))
      ) {
        setInput(input + e.target.textContent);
        setOutput(output + e.target.textContent);
        
      }
    }
    
    
    //eval calcular = 
    const resultadoCalculadora = () => {
      setOutput(eval(output));
      setInput(eval(output));
    }
    
    
    //btn clear
     const limpiarCalculadora = () =>  {
      setInput(0);
      setOutput(0);
    }
  
  //renderizado componente calculadoraHTML
    return (
      <CalculadoraHTML 
      output={output} 
      input={input} 
      entradaNumeros={entradaNumeros} 
      administrarOperadores={administrarOperadores} 
      puntoDecimal={puntoDecimal} 
      resultadoCalculadora={resultadoCalculadora} 
      limpiarCalculadora={limpiarCalculadora}
      />
    );
  }
  
  
  //Componente HTML
   const CalculadoraHTML = ( { output, input, entradaNumeros, administrarOperadores, puntoDecimal, resultadoCalculadora, limpiarCalculadora }) => {
    return (
      <div className="App">
        <div className='contenedor-calculadora'>
           <div id="pantalla">{output}
             <div id="display">{input}</div>
            </div>
           
            <div className='fila'>
              <button onClick={entradaNumeros} className='boton-contenedor' id="seven">7</button>
              <button onClick={entradaNumeros} className='boton-contenedor' id="eight">8</button>
              <button onClick={entradaNumeros} className='boton-contenedor' id="nine">9</button>
              <button onClick={administrarOperadores} className='boton-contenedor' id="multiply">*</button>
            </div>
          
            <div className='fila'>
              <button onClick={entradaNumeros} className='boton-contenedor' id="four">4</button>
              <button onClick={entradaNumeros} className='boton-contenedor' id="five">5</button>
              <button onClick={entradaNumeros} className='boton-contenedor' id="six">6</button>
              <button onClick={administrarOperadores}  className='boton-contenedor' id="subtract">-</button>
            </div>
          
            <div className='fila'>
              <button onClick={entradaNumeros} className='boton-contenedor' id="one">1</button>
              <button onClick={entradaNumeros} className='boton-contenedor' id="two">2</button>
              <button onClick={entradaNumeros} className='boton-contenedor' id="three">3</button>
              <button onClick={administrarOperadores} className='boton-contenedor' id="add">+</button>
            </div>
  
            <div className='fila'>
              <button onClick={puntoDecimal} className='boton-contenedor' id="decimal">.</button>
              <button onClick={entradaNumeros} className='boton-contenedor' id="zero">0</button>
              <button onClick={administrarOperadores} className='boton-contenedor' id="divide">/</button>
              <button onClick={resultadoCalculadora} className='boton-contenedor' id="equals">=</button>
            </div>
            
            <div className='fila'>
            <button className='boton-clear' id="clear"
            onClick={limpiarCalculadora}>Clear</button>
            </div>
       
        </div>
      </div>
    )
  }
     
  
  
  ReactDOM.render(<Calculadora />,document.getElementById("root"))