import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: "",
      exVat: "",
      vatSum: ""
    }
  }

  handleRadioChange = (event) => {
    this.setState({
      vatRate: event.target.value
    })
  }

  handleIncVatChange = (event) => {
    this.setState({
      // incVat: event.target.value
    exVat: incVatToExtVat(this.state.vatRate, parseInt(event.target.value)),
    incVat: parseInt(event.target.value),
    vatSum: (this.state.incVat - this.state.exVat) * 10
    // || 0
    })
  }

  handleExVatChange = (event) => {
    this.setState({
      // exVat: event.target.value
      incVat: exVatToIncVat(this.state.vatRate, parseInt(event.target.value)),
      exVat: parseInt(event.target.value),
      vatSum: (this.state.incVat - this.state.exVat) * 10
    })
  }

  render() {
    return (
      <div className="App">
        {/* <p>Example calculating ex vat for 1000kr inc vat @ 25%: {incVatToExtVat(25, 1000)}</p>
        <p>Example calculating inc vat for 600kr ex vat @ 6%: {exVatToIncVat(6, 600)}</p> */}

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
            <label htmlFor="option3">6%</label>
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
              value={this.state.vatSum} />
          </div>
        </form>
        <p>Current vatRate state: {this.state.vatRate}</p>
        <p>Current incVat state: {this.state.incVat}</p>
        <p>Current exVat state: {this.state.exVat}</p>
        <p>Current vatSum state: {this.state.vatSum}</p>
      </div>
    )
  }

}

export default App
