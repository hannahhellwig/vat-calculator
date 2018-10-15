import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      incVat: 0,
      exVat: 0,
    }
  }

  handleRadioChange = event => {
    this.setState({ vatRate: event.target.value })
  }

  handleIncVatChange = event => {
    this.setState({ incVat: event.target.value })
  }

  handleExVatChange = event => {
    this.setState({ exVat: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <p>Example calculating ex vat for 1000kr inc vat @ 25%: {incVatToExtVat(25, 1000)}</p>
        <p>Example calculating inc vat for 600kr ex vat @ 6%: {exVatToIncVat(6, 600)}</p>

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
            <input
              type="text"
              name="incVat"
              onChange={this.handleIncVatChange}
              value={this.state.incVat} />
          </div>
          <div>
            <input
              type="text"
              name="exVat"
              onChange={this.handleExVatChange}
              value={this.state.exVat} />
          </div>
        </form>
        <p>Current vatRate state: {this.state.vatRate}</p>
        <p>Current incVat state: {this.state.incVat}</p>
        <p>Current exVat state: {this.state.exVat}</p>
      </div>
    )
  }

}

export default App
