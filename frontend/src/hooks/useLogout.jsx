import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const { dispatch: workoutsDispatch} = useWorkoutsContext()

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return { logout }
}


/*
email: ajorSaha@gmail.com
password: 382Ab#cde

email: ajorSoka@gmail.com
password: aleinAA@@12

email: davidSioka@gmail.com
password: owei@@Aj123
 */