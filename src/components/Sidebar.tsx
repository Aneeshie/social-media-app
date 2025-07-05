import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="hidden lg:flex lg:flex-col w-64 bg-background text-foreground p-4 border-r border-border">
            <div className="text-xl font-semibold mb-6">Menu</div>
            <nav className="space-y-3">
                <Link href="/" className="block px-2 py-1 rounded hover:bg-muted">
                    Dashboard
                </Link>
                <Link href="/projects" className="block px-2 py-1 rounded hover:bg-muted">
                    Projects
                </Link>
                <Link href="/settings" className="block px-2 py-1 rounded hover:bg-muted">
                    Settings
                </Link>
            </nav>
        </aside>
    );
}
