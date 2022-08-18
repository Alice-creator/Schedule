import { getActivity } from "../../services/ActivityApi"
import { AddShare } from "../../services/SubjectApi"


const updateNotify = async (param, value) => {
    const notify = {
        name: value.title,
        content: `will come in ${value.reminder}`,
        activity: value,
        time: new Date()
    }
    const data = await AddShare(param, notify)
}
export const handleReminder = async (user) => {
    const data = await getActivity(user)
    const timeNow = new Date().getTime() / 1000
    // console.log(now.getTime());
    data?.map((value) => {
        const timeAct = new Date(value.date +" "+ value.start).getTime() / 1000
        const compare = timeAct - timeNow 

        if(value.reminder == '1 hour' && compare == 3600) {
            updateNotify(user.email, value)
        }
        //
        if(value.reminder == '1 day' && compare == 86400) {
            updateNotify(user.email, value)
        } 
        if(value.reminder == '1 week' && compare == 604800) {
            updateNotify(user.email, value)
        } 
    })
}