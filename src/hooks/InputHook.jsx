import { useState } from 'react';

function useTextBox() {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(() => e.target.value);
    }

    return { value, handleChange };
}

export default useTextBox;
