import {useWorkoutContext} from '../hooks/useWorkoutContext'

const WorkoutDetail = ({ workout }) => {
  const {dispatch} = useWorkoutContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const data = await response.json()

    if(response.data){
      dispatch({type: 'DELETE_WORKOUT', data})
      console.log('workout deleted')
    }

    //actualiza la lista de workouts
    dispatch({type: 'DELETE_WORKOUT', payload: workout})

  }

  const createdAt = workout.createdAt ? new Date(workout.createdAt) : null;
  const formattedDate = createdAt ? createdAt.toLocaleDateString() : 'Date non disponible';


  //function aue calcul minuts between two dates
  const minutesBetween = (date1, date2) => {
    // Vérifier si les dates sont valides
    if (!(date1 instanceof Date) || !(date2 instanceof Date) || isNaN(date1.getTime()) || isNaN(date2.getTime())) {
      return "0";  // Retourne un message en cas de dates invalides
    }
    
    const diff = date1.getTime() - date2.getTime();
    return Math.floor(diff / 60000);  // Retourne la différence en minutes
  };
  





  return (
    <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg) : </strong> {workout.load}</p>
        <p><strong>Reps: </strong> {workout.reps}</p>
        <p>{formattedDate}</p>
        <p>{minutesBetween(new Date(), createdAt)} minutes ago</p>
        <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
      
    </div>
  );
}

export default WorkoutDetail;