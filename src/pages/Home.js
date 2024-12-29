import { useEffect } from "react";
import WorkoutDetail from "../components/WorkoutDetail";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch('/api/workouts');
      const data = await res.json();
      if (res.ok) {
        // Assurez-vous que 'data.workouts' est un tableau
        if (Array.isArray(data.workouts)) {
          dispatch({ type: 'SET_WORKOUTS', payload: data.workouts });
        } else {
          console.error("Fetched data.workouts is not an array", data.workouts);
        }
      } else {
        console.error("Failed to fetch workouts", res.status);
      }
    };
    

    fetchWorkouts();
  }, [dispatch]); // 'dispatch' est une dépendance de useEffect
  



  

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout, index) => (
          // Utiliser '_id' comme clé, sinon utiliser un index
          <WorkoutDetail key={workout._id || index} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
