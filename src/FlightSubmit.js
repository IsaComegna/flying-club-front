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


  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("this.state", this.state);
  }

  render() {
    const {matriculaAluno, date, dateTimeEnd, dateTimeStart, comment} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Matricula do Aluno:
          <input type="text" 
            value={matriculaAluno}
            onChange={this.handleChangeMatricula} 
            />
        </label>
        <div>
          <label>
            Horário de Inicio :
          <input type="time" 
            value={dateTimeStart}
            onChange={this.handleChangeDateTimeStart}
            />
              <label>
                Dia:
                <input type="date" 
                  value={date}
                  onChange={this.handleChangeDate}
                  />
              </label>
          </label>
        </div>
         <div>
          <label>
            Horário de Fim:
          <input type="time" 
            value={dateTimeEnd}
            onChange={this.handleChangeDateTimeEnd}
            />
          </label>
        </div>
        <div>
          <label>
            Comenário:
          <input type="text" 
            value={this.comment}
            onChange={this.handleChangeComment}
            />
          </label>
        </div>
        <div>
        <input type="submit" value="Registrar"/>
        </div>
      </form>
    );
  }
}

export default FlightSubmit;