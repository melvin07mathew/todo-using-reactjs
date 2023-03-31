import { useState } from "react"

export default function Addtodo(){

    const[data,setdata] = useState("");
    const[todo,settodo] = useState([]);

    function adddata(){
        settodo([...todo,{data:data,id:Date.now()}])
        setdata("")
    }
    function change(e){
        let data = todo.filter((tod)=> tod.id !== e)
        settodo([...data])
    }
    

    return(
        <center>
            <input className="form-control" style={{maxWidth:400}} type="text" onChange={(event)=>(setdata(event.target.value))} value={data}></input>
            <button className="btn btn-warning" style={{margin:20,fontFamily:'cursive'}} onClick={adddata}>Add todo</button><br></br>
            <p>{todo.map((data)=>(
            <div style={{fontFamily:'cursive',fontSize:20,margin:20}} key={data.id}>
                {data.data}&nbsp;&nbsp;
                <button className="btn btn-info" onClick={()=> change(data.id)}>Done</button>
            </div>))}
            </p>
        </center>
    )
}