import HeroSection from '../components/home/HeroSection'
import BrandIntroduction from '../components/home/BrandIntroduction'
import FeaturedProducts from '../components/home/FeaturedProducts'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ImageCarousel from '../components/home/ImageCarousel'
import GalleryPreview from '../components/home/GalleryPreview'
import AboutPreview from '../components/home/AboutPreview'
import ContactSection from '../components/home/ContactSection'
import SEO from '../components/common/SEO'
import { company } from '../data/company'
import { buildPageMeta } from '../utils/seo'

export default function HomePage() {
  const meta = buildPageMeta({
    title: `${company.name} | Growing a Better Future, Naturally`,
    description: company.shortDescription,
    path: '/',
    image: '/images/og-default.jpg',
  })

  return (
    <>
      <SEO {...meta} />
      <HeroSection />
      <BrandIntroduction />
      <FeaturedProducts />
      <WhyChooseUs />
      <ImageCarousel />
      <GalleryPreview />
      <AboutPreview />
      <ContactSection />
    </>
  )
}
