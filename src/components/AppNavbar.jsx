import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar({ products, carts, setToken }) {


    // const AppNavbar = () => {
    return (
        <div className="d-flex justify-content-center gap-2">
            <Link to={'home'}>
                <Button variant='outline-primary'>Home</Button>
            </Link>
            <Link to={'calculator'}>
                <Button variant='outline-primary'>Calculator</Button></Link>
            <Link to={'animation'}>
                <Button variant='outline-primary'>Animation</Button></Link>
            <Link to={'components'}>
                <Button variant='outline-primary'>component</Button></Link>
            <Link to={'todos'}>
                <Button variant='outline-primary'>Todos</Button></Link>
            <Link to={'Products'}>
                <Button variant='outline-primary'>Products ({products.length})</Button></Link>
            <Link to={'Carts'}>
                <Button variant='outline-primary' className="position-relative">
                    Carts
                    {carts.length > 0 && (

                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {carts.length < 10 ? carts.length : '9+'}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    )}
                </Button>
            </Link>


            <button className="btn btn-outline-danger" style={{ marginLeft: '1rem' }}
                onClick={() => { setToken('') }}>
                Logout
            </button>








        </div>
    )
}

export default AppNavbar;