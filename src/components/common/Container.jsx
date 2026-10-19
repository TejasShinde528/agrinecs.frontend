export default function Container({ children, className = '', as: Tag = 'div', narrow = false }) {
  return (
    <Tag
      className={[
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        narrow ? 'max-w-3xl' : 'max-w-6xl',
        className,
      ].join(' ')}
    >
      {children}
    </Tag>
  )
}
