import * as React from 'react';
import Link from 'next/link';
import {Main} from "@/components/Main";


export default function Layout(){
    return(
        <>
            <div className={'flex min-h-screen flex-col justify-between'}>
                <header>
                    <nav className={'flex h-12 items-center p-4 justify-between shadow-md'}>
                        <Link href="/" className={'text-lg font-bold'}>
                            Home
                        </Link>
                        <div className={'p-1 justify-between'}>
                            <Link href="/" className={'text-lg p-2'}>
                                Cart
                            </Link>
                            <Link href="/" className={'text-lg p-2'}>
                                Login
                            </Link>
                        </div>
                    </nav>
                </header>
                <Main/>
                <footer className={'flex h-10 items-center justify-center shadow-inner'}>footer</footer>
            </div>
        </>
    );
}