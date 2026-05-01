import { FaUserMd } from 'react-icons/fa'
import aboutImage from '/public/about.png'
import { HeartIcon, ShieldCheckIcon, SparklesIcon, StarIcon } from "@heroicons/react/24/outline"

const About = () => {
    const values = [
        {icon: ShieldCheckIcon, title: 'Hygiene First', desc: 'Prioritizing cleanliness for your safety.'},
        {icon: SparklesIcon, title: 'Professional Teeth Cleaning', desc: 'Personalized service for every client.'},
        {icon: HeartIcon, title: 'Client Care', desc: 'Gentle and effective cleaning treatment.'},
        {icon: StarIcon, title: 'Cosmetic Dentistry', desc: 'Enhancing smiles with aesthetic solutions.'},
    ];
  return (
    <section id="about" className="py-20 scroll-mt-20 bg-sky-50">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
                <img src={aboutImage} alt="About" className="w-80 lg:w-105 rounded-full shadow-md"/>
            </div>
            <div className='w-full lg:w-1/2 space-y-2 text-center lg:text-left'>
                <div className='flex items-center justify-center lg:justify-start space-x-2'>
                    <FaUserMd className='text-sky-600 w-7 h-7'/>
                    <h2 className='text-3xl font-bold text-sky-900'>
                        About LumiSmile
                    </h2>
                </div>
                <p className='text-gray-700 text-base leading-relaxed'>
                    Since 2020 LumiSmile has been dedicated to creating brighter and more confident smiles 
                    that feel personal and timeless. Every detail is thoughtfully crafted to suit your needs 
                    and enhance your natural confidence.

                </p>
                <p className='text-gray-700 text-base leading-relaxed'>
                    We believe that a beautiful smile is not only about appearance but also about how you feel inside. 
                    That is why every product and experience is designed to bring comfort care and a sense of joy.
                </p>
                <p className='text-gray-700 text-base leading-relaxed'>
                    With a strong focus on quality and innovation everything we create is meant to leave a lasting impression. Helping you shine with confidence through every smile.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                    {values.map((value, index) => (
                        <div
                        key={index}
                        className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full aspect-square
                            bg-sky-600 flex items-center justify-center">
                                <value.icon className="w-5 h-5 text-white"/>
                            </div>
                            <div>
                                <h4 className="text-gray-700 text-base font-medium mb-1">
                                    {value.title}
                                </h4>
                                <p className="text-gray-700 text-sm">
                                    {value.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  );
};

export default About