import React from "react";
import { countryList } from './countryList.js';
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
        underwater: '',
        maritalStatus: '',
        difficult: '',
        claustrophobic: '',
        famHistory: {
          cancer: false,
          heartDisease: false,
          diabetes: false
        },
        relatives: {
          siblings: false,
          siblingsSelection: null,
          parents: false,
          parentsSelection: null,
          grandparents: false,
          grandparentsSelection: null
        },
        education: {
          highschool: null,
          associates: null,
          bachelors: null,
          masters: null,
          phD: null,
          other: ''
        }

      };
      this.handleSelect = this.handleSelect.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
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

    handleRadioChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleCheckboxChange = (event) => {
      if (event.target.id) {
        let newState = this.state[event.target.name];
        newState[event.target.id] = event.target.checked;
        this.setState({
          [event.target.name]: newState
        })
      } else {
        this.setState({
          [event.target.name]: event.target.checked
        })
      }
    }

    handleSelect(event) {
      if (event.target.id) {
        let newState = this.state[event.target.name];
        newState[event.target.id] = event.target.value;
        this.setState({
          [event.target.name]: newState
        })
      } else {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    }

    handleTextChange(event) {
      if (event.target.id) {
        let newState = this.state[event.target.name];
        newState[event.target.id] = event.target.value;
        this.setState({
          [event.target.name]: newState
        })
      } else {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    }


  render() {
    console.log(this.state);
    const {name, bday, country, diet, explorer, underwater, maritalStatus, difficult, claustrophobic, famHistory, relatives, siblingsSelection, parentsSelection, grandparentsSelection, education} = this.state;

    let alert1;
    let alertQuestion1;
    let alert2;
    let alertQuestion2;
    let alert3;
    let alertQuestion3;

    if (relatives.siblings) {
      alertQuestion1 = 'How many?';
      alert1 = (
          <select id='siblingsSelection' name='relatives' value={siblingsSelection} onChange={this.handleSelect}>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
        )
    }

    if (relatives.parents) {
      alertQuestion2 = 'How many?';
      alert2 = (
          <select id='parentsSelection' name='relatives' value={parentsSelection} onChange={this.handleSelect}>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
        )
    }
    if (relatives.grandparents) {
      alertQuestion3 = 'How many?';
      alert3 = (
          <select id='grandparentsSelection' name='relatives' value={grandparentsSelection} onChange={this.handleSelect}>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
        )
    }

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
            <form className="textSelectForm">
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
            <form className='radioQuestions'>
              < br/>
              <label htmlFor="underwater">Can you breathe underwater longer than 1 minute? </label>
              < br/>
              Yes
              <input type="radio" name="underwater" value='yes' checked={underwater === "yes"} onChange={this.handleRadioChange}/>
              No
              <input type="radio" name="underwater" value='no' checked={underwater === "no"} onChange={this.handleRadioChange}/>
              I don't know
              <input type="radio" name="underwater" value='idk' checked={underwater === "idk"} onChange={this.handleRadioChange}/>
              < br/>
              < br/>
              <label htmlFor="maritalStatus">What is your marital status? </label>
              < br/>
              Married
              <input type="radio" name="maritalStatus" value='married' checked={maritalStatus === "married"} onChange={this.handleRadioChange}/>
              Unmarried
              <input type="radio" name="maritalStatus" value='unmarried' checked={maritalStatus === "unmarried"} onChange={this.handleRadioChange}/>
              < br/>
              < br/>
              <label htmlFor="difficult">When you are in a stressful or difficult situation, how do you most frequently react?</label>
              < br/>
              < br/>
              <div>
                Determination: I continue to confront the situation.
                <input type="radio" name="difficult" value='determination' checked={difficult === "determination"} onChange={this.handleRadioChange}/>
              </div>
              <div>
                Defeat: I stop confronting the situation
                <input type="radio" name="difficult" value='defeat' checked={difficult === "defeat"} onChange={this.handleRadioChange}/>
              </div>
              <div>
                Anger: I become upset at the situation.
                <input type="radio" name="difficult" value='anger' checked={difficult === "anger"} onChange={this.handleRadioChange}/>
              </div>
              <div>
                Resourcefulness: I seek help to confront the situation.
                <input type="radio" name="difficult" value='resourcefulness' checked={difficult === "resourcefulness"} onChange={this.handleRadioChange}/>
              </div>
              < br/>
              < br/>
              <label htmlFor="claustrophobic">Are you claustrophobic? </label>
              < br/>
              Yes
              <input type="radio" name="claustrophobic" value='yes' checked={claustrophobic === "yes"} onChange={this.handleRadioChange}/>
              No
              <input type="radio" name="claustrophobic" value='no' checked={claustrophobic === "no"} onChange={this.handleRadioChange}/>
              I don't know
              <input type="radio" name="claustrophobic" value='idk' checked={claustrophobic === "idk"} onChange={this.handleRadioChange}/>
              < br/>
              < br/>
            </form>
            <form className='checkboxQuestions'>
              <div>
                Does your family have a history of (check all that apply):
                < br/>
                Cancer
                <input id='cancer'name="famHistory" type="checkbox" checked={famHistory.cancer} onChange={this.handleCheckboxChange} />
                Heart Disease
                <input id='heartDisease' name="famHistory" type="checkbox" checked={famHistory.heartDisease} onChange={this.handleCheckboxChange} />
                Diabetes
                <input id='Diabetes' name="famHistory" type="checkbox" checked={famHistory.Diabetes} onChange={this.handleCheckboxChange} />
              </div>
              <div>
                Do you have any living (check all that apply):
                < br/>
                Siblings
                <input id='siblings'name="relatives" type="checkbox" checked={relatives.siblings} onChange={this.handleCheckboxChange} />

               <div>{alertQuestion1}{alert1}</div>
                Parents
                <input id='parents' name="relatives" type="checkbox" checked={relatives.parents} onChange={this.handleCheckboxChange} />
                <div>{alertQuestion2}{alert2}</div>
                Grandparents
                <input id='grandparents' name="relatives" type="checkbox" checked={relatives.grandparents} onChange={this.handleCheckboxChange} />
                <div>{alertQuestion3}{alert3}</div>
              </div>
              <div>
                Check all educational credentials you have received:
                < br/>
                High school diploma or GED equivalent
                <input id='highschool'name="education" type="checkbox" checked={education.highschool} onChange={this.handleCheckboxChange} />
                Associate's Degree
                <input id='associates' name="education" type="checkbox" checked={education.associates} onChange={this.handleCheckboxChange} />
                Bachelor's Degree
                <input id='bachelors' name="education" type="checkbox" checked={education.bachelors} onChange={this.handleCheckboxChange} />
                Master's Degree
                <input id='masters' name="education" type="checkbox" checked={education.masters} onChange={this.handleCheckboxChange} />
                PhD
                <input id='phD' name="education" type="checkbox" checked={education.phD} onChange={this.handleCheckboxChange} />
                Other
                <input id='other' name="education" type="text" value={education.other} onChange={this.handleTextChange} />
              </div>
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
