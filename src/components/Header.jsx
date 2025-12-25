const Header = () => {
    return (
        <header className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">

            {/* Left - Portfolio Text */}
            <h1 className="text-4xl font-poppins font-bold">
                Port<span className="text-accent">folio</span>
            </h1>

            {/* Right - Navigation */}
            <nav className="hidden font-poppins md:flex space-x-8 text-xl font-medium">
                <a href="#home" className="hover:text-accent transition">Home</a>
                <a href="#about" className="hover:text-accent transition">About</a>
                <a href="#skills" className="hover:text-accent transition">Skills</a>
                <a href="#projects" className="hover:text-accent transition">Projects</a>
                <a href="#education" className="hover:text-accent transition">Education</a>
                <a href="#contact" className="hover:text-accent transition">Contact</a>
            </nav>

        </header>
    );
};

export default Header;
