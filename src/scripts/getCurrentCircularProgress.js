/* Import Dependencies */
import axios from "axios";

/* Local Imports */
import BASE_URL from "../constants/urls";

export default function getCurrentCircularProgress(token, setProgressCircle) {

    const getCurrentProgress = (habitsList) => {

        if (habitsList.length === 0) {
            return 0;
        }
    
        let habitsDone = 0;
        habitsList.forEach(habit => {
            if (habit.done) {
                habitsDone += 1;
            }
        });
    
        const numberOfHabits = habitsList.length;
        const currentProgress = Number((habitsDone / numberOfHabits) * 100).toFixed(0);
        return currentProgress;
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    axios.get(`${BASE_URL}/habits/today`, config)
        .then(res => {
            const habitsList = res.data;
            const currentProgress = getCurrentProgress(habitsList);
            setProgressCircle(currentProgress);
        })
        .catch(err => console.log(err));
}