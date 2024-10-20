import React, { useState } from 'react';
import img from '../../assets/main.png'
import Select from 'react-select';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import img1 from '../../assets/food.png'
import { Rating } from '@smastrom/react-rating';
import { CiShoppingCart } from 'react-icons/ci';
import useAllProduct from '../../Hooks/useAllProduct';
import { useCart } from 'react-use-cart';
import { Link, useLocation } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Shop = () => {

    const [allProduct] = useAllProduct()
    const { addItem } = useCart()
    const location = useLocation()
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedBrandName, setSelectedBrandName] = useState(null)
    const [sortOrder, setSortOrder] = useState(null)
    const [priceRange, setPriceRange] = useState([0, 1000])
    const [searchName, setSearchName] = useState("")
    const query = new URLSearchParams(location.search)
    const queryParams = new URLSearchParams(location.search)
    const searchCategory = query.get('category')
    const searchInput = queryParams.get('search')
    const [toggleSidebar, setToggleSidebar] = useState(false)


    const handleToggleSidebar = () => {
        setToggleSidebar(!toggleSidebar)
    }

    const handlePriceChange = (v) => {
        setPriceRange(v)
    }

    // product category find ===========================
    const categories = Array.from(
        new Set(allProduct.map(res => res.category))
    )

    const categoryOptions = categories.map(category => ({
        value: category,
        label: category
    }))

    // ==================================================
    // product brand name find ==========================

    const brandName = Array.from(
        new Set(allProduct.map(res => res.brand_name))
    )
    const brandNameOption = brandName.map(brand => ({
        value: brand,
        label: brand
    }))

    // ==================================================
    // category, brand_name, price range filtering
    const categoryFiltering = allProduct.filter((product) => {
        const matchedCategories = selectedCategory ? product.category === selectedCategory.value : true;
        // product name, category, brand name search filtering start
        const matchedSearchInput = searchInput ? (
            product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.category.toLowerCase().includes(searchInput.toLowerCase()) ||
            product.brand_name.toLowerCase().includes(searchInput.toLowerCase())

        )
            : true

        // product name, category, brand name search filtering end
        const matchedSearchCategory = searchCategory ? product.category === searchCategory : true
        const matchedBrandName = selectedBrandName ? product.brand_name === selectedBrandName.value : true;
        const matchedPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1]
        const matchedName = product.name.toLowerCase().includes(searchName.toLowerCase())

        return (
            matchedCategories &&
            matchedBrandName &&
            matchedPriceRange &&
            matchedName &&
            matchedSearchCategory &&
            matchedSearchInput &&
            matchedSearchInput
        )
    })

    // price sort
    const shortProducts = (products) => {
        if (sortOrder === "lowToHigh") {
            return products.sort((a, b) => a.price - b.price);
        }
        else if (sortOrder === "highToLow") {
            return products.sort((a, b) => b.price - a.price)
        }
        return products
    }

    const shortedProduct = shortProducts([...categoryFiltering])


    return (
        <div className='lg:mx-20 mx-2 my-10'>
            <Helmet>
                <title>Shop | EasyStore</title>
            </Helmet>
            <div className='relative flex gap-5 w-full min-h-screen mt-10'>
                <div className={`w-80 space-y-5 min-h-screen absolute lg:static z-20 bg-white -translate-x-full lg:translate-x-0 lg:translate-y-0 translate-y-14 transition-transform duration-300 ${toggleSidebar ? 'translate-y-14 translate-x-0' : '-translate-x-full'}`}>
                    <div className='border shadow rounded-xl'>

                        <div className='p-3'>
                            <div className='border-b pb-2'>
                                <h1 className='text-2xl font-[600]'>Fill By Prices</h1>
                            </div>
                            <div className='mt-5'>
                                <RangeSlider
                                    min={0}
                                    max={1000}
                                    step={10}
                                    value={priceRange}
                                    onInput={handlePriceChange}
                                />
                                <div className='flex justify-between items-center my-5'>
                                    <div className='flex justify-center items-center border w-20 h-10'>
                                        <input value={priceRange[0]} className='input input-bordered w-20' readOnly type="text" />
                                    </div>
                                    <div className='flex justify-center items-center border  w-20 h-10'>
                                        <input value={priceRange[1]} className='input input-bordered w-20' readOnly type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='border-b pb-2'>
                                <h1 className='text-xl font-[600]'>Category</h1>
                            </div>
                            <div className='mt-5'>
                                <Select
                                    isClearable
                                    options={categoryOptions}
                                    onChange={(seletedOption) => setSelectedCategory(seletedOption)}
                                />
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='border-b pb-2'>
                                <h1 className='text-xl font-[600]'>Brand Name</h1>
                            </div>
                            <div className='mt-5'>
                                <Select
                                    isClearable
                                    options={brandNameOption}
                                    onChange={(seletedOption) => setSelectedBrandName(seletedOption)}
                                />
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='border-b pb-2'>
                                <h1 className='text-xl font-[600]'>Color</h1>
                            </div>
                            <div className='py-3'>
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" />
                                    <h1>Red (50)</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" />
                                    <h1>Green (50)</h1>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" />
                                    <h1>Blue (50)</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border shadow rounded-xl'>
                        <div className='p-3'>
                            <div className='border-b pb-2'>
                                <h1 className='text-2xl font-[600]'>New Products</h1>
                            </div>
                            <div className='flex items-center'>
                                <img src={img1} alt="" />
                                <div className='p-5'>
                                    <h1 className='text-[#3bb77e] font-[700]'>Chen Cardigan</h1>
                                    <p>$99.50</p>
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={4}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <img src={img1} alt="" />
                                <div className='p-5'>
                                    <h1 className='text-[#3bb77e] font-[700]'>Chen Cardigan</h1>
                                    <p>$99.50</p>
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={4}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full min-h-screen'>
                    <div className='flex justify-between items-center gap-2'>
                        <div className='lg:hidden' onClick={handleToggleSidebar}>
                            <FaFilter className='text-3xl' />
                        </div>
                        <div className='w-72'>
                            <input onChange={(e) => setSearchName(e.target.value)} className='input input-bordered w-full' placeholder='Search Here' type="text" />
                        </div>
                        <div className='space-x-5 flex'>
                            {/* <Select
                            className='w-full'
                            placeholder="Select sort order"
                            /> */}
                            <Select
                                options={[
                                    { value: "lowToHigh", label: "Price: Low to Hight" },
                                    { value: "highToLow", label: "Price: High to Low" },
                                ]}
                                onChange={(selectedOption) => setSortOrder(selectedOption.value)}
                                isClearable
                                className='w-full'
                                placeholder="Select sort order"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                        {
                            shortedProduct.map(product => (
                                <div key={product._id} className=' border space-y-2 rounded-2xl'>
                                    <div className='flex justify-center items-center bg-[#f74b81] text-white border w-16 h-9 rounded-tl-2xl rounded-br-2xl'>
                                        <p>Hot</p>
                                    </div>
                                    <div className='p-5 flex flex-col justify-center gap-2'>
                                        <img className='h-32' src={product.image[0]} alt="" />
                                        <span className='text-[#7a7a7a]'>{product.name}</span>
                                        <h1 className='text-[18px] font-medium'>{product.description.slice(0, 30)}...</h1>
                                        <Rating
                                            style={{ maxWidth: 100 }}
                                            value={0}
                                            readOnly
                                        />
                                        <h2 className='text-[#7a7a7a] space-x-2'>
                                            <span>By:</span>
                                            <span className='text-[#3bb77e] font-medium'>
                                                {product.brand_name}
                                            </span>
                                        </h2>
                                        <div className='flex justify-between items-center'>
                                            <Link to={`/details/${product._id}`}>
                                                <button className='btn border'>Details</button>
                                            </Link>
                                            {/* <p className='text-[#3bb77e] font-bold text-xl'>${product.price}</p> */}
                                            <button onClick={() => addItem({ ...product, id: product._id })} className='btn bg-[#3bb77d34] text-[#3bb77e]'>
                                                <CiShoppingCart className='text-xl' />
                                                <span className='font-bold'>Add</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;