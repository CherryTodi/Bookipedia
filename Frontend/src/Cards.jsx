import React from 'react'


function Cards({item}) {
  return (
    <>
    <div className="mt-4 my-3 p-3">     {/*top se margin dedete hai 4 ka so that card and description ke pich mai gap ho */}
      <div className="card bg-base-92 w-full md:w-64 shadow-2xl border border-white/20 mx-2 hover:scale-105 duration-200">
  <figure>
    {/*change it accordingly what u want to put */}
    <img
      
    src={item.image}
    alt={item.name}
    className="h-48 md:h-48 w-full object-contain"/>
      
  </figure>
  <div className="card-body">
    <h2 className="card-title h-16">
        {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p className="h-20">{item.title}</p>
    <div className="card-actions justify-between mt-auto">
      <div className="badge badge-outline">Rs{item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white p-2 duration-200">Buy Now</div>
    </div> {/*buy now clcik krne pe pink aana chaihye*/}
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
