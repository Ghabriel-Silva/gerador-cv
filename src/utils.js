export function navigatetoPage (navigate, path){
    if(!path){
        console.error('Path is required')
        return;
    }
    navigate(path)
}