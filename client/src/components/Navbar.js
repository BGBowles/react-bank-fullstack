import App from '../App';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <h1 className="navbar-brand" href="#">Navbar Component</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">React-Bank Home</a>

                        <a className="nav-link" href="/createaccount">Create Account</a>
                        <a className="nav-link" href="/deposit">Deposit Component</a>
                        <a className="nav-link" href="/withdrawal" >Withdrawal Component</a>
                        <a className="nav-link" href="/alldata">All Data Component</a>

                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        <hr/>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;