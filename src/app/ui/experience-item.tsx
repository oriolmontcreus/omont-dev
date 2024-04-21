import React from 'react';

interface Props {
    title: string;
    description: string;
    date: string;
    imageUrl: string;
}

const ExperienceItem: React.FC<Props> = ({ title, description, date, imageUrl }) => {
    return (
        <div className="flex flex-col mb-2">
            <img src={imageUrl} alt={title} style={{borderRadius: '7px', width: '100px', height: 'auto', objectFit: 'cover', marginBottom: '10px'}} />
            <div className="flex">
                <div className="flex flex-col mr-4">
                    <div className="w-3 h-3 rounded-full bg-gray-700 border-2 border-gray-900"></div>
                    <div className="w-0.5 h-full bg-gray-300 mt-2 relative">
                        <div className="absolute top-0 left-0 w-0.5 h-0.5 rounded-full bg-gray-300"></div>
                        <div className="absolute bottom-0 left-0 w-0.5 h-0.5 rounded-full bg-gray-300"></div>
                    </div>
                </div>
                <div>
                    <time className="block mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">{date}</time>
                    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mt-2">{title}</h3>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;