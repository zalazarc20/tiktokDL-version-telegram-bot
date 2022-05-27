const lang = {
    welcome: '',
    error: '',
    lang: '',
    cb: function(val = 'en'){
        if(val === 'en'){
            this.welcome = `🥳 Welcome change language using /lang or Send me of the tiktok link, please!!`;
            this.error = 'Sorry this link is not a tiktok link.😢';
            this.lang = 'Select your favorite Language!';
        }
        if(val === 'es'){
            this.welcome = `🥳 Bienvenido cambia el idioma con /lang o Enviame un link de tiktok para iniciar el bot.`;
            this.error = 'Lo siento, este link NO es de tiktok.😢';
            this.lang = 'Selecciona el idioma!';
        }
    }
}

export {lang}