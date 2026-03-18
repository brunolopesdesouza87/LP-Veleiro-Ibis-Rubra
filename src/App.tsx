import { motion } from "motion/react";
import { Anchor, Ship, Wind, MapPin, MessageCircle, Youtube, Instagram, Facebook, ArrowRight, CheckCircle2 } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/556191821223?text=Olá! Vi o anúncio do Veleiro Ibis Rubra 3.5 e gostaria de mais informações.";
const YOUTUBE_VIDEO_ID = "NF0RqDNsEu8";
const FACEBOOK_MARKETPLACE = "https://www.facebook.com/marketplace/item/1137153394666631";

const REELS = [
  "https://www.instagram.com/brunolopesdesouza87/reel/DNN0ALZNj86/",
  "https://www.instagram.com/brunolopesdesouza87/reel/DNNzxCxNmGS/",
  "https://www.instagram.com/brunolopesdesouza87/reel/DNNzsIpNvPQ/",
  "https://www.instagram.com/brunolopesdesouza87/reel/DDnGSdnPozS/",
  "https://www.instagram.com/brunolopesdesouza87/reel/DDnF-wwvONc/",
  "https://www.instagram.com/brunolopesdesouza87/reel/DDnFqj7vYJv/",
  "https://www.instagram.com/brunolopesdesouza87/reel/DDnFOxUvMUr/",
  "https://www.instagram.com/brunolopesdesouza87/reel/DDnE_AmvwJu/",
  "https://www.instagram.com/brunolopesdesouza87/reel/DDnEiGsvKAo/",
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2C3E50] font-serif selection:bg-[#D4AF37] selection:text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=2000" 
            alt="Sailing background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FDFCF8]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 mb-6 border border-[#D4AF37] rounded-full text-xs uppercase tracking-widest text-[#D4AF37] font-sans font-semibold">
              Oportunidade Única
            </span>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
              Veleiro <span className="italic text-[#D4AF37]">Ibis Rubra 3.5</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-sans text-gray-600 leading-relaxed">
              Uma obra de arte náutica construída artesanalmente em madeira e resina epóxi. 11 pés de pura liberdade.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-sans font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#detalhes"
                className="px-8 py-4 rounded-full font-sans font-bold border-2 border-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all"
              >
                Ver Detalhes
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Ship />, label: "Comprimento", value: "3.5 Metros" },
              { icon: <Wind />, label: "Tamanho", value: "11 Pés" },
              { icon: <Anchor />, label: "Ano", value: "2021" },
              { icon: <MapPin />, label: "Local", value: "Itajaí - SC" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-[#FDFCF8] text-[#D4AF37] rounded-full">
                  {stat.icon}
                </div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mb-1">{stat.label}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="detalhes" className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Construído com <span className="italic">Alma e Tradição</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-sans">
              Fabricado em 2021 pela famosa <span className="font-bold text-[#2C3E50]">Associação Náutica de Itajaí</span>. Passamos um ano inteiro em sua construção, aprendendo com grandes mestres e dedicando atenção a cada detalhe.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-sans">
              É um barco delicioso de se velejar, perfeito para quem busca uma experiência autêntica e incrível na água.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                "Toda Ferragem Inclusa",
                "Remo Original",
                "Vela Mestra e Vela de Buja",
                "Local Seco e Coberto",
                "Possibilidade de Test-Drive (Velejada)",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#D4AF37]" size={20} />
                  <span className="font-sans font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.imgur.com/jSHBqpy.jpg" 
                alt="Veleiro Ibis Rubra - Detalhe da construção artesanal" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm uppercase tracking-widest font-sans">Artesanal</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-[#2C3E50] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 italic">Veja ele em Ação</h2>
          <div className="max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black/20 border border-white/10">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="Veleiro Ibis Rubra 3.5"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a 
              href={FACEBOOK_MARKETPLACE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1877F2] px-6 py-3 rounded-full font-sans font-semibold hover:opacity-90 transition-opacity"
            >
              <Facebook size={18} />
              Ver no Marketplace
            </a>
            <a 
              href="https://www.youtube.com/watch?v=NF0RqDNsEu8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FF0000] px-6 py-3 rounded-full font-sans font-semibold hover:opacity-90 transition-opacity"
            >
              <Youtube size={18} />
              Ver no YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Galeria de <span className="italic">Momentos</span></h2>
          <p className="text-gray-500 font-sans max-w-2xl mx-auto">
            Como o Instagram protege o acesso direto às miniaturas, preparamos esta galeria inspiradora. 
            Clique em cada imagem para ver o vídeo real do Ibis Rubra no Instagram!
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "https://i.imgur.com/b1oe2da.jpg",
            "https://i.imgur.com/JfvTP7D.jpg",
            "https://i.imgur.com/yVzwXpJ.jpg",
            "https://i.imgur.com/ctzB2Yw.jpg",
            "https://i.imgur.com/Us9Idjg.jpg",
            "https://i.imgur.com/0xd18jg.jpg",
            "https://i.imgur.com/YnBYxUX.jpg",
            "https://i.imgur.com/Z4TW3JE.jpg"
          ].map((imgUrl, idx) => (
            <motion.a
              key={idx}
              href={REELS[idx % REELS.length]}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              className="aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden relative group shadow-lg"
            >
              <img 
                src={imgUrl} 
                alt={`Veleiro Ibis Rubra Detalhe ${idx + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end pb-8">
                <Instagram className="text-white mb-2" size={32} />
                <span className="text-white text-xs font-sans font-bold uppercase tracking-widest">Ver no Instagram</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-[#2C3E50] rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=1000" 
                alt="Sailing experience" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#2C3E50]/20"></div>
            </div>
            <div className="md:w-1/2 p-12 md:p-16 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">Sinta a Experiência</h2>
              <p className="text-lg opacity-90 mb-8 font-sans leading-relaxed">
                "Podemos ir lá ver ele, inclusive dependendo do dia e do tempo podemos inclusive velejar para você sentir como é a experiência."
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-sans">Visita presencial em Itajaí</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-sans">Teste de navegação real</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FDFCF8] border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-[#D4AF37] rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Anchor size={200} />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
              Pronto para sua <br /> <span className="italic">próxima aventura?</span>
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-xl mx-auto font-sans relative z-10">
              O barco está em Itajaí - SC, em local seco e coberto. Podemos marcar uma visita e até uma velejada!
            </p>
            
            <div className="flex flex-col items-center gap-6 relative z-10">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#D4AF37] px-10 py-5 rounded-full font-sans font-bold text-xl shadow-2xl hover:bg-gray-50 transition-colors flex items-center gap-3"
              >
                <MessageCircle size={24} />
                Chamar no WhatsApp
              </a>
              <p className="font-sans font-medium opacity-80">
                Ou ligue: <span className="font-bold">+55 61 9182 1223</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-sm font-sans">
        <div className="container mx-auto px-6">
          <p>© 2026 Veleiro Ibis Rubra 3.5. Itajaí, Santa Catarina.</p>
          <p className="mt-2 italic">"Velejar é preciso, viver não é preciso."</p>
        </div>
      </footer>
    </div>
  );
}
