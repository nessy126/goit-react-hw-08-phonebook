import { useSelector, useDispatch } from "react-redux"
import { getfilter } from "../../redux/phoneBook/phoneBookSelector";
import {setFilter} from "../../redux/phoneBook/phoneBookSlice"

const Filter = () => {
  const filter  = useSelector(getfilter)
  console.log(filter);
  const dispatch = useDispatch()
  
  const setReduceFilter = (e) => dispatch(setFilter(e.target.value))

  return (
    <label>
      Find contact by name<br></br>
      <input
        onChange={setReduceFilter}
        value={filter}
        type="text"
        name="filter"
      />
    </label>
  )
}
 
export default Filter;