const lang = {
    welcome: '',
    error: '',
    lang: '',
    cb: function(val = 'en'){
        if(val === 'en'){
            this.welcome = `🥳 Welcome, to start the bot send me a the tiktok link, please!! ✅ \n \n /lang - change language`;
            this.error = 'Sorry this link is not a tiktok link.😢';
            this.lang = 'Select your favorite Language!';
        }
        if(val === 'es'){
            this.welcome = `🥳 Bienvenido para iniciar el bot envia un link de tiktok \n \n /lang - cambiar idioma`;
            this.error = 'Lo siento, este link NO es de tiktok.😢';
            this.lang = 'Selecciona el idioma!';
        }
    }
}

export {lang}