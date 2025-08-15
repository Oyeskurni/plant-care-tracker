import { Link } from "react-router-dom";

const Footer = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "All Plants", path: "/allPlants" },
        { name: "Add Plant", path: "/add-plant" },   // <- match router
        { name: "My Plants", path: "/my-plants" },   // <- match router
    ];

    return (
        <footer className="bg-emerald-800 text-white py-8">
           
        </footer>
    );
};

export default Footer;
