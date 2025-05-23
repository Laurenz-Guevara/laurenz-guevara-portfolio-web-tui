import Link from "next/link";

export default function Blog() {
  return (
    <div className="p-4">
      <div className="mb-6">
        <p className="text-yellow mb-2">BLOG POSTS</p>
        <p className="text-lavender mb-1">
          $ ls -la /blog
        </p>
      </div>
      <div className="space-y-6">
        <div className="space-y-6">
          <Link href="/blog/creating-a-tui-served-via-ssh">
            <div className="border border-surface-1 p-3 cursor-pointer hover:bg-surface-0/50">
              <div className="flex justify-between mb-1">
                <p className="text-sky">
                  Turn Your CLI App into a Remote Tool with SSH and Bubbletea
                </p>
                <p>23-05-2025</p>
              </div>
              <p className="mb-2">
                Here’s how I set up a terminal UI from scratch and made it
                accessible over SSH with Bubbletea and Go.
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-surface-0/70 px-2 py-1 rounded">
                  Bubbletea
                </span>
                <span className="bg-surface-0/70 px-2 py-1 rounded">
                  SSH
                </span>
                <span className="bg-surface-0/70 px-2 py-1 rounded">
                  Golang
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="space-y-6">
          <Link href="/blog/why-you-should-consider-using-neovim">
            <div className="border border-surface-1 p-3 cursor-pointer hover:bg-surface-0/50">
              <div className="flex justify-between mb-1">
                <p className="text-sky">
                  Why you should consider using Neovim
                </p>
                <p>23-05-2025</p>
              </div>
              <p className="mb-2">
                Discover the power and extensibility of Neovim and why it shuld
                be your go-to editor.
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-surface-0/70 px-2 py-1 rounded">
                  Workflow
                </span>
                <span className="bg-surface-0/70 px-2 py-1 rounded">
                  Neovim
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
