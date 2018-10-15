import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: "",
      exVat: ""
    }
  }

  handleRadioChange = (event) => {
    this.setState({
      vatRate: event.target.value
    })
  }

  handleIncVatChange = (event) => {
    this.setState({
    exVat: incVatToExtVat(this.state.vatRate, parseInt(event.target.value)),
    incVat: parseInt(event.target.value),
    })
    console.log(this.state.incVat)
    console.log(this.state.exVat)

  }

  handleExVatChange = (event) => {
    this.setState({
      incVat: exVatToIncVat(this.state.vatRate, parseInt(event.target.value)),
      exVat: parseInt(event.target.value),
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <div>
            <label htmlFor="option1">25%</label>
            <input
              id="option1"
              type="radio"
              value="25"
              checked={this.state.vatRate === "25"}
              onChange={this.handleRadioChange} />
          </div>

          <div>
            <label htmlFor="option2">12%</label>
            <input
              id="option2"
              type="radio"
              value="12"
              checked={this.state.vatRate === "12"}
              onChange={this.handleRadioChange} />
          </div>

          <div>
            <label htmlFor="option3">6% </label>
            <input
              id="option3"
              type="radio"
              value="6"
              checked={this.state.vatRate === "6"}
              onChange={this.handleRadioChange} />
          </div>
          <div>
            <label>Inklusive moms (kr)</label>
            <input
              type="number"
              name="incVat"
              placeholder="0"
              onChange={this.handleIncVatChange}
              value={this.state.incVat} />
          </div>
          <div>
            <label>Exklusive moms (kr)</label>
            <input
              type="number"
              name="exVat"
              placeholder="0"
              onChange={this.handleExVatChange}
              value={this.state.exVat} />
          </div>
          <div>
            <label>Momssumma (kr)</label>
            <input
              type="number"
              name="vatSum"
              placeholder="0"
              readOnly="readonly"
              value={(this.state.incVat - this.state.exVat).toFixed(2)} />
          </div>
        </form>
      </div>
    )
  }

}

export default App
