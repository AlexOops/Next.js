import "../styles/global.scss";
import {Header} from "@/components/header/component";
import {Footer} from "@/components/footer/footer";
import StoreProvider from "@/redux/provider";

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <Header/>

                <main>
                    <StoreProvider>
                        {children}
                    </StoreProvider>
                </main>

                <Footer/>

                <div id="modal-container"/>
                <div id="popover-container"/>
            </body>
        </html>
    );
}
