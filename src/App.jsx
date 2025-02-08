import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import WithoutApi from "./components/WithoutApi/WithoutApi";

function App() {
  const [isApiPagination, setIsApiPagination] = useState(true);

  return (
    <div className="block mx-auto w-6xl py-6">
      <label className="inline-flex items-center cursor-pointer mb-6">
        <input
          type="checkbox"
          checked={isApiPagination}
          onChange={(e) => setIsApiPagination(e.target.checked)}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {isApiPagination ? "With " : "Without "}api pagination
        </span>
      </label>

      {isApiPagination ? (
        <HomePage isApiPagination={isApiPagination} />
      ) : (
        <WithoutApi isApiPagination={isApiPagination} />
      )}
    </div>
  );
}

export default App;
