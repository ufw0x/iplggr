import { Router, type Request, type Response } from "express";
import { activeTrackUrls, addTrackUrl, type TrackDetails } from "../libs/add-track-url";
import { addIp} from "../libs/add-ip";

export const router:Router = Router()

router.get('/createTrackingUrl/:url', (_: Request, res: Response) => {
    const { url } = _.params;
    const decodedUrl: string = decodeURIComponent(url)
    console.log(decodedUrl)
    addTrackUrl(decodedUrl, `/${decodedUrl.split('https://').join('$')}`, Date.now())
    return res.json({ msg: "success!" })
})

router.get('/trcul/*', (_: Request, res: Response) => {
    const trackUrl:string = _.url.split('/trcul').join('');
    const arr:TrackDetails[] = activeTrackUrls.filter((val) => {
        if ((val.trackingUrl == trackUrl)) return val;
    })
    const ip: string = _.socket.remoteAddress || ""
    if (!ip) res.json({ error: "something went wrong" });
    addIp(arr[0].url, ip, Date.now())
    return res.redirect(arr[0].url)
})
