export default function Sidebar() {
    return (
        <aside className="hidden lg:flex lg:flex-col w-64 bg-muted p-4 border-r border-border">
            <div className="font-bold text-lg mb-4">Sidebar</div>
            <nav className="space-y-2">
                <a href="#" className="block hover:text-primary">Dashboard</a>
                <a href="#" className="block hover:text-primary">Projects</a>
                <a href="#" className="block hover:text-primary">Settings</a>
            </nav>
        </aside>
    );
}
