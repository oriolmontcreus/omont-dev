import React from 'react';
import Image from 'next/image';

export type ExperienceItemDefinition = {
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    isHeadItem?: boolean;
    hideTimeline?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemDefinition> = ({ title, description, date, imageUrl, isHeadItem = false, hideTimeline = false }) => {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <div className="flex flex-col mr-4">
                    {!hideTimeline && (
                        <>
                            {!isHeadItem && (
                                <div className="w-3 h-3 rounded-full bg-gray-700 border-2 border-gray-900 absolute" style={{ top: '80px', left: '15px', zIndex: '10' }}></div>
                            )}
                            <div className="w-0.5 bg-gray-300 absolute" style={{ height: 'calc(100% + 2px' }}>
                            </div>
                        </>
                    )}
                </div>
                <div>
                    <Image src={imageUrl} alt={title} width={48} height={48} style={{ borderRadius: '7px', objectFit: 'cover', marginBottom: '10px' }} />
                    <time className="block mb-1 text-sm font-normal leading-none text-sky-800 dark:text-sky-200/80">{date}</time>
                    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-400 mt-2">{title}</h3>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;