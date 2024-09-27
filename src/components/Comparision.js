import React from 'react';

const Comparision = () => {
    const features = [
        {
            title: "Innovation",
            description: "At Wrocus Technology, we prioritize innovation as the cornerstone of our success. Our commitment to continuous investment in cutting-edge technology allows us to stay ahead in a rapidly evolving digital landscape.",
            img: "https://cfotech.co.uk/uploads/story/2024/02/02/img-OSGvVY98go6plQo9PLpj7Vas.webp"
        },
        {
            title: "Expert Team",
            description: "Our strength lies in our highly skilled team, whose diverse expertise spans multiple disciplines. Comprising specialists in software development, data analysis, cybersecurity, and user experience, we tackle challenges with a better approach.",
            img: "https://media.istockphoto.com/id/1346125184/photo/group-of-successful-multiethnic-business-team.jpg?s=612x612&w=0&k=20&c=5FHgRQZSZed536rHji6w8o5Hco9JVMRe8bpgTa69hE8="
        },
        {
            title: "Customer Focus",
            description: "We believe that every client is unique, which is why we specialize in delivering tailored solutions that align perfectly with their specific needs and goals. Our approach begins with a thorough understanding of each client's business.",
            img: 'https://t3.ftcdn.net/jpg/07/47/56/70/360_F_747567018_hxg1VGJo2bGjavrzbMnPuUQmipoHimnF.jpg'
        },
    ];

    return (
        <div className="mt-4 py-4 px-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-center">
                <h2 className="text-3xl font-medium text-gray-800 mb-4">
                    What sets 
                    <span className="text-blue-600"> Wrocus Technology</span> apart from the competition?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                            
                            <img 
                                src={feature.img} 
                                alt={feature.title} 
                                className="h-48 w-full object-cover mb-4 rounded" 
                            />
                            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
                            <button className=" mt-2 text-blue-500  px-4 rounded transition-colors duration-300">
                                Talk with our experts
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Comparision;
