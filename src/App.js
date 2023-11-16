import logo from './logo512.png';
import './App.css';
import {useState} from "react"


function App() {

  const [currentText, setCurrentText] = useState("")
  const [ingrList, setIngrList] = useState([]); 


  function handleSubmit(e){
    e.preventDefault(); 

    if(currentText === "") return; 
    // create a new ingr based on the name of said ingr
    setIngrList((currentIngrList) =>{
      return [
        ...currentIngrList,
        {id: crypto.randomUUID(), name: currentText, image: require("./logo512.png")}
      ]
    })

    setCurrentText(""); 
  }

  function deleteIngredient(id )
  {
    setIngrList((currentIngrList)=>{
      return currentIngrList.filter(ingredient=> ingredient.id !== id); 
    })
  }


  console.log(ingrList) ; 
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Pantry Page Demo</h1>
        <input 
        className ="input"
        value = {currentText}
        type = "text"
        onChange={e =>setCurrentText(e.target.value)}
        id='item'
        />
        <button>Add</button>
      </form>

      <ul className='list'>
        {
          ingrList.map(ingredient =>{
            return (
              <li key={ingredient.id}>
                <img className ="ingrImg" src={ingredient.image}/>
                <h2>{ingredient.name}</h2>
                <button onClick = {()=> deleteIngredient(ingredient.id)}>Delete</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
