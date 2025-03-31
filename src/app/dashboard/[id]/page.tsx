export default function UserDashboard({params}: any) {
    return(
        <div className="flex h-screen">
            <div className="flex flex-col justify-center items-center w-full bg-white p-10">
                <h2 className="text-2xl font-bold mb-6 text-black">Dashboard</h2>
                <p className="text-gray-700">Welcome to the Dashboard/{params.id}!</p>
            </div>
        </div>
    )
}