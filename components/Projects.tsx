"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// const projects = [
    // {
    //     title: "Solid Starters",
    //     category: "Low-Code Platform",
    //     description: "A proprietary low-code platform enabling creation of CMS-driven websites through GUI-based model and field creation.",
    //     tech: "Next.js, Nest.js, MongoDB",
    //     image: "/projects/solid-starters.png"
    // },
    // {
    //     // title: "Radix E-Commerce",
    //     title: "TheArtCraft E-Commerce",
    //     link:"https://theartcraft.netlify.app/",
    //     category: "Dynamic Platform",
    //     description: "Complete e-commerce platform with dynamic CMS-driven product management and custom admin panels.",
    //     tech: "React, Node.js, Microservices",
    //     image: "/projects/radix.png"
    // },
    // {
    //     title: "Bond Cancellation",
    //     category: "Automation System",
    //     description: "Business automation for import-export workflows, featuring multi-step processes and financial logic.",
    //     tech: "React, Subscription Engine",
    //     image: "/projects/bond-cancellation.png"
    // },
    // {
    //     title: "Max Life - Mpro",
    //     category: "Insurance Tech",
    //     description: "Large-scale operations platform. Led two teams, migrated to microservices, and delivered 10+ major upgrades.",
    //     tech: "Node.js, Microservices",
    //     image: "/projects/max-life.png"
    // },
    //];

    const projects = [
         {
        // title: "Radix E-Commerce",
        title: "TheArtCraft E-Commerce",
        link:"https://theartcraft.netlify.app/",
        category: "Dynamic Platform",
        description: "Complete e-commerce platform with dynamic CMS-driven product management and custom admin panels.",
        tech: "React, Node.js, Microservices",
        image: "/projects/radix.png"
    },
    {
        title: "Task Management System",
        category: "Full Stack Web App",
        description: "CRUD-based task manager using Node.js, Express, and MongoDB.",
        tech: "Node.js, Express, MongoDB, React",
        image: "/projects/solid-starters.png", // keep old image
        github: "https://github.com/Darshasojitra/simple-todo",
        live: "https://simple-todo-production-e10e.up.railway.app/"
    },
    {
        title: "Todo App",
        category: "Frontend App",
        description: "Simple todo app with add, delete and update features.",
        tech: "React, JavaScript",
        image: "/projects/radix.png",
        github: "https://github.com/Darshasojitra/mern-todo-2025",
        live: "https://mern-todo-2025-1.onrender.com/"
    },
    {
        title: "Portfolio Website",
        category: "Personal Project",
        description: "Responsive portfolio built with Next.js and Tailwind CSS.",
        tech: "Next.js, Tailwind",
        image: "/projects/bond-cancellation.png",
        github: "https://github.com/Darshasojitra/portfolio",
        live: "https://Darshans-portfolio.vercel.app"
    },
    {
        title: "Task API",
        category: "Backend Project",
        description: "REST API for managing tasks with MongoDB.",
        tech: "Node.js, Express, MongoDB",
        image: "/projects/max-life.png",
        github: "https://github.com/Darshasojitra/task-api",
        live: "https://bubblegum-phoenix.netlify.app/"
    }

];

export default function Projects() {
    return (
        <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold mb-20 tracking-tighter text-white"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer h-[500px] flex flex-col justify-end"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />
                            </div>

                            <div className="relative z-10 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-[#121212] uppercase bg-[#ededed] rounded-full shadow-lg">
                                        {project.category}
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/30 rounded-full backdrop-blur-md">
                                        {project.tech}
                                    </span>
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-3 drop-shadow-md">{project.title}</h3>
                                <p className="text-gray-200 text-lg leading-relaxed drop-shadow-md">{project.description}</p>
                                <div className="flex gap-4 mt-4">
    {project.github && (
        <a
            href={project.github}
            target="_blank"
            className="px-4 py-2 text-sm bg-white text-black rounded-md font-medium hover:bg-gray-300 transition"
        >
            GitHub
        </a>
    )}

    {project.live && (
        <a
            href={project.live}
            target="_blank"
            className="px-4 py-2 text-sm border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition"
        >
            Live Demo
        </a>
    )}
</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
