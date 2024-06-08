import React from "react";
import IconButton from "@/app/ui/IconButton";

import MailIcon from "@/app/ui/icons/MailIcon";

interface EmailContactProps {
    email: string;
}

function EmailContact({ email }: EmailContactProps) {
    return (
        <div className="mt-4 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center">
            <p className="text-neutral-500 text-sm dark:text-neutral-300 mr-2 flex-grow">
                {email}
            </p>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <IconButton
                    href={`mailto:${email}`}
                    className="bg-black dark:bg-white dark:text-black text-white font-bold hover:bg-gray-800 border-black hover:border-gray-800 flex items-center justify-center"
                >
                    <MailIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default EmailContact;