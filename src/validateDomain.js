export const validateDomain = url => {
    let domain = url.split('/')[2];
    
    if(domain === 'www.tiktok.com') return true;
    if(domain === 'vm.tiktok.com') return true;
    
    return false;
}