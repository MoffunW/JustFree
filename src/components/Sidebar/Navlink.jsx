import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from "framer-motion";

function Navlink({ to, closeMobile, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const animateFrom = { opacity: 0, x: -40 };
    const animateTo = { opacity: 1, x: 0 };

    return (
        <Link to={to}>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.25 }}
                onClick={() => props.isMobile && closeMobile()}
                className={match ? "nav-link active" : "nav-link"}
            >
                <img
                    className="nav-link__icon"
                    src={props.src}
                    alt="nav-link item"
                />
                <a href="/" className="nav-link__text">
                    {props.text}
                </a>
            </motion.li>
        </Link>
    );
}

export default Navlink;
