import * as React from 'react';
import Link from 'next/link';

export default function ProductItem({product}) {
    return (
        <div className={'card rounded-md overflow-hidden shadow-lg'}>
            <Link href={`/product/${product.slug}`}>
                <img src={product.image}
                     alt={product.description}
                     className={'shadow w-full'}/>
            </Link>
            <div className={'flex flex-col justify-center items-center p-5'}>
                <Link href={`/product/${product.slug}`}>
                    <h2 className={'font-bold text-center text-xl mb-2'}>{product.name}</h2>
                    <h3 className={'text-center mb-2'}>{product.price} грн</h3>
                    <p className={'text-center mb-2'}>{product.description}</p>
                </Link>
                <button type='button' className={'bg-amber-600 hover:bg-amber-950 text-white font-bold py-2 px-4 rounded-md'}>Add to cart</button>
            </div>
        </div>
    );
}