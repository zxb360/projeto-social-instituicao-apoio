export default function Header() {
  return (
    <>
        <header className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 shadow-sm">
            <img className="w-10 sm:w-16 rounded-full" src="./logo_apoio_hospitalar.png" alt="logo" />
            <h1 className="flex-1 text-center font-serif text-base sm:text-base font-bold text-[#2F7D6D] leading-tight">
                Instituição Apoio
            </h1>
            <nav className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                <a href="https://www.tiktok.com/@apoiohospitalar" target="_blank" >
                <img className="w-8 sm:w-12" src="/icone_tiktok.png" alt="tiktok" /></a>
                <a href="https://www.instagram.com/_conexao_solidaria_/?igsh=YTJ1bWtmNmVlMHRt" target="_blank" >
                <img className="w-8 sm:w-12" src="/icone_instagram.jpeg" alt="instagram" /></a>
                <a href="https://wa.me/71991679438" target="_blank" ><img className="w-9 sm:w-14" src="/icone_whatsapp.png" alt="whatsapp" /></a>
            </nav>
        </header>
    </>
  )
}
