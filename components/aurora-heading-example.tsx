import { AuroraText } from "./ui/aurora-text";

export default function AuroraHeadingExample() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 p-8">
      <div className="space-y-12 text-center">
        
        {/* Main Hero Heading */}
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          Ship <AuroraText>beautiful</AuroraText>
        </h1>

        {/* Secondary Heading with Custom Colors */}
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
          <AuroraText colors={["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"]}>
            Magic UI Components
          </AuroraText>
        </h2>

        {/* Fast Animation Heading */}
        <h3 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl">
          <AuroraText speed={2} colors={["#FF0080", "#00D4FF", "#FFFF00", "#FF8C00"]}>
            Lightning Fast
          </AuroraText>
        </h3>

        {/* Subtle Animation Heading */}
        <h4 className="text-xl font-bold tracking-tighter md:text-2xl lg:text-3xl">
          <AuroraText 
            speed={0.5} 
            colors={["#667eea", "#764ba2", "#f093fb", "#f5576c"]}
            className="font-medium"
          >
            Smooth & Elegant
          </AuroraText>
        </h4>

        {/* Usage Instructions */}
        <div className="mt-16 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-2xl">
          <h5 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            How to use Aurora Text:
          </h5>
          <div className="text-left space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>• Import: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">import &#123; AuroraText &#125; from "./ui/aurora-text"</code></p>
            <p>• Basic usage: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;AuroraText&gt;Your Text&lt;/AuroraText&gt;</code></p>
            <p>• Custom colors: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">colors=&#123;["#FF0080", "#7928CA"]&#125;</code></p>
            <p>• Animation speed: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">speed=&#123;2&#125;</code> (higher = faster)</p>
            <p>• Custom styling: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">className="font-bold text-2xl"</code></p>
          </div>
        </div>
      </div>
    </div>
  );
} 