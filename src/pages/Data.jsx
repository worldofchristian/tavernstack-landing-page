import { useEffect } from "react"
import { FaInfoCircle } from "react-icons/fa"
import LaborChart from "../components/LaborChart"
import Navbar from "../components/Navbar"
import FoodChart from "../components/FoodChart"

const Data = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
    <Navbar />

    <div className="flex items-center justify-center">
        <div className="flex flex-col text-center w-80 lg:w-full">
            <h1 className="text-3xl font-bold text-center mt-10"
            >Market data for Bars and Restaurants
            </h1>

            <p className="text-lg mt-5 mb-10"
            >Some stats for the nightlife industry
            </p>
        </div>
    </div>

    <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-20 my-20 max-w-7xl">
            <div className="flex flex-col items-center justify-center lg:mr-10">
                <h1 className="text-2xl font-bold text-center"
                >Cost of Labor
                </h1>

                <div className="flex flex-row items-center gap-2 my-2">
                    <FaInfoCircle className="text-md" />
                    
                    <p className="text-sm"
                    >Labor cost to produce one unit of output
                    </p>
                </div>

                <LaborChart />

                <p className="mt-2 text-sm"
                >Source: U.S. Bureau of Labor Statistics
                </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:ml-10">
                <h1 className="text-2xl font-bold text-center"
                >Consumer Dining Costs
                </h1>

                <div className="flex flex-row items-center gap-2 my-2">
                    <FaInfoCircle className="text-md" />
                    
                    <p className="text-sm"
                    >Average price of food away from home
                    </p>
                </div>

                <FoodChart />

                <p className="mt-2 text-sm"
                >Source: U.S. Bureau of Labor Statistics
                </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:mr-10">
                <h1 className="text-2xl font-bold text-center"
                >Bar and Restaurant Sales
                </h1>

                <div className="flex flex-row items-center gap-2 my-2">
                    <FaInfoCircle className="text-md" />
                    
                    <p className="text-sm"
                    >Seasonally adjusted total sales
                    </p>
                </div>

                <LaborChart />

                <p className="mt-2 text-sm"
                >Source: U.S. Census Bureau
                </p>
            </div>

            <div className="flex flex-col items-center justify-center lg:ml-10">
                <h1 className="text-2xl font-bold text-center"
                >Consumer Spending
                </h1>

                <div className="flex flex-row items-center gap-2 my-2">
                    <FaInfoCircle className="text-md" />
                    
                    <p className="text-sm"
                    >Discretionary spending adjusted for inflation
                    </p>
                </div>

                <LaborChart />

                <p className="mt-2 text-sm"
                >Source: U.S. Bureau of Economic Analysis
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Data