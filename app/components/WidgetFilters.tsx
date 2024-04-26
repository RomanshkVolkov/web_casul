export default function WidgetFilters() {
    return (
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center">
                <span className="text-gray-600 mr-2">Filter by:</span>
                <select className="border border-gray-300 rounded-md px-2 py-1">
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div className="flex items-center">
                <span className="text-gray-600 mr-2">Sort by:</span>
                <select className="border border-gray-300 rounded-md px-2 py-1">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>
        </div>
    )
}