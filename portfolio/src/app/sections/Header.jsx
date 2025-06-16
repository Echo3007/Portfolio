export const Header = () => {
    return (
        <div className="flex justify-center items-center relative top-3 lg:sticky lg:z-10">
            <nav className="flex gap-1 border border-white/80 rounded-full bg-sky-200/50 backdrop-blur">
                <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white hover:text-gray-900">Home</a>
                <a href="#" className="nav-item">Projects</a>
                <a href="#" className="nav-item">About</a>
                <a href="#" className="nav-item">Contact</a>
            </nav>
        </div>
    )
}
