import { useState } from "react";
import { formDataModel, IModel } from "./model"
import axios from "axios";


export const useContainer = (): IModel => {
    let initialFormState: formDataModel = {
        username: '',
        password: '',
        jobpostion: 'Doctor',
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e: (any)) => {
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

            const response = await axios.post("http://localhost:4000/signin", {
                formData: formData // Sending the 'name' in the request body
            });
            if (response.status === 200) {
                // Successfully registered, navigate to the home page
                console.log('ok')
                window.location.href = '/home';
            }
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }

        setFormData(initialFormState)
    }

    return {
        handleSubmit,
        handleChange,
        formData,
    }
}