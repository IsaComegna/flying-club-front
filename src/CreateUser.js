import React from "react";
import axios from "axios";

class CreateUser extends React.Component {
  
  state = {
    userName : '',
    cpf: '',
    birthDate: '',
    registrationNumber: '',
  }

  handleChangeUserName = (event) => {
    // console.log('event',event.target.value);
    this.setState({userName: event.target.value});
  }

  handleChangeCpf = (event) => {
    // console.log('event',event.target.value);
    this.setState({cpf: event.target.value});
  }

  handleChangeBirthDate = (event) => {
    // console.log('event',event.target.value);
    this.setState({birthDate: event.target.value});
  }
  
  handleChangeRegistrationNumber = (event) => {
    // console.log('event',event.target.value);
    this.setState({registrationNumber: event.target.value});
  }

 
  handleSubmit =  (event) => {
    event.preventDefault();
    fetch("https://dog.ceo/api/breeds/image/random");
    // console.log("this.state", this.state);
  }

  handleOnClickButton = (event) => {
    event.preventDefault();
    const {userName, cpf, birthDate, registrationNumber} = this.state;
    axios.post("",{userName, cpf, birthDate, registrationNumber});

    console.log ({userName, cpf, birthDate, registrationNumber});
  }

  render() {
    const {userName, cpf, birthDate, registrationNumber} = this.state;

    return (
      <div className="page">
        <span className="title"> Registro de voo </span>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="input">
            <label className="userName">
              Nome do Aluno:
              <input type="text" 
                value={userName}
                onChange={this.handleChangeUserName}
                className="form-input"
                />
            </label>
          </div>
          <div className="input">
            <label className="cpf">
              CPF:
              <input type="text" 
                value={cpf}
                onChange={this.handleChangeCpf}
                className="form-input"
                />
            </label>
          </div>

          <div className="createUser-field">
            <div className="input">
                  <label className="date-field">
                    Data Nascimento:
                    <input type="date" 
                      value={birthDate}
                      onChange={this.handleChangeBirthDate}
                      className="form-input"
                      />
                  </label>
            </div>
            <div className="input">
            <label className="registrationNumber">
              Numero de Matricula:
              <input type="text" 
                value={registrationNumber}
                onChange={this.handleChangeRegistrationNumber}
                className="form-input"
                />
            </label>
          </div>
            <div className="submit-button">
              <input 
              type="submit" 
              value="Registrar"
              onClick = {this.handleOnClickButton}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;