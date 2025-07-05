import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="hidden lg:flex lg:flex-col w-64 bg-black text-white p-4 border-r border-neutral-800">
            <div className="text-xl font-semibold mb-6">Menu</div>
            <nav className="space-y-3">
                <Link href="/" className="block px-2 py-1 rounded hover:bg-neutral-900">
                    Dashboard
                </Link>
                <Link href="/projects" className="block px-2 py-1 rounded hover:bg-neutral-900">
                    Projects
                </Link>
                <Link href="/settings" className="block px-2 py-1 rounded hover:bg-neutral-900">
                    Settings
                </Link>
            </nav>
        </aside>
    );
}
