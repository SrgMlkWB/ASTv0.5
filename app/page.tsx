export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Welcome to ASSIST</h1>
      <p className="text-lg text-muted-foreground">
        Your comprehensive troubleshooting companion
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-card rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">My Devices</h2>
          <p className="text-muted-foreground">View and manage your connected devices</p>
        </div>
        
        <div className="p-6 bg-card rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Assistance</h2>
          <p className="text-muted-foreground">Get help with troubleshooting</p>
        </div>
        
        <div className="p-6 bg-card rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Academy</h2>
          <p className="text-muted-foreground">Learn more about your devices</p>
        </div>
      </div>
    </div>
  )
}
