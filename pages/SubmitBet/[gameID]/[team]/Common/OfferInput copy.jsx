import { ArrowRight } from 'react-bootstrap-icons';
import React from 'react';
import { american_and_wager_to_win, american_to_pct_odds } from '../../../../../common/oddsMath';

class OfferInput2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {wager: '',
                  odds: '',
                  win: '',};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let wager = this.state.wager
    let odds = this.state.odds

    this.setState({
      [name]: value
    });
    
    // console.log('Changed ' + name + " to " + value)

    if (name == "wager") {wager = value}
    if (name == "odds") {odds = value}
    
    if (wager!='' && odds !=''){
      this.setState({
        win: american_and_wager_to_win(parseFloat(odds), wager)
      })
    }

    // console.log("wager " + wager + " odds " + odds + " win " + this.state.win)
  }

  handleSubmit(event) {
    alert("wager " + this.state.wager + " odds " + this.state.odds + " win " + this.state.win);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} class="p-0">
        <div class="form-group row">
            <div class="col-sm-3 text-gray-800">
              <div class="customtooltip"> 
                Wager &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span class="tooltiptext"> Lose this amount</span>
              </div> 
              <input type="text" name="wager" class="form-control form-control-user" value={this.state.wager} onChange={this.handleChange} placeholder={this.state.placeholderWager} />
            </div>

            <div class="col-sm-3 text-gray-800">
              <div class="customtooltip"> 
                Odds &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span class="tooltiptext"> American odds of your bet</span>
              </div> 
              <input type="text" name="odds" class="form-control form-control-user" value={this.state.odds} onChange={this.handleChange} />
            </div>

            <div class="col-sm-3 text-gray-800">
              <div class="customtooltip"> 
                Win &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <span class="tooltiptext"> Win this amount, and get your wager back</span>
              </div> 
              {/* <input type="text" name="win" class="form-control form-control-user" value={this.state.win} onChange={this.handleChange} /> */}
              {this.state.win}
            </div>
            
            <div class="col-sm-2 btn btn-success btn-icon-split">
              <input type="submit" value="Submit" class="btn btn-success btn-icon-split"/>
            </div>
            
        </div>
      </form>
    );
  }
}


export default OfferInput2