export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Location */}
          <div>
            <h3 className="text-sm font-light tracking-[0.2em] uppercase mb-6 opacity-70">
              Location / Standort
            </h3>
            <p className="text-white/90 mb-4 font-light leading-relaxed">
              Kielerstraße 278<br />
              22525 Hamburg, Germany
            </p>
            <a
              href="https://maps.google.com/?q=Kielerstraße+278,+22525+Hamburg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors inline-block text-sm tracking-wide font-light"
            >
              View on Google Maps / Auf Google Maps anzeigen →
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-light tracking-[0.2em] uppercase mb-6 opacity-70">
              Contact / Kontakt
            </h3>
            <div className="space-y-5 text-white/90 font-light">
              <div>
                <p className="font-medium text-white mb-2 tracking-wide">HAIR</p>
                <a href="https://wa.me/420722161337" className="hover:text-accent transition-colors block text-sm mb-1">
                  WhatsApp: +420 722 161 337
                </a>
                <a href="https://instagram.com/Thegarden_hh" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors block text-sm">
                  Instagram: @Thegarden_hh
                </a>
              </div>
              <div>
                <p className="font-medium text-white mb-2 tracking-wide">BEAUTY</p>
                <a href="https://wa.me/4917632684977" className="hover:text-accent transition-colors block text-sm mb-1">
                  WhatsApp: +49 17632684977
                </a>
                <a href="mailto:jungwon.jung0807@gmail.com" className="hover:text-accent transition-colors block text-sm mb-1">
                  Email: jungwon.jung0807@gmail.com
                </a>
                <a href="https://instagram.com/_lashgarden" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors block text-sm">
                  Instagram: @_lashgarden
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.5!2d9.9!3d53.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDM2JzAwLjAiTiA5wrA1NCcwMC4wIkU!5e0!3m2!1sen!2sde!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-sm opacity-80"
          ></iframe>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm font-light tracking-wide">
            © {new Date().getFullYear()} THE GARDEN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
