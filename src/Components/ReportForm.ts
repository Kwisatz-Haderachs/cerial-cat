import React, {useState} from "react";

export interface ReportForm{
    dateOfEvent: string,
    timeOfEvent: string,
    locationOfEvent: string,
    eventType: boolean,
    harm: boolean,
    individuals:[],
    typeOfEvent:[],
    effectOfIncident:boolean,
    witness:[],
    witnessNumbers:[],
    departmentsInvolved:[],
    description:string,
    actions:string,
    patientName:string,
    patientPhone:string,
    patientSSN:string,
    patientAddress:string
}

// <T,>(callback: () => Promise<any>,
export const useReportForm = (initialState : ReportForm) => {
    const [values, setValues] = useState(initialState)

    const onChange = (event: React.ChangeEvent<HTMLInputElement> | null) => {
        if(event !== null) {
            setValues({...values, [event.target.name]: event.target.value})
        }
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Meow!")
    };

    return{
        onChange,
        onSubmit,
        values,
    }
}
