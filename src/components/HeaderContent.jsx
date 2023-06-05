export default function HeaderContent() {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <h1>Tenzies</h1>
      <p className='text-base w-[100%] max-w-[400px] font-[400] sm:text-lg text-center'>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
    </div>
  )
}
