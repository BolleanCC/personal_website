"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { CheckCircle2, Zap, Users, UsersRound, BookOpen } from "lucide-react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const certificateRef = useRef();
  const isCertificateRefInView = useInView(certificateRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/avatar.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover shadow-lg"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">My Values</h1>
            {/* ss */}
            {/* BIOGRAPHY DESC - REDESIGNED */}
            <div className="flex flex-col gap-4">
              {/* Quality */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="group bg-slate-50 hover:bg-slate-100 rounded-xl p-5 transition-all duration-300 hover:shadow-sm border border-slate-200/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:text-slate-700 group-hover:bg-slate-200 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1.5">Quality</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      I believe in writing clean, maintainable code that stands the test of time
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Performance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="group bg-slate-50 hover:bg-slate-100 rounded-xl p-5 transition-all duration-300 hover:shadow-sm border border-slate-200/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:text-slate-700 group-hover:bg-slate-200 transition-all duration-300">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1.5">Performance</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Every millisecond matters for user experience
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Accessibility */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="group bg-slate-50 hover:bg-slate-100 rounded-xl p-5 transition-all duration-300 hover:shadow-sm border border-slate-200/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:text-slate-700 group-hover:bg-slate-200 transition-all duration-300">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1.5">Accessibility</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      The web should be inclusive and usable by everyone
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Collaboration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="group bg-slate-50 hover:bg-slate-100 rounded-xl p-5 transition-all duration-300 hover:shadow-sm border border-slate-200/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:text-slate-700 group-hover:bg-slate-200 transition-all duration-300">
                    <UsersRound className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1.5">Collaboration</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      The best solutions come from diverse perspectives working together
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Continuous Learning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="group bg-slate-50 hover:bg-slate-100 rounded-xl p-5 transition-all duration-300 hover:shadow-sm border border-slate-200/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:text-slate-700 group-hover:bg-slate-200 transition-all duration-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1.5">Continuous Learning</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Technology evolves fast, and so should we
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C#
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Prisma
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ChatGPT
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Cursor
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ClaudeCode
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* CERTIFICATES CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={certificateRef}>
            {/* CERTIFICATE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isCertificateRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              CERTIFICATES
            </motion.h1>
            {/* CERTIFICATE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isCertificateRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="/certificates/thumbnails/FRM_Part1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-4 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 border-2 border-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <span>FRM Certificate</span>
              </a>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
