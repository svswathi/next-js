'use client';

import { useEffect, useState } from "react";

export default function Page() {
    const [showElement, setShowElement] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowElement(true), 3000);
        return clearTimeout(timer);
    }, []);

    return (
        <>
            {showElement && <p>Customers Page</p>}
        </>
    );
}