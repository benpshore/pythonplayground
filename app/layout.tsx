import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Python Playground',description:'A private Python reading room and touch-first learning playground.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'},manifest:'/manifest.webmanifest',appleWebApp:{capable:true,title:'Python Playground',statusBarStyle:'black-translucent'},robots:{index:false,follow:false}};
export const viewport:Viewport={width:'device-width',initialScale:1,viewportFit:'cover',themeColor:'#0b1222'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-theme="midnight"><body>{children}</body></html>}
