import React from 'react'
import CustomerScreen from '../pages/Customer'
import FreelancerScreen from '../pages/Freelancer';



export class MainScreen extends React.Component {
  state = {
    chosenPage: ''
  }

  // ensures the correct screen is displayed when clicking the linked button
  customerOrFreelancerScreen = () => {
    switch (this.state.chosenPage){
      case 'customer':
        return <CustomerScreen />;
      case 'freelancer':
        return <FreelancerScreen />;
      default:
        return <MainScreen />
    }
  }

  //the onclick function for the task mentioned above
  selectScreen = (screen) => {
    this.setState({chosenPage: screen})
  }


  render() {
    return (
      <div>

      <button onClick={() => this.selectScreen('freelancer')}>freelancer</button>
      <button onClick={() => this.selectScreen('customer')}>customer</button>
        {this.customerOrFreelancerScreen()}
      </div>
    )
  }
}
