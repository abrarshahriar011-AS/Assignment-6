
import { Link } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-8 mt-10">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-yellow-400">
                    Book Vibe
                </h2>

                <p className="mt-3 text-gray-300">
                    Find your next favorite story.
                </p>

                <div className="flex justify-center gap-6 mt-5">
                    <Link href="/" className="hover:text-yellow-400">Home</Link>
                    <Link href="/books" className="hover:text-yellow-400">Books</Link>
                    <Link href="/about" className="hover:text-yellow-400">About</Link>
                    <Link href="/contact" className="hover:text-yellow-400">Contact</Link   >
                </div>

                <hr className="my-6 border-gray-700" />

                <p className="text-sm text-gray-400">
                    © 2026 Book Vibe. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
