import { addplus, american_and_wager_to_win } from "../../../../common/oddsMath";
// import OfferInput from "./TakeOfferTable2/OfferInput";
import OfferRow from "./TakeOfferTable2/OfferRow";
import TableHeader from "./TakeOfferTable2/TableHeader";
import React, { useState, useCallback } from 'react';
import InputWager from "./TakeOfferTable2/InputWager";
import InputOdds from "./TakeOfferTable2/InputOdds";
import InputWin from "./TakeOfferTable2/InputWin";

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
  }

  const handleChange2 = (event) => {
    console.log(event)
  }

  let home = (team == 0) ? "home" : "away"
  let filteredoffers = findGameByID(oddsdata,gameID,home,market)
  const datakeys = Object.keys(filteredoffers);
  const numBets = datakeys.length

  return (
    <div class="">
      <div> wager: {wager} odds: {odds} win: {win}</div>

    <form class="p-0 form-group row col-12" >  
      <InputOdds 
        odds = {odds}
        onChange={handleChange} 
      />
      <InputWager 
        wager = {wager}
        onChange={handleChange} 
      />
      <InputWin 
        win = {win}
      />
      <div class="col-sm-2 btn btn-success btn-icon-split">
        <input type="submit" value="Submit" class="btn btn-success btn-icon-split"/>
      </div>
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
                    onChange={handleChange2}
                  />
              )}
            </tbody>
        </table>
      </div>
   </div>
  );
};

export default TakeOfferTable