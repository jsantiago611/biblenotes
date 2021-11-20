export default function PageTitle({ children }) {
  return (
    <h1 className="text-5xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-4xl md:leading-14">
      {children}
    </h1>
  )
}
