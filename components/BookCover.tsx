import Image from 'next/image';
import type { BookInfo } from '../lib/book-types';

// Shows the cover image when content/book/book.md names one, and a typeset
// stand-in in the site's colors until then.
export function BookCover({ book, priority = false, compact = false }: { book: BookInfo; priority?: boolean; compact?: boolean }) {
  if (book.cover) {
    return (
      <Image
        src={book.cover}
        alt={book.coverAlt || `Cover of ${book.title} by ${book.author}`}
        width={400}
        height={600}
        priority={priority}
        className="h-auto w-full border border-[#3E6830] shadow-lg"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${book.title} by ${book.author}`}
      className={`flex aspect-[2/3] w-full flex-col justify-between border-4 border-double border-[#CBB26A] bg-[#153009] text-center shadow-lg ${compact ? 'p-2' : 'p-6'}`}
    >
      <p className={`font-bold uppercase text-[#D3B127] ${compact ? 'text-[7px]' : 'text-[10px] tracking-widest'}`}>Queer Pathways</p>
      <div>
        <p className={`font-extrabold leading-tight text-[#CBB26A] ${compact ? 'text-sm' : 'text-2xl'}`}>{book.title}</p>
        {book.subtitle ? <p className={`italic text-[#CCDEE0] ${compact ? 'mt-1 text-[9px]' : 'mt-3 text-sm'}`}>{book.subtitle}</p> : null}
      </div>
      <p className={`font-semibold uppercase text-[#C0BFBC] ${compact ? 'text-[7px]' : 'text-xs tracking-wider'}`}>{book.author}</p>
    </div>
  );
}

export function BuyButton({ book }: { book: BookInfo }) {
  if (!book.buyUrl) return null;
  return (
    <a href={book.buyUrl} target="_blank" rel="noopener noreferrer" className="btn-somatic-primary">
      {book.buyLabel || 'Get the book'}
    </a>
  );
}
