import React from "react";

class FlightSubmit extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      matriculaAluno : '',
      date: '',
      dateTimeStart : '',
      dateTimeEnd: '',
      comment: '',
      grade: ''
    }
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
    //console.log('event',event.target.value);

    this.setState({comment: event.target.value});
  }

  handleChangeGrade = (event) => {
    // console.log('event',event.target.value);
    this.setState({grade: event.target.value});
  }

  handleSubmit =  (event) => {
    event.preventDefault();

    const parsedGrade = this.state.grade.replace(',', '.')
    const [hourStart, minuteStart] = this.state.dateTimeStart.split(':');
    const [hourEnd, minuteEnd] = this.state.dateTimeEnd.split(':');
    const parsedStartDateTime = `${this.state.date} ${hourStart}:${minuteStart}:00`;
    const parsedEndDateTime = `${this.state.date} ${hourEnd}:${minuteEnd}:00`;

    let request_body = JSON.stringify({
            grade: parsedGrade,
            matricula_aluno: this.state.matriculaAluno,
            comment: this.state.comment,
            dateTimeFlightStart: parsedStartDateTime,
            dateTimeFlightEnd: parsedEndDateTime,
            registerDate: this.state.date
          })

    fetch("https://flying-club-engesoft.herokuapp.com/registro-voo", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: request_body
    });
  }


  render() {
    const {matriculaAluno, date, dateTimeEnd, dateTimeStart, comment, grade} = this.state;

    return (
      <div className="page-registry">
        <div className="wrap-page-registry">
          <form onSubmit={this.handleSubmit} className="form">
            <span className="form-title">
              Registro de voo
            </span>

            <div className="wrap-input bg1">
              <span className="label-input">
                MATRÍCULA DO ALUNO
              </span>
              <input type="text"
                  value={matriculaAluno}
                  onChange={this.handleChangeMatricula}
                  className="form-input"
                  placeholder= "0000"
              />
            </div>

            <div className="wrap-input bg1 wrap-input-start-time">
              <span className="label-input">
                Horário de Início do Voo
              </span>
              <input type="time"
                  value={dateTimeStart}
                  onChange={this.handleChangeDateTimeStart}
                  className="form-input"
              />
            </div>

            <div className="wrap-input bg1 wrap-input-end-time">
              <span className="label-input">
                Horário de Término do Voo
              </span>
              <input type="time"
                  value={dateTimeEnd}
                  onChange={this.handleChangeDateTimeEnd}
                  className="form-input"
              />
            </div>

            <div className="wrap-input bg1 wrap-input-date">
              <span className="label-input">
                Data do Voo
              </span>
              <input type="date"
                  value={date}
                  onChange={this.handleChangeDate}
                  className="form-input"
                  placeholder= "0000"
              />
            </div>

            <div className="wrap-input bg1 wrap-input-grade">
              <span className="label-input">
                Nota
              </span>
              <input type="grade"
                  value={grade}
                  onChange={this.handleChangeGrade}
                  className="form-input"
                  placeholder= "0.0"
              />
            </div>


            <div className="wrap-input bg0">
              <span className="label-input">
                Comentário:
              </span>
              <textarea
                value={comment}
                onChange={this.handleChangeComment}
                className="form-input-comment"
                placeholder= "Seus comentários aqui"
                />
            </div>

            <div className="container-form-btn">
              <button className="register-flight-form-btn" type='submit'>
                <span>
                  Registrar
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

export default FlightSubmit;