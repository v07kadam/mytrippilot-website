export default function PhoneFrame({ src, alt, className = '', eager = false }) {
  return (
    <div className={`phone ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        width="600"
        height="1260"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : undefined}
      />
    </div>
  )
}
