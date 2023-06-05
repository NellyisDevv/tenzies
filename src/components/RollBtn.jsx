export default function RollBtn(props) {
  return (
    <div className='mt-3'>
      <button
        onClick={props.tenzies ? props.refreshPage : props.rollNewDice}
        className='bg-[#5035FF] p-3 text-white w-[220px] rounded-md text-3xl shadow-2xl sm:text-4xl'
      >
        {props.tenzies ? 'New Game' : 'Roll'}
      </button>
    </div>
  )
}
