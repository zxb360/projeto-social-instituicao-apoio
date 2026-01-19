export default function Header() {
  return (
    <>
        <header className="flex items-center justify-between px-6 py-4 shadow-sm">
            <h1 className="font-serif text-lg font-bold text-[#2F7D6D]">Instituição Apoio</h1>
            <nav className="flex items-center gap-4">
                <a href="https://www.tiktok.com/search?q=%40apoiohospitalar&t=1766866543602" target="_blank" >
                <img className="w-12" src="/icone_tiktok.png" alt="tiktok" /></a>
                <a href="https://www.instagram.com/_conexao_solidaria_/?igsh=YTJ1bWtmNmVlMHRt" target="_black" >
                <img className="w-12" src="/icone_instagram.jpeg" alt="instgram" /></a>
                <a href="https://wa.me/71991679438" target="_black" ><img className="w-14" src="/icone_whatsapp.png" alt="whatsapp" /></a>
            </nav>
        </header>
    </>
  )
}
