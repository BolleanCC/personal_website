"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import DemoAccounts from "@/components/DemoAccounts";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "School Management System",
    desc: "A role-based school management platform built with Next.js 15, Clerk authentication, Prisma ORM, and Tailwind CSS. It provides dedicated dashboards for admins, teachers, students, and parents to manage schedules, classes, announcements, and assessments in a unified interface.",
    img: "/school.jpg",
    link: "https://nextschoolmanagement.vercel.app/",
    github: "https://github.com/BolleanCC/next-school-management",
    demoAccounts: [
      {
        role: "admin",
        username: "admin",
        password: "admin",
      },
      {
        role: "teacher",
        username: "teacher",
        password: "teacher",
      },
      {
        role: "student",
        username: "student",
        password: "Student-2025_demo",
      },
      {
        role: "parent",
        username: "parent",
        password: "Parent-2025_demo",
      },
    ],
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Shadcn Dashboard",
    desc: "A modern, feature-rich admin dashboard built with Next.js 15, shadcn/ui, and TypeScript. This project showcases a complete UI/UX implementation with user management, payments tracking, data visualization, and a responsive design system.",
    img: "/shadcn.jpg",
    link: "https://shadcn-dashboard-mu-azure.vercel.app/",
    github: "https://github.com/BolleanCC/shadcn-dashboard",
  },
];

// Single portfolio item component with animation
const PortfolioItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`w-screen min-h-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex flex-col gap-8 text-white max-w-7xl px-4 py-12">
        <motion.h1
          className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {item.title}
        </motion.h1>
        <motion.div
          className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] rounded-lg overflow-hidden shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
          }
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.p
          className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {item.desc}
        </motion.p>
        {/* Demo Accounts - Only show if available */}
        {item.demoAccounts && isInView && (
          <DemoAccounts accounts={item.demoAccounts} />
        )}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex gap-4 justify-end"
        >
          {/* GitHub Button */}
          <Link href={item.github} target="_blank" rel="noopener noreferrer">
            <button className="p-2 md:p-4 lg:p-6 bg-white text-gray-600 font-semibold rounded hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2">
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-sm md:text-base lg:text-lg">GitHub</span>
            </button>
          </Link>

          {/* Demo Button */}
          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            <button className="p-2 md:p-4 lg:p-6 bg-white text-gray-600 font-semibold rounded hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2">
              <span className="text-sm md:text-base lg:text-lg">See Demo</span>
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Header Section */}
      <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl md:text-6xl lg:text-8xl text-center font-bold">
        My Works
      </div>

      {/* Portfolio Items - Vertical Scroll */}
      <div className="flex flex-col">
        {items.map((item, index) => (
          <PortfolioItem key={item.id} item={item} index={index} />
        ))}
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] pointer-events-none"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Web Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:cursor-pointer hover:bg-gray-800 transition-colors z-10"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
