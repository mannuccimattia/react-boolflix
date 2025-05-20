import { useState } from "react"

const App = () => {

  const [searchTerm, setSearchTerm] = useState("")

  console.log(searchTerm)
  return (
    <div>
      <h1>Hello React</h1>

      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
      />
      {searchTerm}
    </div>
  )
}

export default App