export default function Die(props) {
  const dieColor = {
    backgroundColor: props.isHeld ? '#59E391' : '#FFFFFF',
  }

  return (
    <div
      onClick={props.holdDice}
      style={dieColor}
      className='h-[45px] w-[45px] flex justify-center items-center rounded-lg shadow-2xl cursor-pointer text-3xl sm:h-[70px] sm:w-[72px] sm:text-4xl'
    >
      {props.value}
    </div>
  )
}
