export default function Skills() {
  return (
    <section className="p-4">
      <div className="mb-6">
        <p className="text-yellow mb-2">CORE TECHNICAL SKILLS</p>
        <p className="text-lavender mb-1">$ cat resume/skills/core.txt</p>
      </div>

      <div className="grid grid-cols-4 gap-6 auto-rows-min">
        <div className="col-span-4 md:col-span-2 row-span-2 border border-surface-1 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-blue text-2xl">⚡</span>
            <h3 className="text-blue font-bold text-lg">Primary Skills</h3>
          </div>
          <div className="space-y-2">
            <div className="p-2 bg-surface-0/30 border border-surface-1/50">
              React (Next.js / Vite)
            </div>
            <div className="p-2 bg-surface-0/30 border border-surface-1/50">
              TypeScript, JavaScript
            </div>
            <div className="p-2 bg-surface-0/30 border border-surface-1/50">
              HTML, Tailwind, CSS, SCSS
            </div>
            <div className="p-2 bg-surface-0/30 border border-surface-1/50">
              Payload, Sanity (CMS)
            </div>
            <div className="p-2 bg-surface-0/30 border border-surface-1/50">
              Jest, Cypress, React Cosmos
            </div>
            <div className="p-2 bg-surface-0/30 border border-surface-1/50">
              Express
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-1 border border-surface-1 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-peach text-lg">🗄️</span>
            <h3 className="text-peach font-bold">Database</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="bg-base p-2 bg-surface-0/30 border border-surface-1/50">
              <div className="">PostgreSQL</div>
              <div className="text-xs text-subtext-0">
                Relational DB - Drizzle ORM
              </div>
            </div>
            <div className="bg-base p-2 bg-surface-0/30 border border-surface-1/50">
              <div className="">MongoDB</div>
              <div className="text-xs text-subtext-0">Document DB</div>
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-1 border border-surface-1 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sky text-lg">☁️</span>
            <h3 className="text-sky font-bold">Cloud & DevOps</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="bg-base p-2 bg-surface-0/30 border border-surface-1/50">
              <div className="">AWS</div>
              <div className="text-xs text-subtext-0">S3 Buckets</div>
            </div>
            <div className="bg-base p-2 bg-surface-0/30 border border-surface-1/50">
              <div className="">Docker</div>
              <div className="text-xs text-subtext-0">Containerisation</div>
            </div>
            <div className="bg-base p-2 bg-surface-0/30 border border-surface-1/50">
              <div className="">GitHub Actions</div>
              <div className="text-xs text-subtext-0">CI/CD</div>
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-2 border border-surface-1 p-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-green text-lg">🛠️</span>
            <h3 className="text-green font-bold">Development Workflow</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="space-y-2">
              <div className="bg-base p-2 bg-surface-0/30 border border-surface-1/50">
                <div>Git + GitHub</div>
                <div className="text-xs text-subtext-0">Version Control</div>
              </div>
              <div className="bg-base p-2 bg-surface-0/30 border border-surface-1/50">
                <div className="">Neovim</div>
                <div className="text-xs text-subtext-0">Primary Editor</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-base p-2 bg-surface-0/30 border border-surface-1/50">
                <div>WSL / Arch / Windows</div>
                <div className="text-xs text-subtext-0">Environment</div>
              </div>
              <div className="bg-base p-2 bg-surface-0/30 border border-surface-1/50">
                <div>Figma</div>
                <div className="text-xs text-subtext-0">
                  Design
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 border border-surface-1 p-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-mauve text-lg">🎯</span>
            <h3 className="text-mauve font-bold">Current Focus Areas</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-surface-0/30 p-3 rounded border border-surface-1/30">
              <div className="text-pink mb-1">
                Integrating Mapbox API & Route Navigation
              </div>
              <div className="text-xs text-subtext-0">
                Integrating Mapbox with route navigation in my current project
                Twistymoto
              </div>
            </div>
            <div className="bg-surface-0/30 p-3 rounded border border-surface-1/30">
              <div className="text-sky mb-1">API Architecture</div>
              <div className="text-xs text-subtext-0">
                RESTful design, microservices patterns
              </div>
            </div>
            <div className="bg-surface-0/30 p-3 rounded border border-surface-1/30">
              <div className="text-green mb-1">
                Developer Experience
              </div>
              <div className="text-xs text-subtext-0">Tooling, automation</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        <div className="border border-surface-1 p-3">
          <div className="text-yellow font-bold">4+</div>
          <div className="text-xs text-subtext-0">Years Experience</div>
        </div>
        <div className="border border-surface-1 p-3">
          <div className="text-green font-bold">99+</div>
          <div className="text-xs text-subtext-0">Dotfiles Refactors</div>
        </div>
        <div className="border border-surface-1 p-3 sm:col-span-2 lg:col-span-1">
          <div className="text-pink font-bold">
            OverflowError: ProjectStackLimitExceeded
          </div>
          <div className="text-xs text-subtext-0">
            Personal Projects In Limbo
          </div>
        </div>
      </div>
    </section>
  );
}
