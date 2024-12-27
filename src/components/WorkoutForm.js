import { useState } from 'react';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

const WorkoutForm = () => {
    const {dispatch} = useWorkoutContext();
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, reps, load };
        const response = await fetch('/api/workouts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workout)
        });
        const data = await response.json();
        if(!response.ok) {
            setError(data.error);
        }
        if(response.ok) {
            setTitle('');
            setReps('');
            setLoad('');
          setError(null);
          console.log('Workout added', data);
         dispatch({ type: 'CREATE_WORKOUT', payload: data });
    }
    

    }

    
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Create a New Workout</h3>
            <label>Exersize Title:</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Reps:</label>
            <input type="number" required value={reps} onChange={(e) => setReps(e.target.value)} />
            <label>Load (en Kg):</label>
            <input type="number" required value={load} onChange={(e) => setLoad(e.target.value)} />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}

        </form> 
            
    )
    }

    export default WorkoutForm;

