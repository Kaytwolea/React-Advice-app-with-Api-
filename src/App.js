import React from "react";
import axios from "axios";



class App extends React.Component {
  state = {
    advice: '',
  }
    // Execute on Component

    componentDidMount() {
      this.fetchAdvice();
    }
    // Fetct Advice From Api

    fetchAdvice = () => {
      axios.get('	https://api.adviceslip.com/advice')
        .then((response) => {
          const { advice } = response.data.slip;
          this.setState({ advice });
        })
        // log Error if any

        .catch((error) => {
          console.log(error);
        });
    }

  render() {
    const { advice } = this.state;

    return(
      <div className="container mx-auto h-80 mt-32 shadow-emerald-700 shadow-lg bg-white">
          <h1 className="text-4xl text-emerald-700 text-center pt-8 font-bold">"{ advice }"</h1>
          <button onClick={this.fetchAdvice} className="h-16 transform transition hover:scale-110 duration-300 ease-in-out mx-auto mt-20 pt-2 hover:transition-transform hover:ease-in-out shadow-xl shadow-emerald-700 flex justify-center w-60 rounded-full text-white font-bold text-2xl border border-blue-900 bg-[#ff7c60]">Get Advice</button>
      </div>
    );
  }
}

export default App;