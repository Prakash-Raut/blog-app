import {Container, Logo, LogoutBtn} from '../index';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export function Header() {

    const authStatus = useSelector((state) => state.auth.status);

    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]
    return (
        <header className="py-3 shadow bg-indigo-500">
            <Container>
                <nav className='flex'>
                    <div className='mr-4 pt-2 text-white font-black tracking-wide uppercase'>
                        <Link to="/">
                            <Logo width="70px"/>
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className='text-white inline-bock px-6 py-2 duration-200 hover:bg-black rounded-full font-bold'
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}