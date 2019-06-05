import React from "react";
import axios from "axios";

class CreateUser extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        name: '',
        cpf: '',
        phoneNumber: '',
        email: '',
        birthday: ''
        }
    }

  handleChangeName = (event) => {
    // console.log('event',event.target.value);
    this.setState({name: event.target.value});
  }

  handleChangeCpf = (event) => {
    // console.log('event',event.target.value);
    this.setState({cpf: event.target.value});
  }

  handleChangeBirthDay = (event) => {
    // console.log('event',event.target.value);
    this.setState({birthday: event.target.value});
  }

  handleChangeRegistrationEmail = (event) => {
    // console.log('event',event.target.value);
    this.setState({email: event.target.value});
  }

  handleChangeRegistrationPhoneNumber = (event) => {
    // console.log('event',event.target.value);
    this.setState({phoneNumber: event.target.value});
  }

  handleSubmit =  (event) => {
    event.preventDefault();

    const parsedCpf = this.state.cpf;
    const parsedPhoneNumber = this.state.phoneNumber;
    //const parsedBirthday =

    let request_body = JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            user_type: "student",
            cpf: parsedCpf,
            phone_number: parsedPhoneNumber,
            birthday: this.state.birthday
          })

    fetch("https://flying-club-engesoft.herokuapp.com/registro-usuario", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: request_body
    });
  }

  handleOnClickButton = (event) => {
    event.preventDefault();
    const {name, cpf, birthday, phoneNumber,email} = this.state;
    axios.post("",{name, cpf, birthday, phoneNumber,email});

    console.log ({name, cpf, birthday, phoneNumber,email});
  }

  render() {
    const {name, cpf, birthday, phoneNumber,email } = this.state;

    return (
        <div className="page-registry">
        <div className="wrap-page-registry">
          <form onSubmit={this.handleSubmit} className="form">
            <span className="form-title">
              Cadastro
            </span>

            <div className="wrap-input bg1">
              <span className="label-input">
                Nome
              </span>
              <input type="text"
                  value={name}
                  onChange={this.handleChangeName}
                  className="form-input"
                  placeholder= "Cleython Vader"
              />
            </div>



            <div className="wrap-input bg1 wrap-input-date">
              <span className="label-input">
                Data de Nascimento
              </span>
              <input type="date"
                  value={birthday}
                  onChange={this.handleChangeBirthDay}
                  className="form-input"
                  placeholder= "0000"
              />
            </div>

           <div className="wrap-input bg1">
              <span className="label-input">
                CPF
              </span>
              <input type="text"
                  value={cpf}
                  onChange={this.handleChangeCpf}
                  className="form-input"
                  placeholder= "000.000.000-00"
              />
            </div>

            <div className="wrap-input bg1">
              <span className="label-input">
                E-mail
              </span>
              <input type="text"
                  value={email}
                  onChange={this.handleChangeRegistrationEmail}
                  className="form-input"
                  placeholder= "meninoney@msn.com"
              />
            </div>

            <div className="wrap-input bg1">
              <span className="label-input">
                Telefone
              </span>
              <input type="text"
                  value={phoneNumber}
                  onChange={this.handleChangeRegistrationPhoneNumber}
                  className="form-input"
                  placeholder= "123SUCESSO"
              />
            </div>


            <div className="container-form-btn">
              <button className="register-flight-form-btn" type='submit'>
                <span>
                  Cadastrar
                  <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                </span>
              </button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default CreateUser;