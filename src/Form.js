import React from "react";
import countryList from './countryList.js';
import './Form.css';

class Form extends React.Component {
  constructor() {
      super();
      this.state = {
        name: '',
        bday: '',
        country: '',
        diet: '',
        explorer: '',
        formCompleted: null,
        formSubmitted: null,
      };
    }

    handleName = (event) => {
      this.setState(
        {
          name: event.target.value
        }
      )
    }

    handleBday = (event) => {
      this.setState(
        {
          bday: event.target.value
        }
      )
    }

    handleCountry = (event) => {
      this.setState(
        {
          country: event.target.value
        }
      )
    }

    handleDiet = (event) => {
      this.setState(
        {
          diet: event.target.value
        }
      )
    }

    handleExplorer = (event) => {
      this.setState(
        {
          explorer: event.target.value
        }
      )
    }

    handleCompleted = (event) => {
      event.preventDefault();

      this.setState(
        {
          formCompleted: true
        }
      )
    }

    handleSubmitted = (event) => {
      event.preventDefault();

      this.setState(
        {
          formSubmitted: true
        }
      )
    }

  render() {
    console.log(this.state);
    const {name, bday, country, diet, explorer} = this.state;

    if (this.state.formSubmitted === true) {
      return (
          <div className='finalSubmit'>
            <p>Thank you for your application</p>
          </div>
        )
    }

    if (this.state.formCompleted === true) {
      return (
          <div className='completed'>
            <p>Thank you for your application.  Please verify your information:</p>
            <ul>
              <li>Name: {name}</li>
              <li>Birthdate: {bday}</li>
              <li>Country: {country}</li>
              <li>Diet: {diet}</li>
              <li>Story: {explorer}</li>
            </ul>

            <button onClick={this.handleSubmitted}>Final Submit</button>

          </div>
        )
    } else {

      return (
        <React.Fragment>
          <h1>Mission to Mars Registration Form</h1>
          <div id="form-div">
            <form>
              <label htmlFor="name">What is your name? </label>
              <input onChange={this.handleName} type="text" placeholder="Your Name" name="name" value={this.state.name} />
              < br/>
              < br/>
              <label htmlFor="bday">What is your date of birth? </label>
              <input onChange={this.handleBday} type="date" id="bday" name="bday" value={this.state.bday}/>
              < br/>
              < br/>
              <label htmlFor="country">What is your country of origin?  </label>
              <select name="country" value={this.state.country} onChange={this.handleCountry}>
                <option value="" disabled></option>
                {
                    countryList.map((item) => {
                        return <option value={item.value}>{item.value + ': ' + item.label}</option>;
                    })
                }
              </select>
              < br/>
              < br/>
              <label htmlFor="diet">What is your dietary preference?  </label>
              <select name='diet' value={this.state.diet} onChange={this.handleDiet}>
                  <option value="" disabled></option>
                  <option value="omnivore"> omnivore </option>
                  <option value="vegetarian"> vegetarian </option>
                  <option value="vegan"> vegan </option>
              </select>
              < br/>
              < br/>
              <label htmlFor="explorer">Why do you want to be a Mars explorer?  </label>
              < br/>
              < br/>
              <input onChange={this.handleExplorer} type="text" id="explorer" name="explorer" value={this.state.explorer}/>
            </form>
            < br/>
            <button onClick={this.handleCompleted}>Submit</button>
          </div>

        </React.Fragment>
      );
    }
  }
}

export default Form;
