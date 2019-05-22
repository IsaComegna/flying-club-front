import React from "react";

class FlightSubmit extends React.Component {
  
  state = {
    matriculaAluno : '',
    date: '',
    dateTimeStart : '',
    dateTimeEnd: '',
    comment: '',
  }

  handleChangeMatricula = (event) => {
    // console.log('event',event.target.value);
    this.setState({matriculaAluno: event.target.value});
  }

  handleChangeDate = (event) => {
    // console.log('event',event.target.value);
    this.setState({date: event.target.value});
  }

  handleChangeDateTimeStart = (event) => {
    // console.log('event',event.target.value);
    this.setState({dateTimeStart: event.target.value});
  }

  handleChangeDateTimeEnd = (event) => {
    // console.log('event',event.target.value);
    this.setState({dateTimeEnd: event.target.value});
  }

  handleChangeComment = (event) => {
    // console.log('event',event.target.value);
    this.setState({comment: event.target.value});
  }

  handleSubmit =  (event) => {
    event.preventDefault();
    fetch("https://dog.ceo/api/breeds/image/random");
    // console.log("this.state", this.state);
  }

  render() {
    const {matriculaAluno, date, dateTimeEnd, dateTimeStart, comment} = this.state;

    return (
      <div className="page">
        <span className="title"> Registro de voo </span>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="input">
            <label className="matricula">
              Matricula do Aluno:
              <input type="text" 
                value={matriculaAluno}
                onChange={this.handleChangeMatricula}
                className="form-input"
                />
            </label>
          </div>
          <div className="flight-fields">
            <div className="input">
              <label>
                Horário de Inicio:
              <input type="time" 
                value={dateTimeStart}
                onChange={this.handleChangeDateTimeStart}
                className="form-input"
                />
                  <label className="date-field">
                    Dia:
                    <input type="date" 
                      value={date}
                      onChange={this.handleChangeDate}
                      className="form-input"
                      />
                  </label>
              </label>
            </div>
            <div className="input">
              <label>
                Horário de Fim:
              <input type="time" 
                value={dateTimeEnd}
                onChange={this.handleChangeDateTimeEnd}
                className="form-input"
                />
              </label>
            </div>
            <div className="input">
              <label>
                Comentário:
              <input type="text" 
                value={this.comment}
                onChange={this.handleChangeComment}
                className="form-input"
                />
              </label>
            </div>
            <div className="submit-button">
              <input type="submit" value="Registrar"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FlightSubmit;