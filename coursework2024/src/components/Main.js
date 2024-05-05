import * as React from 'react';
import data from "@/utils/data";
import ProductItem from "@/components/ProductItem";

export function Main() {
    return (
        <>
            <main className={'container  px-4 '}>
                <div className={'grid grid-col-1 gap-4 md:grid-cols-3 lg:grid-cols-4'}>
                    {data.products.map((product) => (
                        <ProductItem
                            product={product}
                            key={product.slug}
                        ></ProductItem>
                    ))}
                </div>
            </main>
        </>
    );
};