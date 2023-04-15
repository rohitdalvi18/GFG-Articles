import { useState } from 'react'

const colors = [
  { name: 'Red', value: 'bg-red-500' },
  { name: 'Blue', value: 'bg-blue-500' },
  { name: 'Green', value: 'bg-green-500' },
  { name: 'Yellow', value: 'bg-yellow-500' },
  { name: 'Purple', value: 'bg-purple-500' },
]

export default function Home() {
  const [selectedColor, setSelectedColor] = useState('bg-red-500')

  function handleChange(event) {
    setSelectedColor(event.target.value)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl my-8">Select your favorite color:</h1>
      <select className="bg-white border-2 border-gray-300 rounded-md py-2 px-4 mb-4" value={selectedColor} onChange={handleChange}>
        {colors.map(color => (
          <option key={color.value} value={color.value}>{color.name}</option>
        ))}
      </select>
      <div className={`w-64 h-64 ${selectedColor}`}></div>
    </div>
  )
}

// import { useState } from 'react'

// export default function Home() {
//   const [count, setCount] = useState(0)

//   function increment() {
//     setCount(count + 1)
//   }

//   function decrement() {
//     setCount(count - 1)
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <button
//         className={`${count >= 0 ? 'bg-green-500' : 'bg-red-500'} text-white font-bold py-2 px-4 rounded`}
//         onClick={increment}
//       >
//         Increment
//       </button>
//       <h1 className="text-6xl my-8">{count}</h1>
//       <button
//         className={`${count < 0 ? 'bg-green-500' : 'bg-red-500'} text-white font-bold py-2 px-4 rounded`}
//         onClick={decrement}
//       >
//         Decrement
//       </button>
//     </div>
//   )
// }