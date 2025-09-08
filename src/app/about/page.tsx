import CustomerPhotosSection from "@/components/CustomerPhotosSection"
import Footer from "@/components/Footer"
import ProductDetailsSection from "@/components/ProductDetailsSection"
import SeeMorePuppiesSection from "@/components/SeeMorePuppiesSection"
const Page = () => {
  return (
     <div className="bg-white">
      {/* Container principal avec des marges et un padding */}
      <main className="container mx-auto px-4 md:px-8 lg:px-12 py-8">
        <ProductDetailsSection />
        <CustomerPhotosSection />
        <SeeMorePuppiesSection />
      </main>


       <Footer />
    </div>
  )
}

export default Page