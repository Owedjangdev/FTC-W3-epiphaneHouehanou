import Footer from "@/components/Footer"
import HomeCategory from "@/components/HomeCategory"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"


function page() {
  return (
    <div>
<main className="container mx-auto py-12">
  <div className="text-center mb-10">
    <h1 className="text-4xl font-bold">Contactez-nous</h1>
    <p className="mt-4 text-lg text-gray-600">
      Nous sommes à votre écoute pour toute question, suggestion ou demande de renseignements.
    </p>
  </div>

  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Colonne du formulaire */}
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
      <form>
        {/* Vos champs de formulaire ici (Nom, Email, etc.) */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Nom</label>
          <input type="text" id="name" className="w-full mt-1 p-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" className="w-full mt-1 p-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700">Objet</label>
          <input type="text" id="subject" className="w-full mt-1 p-2 border rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea id="message" rows={4} className="w-full mt-1 p-2 border rounded-md"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Envoyer le message
        </button>
      </form>
    </div>

    {/* Colonne des infos de contact et réseaux sociaux */}
    <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Informations de contact</h2>
      <p className="mb-4">
        <span className="font-bold">Email :</span> <a href="mailto:contact@monito.com" className="text-blue-600 hover:underline">contact@monito.com</a>
      </p>
      <p className="mb-6">
        <span className="font-bold">Téléphone :</span> +33 1 23 45 67 89
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Suivez-nous</h3>
      <div className="flex space-x-4 text-xl">
            <Link href="#" aria-label="Facebook" className="text-gray-900 hover:text-purple-500 transition-colors">
              <FaFacebookF />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-900 hover:text-purple-500 transition-colors">
              <FaTwitter />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-gray-900 hover:text-purple-500 transition-colors">
              <FaInstagram />
            </Link>
            <Link href="#" aria-label="YouTube" className="text-gray-900 hover:text-purple-500 transition-colors">
              <FaYoutube />
            </Link>
          </div>
    </div>
  </div>
</main>

        <Footer/>
    </div>
  )
}

export default page