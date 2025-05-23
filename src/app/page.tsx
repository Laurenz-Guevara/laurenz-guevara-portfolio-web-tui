export default function Home() {
  return (
    <section className="p-4">
      <div className="mb-6">
        <p className="text-lavender mb-1">$ fastfetch</p>
        <div className="flex flex-wrap space-y-4 md:space-y-0 space-x-10">
          <div className="flex items-center justify-center mx-auto lg:mx-0 md:px-10">
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

          <div className="col-span-7 space-y-2 font-mono">
            <div className="flex">
              <span className="text-peach font-bold w-32">Title:</span>
              <span>Front-end Developer</span>
            </div>
            <div className="flex">
              <span className="text-yellow font-bold w-32">Location:</span>
              <span>
                United Kingdom (British National)
              </span>
            </div>
            <div className="flex">
              <span className="text-green font-bold w-32">
                Experience:
              </span>
              <span>4+ years</span>
            </div>
            <div className="flex">
              <span className="text-sky font-bold w-32">Skills:</span>
              <span>
                React (Next.js / Vite.js), TypeScript, HTML, TailwindCSS / CSS
              </span>
            </div>
            <div className="flex">
              <span className="text-lavender font-bold w-32">Status:</span>
              <span className="text-green">
                Available for work
              </span>
            </div>
            <div className="flex">
              <span className="text-teal font-bold w-32">
                Distro / OS:
              </span>
              <span>Arch Linux / Windows</span>
            </div>
            <div className="flex">
              <span className="text-mauve font-bold w-32">
                Languages:
              </span>
              <span>
                Typescript / Javascript, Golang
              </span>
            </div>
            <div className="flex">
              <span className="text-red font-bold w-32">
                Frameworks:
              </span>
              <span>
                React (Next.js, Vite), Express, TailwindCSS
              </span>
            </div>

            <div className="mt-2.5 pt-2.5 border-t border-surface-1">
              <div className="flex">
                <span className="text-mauve font-bold w-32">Colours:</span>
                <div className="flex-1">
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
        <div className="space-y-2">
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
        </div>
      </div>

      <div>
        <p className="text-lavender mb-1">$ ls projects</p>
        <div className="font-mono">
          <p>
            drwxr-xr-x 2 user staff Jan 15 2023{" "}
            <span className="text-blue">
              Twisty Moto - (Create, share and publish motorbike routes)
            </span>
          </p>
          <p>
            drwxr-xr-x 2 user staff Mar 22 2023{" "}
            <span className="text-blue">
              Cliff Crafts - (E-commerce platform for climbing shoes)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
