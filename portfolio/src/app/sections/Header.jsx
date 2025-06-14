export const Header = () => {
    return (
        <div className="flex justify-center items-center relative top-3">
            <nav className="flex gap-1 border border-white/60 rounded-full bg-white/50 backdrop-blur">
                <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Home</a>
                <a href="#" className="nav-item">Projects</a>
                <a href="#" className="nav-item">About</a>
                <a href="#" className="nav-item">Contact</a>
            </nav>
        </div>
    )
}
