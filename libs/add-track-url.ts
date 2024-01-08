import {readFileSync, writeFileSync} from "fs"
export interface TrackDetails{
    url: string;
    trackingUrl:string;
    timestamp: Date;
};
export const activeTrackUrls:TrackDetails[] = JSON.parse(readFileSync('./active-track-urls.json').toString())

 
export const addTrackUrl:Function = (url:string, trackingUrl:string, timestamp:Date) => {
    const newTrackingData:TrackDetails = {url, trackingUrl,timestamp}
    activeTrackUrls.push(newTrackingData)
    console.log(activeTrackUrls)
    writeFileSync('./active-track-urls.json', JSON.stringify(activeTrackUrls))
 };