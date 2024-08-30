import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from '../assets/images/kitapagi.jpg';
const exampleBooks = [
  {
    id: 1,
    title: "Savaş ve Barış",
    description: "Lev Tolstoy’un ünlü romanı...",
    image: "https://covers.openlibrary.org/b/id/12115027-L.jpg",
  },
  {
    id: 2,
    title: "1984",
    description: "George Orwell’in distopik romanı...",
    image: "https://covers.openlibrary.org/b/id/13315469-L.jpg",
  },
  {
    id: 3,
    title: "Küçük Prens",
    description: "Antoine de Saint-Exupéry’nin ünlü eseri...",
    image: "https://covers.openlibrary.org/b/id/12130557-L.jpg",
  },
  {
    id: 4,
    title: "Suç ve Ceza",
    description: "Fyodor Dostoyevski’nin klasik romanı...",
    image: "https://covers.openlibrary.org/b/id/10854232-L.jpg",
  },
];

const Anasayfa = () => {
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-100 flex flex-col items-center justify-start pt-16 pb-8 mt-28">
      <div className="text-center mb-12 animate-slide-down">
      <img
            alt="Your Company"
            src=  {logo}
            className="mx-auto h-20 w-auto rounded-lg"
          />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          <span className="text-indigo-800">
            Kitaplarını Paylaş, Okuma Serüvenine Ortak Ol!
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8">
          Profilini oluştur, hemen kitaplarını takas etmeye başla!
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-indigo-600 text-white rounded-full px-6 py-3 hover:bg-indigo-900 transition">
            <a href="/kayıtol">Kayıt Ol</a>
          </button>
          <button className="bg-white text-purple-600 border border-indigo-600 rounded-full px-6 py-3 hover:bg-purple-100 transition">
            <a href="/girişyap">Giriş Yap</a>
          </button>
        </div>
      </div>
      <div className="w-full max-w-4xl px-4 mb-12 flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-l">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={5000}
        >
          <div>
            <img
              src="https://www.bypeople.com/wp-content/uploads/2021/01/primary_500_photoshop_book_templates.png"
              alt="Slide 1"
            />
            <a className="legend" href="/kayıtol">
              Hemen Üye Olun
            </a>
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/038/999/497/small_2x/ai-generated-a-stacked-of-book-on-top-of-wooden-table-with-black-background-photo.jpg"
              alt="Slide 2"
            />
            <p className="legend">Takas Yapmaya Başlayın</p>
          </div>
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/041/489/743/small_2x/ai-generated-stack-of-old-books-on-a-gray-background-with-copy-space-photo.jpg"
              alt="Slide 3"
            />
            <p className="legend">Fırsatları Kaçırmayın</p>
          </div>
        </Carousel>
      </div>
      <h2 className="text-2xl font-bold text-indigo-600 mb-6 animate-slide-down">
        Takas Edebileceğin Kitaplardan Sadece Bazıları!
      </h2>
      <div className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {exampleBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-32 h-45 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {book.title}
            </h3>
            <p className="text-gray-700 text-sm mb-4">{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anasayfa;
