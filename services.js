tailwind.config = {
    theme: {
        extend: {
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'scale-in': 'scaleIn 0.6s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
                'slide-in-right': 'slideInRight 0.7s ease-out forwards',
                'bounce-subtle': 'bounceSubtle 2s infinite',
                'float-gentle': 'floatGentle 3s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s infinite',
                'card-hover': 'cardHover 0.3s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {opacity: '0', transform: 'translateY(40px)'},
                    '100%': {opacity: '1', transform: 'translateY(0)'},
                },
                scaleIn: {
                    '0%': {opacity: '0', transform: 'scale(0.8)'},
                    '100%': {opacity: '1', transform: 'scale(1)'},
                },
                slideInLeft: {
                    '0%': {opacity: '0', transform: 'translateX(-60px)'},
                    '100%': {opacity: '1', transform: 'translateX(0)'},
                },
                slideInRight: {
                    '0%': {opacity: '0', transform: 'translateX(60px)'},
                    '100%': {opacity: '1', transform: 'translateX(0)'},
                },
                bounceSubtle: {
                    '0%, 20%, 50%, 80%, 100%': {transform: 'translateY(0)'},
                    '40%': {transform: 'translateY(-8px)'},
                    '60%': {transform: 'translateY(-4px)'},
                },
                floatGentle: {
                    '0%, 100%': {transform: 'translateY(0px) rotate(0deg)'},
                    '33%': {transform: 'translateY(-8px) rotate(1deg)'},
                    '66%': {transform: 'translateY(4px) rotate(-1deg)'},
                },
                pulseGlow: {
                    '0%, 100%': {boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'},
                    '50%': {boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)'},
                },
                cardHover: {
                    '0%': {transform: 'translateY(0) scale(1)'},
                    '100%': {transform: 'translateY(-10px) scale(1.02)'},
                },
            },
        },
    },
};
