import img from '../../assets/university.png'
export default function Institutes() {
    return (
        <section className='bg-gray-400 '>
            <h3 className='text-4xl font-semibold h-24  flex items-center justify-center italic underline'><div className='h-16'>Our Users are from</div></h3>        
            <div className='grid sm:flex mx-8 justify-around'>
                <img id='img' src={img} className='h-48'/>
                <img id='img' src={img} className='h-48'/>
                <img id='img' src={img} className='h-48'/>
                <img id='img' src={img} className='h-48'/>
            </div>
        </section>

    )
}
