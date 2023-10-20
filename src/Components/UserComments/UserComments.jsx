import React from 'react';

const UserComments = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold my-5'>User Comments</h1>
            </div>
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2">
                <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r  ">
                    <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-5 ">
                        <h3 className="text-lg font-semibold ">Very easy this was to integrate</h3>
                        <p className="my-4">If you care for your time, I hands down would go with this."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium  text-left">
                            <div>Bonnie Green</div>
                            <div className="text-sm  ">Developer at Open AI</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-tr-lg  ">
                    <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-5 ">
                        <h3 className="text-lg font-semibold ">Solid foundation for any project</h3>
                        <p className="my-4">Designing with Figma components that can be easily translated to the utility classNamees of Tailwind CSS is a huge timesaver!"</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium  text-left">
                            <div>Roberta Casas</div>
                            <div className="text-sm  ">Lead designer at Dropbox</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r  ">
                    <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-5 ">
                        <h3 className="text-lg font-semibold ">Mindblowing workflow</h3>
                        <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium  text-left">
                            <div>Jese Leos</div>
                            <div className="text-sm  ">Software Engineer at Facebook</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center  border-gray-200 rounded-b-lg md:rounded-br-lg  ">
                    <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-5 ">
                        <h3 className="text-lg font-semibold ">Efficient Collaborating</h3>
                        <p className="my-4">You have many examples that can be used to create a fast prototype for your team."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium  text-left">
                            <div>Joseph McFall</div>
                            <div className="text-sm  ">CTO at Google</div>
                        </div>
                    </figcaption>
                </figure>
            </div>

        </div>
    );
};

export default UserComments;