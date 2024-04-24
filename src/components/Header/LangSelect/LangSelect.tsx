import { useState } from "react";
import Select, { SingleValue, components } from "react-select";
import { sprite } from "assets/icons";
import langs from "./lang.json";
import { ISelectedOption } from "./types";
import "./LangSelect.scss";

const LangSelect = () => {
    const [selectedOption, setSelectedOption] = useState<ISelectedOption>(
        langs[0]
    );

    const handleChange = (selectedOption: SingleValue<ISelectedOption>) => {
        setSelectedOption(selectedOption as ISelectedOption);
    };

    const CustomDropdownIndicator = (props: any) => {
        return (
            <components.DropdownIndicator {...props}>
                <svg>
                    <use href={`${sprite}#icon-arrow-select`}></use>
                </svg>
            </components.DropdownIndicator>
        );
    };

    return (
        <Select
            options={langs}
            defaultValue={selectedOption}
            isSearchable={false}
            onChange={handleChange}
            unstyled
            className="react-select-container"
            classNamePrefix="react-select"
            components={{ DropdownIndicator: CustomDropdownIndicator }}
        />
    );
};

export default LangSelect;
