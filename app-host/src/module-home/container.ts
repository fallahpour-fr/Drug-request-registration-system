import axios from "axios";
import { useState, useEffect } from "react";
import { IData, IFormModel, IModel } from "./model";

export const useContainer = (): any => {

    const [medicanInfo, setMedicanInfo] = useState<Array<IData>>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/getMedicanInfo");
                if (response.status === 200) {
                    setMedicanInfo(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData()

    }, [])
    console.log('medicanInfo', medicanInfo)



    // const mock_data: Array<IData> = [{
    //     id: 1,
    //     center_id: 1,
    //     medican_name: "A.S.A",
    //     shape: "ampoule",
    //     dose: "100 mg/ml",
    //     inventory: 10
    // },
    // {
    //     id: 2,
    //     center_id: 1,
    //     medican_name: "Atropin",
    //     shape: "ampoule",
    //     dose: "100 mg/ml",
    //     inventory: 15
    // }
    // ]


    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handlerOnClick = async () => {
        try {
            let reqMedican: any = []
            let reqid: number = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

            for (let i = 0; i < medicanInfo.length; i++) {
                let reqMedicanData: any = {}
                reqMedicanData['id'] = medicanInfo[i].id
                reqMedicanData['shape'] = medicanInfo[i].shape
                reqMedicanData['center_id'] = medicanInfo[i].center_id
                reqMedicanData['dose'] = medicanInfo[i].dose
                reqMedicanData['inventory'] = medicanInfo[i].inventory
                reqMedicanData['medicine_name'] = medicanInfo[i].medican_name
                reqMedicanData['user_id'] = 1 // can get this from profile of when login or signup send this data
                let m: number = i * 2
                let keys: Array<string> = Object.keys(formData)
                if (keys) {
                    reqMedicanData['consumption'] = formData[keys[m]]
                    reqMedicanData['requested'] = formData[keys[m + 1]]
                }
                reqMedicanData['title'] = formData.reqtitle
                reqMedicanData["reqid"] = reqid

                reqMedican.push(reqMedicanData)
            }
            console.log('reqMedican',reqMedican)

            await new Promise((resolve) => setTimeout(resolve, 1000));

            const response = await axios.post("http://localhost:4000/storrequest", {
                data: reqMedican // Sending the 'name' in the request body
            });
            console.log(response.data);

        } catch (error) {
            console.log(error)
        }
    }



    return {
        loading,
        medicanInfo,
        formData,
        handleChange,
        handlerOnClick
    }
}