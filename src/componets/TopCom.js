import { Check } from 'lucide-react'
import Im3 from '../assets/im3.png'
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
  <div>
    <img src={Im3}/>
  </div>
  );
}
