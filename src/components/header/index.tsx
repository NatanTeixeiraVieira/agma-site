import { Outlet } from 'react-router';
import { Search } from 'lucide-react';
import { useRef } from 'react';
import { agmaUrl } from '@/constants/agma-url';

export default function Layout() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  console.log('oioi');

  const handleSearchClick = () => {
    window.location.href = `${agmaUrl}?s=${encodeURIComponent(searchInputRef.current?.value ?? '')}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full border-b text-base">
        <div className="flex items-center justify-between max-w-330 mx-auto px-3 py-6 bg-white">
          <div className="flex items-center gap-4">
            <a href={agmaUrl}>
              <img
                src="/images/logo.png"
                alt="Logo AGMA"
                className="max-w-105 w-full h-auto"
              />
            </a>
          </div>
          <div className="flex items-center gap-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar..."
                ref={searchInputRef}
                className="w-89 bg-grey h-11.5 rounded-lg py-2 p-2.5 pr-10 outline-none"
              />
              <Search
                onClick={handleSearchClick}
                className="absolute right-4 top-3 w-5 h-5 text-black"
              />
            </div>

            <ul className="flex gap-1.5">
              <li>
                <a
                  title="Acesse nosso Instagram"
                  href="https://instagram.com/agma_gpuava"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>{' '}
              <li>
                <a
                  title="Acesse nosso Facebook"
                  href="https://facebook.com/associacaoagma"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>{' '}
            </ul>
          </div>
        </div>

        <nav className="flex items-center justify-center gap-18.5 py-5 bg-grey font-semibold">
          <div className="flex items-center gap-1.5 cursor-pointer">
            <img
              src="/icons/home.png"
              alt="ícone HOME"
              width={20}
              height={20}
            />
            HOME
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer">
            <img
              src="/icons/info.png"
              alt="ícone QUEM SOMOS"
              width={20}
              height={20}
            />
            QUEM SOMOS
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer">
            <img
              src="/icons/puzzle.png"
              alt="ícone FAÇA PARTE"
              width={20}
              height={20}
            />
            FAÇA PARTE
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer">
            <img
              src="/icons/money.png"
              alt="ícone DOAÇÕES"
              width={20}
              height={20}
            />
            DOAÇÕES
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer">
            <img
              src="/icons/star.png"
              alt="ícone PARCEIROS"
              width={20}
              height={20}
            />
            PARCEIROS
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer">
            <img
              src="/icons/news.png"
              alt="ícone NOTÍCIAS"
              width={20}
              height={20}
            />
            NOTÍCIAS
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer">
            <img
              src="/icons/envelope.png"
              alt="ícone CONTATO"
              width={20}
              height={20}
            />
            CONTATO
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="flex justify-between p-20 bg-black items-center w-full">
        <a href={agmaUrl}>
          <img
            src="/images/logo-white.png"
            alt="Logo branca da AGMA"
            className="max-w-[176px]"
          />
        </a>
        <span className="text-sm text-white">
          Associação Guarapuava Mundo Azul | Todos os Direitos Reservados © 2022
        </span>
      </footer>
    </div>
  );
}
