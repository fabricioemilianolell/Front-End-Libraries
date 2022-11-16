//componente preview 
const Preview = ( { texto }) => {

    //marked.js
    marked.setOptions({
      breaks:true
    })
  
    return (
      <div id="preview"
      dangerouslySetInnerHTML={{__html:marked(texto),}}
      > 
      </div>
    )
  }
                               
  //componente principal
  
  //https://www.markdownguide.org/cheat-sheet/ 
  
  function App() {
  
    const [texto, setTexto] = React.useState(
    `# H1
    ## H2
    ### H3
  
    [title](https://www.example.com)
    "code"
  
    \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  
  1.First item
  2.Second item
  3.Third item
   
  ![alt text](image.jpg)
  
  **bold text**`
    );
  
    return (
       <div className='contenedor'>
          <h1 className='title'>Welcome to my React Markdown Previewer!</h1>
      <div className="App">
        <textarea id="editor"
          value={texto}
        onChange={(e) => setTexto(e.target.value)}/>
        <Preview texto={texto}/>
        </div>
      </div>
      
    );
  }
  
  //renderizando - index.js
  ReactDOM.render(<App />,document.getElementById("root"))