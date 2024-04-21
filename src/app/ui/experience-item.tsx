import React from 'react';

interface Props {
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    isDevRelated: boolean;
}

const ExperienceItem: React.FC<Props> = ({ title, description, date, imageUrl }) => {
    return (
        <div className="flex flex-col mb-2">
            <div className="flex">
                <div className="flex flex-col mr-4">
                    <div className="w-3 h-3 rounded-full bg-gray-700 border-2 border-gray-900 absolute" style={{ top: '-7px', left: '-5px' }}></div>
                    <div className="w-0.5 bg-gray-300 mt-1.5 relative" style={{ height: '100%' }}>
                        <div className="absolute top-0 left-0 w-0.5 h-0.5 rounded-full bg-gray-300"></div>
                        <div className="absolute bottom-0 left-0 w-0.5 h-0.5 rounded-full bg-gray-300"></div>
                    </div>
                </div>
                <div>
                    <img src={imageUrl} alt={title} style={{ borderRadius: '7px', width: '48px', height: '48px', objectFit: 'cover', marginBottom: '10px' }} />
                    <time className="block mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">{date}</time>
                    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mt-2">{title}</h3>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;