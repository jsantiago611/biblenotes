export default function PageTitle({ children }) {
  return (
    <h1 className="font-bradford text-3xl font-bold leading-9 tracking-normal text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
