import LoaderAnim from "./LoaderAnim";

export function TailwindBtn({ text , cssClass, disabled } ) {
  return (
    <button disabled={disabled} className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-lg font-light text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800 $ ${cssClass} disabled:opacity-50`}>
      <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-transparent dark:bg-gray-900 font-montserrat w-full flex gap-4 justify-center items-center">
        {text}
        {disabled && <LoaderAnim/>}
      </span>
    </button>
  );
}