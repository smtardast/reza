import logo from '/workspaces/reza/reza/src/assets/lolbunny.png';


function Nav() { return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
       <div className="container-fluid">
         <a className="navbar-brand" href="#home">    
           <img src={logo} alt="babe" width="30" height="24" className="d-inline-block align-text-top"></img>
           Reza Tardast
         </a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNavDropdown">
           <ul className="navbar-nav">
       
             <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle" href="#projects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Projects
               </a>
               <ul className="dropdown-menu">
                 <li><a className="dropdown-item" href="#">eat me out</a></li>
                 <li><a className="dropdown-item" href="#">membranes</a></li>
                 <li><a className="dropdown-item" href="#">creatures</a></li>
                 <li><a className="dropdown-item" href="#">inner landscapes</a></li>
                 <li><a className="dropdown-item" href="#">just give up</a></li>
                 <li><a className="dropdown-item" href="#">grandpa hunting</a></li>
                 <li><a className="dropdown-item" href="#">walkaround</a></li>
                 <li><a className="dropdown-item" href="#">fragile??</a></li>
                 <li><a className="dropdown-item" href="#">hairy bastard</a></li>
                 <li><a className="dropdown-item" href="#">hospitable</a></li>
                
               </ul>
             </li>
   
             <li className="nav-item">
               <a className="nav-link" href="#about">About</a>
             </li>
             <li className="nav-item">
               <a className="nav-link" href="#contact">Contact</a>
             </li>
           </ul>
         </div>
       </div>
     </nav>
);
    
}

export default Nav;