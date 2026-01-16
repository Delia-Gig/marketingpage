export default function Home() {
  return (
    <main 
      className="min-h-screen flex items-center justify-center p-8"
      style={{ 
        lineHeight: '71px', 
        letterSpacing: '14px',
        background: 'none'
      }}
    >
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Hallo Züri
        </h1>
        <p 
          className="text-xl md:text-2xl font-light"
          style={{
            height: '50px',
            fontFamily: '"SF Compact Display", sans-serif',
            color: 'var(--tw-gradient-stops)',
            lineHeight: '70px',
            letterSpacing: '0.5px',
            verticalAlign: 'top',
            boxSizing: 'content-box',
            backgroundColor: 'rgba(244, 114, 182, 1)'
          }}
        >
          Willkommen auf meiner Webseite!
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </main>
  )
}
