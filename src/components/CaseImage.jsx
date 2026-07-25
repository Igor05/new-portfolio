import PlaceholderImage from './PlaceholderImage'

export default function CaseImage({ src, alt = '', index, tone, aspect = 'aspect-[4/3]', fit = 'contain', label, className = '' }) {
  if (!src) {
    return <PlaceholderImage index={index} tone={tone} aspect={aspect} label={label} className={className} />
  }

  // object-contain (default): these are real UI screenshots — cropping risks
  // cutting off text, so the full frame is shown, matted on card bg. Grid
  // thumbnails opt into object-cover instead, since a fixed-height row needs
  // every image to fill its box the same way.
  const fitClass = fit === 'cover' ? 'object-cover object-top' : 'object-contain'

  return (
    <div className={`flex items-center justify-center bg-card ${aspect} ${className}`}>
      <img src={src} alt={alt} loading="lazy" className={`h-full w-full ${fitClass}`} />
    </div>
  )
}
