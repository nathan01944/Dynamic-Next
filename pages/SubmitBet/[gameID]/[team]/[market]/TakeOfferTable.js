import { addplus, american_and_wager_to_win, wager_and_win_to_odds_american } from "../../../../../common/oddsMath";
// import OfferInput from "./TakeOfferTable2/OfferInput";
import OfferRow from "./TakeOfferTable/OfferRow";
import TableHeader from "./TakeOfferTable/TableHeader";
import React, { useState, useCallback } from 'react';
import InputWager from "./TakeOfferTable/InputWager";
import InputOdds from "./TakeOfferTable/InputOdds";
import InputWin from "./TakeOfferTable/InputWin";
import SubmitButton from "./TakeOfferTable/SubmitButton";
import InputLine from "./TakeOfferTable/InputLine";

function findGameByID(data, gameID,home,market) {
  //to add sort
  let filtered = {}
  const datakeys = Object.keys(data);
  for (var i = 0; i < datakeys.length; i++) {
    if (data[datakeys[i]].gameID == gameID) {
      if (data[datakeys[i]].home == home) {
        if (data[datakeys[i]].market == market) {
          filtered[datakeys[i]] = data[datakeys[i]]
        };
      };
    };
  }
  return filtered
}

const TakeOfferTable = ({ gameID, oddsdata, market, team }) => {
  let home = (team == 0) ? "home" : "away"
  let filteredoffers = findGameByID(oddsdata,gameID,home,market)
  const datakeys = Object.keys(filteredoffers);
  const numBets = datakeys.length

  const [line,setLine] = useState("")
  const [wager, setWager] = useState("");
  const [odds, setOdds] = useState("");
  const [win, setWin] = useState("");

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    setWin("")
    let tmpodds
    let tmpwager

    if (name == "wager") {setWager(value)}
    if (name == "odds") {setOdds(value)}
    if (name == "wager") {tmpwager = value} else (tmpwager = wager)
    if (name == "odds") {tmpodds = value} else (tmpodds = odds)
    
    if (tmpwager!='' && tmpodds !=''){
      if (tmpodds >=100 || tmpodds <=-100) {
        setWin(american_and_wager_to_win(parseFloat(tmpodds), tmpwager).toFixed(2))
      }
    }

    setCheckedState(Array(numBets).fill(false))
  }

  const [checkedState, setCheckedState] = useState(
    new Array(numBets).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    let updatedWager = 0
    let updatedWin = 0
    let updatedOdds = 0
    let updatedLine = 0

    for (var i = 0; i < numBets; i++) {
      if (updatedCheckedState[i]) {
        let thiswager = parseFloat(filteredoffers[datakeys[i]].wager)
        let thiswin = parseFloat(american_and_wager_to_win(filteredoffers[datakeys[i]].odds,filteredoffers[datakeys[0]].wager))
        let thisline = filteredoffers[datakeys[i]].line

        updatedWager = updatedWager + thiswager
        updatedWin = updatedWin + thiswin
        updatedOdds = wager_and_win_to_odds_american(updatedWager,updatedWin)
        updatedLine = thisline //ToDo: add logic to prevent adding bets with different lines
      }
    }

    setWager(updatedWager.toFixed(2))
    setWin(updatedWin.toFixed(2))
    setOdds(updatedOdds.toFixed(0))
    setLine(updatedLine)
    setCheckedState(updatedCheckedState);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    // alert("wager:" + wager + "odds:" + odds + "win:" + win)
  }

  return (
    <div class="">

    <form class="p-0 form-group row col-12" onSubmit={handleSubmit}>  
     <InputLine
        line = {line}
        onChange={handleChange} 
        market = {market}
      />
      <InputOdds 
        odds = {odds}
        onChange={handleChange} 
        market = {market}
      />
      <InputWager 
        wager = {wager}
        onChange={handleChange} 
      />
      <InputWin 
        win = {win}
        market = {market}
      />
      {/* <div class="col-sm-2 btn btn-success btn-icon-split">
        <input type="submit" value="Submit" class="btn btn-success btn-icon-split" />
      </div> */}
      <SubmitButton
        gameID = {gameID}
        team = {team}
        market = {market}
        line = {line}
        win = {win}
        wager = {wager}
      />
    </form>
        
      <div class="text-gray-800 col-md-12 justify-content-center pt-2 pb-2">
        <table class="table-bordered th" id="dataTable" width="100%" cellSpacing="20">
            <thead>
                <TableHeader 
                  market = {market}
                />
            </thead>
            <tbody class="text-gray-600">
              {[...Array(numBets)].map((x, i) =>
                  <OfferRow
                    data={filteredoffers} 
                    datakeys = {datakeys}
                    i = {i}
                    market = {market}
                    checked = {checkedState[i]}
                    onChange={handleOnChange}
                  />
              )}
            </tbody>
        </table>
      </div>
   </div>
  );
};

export default TakeOfferTable