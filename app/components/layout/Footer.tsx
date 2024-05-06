import Image from 'next/image';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-content1 p-4 xs:mb-10 sm:mb-0">
      <div className="w-full flex justify-center">
        <div className="w-full p-4 grid md:grid-cols-3 sm_grid-cols-1">
          <div className="p-4">
            <div className="w-full flex justify-center p-2">
              <Image
                className="rounded-xl"
                src="/images/logo.webp"
                width={150}
                height={150}
                alt="logo"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-medium">Información</h2>
            </div>
            <div>
              <p>Contáctanos</p>
              <p>
                <a
                  target="_self"
                  href="mailto:atencion.clientes@beta-autopartes.com"
                  rel="noreferrer"
                >
                  atencion.clientes@beta-autopartes.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-medium">Descarga nuestra app</h2>
            </div>
            <div>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.mobile.casulapp&pcampaignid=web_share"
                rel="noreferrer"
              >
                <Image
                  className="inline align-top"
                  src="/images/google-play-badge.png"
                  width={150}
                  height={150}
                  alt="Enlace a Google Play"
                />
              </a>
              <a
                target="_blank"
                href="https://apps.apple.com/mx/app/casul/id6479458169?l=en-GB"
                rel="noreferrer"
              >
                <Image
                  src="/svg/app-store-badge.svg"
                  width={150}
                  height={150}
                  alt="Enlace a App Store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>&copy; {year} - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
