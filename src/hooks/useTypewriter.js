import { useState, useEffect } from 'react';

export const useTypewriter = (textArray, typingSpeed = 150, deletingSpeed = 80, pauseDuration = 1500) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [speed, setSpeed] = useState(typingSpeed);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % textArray.length;
            const fullText = textArray[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setSpeed(isDeleting ? deletingSpeed : typingSpeed);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, textArray, typingSpeed, deletingSpeed, pauseDuration, speed]);

    return text;
};
