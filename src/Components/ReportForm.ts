import React, {useState} from "react";
import {SelectChangeEvent} from "@mui/material/Select";
import { useForm } from '@mantine/form';

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

    const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value as string})
    }

    const onSelectChange = (event: SelectChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value})
    }

    const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value as string})
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Meow!")
    };

    return{
        onDateChange,
        onSelectChange,
        onTextChange,
        onSubmit,
        values,
    }
}
