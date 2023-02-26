import React, { useState } from 'react';
import facebook from '../../assets/logo/fb.png'
import instragram from '../../assets/logo/In.png'
import twitter from '../../assets/logo/tw.png'
const Teams = () => {
    const [chefData, setChefData] = useState([])
    fetch('chef.json')
        .then(res => res.json())
        .then(data => setChefData(data))
    return (
        <>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-100 max-w-6xl mx-auto my-20 rounded-md">
                <div className="container p-4 mx-auto space-y-16 sm:p-10">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold leading-none sm:text-5xl">Meet our Teams</h3>
                        <p className="max-w-2xl dark:text-gray-400">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            chefData.map(chef => <div className="space-y-4 rounded-2xl bg-white dark:bg-green-600 dark:text-white text-blue-900 p-3 shadow-2xl">
                                <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-md dark:bg-gray-500" src={chef.images} />
                                <div className="flex flex-col items-center">
                                    <h4 className="text-xl font-semibold">{chef.name}</h4>
                                    <p className="text-sm dark:text-gray-100">{chef.position}</p>
                                    <div className="flex mt-2 space-x-2">
                                        <a rel="noopener noreferrer" href="#" title="facebook" className="dark:text-gray-400">
                                            <img src={facebook} alt="" srcset="" />
                                        </a>
                                        <a rel="noopener noreferrer" href="#" title="instagram" className="dark:text-gray-400">
                                            <img src={instragram} alt="" srcset="" />
                                        </a>
                                        <a rel="noopener noreferrer" href="#" title="twiter" className="dark:text-gray-400">
                                            <img src={twitter} alt="" srcset="" />
                                        </a>
                                    </div>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </section>
        </>
    );
};

export default Teams;