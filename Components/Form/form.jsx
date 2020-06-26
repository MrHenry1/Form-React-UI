import React, {useState} from 'react'


function Fields(props) {
  
  const [visible, setVisible] = useState("password")
  const [count, setCount] = useState(0)
  const [num, setNumber] = useState(0)
  const [pais, setPais] = useState("")
  const [phone, setPhone] = useState(null)
  const [age, setAge] = useState(null)
  const [yearcount, setYear] = useState(0)
  
  function handlePaisChange(event) {
    const {value, maxLength} = event.target
    const textPs = value.slice(0, maxLength)
    
    setPais(textPs.toUpperCase())
    
    if(value.split("").length <= 2) {
      setCount(value.length)
    }
  }
  
  function handlePhoneChange(event) {
    const { value, maxLength } = event.target
    const numberPhone = value.slice(0, maxLength)
    
    setPhone(numberPhone)
    
    if (value.split("").length <= 10) {
      setNumber(value.length)
    }
  }
  
  function handleAgeChange(event) {
    const { value, maxLength } = event.target
    const numberAge = value.slice(0, maxLength)
    
    setAge(numberAge)
    
    if (value.split("").length <= 2) {
      setYear(value.length)
    }
  }
  
  return (
    <div id="form">
      <h1>Form</h1>
          <form props>
            <fieldset>
              <legend>Nome</legend>
              <span><i class="far fa-user"></i></span>
              <input type="name" placeholder="E.x: Reginaldo Soares Santos Silva" required></input>
            </fieldset>
            <fieldset>
               <legend>Idade</legend>
               <span><i class="fas fa-baby"></i></span>
               <input type="number" placeholder="E.x: 29" value={age} maxLength="2" onChange={(e) => handleAgeChange(e)} required></input>
               <p>{yearcount}/2</p>
            </fieldset>
            <fieldset>
               <legend>Email</legend>
               <span><i class="fas fa-envelope"></i></span>
               <input type="email" placeholder="E.x: fulano@gmail.com" required></input>
            </fieldset>
            <fieldset>
               <legend>Senha</legend>
               <span>{visible === 'text' ? <i onClick={() => setVisible('password')} class="fas fa-eye-slash"></i> : <i onClick={() => setVisible('text')} class="fas fa-eye"></i>
               }</span>
               <input type={visible} placeholder="Sua Senha" required></input>
               
            </fieldset>
            <fieldset>
               <legend>Telefone</legend>
               <span><i class="fas fa-phone-square-alt"></i></span>
               <input type="number" placeholder="E.x: 8389762325" value={phone} maxlength="10" onChange={(e) => handlePhoneChange(e)} required></input>
               <p>{num}/10</p>
            </fieldset>
            <fieldset>
               <legend>Pais</legend>
               <span><i class="fas fa-flag"></i></span>
               <input
               type="name"
               maxlength="2"
               placeholder="E.x: EU"
               value={pais}
               onChange={(e) => handlePaisChange(e) }
                required
               ></input>
               <p>{count}/2</p>
            </fieldset>
            
            <button type="submit">Jump!</button>
          </form>
        </div>
  )
}

export default Fields;