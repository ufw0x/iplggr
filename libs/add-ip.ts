import {readFileSync, writeFileSync} from "fs"

export interface IpData{
    url:string,
    ip:string,
    timestamp:Date | number
}

const existingIps:IpData[] = JSON.parse(readFileSync('./ip-addresses.json').toString())

export const addIp = (url:string, ip:string, timestamp:Date|number)=>{
    const newIpData = {
        url,ip,timestamp
    }
    existingIps.push(newIpData)
    writeFileSync('./ip-addresses.json', JSON.stringify(existingIps))
}