

const Sidebar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex h-full'>
            <div className='hidden lg:flex flex-col gap-y-2 h-full w-[300px] p-2'>
                Sidebar
            </div>
            <main className='h-full flex-1 overflow-y-auto py-2'>
                {children}
            </main>
        </div>
    )
}

export default Sidebar