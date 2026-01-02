import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBvZmZpY2V8ZW58MXx8fHwxNzY3MjU3NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern dental clinic exterior',
    size: 'large'
  },
  {
    src: 'https://images.unsplash.com/photo-1704455306925-1401c3012117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjcxOTU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Treatment room',
    size: 'medium'
  },
  {
    src: 'https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50YWwlMjBlcXVpcG1lbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzY3MTg4MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Modern dental equipment',
    size: 'medium'
  },
  {
    src: 'https://images.unsplash.com/photo-1611690061822-b707a67bfebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwcGF0aWVudCUyMHNtaWxpbmd8ZW58MXx8fHwxNzY3MTg2OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Patient care',
    size: 'medium'
  }
];

export function GallerySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#4A90E2] mb-4">Our Clinic</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A welcoming, modern space designed with your comfort in mind
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`
                ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow group
              `}
            >
              <div className="relative h-full min-h-[250px]">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
