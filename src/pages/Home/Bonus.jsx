import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Bonus = () => {
    return (
        <AnimationOnScroll initiallyVisible={true} animateIn="animate__bounceIn">
            <div className="p-6 py-12 bg-gray-300 text-blue-900 dark:bg-gray-900 dark:text-gray-100 max-w-6xl mx-auto rounded-md mb-20">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className='flex flex-col'>
                            <p>If You buy 300$ food from here</p>
                            <h2 className="text-center text-6xl tracking-tighter font-bold">You can get
                                <br className="sm:hidden" /> 50% Off
                            </h2>
                        </div>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free shipping! Use code:</span>
                            <span className="font-bold text-lg text-green-700">foodies012skkd</span>
                        </div>
                        <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</a>
                    </div>
                </div>
            </div>
        </AnimationOnScroll>

    );
};

export default Bonus;