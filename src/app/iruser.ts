export interface Iruser {
    id : number,
    name : string,
    email : string,
    mobile : number,
    appid : number,
    fathername : string,
    quotatype : string,
    department : string,
    searchedAppId?: string // Add this line
    isPreview?: boolean
}