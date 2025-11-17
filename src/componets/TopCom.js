import { Check } from 'lucide-react'

export default function TopCom() {
  const features = [
    { title: 'Client-Centric Approach' },
    { title: 'Global Quality Standards' },
    { title: 'Cutting-edge Infrastructure' },
    { title: 'Best-In-Class Project Management' },
    { title: 'Time-Zone Compatibility' },
    { title: 'Agile Adaptability' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5ede3] via-[#faf7f2] to-[#f0ece5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Illustration */}
          <div className="relative flex items-center justify-center">
            <DeveloperWorkspaceIllustration />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a3a3a] leading-tight text-balance">
              Top Companies Trust ValueCoders For Hiring Software Developers
            </h1>

            <p className="text-base text-[#666666] leading-relaxed text-pretty max-w-lg">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Since The 1500s.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-6 h-6 text-[#4caf50] stroke-[3]" />
                  <span className="text-[#1a3a3a] font-medium text-sm sm:text-base">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function DeveloperWorkspaceIllustration() {
  return (
    <svg
      viewBox="0 0 450 400"
      className="w-full max-w-md h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="225" cy="200" r="180" fill="#c8e6c9" opacity="0.6" />
      <circle cx="225" cy="200" r="160" fill="#b5ddb5" opacity="0.3" />

      <g>
        <path d="M 80 280 Q 60 250 70 220 Q 50 240 60 200 Q 40 220 50 180" stroke="#4caf50" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="75" cy="320" r="25" fill="#4caf50" opacity="0.8" />
      </g>

      <g>
        <path d="M 370 280 Q 390 250 380 220 Q 400 240 390 200 Q 410 220 400 180" stroke="#4caf50" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="375" cy="320" r="25" fill="#4caf50" opacity="0.8" />
      </g>

      <g>
        <rect x="100" y="120" width="250" height="160" rx="8" fill="#2c3e50" stroke="#1a252f" strokeWidth="3" />
        <rect x="115" y="135" width="220" height="130" rx="4" fill="#0f1419" stroke="#1a252f" strokeWidth="2" />

        <g stroke="#4caf50" strokeWidth="2" opacity="0.8">
          <line x1="130" y1="150" x2="220" y2="150" />
          <line x1="130" y1="165" x2="200" y2="165" />
          <line x1="130" y1="180" x2="210" y2="180" />
          <line x1="130" y1="195" x2="190" y2="195" />
          <line x1="130" y1="210" x2="205" y2="210" />
          <line x1="130" y1="225" x2="195" y2="225" />
          <line x1="130" y1="240" x2="215" y2="240" />
          <line x1="130" y1="255" x2="185" y2="255" />
        </g>

        <rect x="100" y="120" width="250" height="15" rx="8" fill="#34495e" stroke="#1a252f" strokeWidth="2" />

        <path d="M 150 280 Q 160 290 225 295 Q 290 290 300 280" stroke="#2c3e50" strokeWidth="8" fill="none" strokeLinecap="round" />
      </g>

      <g>
        <rect x="95" y="295" width="260" height="60" rx="4" fill="#e8f5e9" stroke="#95c995" strokeWidth="2" />

        <g fill="#c8e6c9" stroke="#95c995" strokeWidth="1">
          {[...Array(15)].map((_, i) => {
            const row = Math.floor(i / 15)
            const col = i % 15
            return <rect key={i} x={105 + col * 16} y={305 + row * 18} width="14" height="14" rx="1" />
          })}
        </g>

        <g fill="#fdbcb4" opacity="0.9">
          <ellipse cx="140" cy="325" rx="18" ry="25" />
          <circle cx="125" cy="310" r="6" />
          <circle cx="135" cy="305" r="6" />
          <circle cx="145" cy="306" r="6" />

          <ellipse cx="310" cy="325" rx="18" ry="25" transform="scale(-1 1) translate(-620)" />
          <circle cx="325" cy="310" r="6" />
          <circle cx="315" cy="305" r="6" />
          <circle cx="305" cy="306" r="6" />
        </g>
      </g>

      <g>
        <ellipse cx="365" cy="280" rx="22" ry="32" fill="#e8f5e9" stroke="#95c995" strokeWidth="2" />
        <circle cx="365" cy="255" r="8" fill="#95c995" />
      </g>

      <g transform="translate(365, 320)">
        <path d="M -5 0 L 5 8 L 0 10 L -8 5 Z" fill="#fdbcb4" />
      </g>

      <g fontSize="10" fill="#95c995" opacity="0.7" fontFamily="monospace">
        <text x="120" y="190">{'{'} </text>
        <text x="255" y="220">{'('}</text>
      </g>

      <g>
        <circle cx="350" cy="100" r="35" fill="none" stroke="#4caf50" strokeWidth="3" opacity="0.6" />
        <circle cx="350" cy="100" r="28" fill="#e8f5e9" opacity="0.4" />
      </g>

      <g transform="translate(90, 310)">
        <path d="M 5 0 L 5 15 L 0 20 L 0 15 L -5 15 L -5 5 L 0 5 L 5 0" fill="#4caf50" opacity="0.6" />
      </g>

      <g transform="translate(360, 310)">
        <path d="M -5 0 L -5 15 L 0 20 L 0 15 L 5 15 L 5 5 L 0 5 L -5 0" fill="#4caf50" opacity="0.6" />
      </g>
    </svg>
  );
}
