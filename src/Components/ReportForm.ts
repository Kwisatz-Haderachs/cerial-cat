import React from "react";

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

function reportForm(reportForm: ReportForm){
    const inputReport: ReportForm = {
            dateOfEvent: "",
            timeOfEvent: "",
            locationOfEvent: "",
            eventType: false,
            harm: false,
            individuals: [],
            typeOfEvent: [],
            effectOfIncident: false,
            witness: [],
            witnessNumbers: [],
            departmentsInvolved: [],
            description: "",
            actions: "",
            patientName: "",
            patientPhone: "",
            patientSSN: "",
            patientAddress: "",
    }:
        React.InputHTMLAttributes<HTMLInputElement>) => {
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.currentTarget.value, e.currentTarget.name)
        };
}
