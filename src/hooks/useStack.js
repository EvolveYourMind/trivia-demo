import { useState } from 'react';

/**
 * @returns {[any[], (v: any) => void]}
 */
export function useStack() {
    const [stack, setStack] = useState([]);

    function push(v) {
        setStack(stack.concat(v));
    }

    return [stack, push];
}
