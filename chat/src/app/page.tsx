// Core
import Image from 'next/image';

const Home = () => (
  <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <Image
        width='48'
        height='48'
        className='mx-auto w-auto'
        src='/images/logo.png'
        alt='logo'
      />
      <h2 className='mt-6 text-center text-3xl font-bold tracking-tighter text-gray-900'>
        Sign in to your account
      </h2>
    </div>
  </div>
)

export default Home;