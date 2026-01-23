import Link from "next/link";
import Image from 'next/image'

export default function ProjectBlock() {
  return (
    <section className="space-y-4">
      {projects.map((project) => {
        return (
          <div key={project.projectId} className="border border-surface-1 p-4 bg-[#313244]/30">
            <div className="space-y-1 flex flex-wrap justify-between">
              <div className="space-x-2 mr-2">
                <span className="text-blue">{project.title}</span>
                <span>-</span>
                <Link className="text-green" target="_blank" href={project.url}>{project.url}</Link>
              </div>
              <div className="flex flex-wrap gap-2 text-xs h-min">
                {(project.tags).map((tag) => {
                  return (
                    <Link key={tag.title} href={tag.url} target="_blank">
                      <span
                        className="px-2 py-1 rounded font-bold"
                        style={{ backgroundColor: tag.colour, color: tag.textColour }}
                      >
                        {tag.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <p className="mt-1">{project.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
              {project.images.map((image) => {
                return (
                  <Link key={image.id} target="_blank" href={project.url}><Image src={image.url} alt={image.alt} width="1300" height="800" className="w-full h-full border border-surface-1 hover:border-[#89b4fa] hover:cursor-pointer transition-colors" /></Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </section>
  )
}

const projects = [
  {
    projectId: 1,
    title: "Twisty Moto",
    url: "https://twisty-moto.vercel.app",
    description: "A route planning app for motorcyclists built with Next.js, PostgreSQL, Drizzle ORM, and Tailwind CSS, deployed on Vercel.",
    tags: [
      {
        title: "Next.js",
        colour: "#010102",
        textColour: "#ffffff",
        url: "http://nextjs.org"
      },
      {
        title: "Mapbox",
        colour: "#3887be",
        textColour: "#ffffff",
        url: "https://www.mapbox.com"
      },
      {
        title: "Drizzle ORM",
        colour: "#C5F74F",
        textColour: "#000000",
        url: "https://orm.drizzle.team"
      },
      {
        title: "PostreSQL",
        colour: "#336791",
        textColour: "#ffffff",
        url: "https://www.postgresql.org"
      },
      {
        title: "Tailwind",
        colour: "#03B7F9",
        textColour: "#ffffff",
        url: "https://tailwindcss.com"
      },
      {
        title: "AWS S3",
        colour: "#66A340",
        textColour: "#ffffff",
        url: "https://aws.amazon.com/s3"
      },
      {
        title: "Kinde Auth",
        colour: "#ffffff",
        textColour: "#000000",
        url: "https://www.kinde.com"
      },
      {
        title: "Zod",
        colour: "#3068B7",
        textColour: "#ffffff",
        url: "https://zod.dev"
      },
      {
        title: "Zustand",
        colour: "#49443E",
        textColour: "#ffffff",
        url: "https://github.com/pmndrs/zustand"
      },
      {
        title: "Tanstack Query",
        colour: "#FA7803",
        textColour: "#ffffff",
        url: "https://tanstack.com"
      },
    ],
    images: [
      { id: 1, url: "https://laurenz-guevara-portfolio-web-tui.s3.eu-west-2.amazonaws.com/assets/homepage.png", alt: "Twisty Moto Homepage" },
      { id: 2, url: "https://laurenz-guevara-portfolio-web-tui.s3.eu-west-2.amazonaws.com/assets/route-editor-page.png", alt: "Twisty Moto Route Editor" },
      { id: 3, url: "https://laurenz-guevara-portfolio-web-tui.s3.eu-west-2.amazonaws.com/assets/my-routes-page.png", alt: "Twisty Moto Route Catalogue" },
    ]
  },
  {
    projectId: 2,
    title: "Cliffcrafts",
    url: "https://github.com/Laurenz-Guevara/cliff-crafts",
    description: "Full Stack E-Commerce website built with React and Typescript. Firebase cloud functions using Express.js to provide API Requests with stripe.",
    tags: [
      {
        title: "Vite",
        colour: "#b39aff",
        textColour: "#000000",
        url: "https://vite.dev"
      },
      {
        title: "Sanity",
        colour: "#EE4437",
        textColour: "#ffffff",
        url: "https://www.sanity.io"
      },
      {
        title: "Stripe",
        colour: "#6860FF",
        textColour: "#ffffff",
        url: "https://stripe.com"
      },
      {
        title: "Firebase",
        colour: "#FCCA39",
        textColour: "#000000",
        url: "https://firebase.google.com"
      },
      {
        title: "Redux",
        colour: "#764ABC",
        textColour: "#ffffff",
        url: "https://react-redux.js.org"
      },
    ],
    images: [
      { id: 1, url: "https://laurenz-guevara-portfolio-web-tui.s3.eu-west-2.amazonaws.com/assets/cliffcrafts-products.png", alt: "Cliffcrafts Catalogue Page" },
      { id: 2, url: "https://laurenz-guevara-portfolio-web-tui.s3.eu-west-2.amazonaws.com/assets/cliffcrafts-product-page.png", alt: "Cliffcrafts Product Page" },
      { id: 3, url: "https://laurenz-guevara-portfolio-web-tui.s3.eu-west-2.amazonaws.com/assets/cliffcrafts-stripe-page.png", alt: "Cliffcrafts Checkout Page" },
    ]
  },
  {
    projectId: 3,
    title: "Portfolio SSH",
    url: "https://github.com/Laurenz-Guevara/laurenz-guevara-portfolio-web-tui",
    description: "SSH app built using Golang, Bubble Tea and Wish. View this page but in the terminal by running ssh portfolio.laurenzguevara.com.",
    tags: [
      {
        title: "Golang",
        colour: "#04A4CD",
        textColour: "#ffffff",
        url: "https://go.dev"
      },
      {
        title: "Bubble Tea",
        colour: "#6C50FF",
        textColour: "#ffffff",
        url: "https://charm.land"
      },
      {
        title: "Wish",
        colour: "#6C50FF",
        textColour: "#ffffff",
        url: "https://charm.land"
      },
      {
        title: "Fly.io",
        colour: "#A872EE",
        textColour: "#ffffff",
        url: "https://fly.io"
      },
    ],
    images: [
      { id: 1, url: "https://laurenz-guevara-portfolio-web-tui.s3.eu-west-2.amazonaws.com/assets/ssh-tui-home.png", alt: "SSH Portfolio Homepage" },
      { id: 2, url: "https://laurenz-guevara-portfolio-web-tui.s3.eu-west-2.amazonaws.com/assets/ssh-tui-experience.png", alt: "SSH Portfolio Experience Page" },
      { id: 3, url: "https://laurenz-guevara-portfolio-web-tui.s3.eu-west-2.amazonaws.com/assets/ssh-contact.png", alt: "SSH Portfolio Contact Page" },
    ]
  },
]
