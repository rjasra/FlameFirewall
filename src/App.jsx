import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"


function App() {
  
  return (
    <>
      {
        <div className="bg-gradient-to-r from-zinc-900 to-rose-700 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-12 md:justify-between md:py-8">
          <Header/>
          <Body/>
          <Footer/>
       
      </div> 
  }

    </>
  )
}

export default App
