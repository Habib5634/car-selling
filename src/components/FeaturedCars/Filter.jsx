"use client"
import React, { useState } from 'react';

const Filter = () => {
    const [filters, setFilters] = useState({
        condition: 'all',
        color: 'all',
        brand: 'all',
        model: 'all',
        price: 'all',
        mileage: 'all',
        transmission: 'all',
        year: 'all'
    });

    const options = {
        condition: [
            { value: 'all', label: 'All Status' },
            { value: 'new', label: 'New Cars' },
            { value: 'used', label: 'Used Cars' }
        ],
        year: [
            { value: 'all', label: 'All Years' },
            { value: '2020-latest', label: '2020 - Latest' },
            { value: '2015-2019', label: '2015 - 2019' },
            { value: '2010-2014', label: '2010 - 2014' },
            { value: '2005-2009', label: '2005 - 2009' },
            { value: '2000-2004', label: '2000 - 2004' },
            { value: '1999-older', label: '1999 - Older' }
        ],
        transmission: [
            { value: 'all', label: 'Both' },
            { value: 'automatic', label: 'Automatic' },
            { value: 'manual', label: 'Manual' }
        ],
        brand: [
            { value: 'all', label: 'All Brands' },
            { value: 'toyota', label: 'Toyota' },
            { value: 'bmw', label: 'BMW' },
            { value: 'honda', label: 'Honda' },
            { value: 'ford', label: 'Ford' },
            { value: 'audi', label: 'Audi' }
        ],
        model: [
            { value: 'all', label: 'All Models' },
            { value: 'camry', label: 'Toyota Camry' },
            { value: 'corolla', label: 'Toyota Corolla' },
            { value: 'civic', label: 'Honda Civic' }
        ],
        price: [
            { value: 'all', label: 'All Prices' },
            { value: 'low', label: 'Below $20,000' },
            { value: 'medium', label: '$20k - $30k' },
            { value: 'high', label: '$30k - $40k' }
        ],
        mileage: [
            { value: 'all', label: 'All Mileage' },
            { value: '1000', label: 'Below 1,000' },
            { value: '2000', label: '1,000 - 2,000' }
        ]
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', filters);
        // You can send data to API endpoint here
       
    };

    return (
        <form onSubmit={handleSubmit} className="w-full mt-10">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end'>

                {Object.keys(options).map((key) => (

                    <div key={key} className="flex flex-col">
                        <label htmlFor={key} className="mb-1 font-medium capitalize">
                            {key}
                        </label>
                        <div className='border  rounded-xl border-gray2 pr-3 '>

                        <select
                            id={key}
                            name={key}
                            value={filters[key]}
                            onChange={handleFilterChange}
                            
                            className=" border-none w-full focus:outline-none pl-3 py-3 rounded-xl">
                            {options[key].map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                            </div>
                    </div>
                ))}
                 
                        <button type="submit" className='flex justify-center items-center border rounded-xl w-full justify-self-end py-[12px]  bg-red text-[16px] text-white font-semibold h-fit '>                     
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <h3>Find Your Car</h3>

                        </button>
                    
            </div>
        </form>

    );
};

export default Filter;




