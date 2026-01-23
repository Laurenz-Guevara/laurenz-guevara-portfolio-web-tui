import ProjectBlock from "@/components/Projects";

export default function Home() {
  return (
    <section className="p-4">
      <div className="mb-6">
        <p className="text-lavender mb-1">$ fastfetch</p>
        <div className="flex flex-wrap space-y-4 logo:space-y-0 space-x-10 mb-3">
          <div className="flex items-center justify-center mx-auto logo:mx-0 md:px-10">
            <pre className="text-mauve text-sm">{`
██╗      ██████╗
██║     ██╔════╝
██║     ██║  ███╗
██║     ██║   ██║
███████╗╚██████╔╝
╚══════╝ ╚═════╝

Laurenz Guevara
`}
            </pre>
          </div>
          <div className="space-y-2 w-full logo:w-fit">
            <div className="grid grid-cols-1 sm:grid-cols-12 space-y-2">
              <span className="sm:col-span-3 text-peach font-bold w-40">
                Title:
              </span>
              <span className="sm:col-span-9">
                Front-end Developer
              </span>
              <span className="sm:col-span-3 text-yellow font-bold w-40">
                Location:
              </span>
              <span className="sm:col-span-9">
                United Kingdom (British National)
              </span>
              <span className="sm:col-span-3 text-green font-bold w-40">
                Experience:
              </span>
              <span className="sm:col-span-9">4+ years</span>
              <span className="sm:col-span-3 text-sky font-bold w-40">
                Skills:
              </span>
              <span className="sm:col-span-9">
                React (Next.js / Vite.js), TypeScript, HTML, TailwindCSS / CSS
              </span>
              <span className="sm:col-span-3 text-lavender font-bold w-40">
                Status:
              </span>
              <span className="sm:col-span-9 text-green">
                Available for work
              </span>
              <span className="sm:col-span-3 text-teal font-bold w-40">
                Distro / OS:
              </span>
              <span className="sm:col-span-9">Omarchy / Windows</span>
              <span className="sm:col-span-3 text-mauve font-bold w-40">
                Languages:
              </span>
              <span className="sm:col-span-9">
                TypeScript / JavaScript, Golang
              </span>
              <span className="sm:col-span-3 text-red font-bold w-40 mb-0">
                Frameworks:
              </span>
              <span className="sm:col-span-9 mb-0">
                React (Next.js, Vite), Express, TailwindCSS
              </span>
            </div>

            <div className="mt-2.5 pt-2.5 border-t border-surface-1">
              <div className="grid grid-cols-1 sm:grid-cols-12 space-y-2">
                <span className="text-mauve sm:col-span-3 font-bold w-40">Colours:</span>
                <div className="sm:col-span-9">
                  <div className="flex gap-1 mb-1">
                    <span className="bg-red w-3 h-3 rounded"></span>
                    <span className="bg-peach w-3 h-3 rounded"></span>
                    <span className="bg-yellow w-3 h-3 rounded"></span>
                    <span className="bg-green w-3 h-3 rounded"></span>
                    <span className="bg-sky w-3 h-3 rounded"></span>
                    <span className="bg-lavender w-3 h-3 rounded"></span>
                    <span className="bg-pink w-3 h-3 rounded"></span>
                    <span className="bg-teal w-3 h-3 rounded"></span>
                  </div>
                  <div className="text-xs text-subtext-0">
                    Catppuccin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-lavender mb-1">$ whoami</p>
            <p>
              Front-end Developer with Startup, Agency, and in-house experience
              across multiple tech stacks in all types of industries.
            </p>
          </div>
          <div>
            <p className="text-lavender mb-1">$ cat summary.txt</p>
            <p>
              Experience in Next.js, Vue.js, TypeScript, and Tailwind CSS.
              Skilled in development, SEO, and CMS integrations. Additionally
              handled back-end tasks, troubleshooting issues, setting up CI/CD
              pipelines, and managing deployments. Led client meetings, project
              discussions, and technical demos.
            </p>
          </div>
          <p className="text-lavender mb-1">$ ls projects</p>
          <ProjectBlock />
        </div>
      </div>
    </section>
  );
}
