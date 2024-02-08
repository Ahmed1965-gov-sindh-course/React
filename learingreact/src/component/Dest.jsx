// function Dest (props){
//     return(
//         <div>
//             {props.mytext}{props.myname}
//         </div>

//     );

// }
// export default Dest;

//Destructing

function Dest({mytext, myname}){
    return(
        <div>
            <h1>
                {mytext} {myname}
            </h1>
        </div>
    );
}
export default Dest;