// IMPORTING COMPONENTS
import Footer from "./components/Footer";

// IMPORTING CONTAINERS
import WelcomeView from "./containers/WelcomeView";

const style = {

  "fontFamily": "'Public Sans', sans-serif"

}

function App() {
  return (
    <div style={ style }>
    
      <WelcomeView />
      <Footer />

    </div>
  );
}

export default App;
