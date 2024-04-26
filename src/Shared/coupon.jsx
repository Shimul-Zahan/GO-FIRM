import React from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'

const Coupon = () => {
  return (
      <div className="flex justify-start items-center">
          <div className='flex justify-start items-center gap-10 border p-4 h-44 border-black border-r-0 border-dashed'>
              <div>
                  <img src="https://shofi-grocery.vercel.app/images/product/product-1.jpg" alt="" className='h-36 w-36 rounded-sm' />
              </div>
              <div className='lg:px-10'>
                  <div className='flex flex-col justify-center items-start gap-1'>
                      <h1>August Gift Voucher</h1>
                      <h1 className='text-xl'><span className='text-red-500'>14%</span> Off</h1>
                      <div className="grid grid-flow-col gap-3 text-center auto-cols-max">
                          <div className="flex flex-col">
                              <span className="countdown font-mono text-lg">
                                  <span style={{ "--value": 15 }}></span>
                              </span>
                              days
                          </div>
                          <div className="flex flex-col">
                              <span className="countdown font-mono text-lg">
                                  <span style={{ "--value": 10 }}></span>
                              </span>
                              hours
                          </div>
                          <div className="flex flex-col">
                              <span className="countdown font-mono text-lg">
                                  <span style={{ "--value": 24 }}></span>
                              </span>
                              min
                          </div>
                          <div className="flex flex-col">
                              <span className="countdown font-mono text-lg">
                                  <span style={{ "--value": 48 }}></span>
                              </span>
                              sec
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='border-t border-b border-r border-black border-dashed h-44 w-52 flex flex-col justify-center items-start'>
              <div className='flex flex-col justify-center items-start gap-1 p-4'>
                  <div className='flex gap-1 items-center'>
                      <h1>Coupone <span className='text-green-400'>Active</span></h1>
                      <RiErrorWarningLine className='text-gray-300' />
                  </div>
                  <button className='border border-dashed p-2 bg-red-200 border-red-500 my-1'>August Coupone</button>
              </div>
          </div>
      </div>
  )
}

export default Coupon