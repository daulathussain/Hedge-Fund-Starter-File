export default function Input({ label, error, className = "", ...props }) {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative rounded-md shadow-sm">
        <input
          className={`
              block w-full px-4 h-10 rounded-md border-gray-300 dark:border-gray-600
              focus:ring-blue-500 focus:border-blue-500 sm:text-sm
              dark:bg-gray-700 dark:text-white
              ${
                error
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : ""
              }
            `}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
