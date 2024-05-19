import { Inter } from 'next/font/google';
import { Marcellus } from 'next/font/google';
import { Crimson_Pro } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter ({ 
subsets: ['latin']
});

export const marcell = Marcellus ({ 
subsets: ['latin'], 
weight: ['400']
});

export const crimpro = Crimson_Pro ({
subsets: ['latin']
});

export const lusitana = Lusitana ({
subsets: ['latin'],
weight: ['400','700']
})