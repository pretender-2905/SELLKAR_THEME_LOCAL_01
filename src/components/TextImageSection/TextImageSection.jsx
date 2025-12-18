import React from 'react';

const TextImageSection = ({ image, title, subtitle, description, flexReversed = false }) => {
    return (
        <div className="w-full mt-10 ">
            <div

                className={`flex flex-col ${flexReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                    } lg:items-center justify-between gap-10`}


            >
                {/* Text Section */}
                <div className="w-full lg:w-1/2 space-y-4">
                    <h1 className="text-4xl mb-8">
                        {title}
                    </h1>

                    <div className="flex items-center gap-4 mb-8">
                        <span className="block h-[2px] w-12 bg-black"></span>
                        <h3 className="text-sm font-semibold tracking-[0.25em] uppercase text-gray-400">
                            {subtitle}
                        </h3>
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                        {description}
                    </p>
                </div>


                <div className="w-full lg:w-1/2">
                    <div className="w-full h-[400px]">
                        <img
                            src={image}
                            alt="feature"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>




            </div>
        </div>
    );
};

export default TextImageSection;


























