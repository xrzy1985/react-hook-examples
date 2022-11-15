import './footer.scss';

export default function Footer(props) {
    return (
        <footer className="footer">
            <h5>Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }}></span> {new Date().getFullYear()}</h5>
        </footer>
    );
}