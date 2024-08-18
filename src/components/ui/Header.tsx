'use client'

import React, { useEffect, useRef, useState } from 'react';

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsScrolled(!entry.isIntersecting)
        }, { threshold: 0.1 });
        if (headerRef.current) {
            observer.observe(headerRef.current);
            return () => {
                if (headerRef.current) {
                    observer.unobserve(headerRef.current)
                }
            }
        }
    }, []);

    return <header ref={headerRef} className="w-full" >
        <nav className={`header-nav ${isScrolled ? 'header-scrolled' : 'header-initial'}`
        }>
            <div className="contact-info">
                <div className="container">
                    <div className="row">
                        <div className="wrap">
                            <div className="header-list-info">
                                <ul className="list-none inline-flex p-0 m-0">
                                    <li className="email-header">
                                        <a href="mailto:tpalii1945@gmail.com" className="text-xs">E-mail: u.minikoparka.np@gmail.com</a>
                                    </li>
                                    <li className="email-header">
                                        <a href="tel:+48 512 419 036" className="text-xs">+48&nbsp;512&nbsp;419&nbsp;036</a>
                                    </li>
                                </ul>
                                <ul className="list-none flex m-0 p-0 items-center">
                                    <li className="mr-4">
                                        <a href="https://www.facebook.com/profile.php?id=61559576564617" target="_blank" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15s" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                        </a>
                                    </li>
                                    <li >
                                        <a href="https://www.facebook.com/profile.php?id=61559576564617" target="_blank" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
            <div>

            </div>
        </nav >
    </header >
}