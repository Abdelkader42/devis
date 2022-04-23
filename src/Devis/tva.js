import { useDispatch } from "react-redux";
import { setTva } from "../redux/devisSlice";

export default function Tva(props) {
    const dispatch = useDispatch();

    function handleChange($event) {
        console.log($event.target.value)
        dispatch(setTva($event.target.value));
    }
  return (
    <div className="myContainer" style={{marginTop:'20px'}}>
        <label>TVA</label>
      <select className="form-select" aria-label="Default select example" onChange={(p) => handleChange(p)}>
        <option value="0.2" selected>20%</option>
        <option value="0.1">10%</option>
        <option value="0.055">5.5%</option>
        <option value="0">0%</option>
      </select>
    </div>
  );
}
