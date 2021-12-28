import { useState } from "react"
import { addplus, american_and_wager_to_win } from "../../../../../../common/oddsMath"

// function OfferRow({props.data,props.datakeys,i,props.market}) {
const OfferRow = props => {
  let wager = props.data[props.datakeys[props.i]]["wager"]
  let win = american_and_wager_to_win(props.data[props.datakeys[props.i]]["odds"],props.data[props.datakeys[props.i]]["wager"]).toFixed(2)
  let theirwager = win - wager

  // const [checked, setChecked] = useState(0);

  if (props.market == "h2h") return (
    <tr>
      <td class="p-2"> {props.data[props.datakeys[props.i]]["team"]}</td>
      <td class="p-2"> {addplus(props.data[props.datakeys[props.i]]["odds"])}</td>
      <td class="p-2"> {wager}</td>
      <td class="p-2"> {theirwager.toFixed(2)}</td>
      <td class="p-2"> {win}</td>
      <td class="p-2"> <input class="custom-checkbox" type="checkbox" index={props.i} name="checkbox" onChange={event => {props.onChange(props.i)} } checked={props.checked}/> </td>
    </tr>
  )
  else if (props.market == "spread") return (
    <tr>
      <td class="p-2"> {props.data[props.datakeys[props.i]]["team"]}</td>
      <td class="p-2"> {addplus(props.data[props.datakeys[props.i]]["line"])} </td>
      <td class="p-2"> {addplus(props.data[props.datakeys[props.i]]["odds"])}</td>
      <td class="p-2"> {wager}</td>
      <td class="p-2"> {theirwager.toFixed(2)}</td>
      <td class="p-2"> {win}</td>
      <td class="p-2"> <input class="custom-checkbox" type="checkbox" index={props.i} name="checkbox" onChange={event => {props.onChange(props.i)} } checked={props.checked}/> </td>
    </tr>
  )
  else if (props.market == "total") return (
    <tr>
      <td class="p-2"> {props.data[props.datakeys[props.i]]["team"] + " " + props.data[props.datakeys[props.i]]["line"]}</td>
      <td class="p-2"> {addplus(props.data[props.datakeys[props.i]]["odds"])}</td>
      <td class="p-2"> {wager}</td>
      <td class="p-2"> {theirwager.toFixed(2)}</td>
      <td class="p-2"> {win}</td>
      <td class="p-2">  
        <input class="custom-checkbox" type="checkbox" index={props.i} name="checkbox" onChange={event => {props.onChange(props.i)} } checked={props.checked}/> 
      </td>
    </tr>
  )
  else return (
    <tr></tr>
  )
}

export default OfferRow