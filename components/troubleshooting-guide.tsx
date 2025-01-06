export function TroubleshootingGuide() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Troubleshooting Guide</h2>
      <div className="space-y-4">
        <section className="space-y-2">
          <h3 className="text-lg font-semibold">Device Not Connecting?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure your device is turned on and fully charged</li>
            <li>Check if Bluetooth is enabled on your device</li>
            <li>Try restarting both your device and the application</li>
            <li>Make sure you're within range (typically 30 feet/10 meters)</li>
          </ul>
        </section>
        
        <section className="space-y-2">
          <h3 className="text-lg font-semibold">Application Issues?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Clear your browser cache and cookies</li>
            <li>Try using a different web browser</li>
            <li>Ensure you have the latest version of the application</li>
            <li>Check your internet connection</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-semibold">Still Having Problems?</h3>
          <p>If you're still experiencing issues, please contact our support team using the Contact form.</p>
        </section>
      </div>
    </div>
  )
}
