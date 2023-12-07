const rootElement = getComputedStyle(document.documentElement)
const theme_details = {
    light: {
        app_bg_color: '#f1f5f9',
        card_bg_color: '#ffffff',
        hover_card_bg_color: '#f1f5f9',
        border_color: '#E2E8F0FF',
        text_dark: '#0f1018',
        text_gray: '#7d828f',
    },
    dark: {
        app_bg_color: '#0f172a',
        card_bg_color: '#1e293b',
        hover_card_bg_color: '#ffffff0d',
        border_color: '#F1F5F91E',
        text_dark: '#ffffff',
        text_gray: '#94A3B8FF',
    }

}

const openFullScreen =(element) =>{
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen();
    }
};
const closeFullScreen = ()=>{
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
};

export const Mixins = {
    change_theme(item) {
        if (item) {
            console.log("dark theme")
            document.documentElement.style.setProperty('--ap-bg-color', theme_details['dark'].app_bg_color);
            document.documentElement.style.setProperty('--card-bg-color', theme_details['dark'].card_bg_color);
            document.documentElement.style.setProperty('--hover-card-bg-color', theme_details['dark'].hover_card_bg_color);
            document.documentElement.style.setProperty('--border-color', theme_details['dark'].border_color);
            document.documentElement.style.setProperty('--text-dark', theme_details['dark'].text_dark);
            document.documentElement.style.setProperty('--text-grey', theme_details['dark'].text_gray);
        } else {
            console.log("light theme")
            document.documentElement.style.setProperty('--ap-bg-color', theme_details['light'].app_bg_color);
            document.documentElement.style.setProperty('--card-bg-color', theme_details['light'].card_bg_color);
            document.documentElement.style.setProperty('--hover-card-bg-color', theme_details['light'].hover_card_bg_color);
            document.documentElement.style.setProperty('--border-color', theme_details['light'].border_color);
            document.documentElement.style.setProperty('--text-dark', theme_details['light'].text_dark);
            document.documentElement.style.setProperty('--text-grey', theme_details['light'].text_gray);
        }

    },

    Color_list: {
        primary_color: rootElement.getPropertyValue('--primary-color'),
        white_color: rootElement.getPropertyValue('--white-color'),
        info_color: rootElement.getPropertyValue('--info-color'),
        danger_color: rootElement.getPropertyValue('--danger-color'),
        success_color: rootElement.getPropertyValue('--success-color'),
        warning_color: rootElement.getPropertyValue('--warning-color'),
        card_bg_color: rootElement.getPropertyValue('--card-bg-color'),
    },


//     var elem = document.getElementById("myvideo")
//     function openFullscreen() {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     } else if (elem.webkitRequestFullscreen) { /* Safari */
//         elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE11 */
//         elem.msRequestFullscreen();
//     }
// }
    fullScreen(elementId){
        const element = document.getElementById(elementId);
        let isFullScreen = (document.fullscreenElement === element ||
            document.mozFullScreenElement === element ||
            document.webkitFullscreenElement === element ||
            document.msFullscreenElement === element)
        console.log(isFullScreen)
        if(isFullScreen){
           closeFullScreen()
        }else{
           openFullScreen(element)
        }
    },



}
