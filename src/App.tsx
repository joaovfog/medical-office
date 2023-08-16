import { Content, Sidebar } from "./components"

function App() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App
