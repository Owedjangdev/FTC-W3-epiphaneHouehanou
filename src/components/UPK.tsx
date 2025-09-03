// src/components/UsefulPetKnowledge.tsx

"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Article {
    category: string;
    image: string;
    title: string;
    excerpt: string;
    link: string;
}

const articles: Article[] = [
    {
        category: 'Pet knowledge',
        image: '/imageUPK1.png',
        title: 'What is a Pomeranian? How to Identify Pomeranian Dogs',
        excerpt: 'The Pomeranian, also known as the Pomeranian (Pom) dog, is always in the top of the cutest pets, not only that, the small, lovely, smart, friendly, and skillful circus dog...',
        link: '/knowledge/pomeranian'
    },
    {
        category: 'Pet knowledge',
        image: '/imageUPK2.png',
        title: 'Dog Diet You Need To Know',
        excerpt: 'Creating a dog\'s diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially...',
        link: '/knowledge/dog-diet'
    },
    {
        category: 'Pet knowledge',
        image: '/imageUPK3.png',
        title: 'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively',
        excerpt: 'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.',
        link: '/knowledge/furniture'
    },
];

const UsefulPetKnowledge: React.FC = () => {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
                <div>
                    <p className="text-gray-500 text-sm mb-1">You already know?</p>
                    <h2 className="text-3xl font-bold text-[#0c3c6d]">Useful Pet Knowledge</h2>
                </div>
                <Link 
                    href="/knowledge"
                    className="flex items-center text-[#0c3c6d] font-semibold mt-4 sm:mt-0 transition-colors hover:text-[#092a4e]"
                >
                    View more <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <Link
                        key={index}
                        href={article.link}
                        className="block bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <div className="relative w-full h-56">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1 mb-3 inline-block">
                                {article.category}
                            </span>
                            <h3 className="text-xl font-bold text-[#0c3c6d] mb-2">{article.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-3">{article.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>



    );
};

export default UsefulPetKnowledge;
