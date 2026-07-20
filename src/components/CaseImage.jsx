import PlaceholderImage from './PlaceholderImage'

export default function CaseImage({ src, alt = '', index, tone, aspect = 'aspect-[4/3]', label, className = '' }) {
  if (!src) {
    return <PlaceholderImage index={index} tone={tone} aspect={aspect} label={label} className={className} />
  }

  // object-contain: these are real UI screenshots — cropping with object-cover
  // risks cutting off text, so the full frame is always shown, matted on card bg.
  return (
    <div className={`flex items-center justify-center bg-card ${aspect} ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-contain" />
    </div>
  )
}
