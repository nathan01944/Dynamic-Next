import { ArrowRight, SdCardFill } from 'react-bootstrap-icons';
import React, { useState, useEffect } from 'react';
import { american_and_wager_to_win, american_to_pct_odds, addplus} from '../../../../../common/oddsMath';

// class OfferInput extends React.Component {
function OfferInput(wager,odds,win,handleChange) {
  // const [wager, setWager] = useState("");
  // const [odds, setOdds] = useState("");
  // const [win, setWin] = useState("");
  
  // const handleChange = (event) => {
  //   // setState(event.target.value)
  //   const value = event.target.value
  //   const name = event.target.name
  //   setWin("")
  //   let tmpodds
  //   let tmpwager

  //   if (name == "wager") {setWager(value)}
  //   if (name == "odds") {setOdds(value)}
  //   if (name == "wager") {tmpwager = value} else (tmpwager = wager)
  //   if (name == "odds") {tmpodds = value} else (tmpodds = odds)
    
  //   if (tmpwager!='' && tmpodds !=''){
  //     if (tmpodds >=100 || tmpodds <=-100) {
  //       setWin(american_and_wager_to_win(parseFloat(tmpodds), tmpwager).toFixed(2))
  //       console.log("pls")
  //     }
  //   }
  // }

  // const handleChange = (event) => {
  //   setWager(event.target.value)
  // }

  const handleSubmit = (event) => {
    alert("wager " + wager + " odds " + odds + " win " + win);
    event.preventDefault();
  }

  return (
    <form class="p-0" onSubmit={handleSubmit}> 
      <div class="form-group row">
          <div class="col-sm-3 text-gray-800">
            <div class="customtooltip"> 
              Wager &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              <span class="tooltiptext">Lose this amount</span>
            </div> 
            <input type="text" name="wager" class="form-control form-control-user" value={wager}  onChange={handleChange}/> 
            {/* onChange={e => setWager(e.target.value)} */}
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
            <input type="text" name="odds" class="form-control form-control-user" value={odds} onChange={handleChange}/>
            {/* onChange={this.handleChange}  */}
          </div>

          <div class="col-sm-3 text-gray-800">
            <div class="customtooltip"> 
              Win &nbsp;
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              <span class="tooltiptext"> Win this amount, including getting your wager back</span>
            </div> 
            {/* <input type="text" name="win" class="form-control form-control-user" value={this.win} onChange={this.handleChange} /> */}
            <div class=""> {win} </div>
          </div>
          
          <div class="col-sm-2 btn btn-success btn-icon-split">
            <input type="submit" value="Submit" class="btn btn-success btn-icon-split"/>
          </div>
          
      </div>
    </form>
  );
}


export default OfferInput