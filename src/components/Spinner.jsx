import {BarLoader} from 'react-spinners'

const override = {
    display:'block',
    margin:'0 auto'
}

const Spinner = ({color = 'blue',size='150'}) => {
    return ( <div className='text-center text-2xl mt-14'>
     <BarLoader
      color={color}
      size={size}
      cssOverride={override}
      aria-label='loading...'
     />
    </div> );
}
 
export default Spinner;