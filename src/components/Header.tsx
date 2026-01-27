export default function Header() {
  return (
    <>
      <header className="w-full px-4 py-3 sm:px-6 sm:py-4 shadow-sm">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
          <img className="w-10 sm:w-16 rounded-full" src="./logo_apoio_hospitalar.png" alt="logo" />

          <h1 className="min-w-0 text-center font-serif text-[12px] sm:text-[14px] font-bold text-[#2F7D6D] leading-tight">
            Apoio Hospitalar
          </h1>

        <nav className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <a href="https://www.tiktok.com/@apoiohospitalar" target="_blank" rel="noreferrer">
            <img className="w-8 sm:w-12" src="/icone_tiktok.png" alt="tiktok" />
          </a>
          <a href="https://www.instagram.com/_apoiohospitalar/" target="_blank" rel="noreferrer">
            <img className="w-8 sm:w-12" src="/icone_instagram.jpeg" alt="instagram" />
          </a>
          <a href="https://wa.me/71991679438" target="_blank" rel="noreferrer">
            <img className="w-9 sm:w-14" src="/icone_whatsapp.png" alt="whatsapp" />
          </a>
        </nav>
        </div>
      </header>
    </>
  )
}
