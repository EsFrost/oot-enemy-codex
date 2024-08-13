import Skeleton from "../../_components/skeleton"
import HeaderNoSearch from "../../_components/headernosearch"
import Footer from "../../_components/footer"

export default function Loading() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
        <HeaderNoSearch />

        <div className="flex justify-center text-[#E0E0E0] my-4 animate-pulse">
        

        <div className="flex flex-col items-center mt-4">
          <div className='flex'>
            <p>#</p>
            <div className='ml-4 text-center'>
              <h2 className='text-2xl'>Loading...</h2>
              <h3 className='text-sm text-[#B0B0B0]'></h3>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row'>
            <div className="w-[320px] h-[320px] rounded-lg mt-4 bg-[#6C6C6C] p-4 lg:mr-4">
                
            </div>

            <div>
                <div className="w-[320px] mt-4">
                    <h3 className='text-xl'></h3>
                    <p className='mt-2'></p>
                    <div className="flex mt-4">
                        
                    </div>
                </div>
                <div className={`flex flex-col flex-wrap w-[320px] h-auto rounded-md border border-[#E0E0E0] p-4 mt-4`}>
                    <div className='flex'>
                    <h3 className='w-1/3'>Hp</h3>
                    <div className="ml-2 flex">
                        
                    </div>
                    </div>
                    <div className="flex">
                    <h3 className='w-1/3'>Damage</h3>
                    <div className="ml-2 flex">
                    
                    </div>
                    </div>
                    <div className="flex flex-col">
                    <h3 className='w-1/3'>Dot</h3>
                    <div className="ml-2 flex">
                    
                    </div>

                    <div className="flex">
                      <h3 className='w-1/3'>
                              Strength
                      </h3>
                      
                    </div>

                    <div className="flex">
                    <h3 className='w-1/3'>Weakness</h3>
                    <p className="ml-2"></p>
                    </div>
                        <div className="flex flex-col">
                        <h3 className='w-1/3'>Drops</h3>
                    </div>
                </div>
            </div>
          </div>
        </div>


        </div>
      </div>
      <Footer />
    </div>
  )
}