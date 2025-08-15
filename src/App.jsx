// App.js
import ThemeToggle from "./components/ThemeToggle.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <ThemeToggle />
      <div className="p-6 rounded-lg shadow bg-base-200">
        <h1 className="text-3xl font-bold">Hello DaisyUI!</h1>
        <p>This box changes color with theme.</p>
      </div>
    </div>
  );
}
