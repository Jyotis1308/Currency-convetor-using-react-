import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
   const [from,setFrom]=useState("usd")
   const[to , setto]=useState("inr")
   const[convertedAmount,setConvertedAmount]=useState(0)

   const currencyInfo = useCurrencyInfo(from)


   const options=Object.keys(currencyInfo)
   
   const swap=()=>{
    setFrom(to)
    setto(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
   }
   const convert =()=>{
    setConvertedAmount(amount*currencyInfo[to])
   }
  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://i.pinimg.com/736x/5f/db/e6/5fdbe68389edd857d7be0c0267aee196.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="from"
                                 amount ={amount}
                                 currencyOptions={options}
                                 onCurrencyChange={(currency) => setFrom(currency)}

                                  selectCurrency={from}
                                  onAmountChange={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                 label="to"
                                 amount ={convertedAmount}
                                 currencyOptions={options}
                                 onCurrencyChange={(currency)=>setto(currency) }
                                  selectCurrency={to}
                                  amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toLowerCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
export default App
