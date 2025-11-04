import React from "react";
import { Linkedin, Mail } from "lucide-react";

const members = [
  // Volunteer Team
  {
    name: "Abdullah Wasim",
    role: "Volunteer Team",
    facultyNumber: "24AEBEA158",
    department: "Aerospace Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Alisha Hasan",
    role: "Volunteer Team",
    facultyNumber: "24ELBEA220",
    department: "Electronics Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Arslan Kazmi",
    role: "Volunteer Team",
    facultyNumber: "25CEBEA166",
    department: "Civil Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Azka Sohail",
    role: "Volunteer Team",
    facultyNumber: "24FTBEA148",
    department: "Fashion Technology",
    email: "",
    linkedin: "",
  },
  {
    name: "Dev Maheswari",
    role: "Volunteer Team",
    facultyNumber: "24CMBCA540",
    department: "Computer Applications",
    email: "",
    linkedin: "",
  },
  {
    name: "Mohammad Ajmal",
    role: "Volunteer Team",
    facultyNumber: "24BABCA136",
    department: "Business Administration",
    email: "",
    linkedin: "",
  },
  {
    name: "Mohammed Anas Saeed",
    role: "Volunteer Team",
    facultyNumber: "24COBEA173",
    department: "Computer Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Mohd Arham",
    role: "Volunteer Team",
    facultyNumber: "25COBEA133",
    department: "Computer Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Mohd Arslaan Azam",
    role: "Volunteer Team",
    facultyNumber: "24AIBEA150",
    department: "Artificial Intelligence",
    email: "",
    linkedin: "",
  },
  {
    name: "Muskan Sheikh",
    role: "Volunteer Team",
    facultyNumber: "24CEBEA801",
    department: "Civil Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Tanzeel Arshad",
    role: "Volunteer Team",
    facultyNumber: "24COBEA146",
    department: "Computer Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Yukti Maheshwari",
    role: "Volunteer Team",
    facultyNumber: "24ELBEA206",
    department: "Electronics Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Abeer Tariq",
    role: "Volunteer Team",
    facultyNumber: "23CMBBA155",
    department: "Business Administration",
    email: "",
    linkedin: "",
  },

  // PR and Networking Team
  {
    name: "Nashrah",
    role: "PR and Networking Team",
    facultyNumber: "25BAMMA156",
    department: "Business Administration",
    email: "",
    linkedin: "",
  },
  {
    name: "Mohammad Asad Mokarim",
    role: "PR and Networking Team",
    facultyNumber: "25EEBEA237",
    department: "Electrical Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Abdullah Ausaf",
    role: "PR and Networking Team",
    facultyNumber: "24MEBEA286",
    department: "Mechanical Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Ali Shaharyar Abbas",
    role: "PR and Networking Team",
    facultyNumber: "25BAMMA150",
    department: "Business Administration",
    email: "",
    linkedin: "",
  },
  {
    name: "Jafar Abbas Khan",
    role: "PR and Networking Team",
    facultyNumber: "25ELBEA160",
    department: "Electronics Engineering",
    email: "",
    linkedin: "",
  },

  // Case Study Team
  {
    name: "Aaqid Anwer",
    role: "Case Study Team",
    facultyNumber: "24CMBCA572",
    department: "Computer Applications",
    email: "",
    linkedin: "",
  },
  {
    name: "Abdul Ahad",
    role: "Case Study Team",
    facultyNumber: "24BAMMA181",
    department: "Business Administration",
    email: "",
    linkedin: "",
  },
  {
    name: "Abdullah Ayaz",
    role: "Case Study Team",
    facultyNumber: "24BAMMA174",
    department: "Business Administration",
    email: "",
    linkedin: "",
  },
  {
    name: "Kulsoom",
    role: "Case Study Team",
    facultyNumber: "23CMBGA154",
    department: "Business Administration",
    email: "",
    linkedin: "",
  },
  {
    name: "Nabila Khan",
    role: "Case Study Team",
    facultyNumber: "24BABCA133",
    department: "Business Administration",
    email: "",
    linkedin: "",
  },
  {
    name: "Rudra Aggarwal",
    role: "Case Study Team",
    facultyNumber: "24VLBEA147",
    department: "Visual Communication",
    email: "",
    linkedin: "",
  },

  // Quant and Crypto Team
  {
    name: "Dastagir Wasim Sheikh",
    role: "Quant and Crypto Team",
    facultyNumber: "24COBEA128",
    department: "Computer Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Humra Aslam",
    role: "Quant and Crypto Team",
    facultyNumber: "23EEBEA370",
    department: "Electrical Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Mohammad Sami",
    role: "Quant and Crypto Team",
    facultyNumber: "25CEBEA248",
    department: "Civil Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Sadia Peerzada",
    role: "Quant and Crypto Team",
    facultyNumber: "24CABSA118",
    department: "Computer Applications",
    email: "",
    linkedin: "",
  },
  {
    name: "Shaurya Kulshrestha",
    role: "Quant and Crypto Team",
    facultyNumber: "24CMBCA552",
    department: "Computer Applications",
    email: "",
    linkedin: "",
  },
  {
    name: "Shubh Varshney",
    role: "Quant and Crypto Team",
    facultyNumber: "24COBEA147",
    department: "Computer Engineering",
    email: "",
    linkedin: "",
  },

  // Research Team
  {
    name: "Aatifa Rizvi",
    role: "Research Team",
    facultyNumber: "24AIBEA138",
    department: "Artificial Intelligence",
    email: "",
    linkedin: "",
  },
  {
    name: "Maria Khan",
    role: "Research Team",
    facultyNumber: "24COBEA802",
    department: "Computer Engineering",
    email: "",
    linkedin: "",
  },
  {
    name: "Suhaib Ahmad Khan",
    role: "Research Team",
    facultyNumber: "21CABSA309",
    department: "Computer Applications",
    email: "",
    linkedin: "",
  },
  {
    name: "Vansh Vyas",
    role: "Research Team",
    facultyNumber: "25STBSA511",
    department: "Science and Technology",
    email: "",
    linkedin: "",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Members = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white py-24">
      <div className="container mx-auto px-4 md:px-8">
        <header className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-400/80 mb-4">
            Our Squad
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gradient">
            Meet the minds powering FAAST
          </h1>
          <p className="mt-6 text-gray-300 text-lg">
            A multidisciplinary collective blending finance, analytics, code, and community. Each member carries
            the club&apos;s ethos forward—building products, decoding markets, and crafting experiences for the next
            wave of fintech leaders.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {members.map((member) => (
            <article
              key={member.name}
              className="glass-panel border border-cyan-500/20 bg-[#0a1f3c]/60 rounded-3xl p-8 shadow-[0_0_20px_rgba(0,229,255,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(0,229,255,0.12)]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-linear-to-br from-cyan-500 via-blue-600 to-purple-600 flex items-center justify-center text-lg font-bold">
                  {getInitials(member.name)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-cyan-300/90">{member.role}</p>
                </div>
              </div>

              <dl className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-400">Faculty No.</dt>
                  <dd className="text-white font-medium">{member.facultyNumber}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-400">Department</dt>
                  <dd className="text-gray-100 text-right">{member.department}</dd>
                </div>
              </dl>

              {/* <p className="mt-6 text-sm text-gray-200 leading-relaxed">{member.bio}</p> */}

              {/* <div className="mt-6 flex flex-wrap gap-2">
                {member.focusAreas.map((area) => (
                  <span
                    key={`${member.name}-${area}`}
                    className="text-xs uppercase tracking-wide bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 px-3 py-1 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div> */}

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors"
                  >
                    <Mail size={16} />
                    {member.email}
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Members;