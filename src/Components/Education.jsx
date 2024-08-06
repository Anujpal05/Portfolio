import React from 'react'

//Education Page which show my Education details
function Education() {
    return (
        <div className=' pt-20'>
            <h1 className=' text-5xl font-semibold text-center text-gray-300 '>Education</h1>
            <div className=' p-6 md:px-20'>
                <ul className=' list-disc space-y-10'>
                    <li className=' space-y-2'><div className='text-gray-200 '>
                        <h1 className=' text-2xl font-semibold' >Bachelor of Technology (B.Tech)</h1>
                        <h1 className='font-semibold text-xl'>2022-2026</h1>
                    </div>
                        <p className='font-semibold text-gray-400'>I am currently study my Bachelor of Engineering degree in Computer Engineering at <a href="https://www.gandhinagaruni.ac.in/" target='_blank' className='font-bold '>Gandhinagar Institute of Technology (Gandhinagar University)</a>. Throughout my academic journey, I have gained valuable knowledge in various areas of computer engineering. I have gained valuable knowledge in logic building and programming languages such as Java, and C and Web development. Through hands-on projects, collaborative learning, I have developed strong technical skills and a problem-solving mindset, preparing me for a successful career in computer engineering.</p></li>
                </ul>

            </div>
        </div>
    )
}

export default Education
