import './header.scss';

export default function Header(props) {
    const title = 'React 18 Hook Examples';
    return (
        <header className="header">
            <h1>
                {title}
            </h1>
        </header>
    )
}