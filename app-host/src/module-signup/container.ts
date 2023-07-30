import { useState, useEffect } from "react";
import { formDataModel } from "./model";
import axios from "axios";

export const useContainer = (): any => {
    const initialFormState: formDataModel = {
        fname: '',
        lname: '',
        username: '',
        password: '', // Initialize with an empty string for a string value
        jobpostion: 'Doctor',
        centername: '',
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        try {

            const response = await axios.post("http://localhost:4000/signup", {
                formData: formData // Sending the 'name' in the request body
            });
            console.log(response.data);
            if (response.status === 200) {
                // Successfully registered, navigate to the home page
                console.log('ok')
                window.location.href = '/home';
            }
        } catch (error) {
            console.log(error)
        }

        setFormData(initialFormState)
    };
    

    return {
        handleSubmit,
        handleChange,
        formData,
    };
};
