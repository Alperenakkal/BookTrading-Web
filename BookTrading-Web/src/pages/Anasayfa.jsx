import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../assets/images/kitapagi.jpg";

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

const scrollRevealSections = [
  {
    title: "Kitapları Takas Et",
    content:
      "Kitapağı ile elinizdeki kitapları başkalarıyla takas edebilir ve yeni kitaplar keşfedebilirsiniz.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "Okuma Listeni Oluştur",
    content:
      "Okumak istediğiniz kitapları listeleyin ve topluluğumuzdan öneriler alın.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
  },
  {
    title: "Bağış Yaparak Destek Ol",
    content:
      "Kütüphanenizdeki kitapları ücretsiz dağıtarak okuma alışkanlıklarını destekleyin ve paylaşmanın keyfini yaşayın.",
    image: "https://images.unsplash.com/photo-1534081333815-ae5019106622",
  },
];
const stepsToUse = [
  {
    step: "01",
    title: "Kolayca üye ol",
    description:
      "Platforma kaydol, kitaplarını paylaşmak için gereken bilgileri tamamla.",
    image:
      "https://media.istockphoto.com/id/1303860322/vector/vector-illustration-register-now-speech-bubble-label.jpg?s=612x612&w=0&k=20&c=gOtVI0FayIfjaDVYL66XIbbMp1VXX_1Hsc8kFNKabAk=",
  },
  {
    step: "02",
    title: "Kitaplarını listele",
    description:
      "Elinizdeki kitapları listeleyin ve başkalarının takas edebileceği kitapları keşfedin.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
  {
    step: "03",
    title: "Takas yap veya bağışla",
    description:
      "Başka kullanıcılarla kitap takası yapabilir veya kitaplarınızı ücretsiz olarak bağışlayabilirsiniz.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

const Anasayfa = () => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".scroll-reveal");

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("opacity-100", "translate-y-0");
      element.classList.remove("opacity-0", "translate-y-10");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    let throttleTimeout = null;

    const throttle = (callback, delay) => {
      if (throttleTimeout) return;
      throttleTimeout = setTimeout(() => {
        callback();
        throttleTimeout = null;
      }, delay);
    };

    const handleScroll = () => {
      throttle(() => requestAnimationFrame(handleScrollAnimation), 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex flex-col items-center justify-start pt-16 pb-8 mt-40 font-overpass">
      {/* Logo ve Başlık */}
      <div className="text-center mb-12 animate-slide-down">
        <img alt="Your Company" src={logo} className="mx-auto h-28 w-auto rounded-lg mb-12" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          <span className="text-indigo-800">Kitaplarını Paylaş, Okuma Serüvenine Ortak Ol!</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8">
          Profilini oluştur, hemen kitaplarını takas etmeye başla!
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/kayıtol" className="bg-indigo-600 text-white rounded-full px-6 py-3 hover:bg-indigo-900 transition">Kayıt Ol</a>
          <a href="/girişyap" className="bg-white text-indigo-600 border border-indigo-600 rounded-full px-6 py-3 hover:bg-indigo-100 transition">Giriş Yap</a>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-4xl px-4 mb-12 flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-l mt-80">
        <Carousel showArrows autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={5000}>
          <div>
            <img src="https://www.bypeople.com/wp-content/uploads/2021/01/primary_500_photoshop_book_templates.png" alt="Slide 1" />
            <a className="legend" href="/kayıtol">Hemen Üye Olun</a>
          </div>
          <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/038/999/497/small_2x/ai-generated-a-stacked-of-book-on-top-of-wooden-table-with-black-background-photo.jpg" alt="Slide 2" />
            <p className="legend">Takas Yapmaya Başlayın</p>
          </div>
          <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/041/489/743/small_2x/ai-generated-stack-of-old-books-on-a-gray-background-with-copy-space-photo.jpg" alt="Slide 3" />
            <p className="legend">Fırsatları Kaçırmayın</p>
          </div>
        </Carousel>
      </div>

      {/* Örnek Kitaplar */}
      <h2 className="text-2xl font-bold text-indigo-600 mb-6 animate-slide-down mt-28">Takas Edebileceğin Kitaplardan Sadece Bazıları!</h2>
      <div className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {exampleBooks.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded-3xl shadow-lg flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={book.image} alt={book.title} className="w-32 h-45 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{book.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{book.description}</p>
          </div>
        ))}
      </div>

      {/* Scroll Reveal Sections */}
      <div className="w-full max-w-4xl px-4 mb-16 space-y-10 mt-28">
        {scrollRevealSections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-3xl shadow-lg flex items-center gap-4 transform transition-all duration-500 ease-in-out opacity-0 translate-y-10 scroll-reveal">
            <img src={section.image} alt={section.title} className="w-24 h-24 object-cover rounded-full shadow-md" />
            <div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">{section.title}</h3>
              <p className="text-gray-700">{section.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Kullanım Adımları */}
      <div className="w-full max-w-6xl px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-28">
        {stepsToUse.map((step, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src={step.image} alt={step.title} className="w-32 h-32 object-cover mb-4 rounded-md shadow-md" />
            <h3 className="text-xl font-bold text-indigo-800 mb-2">{step.step} - {step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Alt Bölümler */}
      <div className="w-full max-w-4xl px-6 py-10 bg-white rounded-lg shadow-lg text-center mb-8 transition transform hover:scale-105 duration-500 ease-in-out mt-28">
        <h3 className="text-3xl font-extrabold text-purple-900 mb-6">Kitapağı ile Neler Yapabilirsiniz?</h3>
        <div className="flex items-center justify-center space-x-4 mb-4">
          <p className="text-gray-800">KitapAğı, kitap takasının yeni adresi! Platforma üye olarak okuma tutkunlarıyla tanışabilir, kendi kitaplarınızı paylaşabilir ve yeni kitaplara kolayca erişebilirsiniz. Kitaplarınızı paylaşarak okuma serüveninizi büyütün ve başkalarına ilham verin!</p>
          <img src="https://images.unsplash.com/photo-1544717305-2782549b5136" alt="Kitapağı" className="w-32 h-32 object-cover rounded-lg shadow-md" />
        </div>
        <a href="/kayıtol" className="bg-indigo-600 text-white rounded-full px-6 py-3 hover:bg-indigo-900 transition">Daha Fazla Bilgi Edin</a>
      </div>

      {/* Ekstra Bilgilendirme Bölümü */}
      <div className="w-full max-w-4xl px-6 py-10 bg-white rounded-lg shadow-lg text-center mb-8 transition transform hover:scale-105 duration-500 ease-in-out mt-28">
        <h3 className="text-3xl font-extrabold text-purple-900 mb-6">Kitapağı ile Hemen Başla!</h3>
        <div className="flex items-center justify-center space-x-4 mb-4">
          <p className="text-gray-800">Şimdi üye ol ve Kitapağı'nın sunduğu fırsatlarla okuma dünyanızı genişletin! Kitap takası, bağış ve daha fazlası sizleri bekliyor.</p>
          <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" alt="Kitapağı Başla" className="w-32 h-32 object-cover rounded-lg shadow-md" />
        </div>
        <a href="/kayıtol" className="bg-indigo-600 text-white rounded-full px-6 py-3 hover:bg-indigo-900 transition">Üye Ol ve Başla</a>
      </div>
    </div>
  );
};

export default Anasayfa;
