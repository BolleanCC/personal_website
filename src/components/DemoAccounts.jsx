"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, BookOpen, GraduationCap, Users, Key } from "lucide-react";

const DemoAccounts = ({ accounts }) => {
  const [copiedField, setCopiedField] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const roleColors = {
    admin: "from-purple-50 to-purple-100",
    teacher: "from-blue-50 to-blue-100",
    student: "from-green-50 to-green-100",
    parent: "from-orange-50 to-orange-100",
  };

  const roleIcons = {
    admin: Shield,
    teacher: BookOpen,
    student: GraduationCap,
    parent: Users,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="w-80 md:w-96 lg:w-[500px] xl:w-[600px] mb-4"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-lg p-4 flex items-center justify-between group"
      >
        <div className="flex items-center gap-3">
          <Key className="w-5 h-5 text-white" strokeWidth={2} />
          <span className="font-semibold text-white text-lg">
            Demo Accounts
          </span>
          <span className="text-xs text-white/70 hidden sm:inline">
            Click to {isExpanded ? "hide" : "view"} test credentials
          </span>
        </div>
        <motion.svg
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3"
        >
          {accounts.map((account) => (
            <motion.div
              key={account.role}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`bg-gradient-to-br ${
                roleColors[account.role]
              } rounded-lg p-4 shadow-lg`}
            >
              <div className="flex items-center gap-2 mb-3">
                {(() => {
                  const Icon = roleIcons[account.role];
                  return <Icon className="w-6 h-6 text-gray-700" strokeWidth={2} />;
                })()}
                <h3 className="font-bold text-gray-800 capitalize">
                  {account.role}
                </h3>
              </div>

              {/* Username */}
              <div className="mb-2">
                <label className="text-xs text-gray-600 font-medium">
                  Username
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <code className="flex-1 bg-white/60 backdrop-blur-sm text-gray-700 px-3 py-2 rounded text-sm font-mono">
                    {account.username}
                  </code>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        account.username,
                        `${account.role}-username`
                      )
                    }
                    className="bg-white/60 hover:bg-white/80 p-2 rounded transition-all"
                    title="Copy username"
                  >
                    {copiedField === `${account.role}-username` ? (
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-xs text-gray-600 font-medium">
                  Password
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <code className="flex-1 bg-white/60 backdrop-blur-sm text-gray-700 px-3 py-2 rounded text-sm font-mono">
                    {account.password}
                  </code>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        account.password,
                        `${account.role}-password`
                      )
                    }
                    className="bg-white/60 hover:bg-white/80 p-2 rounded transition-all"
                    title="Copy password"
                  >
                    {copiedField === `${account.role}-password` ? (
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default DemoAccounts;
