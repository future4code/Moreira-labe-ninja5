import React from "react";
import { Home } from "./pages/Home";
import { CustomerScreen } from "./pages/Customer";
import { FreelancerScreen } from "./pages/Freelancer";

class App extends React.Component {
  state = {
    chosenPage: "home",
  };

  
  //ensures that the selected page is being shown
  selectPage = () => {
    switch (this.state.chosenPage) {
      case "home":
        return (
          <Home
            goToCustomerScreen={this.goToCustomerScreen}
            goToFreelancerScreen={this.goToFreelancerScreen}
          />
        );
      case "customer":
        return <CustomerScreen />;
      case "freelancer":
        return <FreelancerScreen />;
    }
  };

  //onclick customer page selector
  goToCustomerScreen = () => {
    this.setState({ chosenPage: "customer" });
  };

  //onclick freelancer page selector
  goToFreelancerScreen = () => {
    this.setState({ chosenPage: "freelancer" });
  };
  render() {
    return <>{this.selectPage()}</>;
  }
}

export default App;
