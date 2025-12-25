import { Download } from "lucide-react";
import Header from "../components/Header";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="bg-mist min-h-screen">

            {/* Header */}
            <Header />

            {/* Hero Body */}
            <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -55 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h2 className="text-4xl mb-2 font-semibold font-geom">
                        Hi, I'm Senthil Nathan
                    </h2>

                    <h2 className="text-primary text-7xl font-poppins font-bold">
                        Software <span className="text-accent">Developer</span>
                    </h2>

                    <p className="mt-6 max-w-md font-inter opacity-80">
                        Frontend Developer passionate about building clean, responsive, and
                        user-friendly web applications using modern technologies.
                    </p>

                    {/* CTA Button */}
                    <a
                        href="/resume.pdf"
                        download
                        className="group inline-flex items-center gap-2 mt-8 bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary transition"
                    >
                        Download Resume
                        <Download
                            size={18}
                            className="transition-transform group-hover:scale-110"
                        />
                    </a>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 55 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="flex justify-center md:justify-end"
                >
                    <img
                        src="/hero-image.jpg"
                        alt="Senthil Nathan"
                        className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-xl"
                    />
                </motion.div>

            </section>
        </div>
    );
};

export default Hero;
