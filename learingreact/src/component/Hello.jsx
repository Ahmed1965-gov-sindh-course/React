function Hello({name, message}){
    // const  {name, message} = props
    
    return (
        <div>
        <h1>
            {message} {name}
            </h1> 
        {/* <h2>How are u?</h2> */}

</div>
    );  
}
export default Hello;