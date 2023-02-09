import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      dob: '',
      gender: '',
      asplMID: '',
      asplID: '',
      team: '',
      qualification: '',
      branch: '',
      technicalSkills: '',
      certifications: '',
      participation: '',
      mobile: ''
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    const values = Object.values(this.state);

    if (values.some(value => value === '')) {
      console.log('One or more fields are empty');
      alert('Please fill all the fields');
    } else {
      axios.post('https://sheet.best/api/sheets/58f76a48-b025-458a-b652-75d99d1670dd', this.state)
        .then(response => {
          console.log(response);
          alert('Application submited successfully');
          this.setState({
            fullName: '',
            dob: '',
            gender: '',
            asplMID: '',
            asplID: '',
            team: '',
            qualification: '',
            branch: '',
            technicalSkills: '',
            certifications: '',
            participation: '',
            mobile: ''
          })
        })
    }
  }

  render() {
    const { fullName, dob, gender, asplMID, asplID, team, qualification, branch, technicalSkills, certifications, participation, mobile } = this.state;
    return (
      <div className='App'>
        <div className="Background-color">
          <div className="content">
            <h1>BRIGHT<br /><span>HACKATHON</span> <br /><span1>@ ASPL</span1></h1>
            <p className="par">The reason you have a hard time <br /> your intuition is because you are still convinced <br /> some outside authority knows better than you. </p>
            <p className="par">Everybody has a creative potential and <br /> from the momemt you can express this potential,<br /> we can start changing the world, <br />by changing our self.</p>
            <p className="par">  </p>
          </div>
          <nav>
            <label className="logo"></label>
          </nav>
          <div className="container">
            <header>Hackathon Registration Form</header>
            <form action="#">
              <div className="form first">
                <div className="details personal">
                  <span className="title">Employee Details</span>
                  <div className="fields">
                    <div className="input-field">
                      <label>Full Name:</label>
                      <input type="text" name='fullName' value={fullName} onChange={this.changeHandler} placeholder="Enter your name" required />
                    </div>
                    <div className="input-field">
                      <label>Date Of Birth:</label>
                      <input type="date" name='dob' value={dob} onChange={this.changeHandler} placeholder="Enter Date of Birth" required />
                    </div>
                    <div className="input-field">
                      <label for="gender">Gender:</label>
                      <select name="gender" value={gender} onChange={this.changeHandler} >
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="input-field">
                      <label> ASPL Mail ID:</label>
                      <input type="text" value={asplMID} name='asplMID' onChange={this.changeHandler} placeholder="Enter your  Aspl Mail ID" required />
                    </div>
                    <div className="input-field">
                      <label>ASPL ID:</label>
                      <input type="text" value={asplID} name='asplID' onChange={this.changeHandler} placeholder="Enter your Aspl ID" required />
                    </div>
                    <div className="input-field">
                      <label>Team:</label>
                      <input type="text" value={team} name='team' onChange={this.changeHandler} placeholder="" required />
                    </div>
                  </div>
                </div>
                <div className="details ID">
                  <div className="fields">
                    <div className="input-field">
                      <label for="qual">Qualification:</label>
                      <select name="qualification" value={qualification} onChange={this.changeHandler} >
                        <option value=""></option>
                        <option value="B.Sc">B.SC</option>
                        <option value="BE">BE</option>
                        <option value="B>Tech">B.Tech</option>
                        <option value="ME">ME</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="BCA">BCA</option>
                        <option value="MCA">MCA</option>
                      </select>
                    </div>
                    <div className="input-field">
                      <label>Branch:</label>
                      <input type="text" value={branch} name='branch' onChange={this.changeHandler} placeholder="" required />
                    </div>
                    <div className="input-field">
                      <label>Technical Skills</label>
                      <input type="text" value={technicalSkills} name='technicalSkills' onChange={this.changeHandler} placeholder="" required />
                    </div>
                    <div className="input-field">
                      <label>Certifications</label>
                      <input type="text" value={certifications} name='certifications' onChange={this.changeHandler} placeholder="" required />
                    </div>
                    <div className="input-field">
                      <label for="participation">Participation</label>
                      <select name="participation" value={participation} onChange={this.changeHandler} >
                        <option value=""></option>
                        <option value="single">SINGLE</option>
                        <option value="teams">TEAMS</option>
                      </select>
                    </div>
                    <div className="input-field">
                      <label>Mobile  No:</label>
                      <input type="number" value={mobile} name="mobile" onChange={this.changeHandler} placeholder="Enter your Mobile number" required />
                    </div>
                  </div>
                  <button className="nextBtn" type='submit' onClick={this.submitHandler}>
                    <span className="btnText">Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

