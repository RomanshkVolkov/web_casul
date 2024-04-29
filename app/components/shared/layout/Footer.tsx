import { Image } from '@nextui-org/react';

export default function Footer() {
   const date = new Date();
   const year = date.getFullYear();
   return (
      <footer className="bg-content1 p-4">
         <div className="w-full flex justify-center">
            <div className="w-3/4 p-4 grid md:grid-cols-3 sm_grid-cols-1 text-center">
               <div className="p-4">
                  <h3>Contáctanos</h3>
                  <p>
                     <a
                        target="_self"
                        href="mailto:atencion.clientes@beta-autopartes.com"
                        rel="noreferrer"
                     >
                        atencion.clientes@beta-autopartes.com
                     </a>
                  </p>
                  <div className="w-full flex justify-center p-2">
                     <Image src="/images/logo.webp" width={100} height={100} alt="logo" />
                  </div>
               </div>
               <div className="p-4">
                  <h3>Información</h3>
                  <p>¿Quiénes somos?</p>
                  <p>Contáctanos</p>
                  <p>Políticas de privacidad</p>
               </div>
               <div className="p-4">
                  <h3>Información</h3>
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>Twitter</p>
               </div>
            </div>
         </div>
         <div className="text-center">
            <p>&copy; {year} - Todos los derechos reservados</p>
         </div>
      </footer>
   );
}
