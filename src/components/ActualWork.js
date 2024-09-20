import React from 'react';

const ActualWork = () => {
    return (

        <div className='bg-customvoilet p-12'
            style={{
                backgroundImage: `url('/slider/bg-art-5.png')`,
                backgroundRepeat: 'no-repeat',
                height: '100vh',


            }} >
            <div className='flex'>
                <div className='p-8'>
                    <img
                        src='slider/image1-about.png'
                        style={{ height: '500px', width: '600px' }}
                    />
                </div>
                <div className='p-8'>
                    <p className=' text-xl font-bold text-white'>// Experience. Execution. Excellence.</p>
                    <p className='text-4xl font-bold text-white mt-5'>What We Actually Do</p>
                    <p className='text-xl text-white mt-3 ml-5'>
                        All Development Services</p>
                       
                        <div className='mt-12'>
                            <img src='allllll logo (4).jpg'/>
                            {/* <div className='flex justify-between mb-5 mt-12'>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9BcUbcAZDMXCDtKPjbuBxdhF2rag7nfVZA&s"
                                    style={{ height: "50px" }}
                                />

                                <img 
                                src='https://ih1.redbubble.net/image.562302098.6968/fposter,small,wall_texture,product,750x1000.jpg'
                                style={{ height: "50px" }}
                                />
                                 <img
                                 src='https://w7.pngwing.com/pngs/492/902/png-transparent-vuejs-original-wordmark-logo-icon-thumbnail.png'
                                 style={{ height: "50px" }}
                                 />
                                <p>php</p>
                            </div>
                            <div className='flex justify-between mb-5'>
                                <p>java</p>
                                <p>dotnet</p>
                                <p>python</p>
                                <p>mysql</p>
                            </div>
                            <div className='flex justify-between mb-5'>
                                <p>mongodb</p>
                                <p>node js</p>
                                <p>react native </p>
                                <p>next js</p>
                            </div>
                            <div className='flex justify-between mb-5'>
                                <p>Angular</p>
                                <p>react</p>
                                <p>vue</p>
                                <p>php</p>
                            </div> */}
                        </div>
                </div>

            </div>


        </div>



    );
}

export default ActualWork;
