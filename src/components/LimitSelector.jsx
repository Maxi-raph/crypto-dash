const LimitSelector = ({limit,setLimit}) => {
    return ( <div className="controls">
    <label htmlFor="limit">Show: </label>
    <select name="select" value={limit} className="ml-2 bg-gray-900 rounded-md h-8 w-16" onChange={(e)=>{setLimit((prev)=>prev = e.target.value)
    }

    }>
    <option >5</option>
    <option >10</option>
    <option >20</option>
    <option >50</option>
    <option >100</option>
    </select>
    </div> );
}
 
export default LimitSelector;