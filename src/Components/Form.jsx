import React, { useState } from "react";

export default function Form() {
    const jobDesc = `Entry Level Job Posting Available 
Looking for Front End Developer 
3+ years TypeScript, 
4+ years Javascript,
28+ years Python and Golang Dev,
Redux Knowledge helps,
Short Hair,
Light skinned,
From Akwa Ibom state,
Muscular...`
    const skills = `3+ Years TypeScript: I have one year experience
4+ Years Javascript: I have two years experience
From Akwa Ibom state: I am from Cross River...`
    const [formData, setFormData] = useState({
        jobDesc: "",
        skills: ""
    })
    function handleFormChange(event){
        const {name, value} = event.target
        setFormData((currFormData) => ({
            ...currFormData,
            [name]: value
        }))
    }

    return (
        <>
            <form className="pt-4 pb-10">
                <div className="pb-10">
                    <label 
                        htmlFor="jobDesc"
                        className="text-[1.2rem] md:text-[2rem] font-bold text-[#333333] md:pl-5"
                    >
                        Paste the Job Placement / Description
                    </label>
                    <textarea 
                        name="jobDesc"
                        className="border focus:border-2 border-[#333333] rounded-lg w-full h-[20rem] px-7 py-4 text-xl md:mt-4"
                        placeholder={jobDesc}
                        value={formData.placement}
                        onChange={handleFormChange}
                    />
                </div>
                <div>
                    <label 
                        htmlFor="skills"
                        className="text-[1.2rem] md:text-[2rem] font-bold text-[#333333] md:pl-5"
                    >
                        Fill out the skills you don't have
                    </label>
                    <textarea 
                        name="skills"
                        className="border focus:border-2 border-[#333333] rounded-lg w-full h-[10rem] px-7 py-4 text-xl md:mt-4"
                        placeholder={skills}
                        value={formData.skills}
                        onChange={handleFormChange}
                    />
                </div>
                <div className="text-center pt-10">
                    <button
                        className="py-5 w-full md:w-2/5 rounded-xl bg-green-600 text-white text-xl font-semibold"
                    >
                        Generate Cover Letter
                    </button>
                </div>
            </form>
        </>
    )
}