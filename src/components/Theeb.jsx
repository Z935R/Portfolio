import { useState, useEffect } from 'react';
import '../styles/Theeb.css';

const Theeb = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentQuote, setCurrentQuote] = useState('');

    const motivationalQuotes = [
        "The only way to do great work is to love what you do.",
        "Believe you can and you're halfway there.",
        "It does not matter how slowly you go as long as you do not stop.",
        "Everything you've ever wanted is on the other side of fear.",
        "Success is not how high you have climbed, but how you make a positive difference to the world.",
        "Don't watch the clock; do what it does. Keep going.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "It always seems impossible until it's done.",
        "The only impossible journey is the one you never begin.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Your limitation—it's only your imagination.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
        "Success doesn't just find you. You have to go out and get it.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Dream bigger. Do bigger.",
        "Don't stop when you're tired. Stop when you're done.",
        "Wake up with determination. Go to bed with satisfaction.",
        "Do something today that your future self will thank you for.",
        "Little things make big days.",
        "It's going to be hard, but hard does not mean impossible.",
        "Don't wait for opportunity. Create it.",
        "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
        "The key to success is to focus on goals, not obstacles.",
        "Dream it. Believe it. Build it.",
        "Your only limit is you.",
        "Sometimes later becomes never. Do it now.",
        "One day or day one. You decide.",
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "You don't have to be great to start, but you have to start to be great.",
        "A journey of a thousand miles begins with a single step.",
        "The only person you should try to be better than is the person you were yesterday.",
        "Opportunities don't happen. You create them.",
        "Success is walking from failure to failure with no loss of enthusiasm.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
        "I learned that courage was not the absence of fear, but the triumph over it.",
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
        "Do what you can with all you have, wherever you are.",
        "You are never too old to set another goal or to dream a new dream.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "It is during our darkest moments that we must focus to see the light.",
        "You must be the change you wish to see in the world.",
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "The only thing we have to fear is fear itself.",
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        "In the end, it's not the years in your life that count. It's the life in your years.",
        "Never let the fear of striking out keep you from playing the game.",
        "Life is what happens when you're busy making other plans.",
        "When you reach the end of your rope, tie a knot in it and hang on.",
        "Always remember that you are absolutely unique. Just like everyone else."
    ];

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
        setCurrentQuote(motivationalQuotes[randomIndex]);
    };

    useEffect(() => {
        if (isOpen && !currentQuote) {
            getRandomQuote();
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            const interval = setInterval(() => {
                getRandomQuote();
            }, 8000);
            return () => clearInterval(interval);
        }
    }, [isOpen]);

    return (
        <div className={`theeb-assistant ${isOpen ? 'open' : ''}`}>
            <button
                className="theeb-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Theeb Assistant"
            >
                <div className="theeb-icon">
                    <span className="theeb-emoji">🐺</span>
                    <div className="theeb-pulse"></div>
                </div>
            </button>

            {isOpen && (
                <div className="theeb-card">
                    <div className="theeb-header">
                        <div className="theeb-avatar">
                            <span>🐺</span>
                        </div>
                        <div className="theeb-info">
                            <h3>ذيب</h3>
                            <p>Your AI Motivator</p>
                        </div>
                        <button
                            className="theeb-close"
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>
                    </div>

                    <div className="theeb-body">
                        <div className="quote-container">
                            <div className="quote-icon">💡</div>
                            <p className="quote-text">{currentQuote}</p>
                        </div>

                        <button
                            className="generate-btn"
                            onClick={getRandomQuote}
                        >
                            <i className="fas fa-sync-alt"></i>
                            <span>Get New Quote</span>
                        </button>
                    </div>

                    <div className="theeb-footer">
                        <span className="theeb-tagline">✨ Always here to motivate you</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Theeb;
