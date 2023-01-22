import React, {useReducer} from 'react'



const FormUseReduce = () => {

    const initialState = {
            firstName: {
                value: '',
                error: null
            },
            lastName: {
                value: '',
                error: null
            },
            email: {
                value: '',
                error: null
            }
        };
    
    const [state,dispatch] = useReducer(formReducer,initialState)
        
    function formReducer(state, action){
    
        let errorAux = null;
        if(action.type == "firstName" && action.payload.length < 3) errorAux = "Error, nombre debe tener mas de 3 caracteres"
        if(action.type == "lastName" && action.payload.length < 3) errorAux = "Error, apellido debe tener mas de 3 caracteres"
        if(action.type == "email" && action.payload.length < 8) errorAux = "Error, email debe tener mas de 8 caracteres"
    
        return {
            ...state,
            [action.type]: { value:action.payload, error:errorAux}
        }
    
    }
    
    function adminForm(evento){
        const {name,value} = evento.target
        dispatch({
            type:name,
            payload:value   
        })
    }


    return (

        <>
        <form>
            <div className='cont'>
            <label> First Name: </label>
            <input type='text' name="firstName"  onChange={adminForm}/>
            </div>
            {state.firstName.error !==null && (<p className='text-danger'>{state.firstName.error}</p>)}
            <div className='cont'>
            <label> Last Name: </label>
            <input type='text' name="lastName" onChange={adminForm}/>
            </div>
            {state.lastName.error !==null && (<p className='text-danger'>{state.lastName.error}</p>)}
            <div className='cont'>
            <label> Email: </label>
            <input type='text' name="email" onChange={adminForm}/>
            {state.email.error !==null && (<p className='text-danger'>{state.email.error}</p>)}
            </div>
        </form>
        </>
    );
}

export default FormUseReduce;

