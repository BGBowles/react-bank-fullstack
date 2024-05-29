// THIS IS DR. SANCHEZ' VERSION FROM THE MIT VIDEOS IN MODULE 27.

// NOTE THE SLIGHT DIFFERENCES IN ORGANIZATION
// - CREATION OF SEPARATE FUNCTION FOR DIFFERENT CARDS TO DISPLAY
// - HTML TAG WITH FUNCTIONS INSIDE

// function CreateAccount(){
//     const [show, setShow] = React.useState(true);
//     const [status, setStatus] = React.useState('');

//     return(
//         <Card
//             bgcolor = "primary"
//             header = "Create Account"
//             status = {status}
//             body =
//             {
//                 show ?
//                 <CreateForm setShow={ setShow }/>
//                 :
//                 <CreateMessage setShow={ setShow }/>
//             }
//         />
//     )
// }

// function CreateMessage(props){
//     return(
//         <>
//             <h4>Account has been created.</h4>
//             <button
//                 type="submit"
//                 className="btn btn-light"
//                 onClick={() => props.setShow(true)}
//             >
//                 Click to Add Another Account.
//             </button>
//         </>
//     )
// }

// function CreateForm(props){
//     const username = [username, setUsername] = React.useState('');
//     const email = [email, setEmail] = React.useState('');
//     const password = [password, setPassword] = React.useState('');
//     const context = React.useContext(UserContext);

//     function handle(){
//         console.log(username, email, password);
//         context.user.push({ username, email, password });
//         props.setShow(false);
//     }

//     return(
//         <>
//             Username<br/>
//                 <input
//                     type="input"
//                     className="form-control"
//                     placeholder="Enter Username"
//                     value={ username }
//                     onChange={ event => setUsername(event.target.value) }
//                 />
//             <br/>
//             Email<br/>
//                 <input
//                     type="input"
//                     className="form-control"
//                     placeholder="Enter Email"
//                     value={ email }
//                     onChange={ event => setEmail(event.target.value) }
//                 />
//             <br/>
//             Password<br/>
//                 <input
//                     type="input"
//                     className="form-control"
//                     placeholder="Enter Password"
//                     value={ password }
//                     onChange={ event => setPassword(event.target.value) }
//                 />
//             <br/>
//             <button
//                 type ="submit"
//                 className="btn btn-light"
//                 onClick={handle}>
//                     Click to Create New Account
//             </button>
//         </>
//     );
// }